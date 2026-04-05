// Minimal browser.* polyfill for Chrome (MV3)
// Wraps chrome.* APIs to support the browser.* namespace with Promises
if (typeof browser === 'undefined') {
  const wrap = (fn) => (...args) => new Promise((resolve, reject) => {
    fn(...args, (result) => {
      if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
      else resolve(result);
    });
  });

  globalThis.browser = {
    runtime: {
      getURL: chrome.runtime.getURL.bind(chrome.runtime),
      getManifest: chrome.runtime.getManifest.bind(chrome.runtime),
      onMessage: chrome.runtime.onMessage,
      onInstalled: chrome.runtime.onInstalled,
      sendMessage: wrap(chrome.runtime.sendMessage.bind(chrome.runtime)),
      lastError: chrome.runtime.lastError,
    },
    storage: {
      local: {
        get: wrap(chrome.storage.local.get.bind(chrome.storage.local)),
        set: wrap(chrome.storage.local.set.bind(chrome.storage.local)),
        remove: wrap(chrome.storage.local.remove.bind(chrome.storage.local)),
        clear: wrap(chrome.storage.local.clear.bind(chrome.storage.local)),
      }
    },
    tabs: {
      create: wrap(chrome.tabs.create.bind(chrome.tabs)),
      query: wrap(chrome.tabs.query.bind(chrome.tabs)),
      sendMessage: (id, msg) => new Promise((resolve) => {
        chrome.tabs.sendMessage(id, msg, (r) => { chrome.runtime.lastError; resolve(r); });
      }),
    },
    alarms: {
      create: chrome.alarms.create.bind(chrome.alarms),
      get: wrap(chrome.alarms.get.bind(chrome.alarms)),
      clear: wrap(chrome.alarms.clear.bind(chrome.alarms)),
      onAlarm: chrome.alarms.onAlarm,
    },
    history: {
      search: wrap(chrome.history.search.bind(chrome.history)),
    },
    dns: null, // not available in Chrome — handled gracefully in code
  };
}
