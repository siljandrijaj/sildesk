// Sildesk Background Script v3.2.0

// ── Bei Installation: neuen Tab öffnen damit Sildesk sofort sichtbar ist ──
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.tabs.create({ url: browser.runtime.getURL('newtab.html') });
  }
});

// ── Alarms ──
browser.alarms.get('sildesk-rss-refresh').then(existing => {
  if (!existing) browser.alarms.create('sildesk-rss-refresh', { periodInMinutes: 30 });
});

browser.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'sildesk-auto-sync') {
    browser.tabs.query({ active: true }).then(tabs => {
      tabs.forEach(tab => {
        if (tab.id) browser.tabs.sendMessage(tab.id, { type: 'SYNC_REQUESTED' }).catch(() => {});
      });
    });
  }
  if (alarm.name === 'sildesk-rss-refresh') {
    browser.tabs.query({}).then(tabs => {
      tabs.forEach(tab => {
        browser.tabs.sendMessage(tab.id, { type: 'RSS_REFRESH' }).catch(() => {});
      });
    });
  }
});

// ── Single message listener ──
browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {

  if (msg.type === 'SETUP_AUTO_SYNC' && msg.intervalMinutes) {
    browser.alarms.create('sildesk-auto-sync', { periodInMinutes: msg.intervalMinutes });
    return false;
  }
  if (msg.type === 'DISABLE_AUTO_SYNC') {
    browser.alarms.clear('sildesk-auto-sync');
    return false;
  }

  if (msg.type === 'FETCH_IP') {
    (async () => {
      const apis = [
        'https://ip-api.com/json/?fields=status,country,city,org,query,timezone,as',
        'https://api.ipify.org?format=json'
      ];
      for (const url of apis) {
        try {
          const r = await fetch(url);
          if (!r.ok) continue;
          const d = await r.json();
          if (d.query) { d.ip = d.query; d.connection = { isp: d.org }; }
          if (d.ip) { sendResponse({ ok: true, data: d }); return; }
        } catch(e) {}
      }
      sendResponse({ ok: false });
    })();
    return true;
  }

  if (msg.type === 'GET_DNS_IP') {
    (async () => {
      const isIPv4 = s => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s) && s !== '0.0.0.0' && s !== '127.0.0.1';
      const isPrivate = s => /^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/.test(s);
      try {
        const dns = (typeof browser !== 'undefined' && browser.dns) || (typeof chrome !== 'undefined' && chrome.dns) || null;
        if (!dns) { sendResponse({ ok: false }); return; }
        // Gerätehostname auflösen — gibt die LAN-IP zurück (z.B. 192.168.x.x)
        // Wir versuchen mehrere Hostnamen: lokaler Computername und common local names
        const candidates = ['localhost'];
        // Versuche auch den echten Hostnamen via RTCPeerConnection mDNS-Name falls verfügbar
        for (const host of candidates) {
          try {
            const result = await dns.resolve(host, ['disable_ipv6']);
            for (const addr of (result?.addresses || [])) {
              if (isIPv4(addr) && isPrivate(addr)) {
                sendResponse({ ok: true, ip: addr });
                return;
              }
            }
          } catch(_) {}
        }
        sendResponse({ ok: false });
      } catch(e) {
        sendResponse({ ok: false });
      }
    })();
    return true;
  }

  if (msg.type === 'GET_INTERNAL_IP') {
    (async () => {
      try {
        const ip = await new Promise(resolve => {
          let resolved = false;
          const done = (val) => { if (!resolved) { resolved = true; resolve(val); } };
          const isIPv4 = s => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s) && s !== '0.0.0.0' && s !== '127.0.0.1';
          const isPrivate = s => /^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/.test(s);
          const found = new Set();
          let pc;
          try {
            pc = new RTCPeerConnection({ iceServers: [] });
          } catch(e) { done(null); return; }
          pc.createDataChannel('sildesk');
          pc.onicecandidate = e => {
            if (!e || !e.candidate) {
              try { pc.close(); } catch(_) {}
              const all = [...found];
              const priv = all.filter(isPrivate);
              done(priv[0] || all.filter(isIPv4)[0] || null);
              return;
            }
            const cand = e.candidate.candidate || '';
            // Nur host-Kandidaten — srflx/relay enthalten die externe IP
            if (!cand.includes(' host ')) return;
            const matches = cand.match(/\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/g) || [];
            matches.filter(isIPv4).forEach(ip => {
              found.add(ip);
              if (isPrivate(ip)) done(ip);
            });
          };
          pc.createOffer()
            .then(o => pc.setLocalDescription(o))
            .catch(() => done(null));
          // Hard timeout: 3s is enough for local network discovery
          setTimeout(() => {
            try { pc.close(); } catch(_) {}
            const all = [...found];
            const priv = all.filter(isPrivate);
            done(priv[0] || all.filter(isIPv4)[0] || null);
          }, 3000);
        });
        sendResponse({ ok: true, ip: ip || null });
      } catch(e) {
        sendResponse({ ok: true, ip: null });
      }
    })();
    return true;
  }

  if (msg.type === 'SPEEDTEST_PING') {
    const samples = msg.samples || 5;
    (async () => {
      try {
        const pings = [];
        for (let i = 0; i < samples; i++) {
          const t = performance.now();
          const r = await fetch('https://speed.cloudflare.com/__down?bytes=0', { cache: 'no-store' });
          if (r.ok || r.status === 429) pings.push(performance.now() - t);
        }
        if (!pings.length) { sendResponse({ ok: false }); return; }
        pings.sort((a, b) => a - b);
        sendResponse({ ok: true, ping: Math.round(pings[Math.floor(pings.length / 2)]) });
      } catch(e) {
        sendResponse({ ok: false, error: e.message });
      }
    })();
    return true;
  }

  if (msg.type === 'SPEEDTEST_DOWNLOAD') {
    const bytes = msg.bytes || 1_000_000;
    const streams = msg.streams || 1;
    (async () => {
      try {
        const t = performance.now();
        const results = await Promise.allSettled(
          Array.from({ length: streams }, () =>
            fetch(`https://speed.cloudflare.com/__down?bytes=${bytes}`, { cache: 'no-store' })
              .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); })
          )
        );
        const secs = (performance.now() - t) / 1000;
        const totalBytes = results
          .filter(r => r.status === 'fulfilled')
          .reduce((s, r) => s + r.value.byteLength, 0);
        if (totalBytes === 0) { sendResponse({ ok: false, error: 'No data received' }); return; }
        sendResponse({ ok: true, bytes: totalBytes, secs });
      } catch(e) {
        sendResponse({ ok: false, error: e.message });
      }
    })();
    return true;
  }

  if (msg.type === 'SPEEDTEST_UPLOAD') {
    const bytes = msg.bytes || 1000000;
    const streams = msg.streams || 1;
    (async () => {
      try {
        const template = new Uint8Array(bytes);
        for (let i = 0; i < bytes; i++) template[i] = i & 0xff;
        const t = performance.now();
        const results = await Promise.allSettled(
          Array.from({ length: streams }, () =>
            fetch('https://speed.cloudflare.com/__up', {
              method: 'POST',
              body: template.slice(0), // each stream needs its own copy
              cache: 'no-store'
            })
          )
        );
        const secs = (performance.now() - t) / 1000;
        const successful = results.filter(r => r.status === 'fulfilled' && r.value?.ok).length;
        if (successful === 0) { sendResponse({ ok: false, error: 'All streams failed' }); return; }
        sendResponse({ ok: true, bits: bytes * 8 * successful, secs });
      } catch(e) {
        sendResponse({ ok: false, error: e.message });
      }
    })();
    return true;
  }

  if (msg.type === 'FETCH_ICON') {
    const { url } = msg;
    (async () => {
      try {
        const r = await fetch(url, {
          headers: { 'User-Agent': 'SildeskExtension/3.1 (Firefox)' }
        });
        if (!r.ok) { sendResponse({ ok: false, status: r.status }); return; }
        const buf = await r.arrayBuffer();
        const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
        const ct = r.headers.get('content-type') || 'image/png';
        sendResponse({ ok: true, dataUrl: `data:${ct};base64,${b64}` });
      } catch(e) {
        sendResponse({ ok: false, error: e.message });
      }
    })();
    return true;
  }

  if (msg.type === 'FETCH_FOOTBALL') {
    const { league, season } = msg;
    const base = 'https://www.openligadb.de/api';
    Promise.all([
      fetch(`${base}/getmatchdata/${league}`).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }),
      fetch(`${base}/getbltable/${league}/${season}`).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    ]).then(([matches, table]) => {
      sendResponse({ ok: true, matches, table });
    }).catch(e => {
      sendResponse({ ok: false, error: e.message });
    });
    return true;
  }

});