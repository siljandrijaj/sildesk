# Sildesk — New Tab Dashboard

> Your new tab. Your rules.

Sildesk transforms every new tab into a clean, fully customizable personal dashboard — built for focus, speed and style.

![Version](https://img.shields.io/badge/version-3.2.0-25dfb7?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-25dfb7?style=flat-square)
![Firefox](https://img.shields.io/badge/Firefox-109+-orange?style=flat-square&logo=firefox)
![Chrome](https://img.shields.io/badge/Chrome-MV3-blue?style=flat-square&logo=googlechrome)

---

## Features

### Widgets
Add only what you need — drag, resize and organize freely:

| Widget | Description |
|--------|-------------|
| Weather | Current conditions and forecast |
| Speedtest | Ping, download and upload speed |
| Notes | Quick plaintext notepad |
| Tasks | Simple to-do list |
| RSS Reader | Follow any news feed |
| Crypto & Stocks | Live prices via CoinGecko |
| Football | Bundesliga and more via OpenLigaDB |
| Pomodoro | Focus and break timer |
| Browser History | Recently visited pages |
| Calendar | Current month at a glance |
| QR Code | Generate codes from any text or URL |
| Password Generator | Strong random passwords |
| 2048 | The classic tile game |

### Design
- 6 built-in color presets (Night, Aurora, Sunset, Ocean, Forest, Mono)
- Customize card color, transparency, blur, corner rounding and accent color
- Export and import your design as a JSON file

### Boards
Organize cards and widgets across multiple boards — switch instantly via the sidebar.

### Sync
Optional backup and sync via your own private GitHub Gist. Your token never leaves your device.

---

## Privacy

No accounts. No tracking. No telemetry. All data stays in your browser (`storage.local`). External services are only contacted when you actively use the relevant widget.

See the full [Privacy Policy](https://siljandrijaj.github.io/sildesk/privacy-policy.html).

---

## Installation

### Firefox
[![Firefox Add-ons](https://img.shields.io/badge/Firefox_Add--ons-Get_Sildesk-orange?style=for-the-badge&logo=firefox)](https://addons.mozilla.org/firefox/addon/sildesk)

### Chrome
[![Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-Get_Sildesk-blue?style=for-the-badge&logo=googlechrome)](https://chrome.google.com/webstore/detail/sildesk)

### Manual Install (Developer Mode)
1. Download or clone this repository
2. Open `chrome://extensions` (Chrome) or `about:debugging` (Firefox)
3. Enable Developer Mode
4. Click "Load unpacked" and select the extension folder

---

## File Structure

```
sildesk/
├── manifest.json          # Extension manifest (MV3)
├── newtab.html            # New tab page shell
├── newtab.js              # Main app (~5000 lines)
├── background.js          # Background script
├── settings.html          # Extension popup
├── settings.js            # Popup logic
├── browser-polyfill.js    # Chrome/Firefox API compatibility
├── privacy-policy.html    # Privacy policy
├── logo.svg               # Extension logo
└── icons/
    ├── logo-16.png
    ├── logo-32.png
    ├── logo-48.png
    └── logo-96.png
```

---

## Browser Compatibility

| Browser | Minimum Version | Manifest |
|---------|----------------|----------|
| Firefox | 109+ | MV3 (`scripts`) |
| Chrome | 109+ | MV3 (`service_worker`) |
| Edge | 109+ | MV3 (`service_worker`) |

---

## External Services

All external requests are made directly from the user's browser. No data passes through developer servers.

| Service | Purpose | When |
|---------|---------|------|
| speed.cloudflare.com | Speedtest | Speedtest widget |
| ip-api.com / ipify.org | Public IP | IP display (opt-in) |
| api.open-meteo.com | Weather | Weather widget |
| nominatim.openstreetmap.org | City from GPS | Weather + GPS |
| api.coingecko.com | Crypto prices | Crypto widget |
| www.openligadb.de | Football results | Football widget |
| api.qrserver.com | QR codes | QR widget |
| api.github.com | Gist sync | Optional sync only |

---

## License

MIT — feel free to fork and build on top of Sildesk.

---

## Contributing

Pull requests and issues are welcome. If you find a bug or have a feature request, open an issue.

---

<p align="center">Made with ♥ — No tracking, no ads, no nonsense.</p>
