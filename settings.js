document.getElementById('open-btn').addEventListener('click', () => {
  browser.tabs.create({ url: browser.runtime.getURL('newtab.html') });
});

document.getElementById('privacy-toggle').addEventListener('click', () => {
  const panel = document.getElementById('privacy-panel');
  const chevron = document.getElementById('chevron');
  panel.classList.toggle('visible');
  chevron.classList.toggle('open');
});

document.getElementById('full-policy-link').addEventListener('click', () => {
  browser.tabs.create({ url: browser.runtime.getURL('privacy-policy.html') });
});
