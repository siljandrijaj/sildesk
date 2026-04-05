// Sildesk newtab.js — v3.2.0
// ── SVG Icons ──
const ICONS={
  globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
  link:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  folder:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>`,
  drag:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="5" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="19" r="1" fill="currentColor"/><circle cx="15" cy="5" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="19" r="1" fill="currentColor"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  eye:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeoff:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
};

// ── Helpers ──
function uid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function domain(url){try{return new URL(url).hostname.replace(/^www\./,'')}catch{return url}}

// ── Default Config ──
function defaultConfig(){
  const now=Date.now();
  const bid='board-default';
  return{
    version:4,configId:uid(),activeBoardId:bid,
    boards:{[bid]:{id:bid,name:'Mein Dashboard',cardIds:['card-1','card-2','card-3','card-4','card-5','card-6','card-7','card-8','card-9'],iconDataUrl:null,showLabel:true,layoutData:{cardSize:'medium',density:'normal',gap:16},gridCols:6,gridRows:5,createdAt:now,updatedAt:now}},
    cards:{
      'card-1':{id:'card-1',title:'Reddit',url:'https://www.reddit.com/',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fwww.reddit.com&sz=64'},openInNewTab:true,position:0,gridPos:{col:1,row:1},createdAt:now,updatedAt:now},
      'card-2':{id:'card-2',title:'Ecosia',url:'https://www.ecosia.org',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fwww.ecosia.org&sz=64'},openInNewTab:true,position:1,gridPos:{col:2,row:1},createdAt:now,updatedAt:now},
      'card-3':{id:'card-3',title:'Google',url:'https://google.de/',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fgoogle.de&sz=64'},openInNewTab:true,position:2,gridPos:{col:3,row:1},createdAt:now,updatedAt:now},
      'card-4':{id:'card-4',title:'YouTube',url:'https://www.youtube.de/',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fwww.youtube.de&sz=64'},openInNewTab:true,position:3,gridPos:{col:1,row:2},createdAt:now,updatedAt:now},
      'card-5':{id:'card-5',title:'Wikipedia',url:'https://wikipedia.com',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fwikipedia.com&sz=64'},openInNewTab:true,position:4,gridPos:{col:2,row:2},createdAt:now,updatedAt:now},
      'card-6':{id:'card-6',title:'GitHub',url:'https://github.com/',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fgithub.com&sz=64'},openInNewTab:true,position:5,gridPos:{col:3,row:2},createdAt:now,updatedAt:now},
      'card-7':{id:'card-7',title:'Perplexity',url:'https://perplexity.ai',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fperplexity.ai&sz=64'},openInNewTab:true,position:6,gridPos:{col:1,row:3},createdAt:now,updatedAt:now},
      'card-8':{id:'card-8',title:'Claude',url:'https://claude.ai/new',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fclaude.ai&sz=64'},openInNewTab:true,position:7,gridPos:{col:2,row:3},createdAt:now,updatedAt:now},
      'card-9':{id:'card-9',title:'ChatGPT',url:'https://chatgpt.com',icon:{kind:'auto',resolvedUrl:'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fchatgpt.com&sz=64'},openInNewTab:true,position:8,gridPos:{col:3,row:3},createdAt:now,updatedAt:now},
    },
    categories:{},wallpapers:{},
    theme:{colorScheme:'dark',accentColor:'#25dfb7',cardOpacity:.70,blurStrength:0,borderRadius:18,shadowIntensity:.55,animationsEnabled:true,textColor:'#ffffff',textColorSecondary:'#888888',btnTextColor:'#111111',panelBg:'#1a1c25',cardColor:'#ffffff'},
    background:{type:'color',color:'#000000',blur:0,brightness:100,contrast:100,saturation:100,overlayColor:'#000000',overlayOpacity:0},
    general:{openLinksInNewTab:true,showClock:true,clockFormat:'24h',showQuickSearch:true,showWeather:false,weatherCity:'',weatherLat:null,weatherLon:null,weatherData:null,weatherLastFetch:0,nudgeEnabled:true,showMyIP:false},
    storage:{type:'browser',gist:{token:'',gistId:'',autoSync:false,lastSync:null}},
    gridZoom:1,lockScrollAxis:true,
    widgets:{betaUnlocked:true,items:{
      'w-history':{id:'w-history',type:'history',boardId:bid,title:'Zuletzt besucht',colSpan:2,rowSpan:3,gridPos:{col:5,row:1},data:{items:[]},createdAt:now,updatedAt:now},
      'w-calendar':{id:'w-calendar',type:'calendar',boardId:bid,title:'Kalender',colSpan:1,rowSpan:2,gridPos:{col:4,row:1},data:{},createdAt:now,updatedAt:now},
      'w-crypto':{id:'w-crypto',type:'crypto',boardId:bid,title:'Aktien & Crypto',colSpan:1,rowSpan:2,gridPos:{col:3,row:4},data:{watchlist:['bitcoin','ethereum','solana']},createdAt:now,updatedAt:now},
      'w-qr':{id:'w-qr',type:'qrcode',boardId:bid,title:'QR-Code',colSpan:1,rowSpan:2,gridPos:{col:4,row:3},data:{},createdAt:now,updatedAt:now},
      'w-note':{id:'w-note',type:'note',boardId:bid,title:'Notiz',colSpan:2,rowSpan:2,gridPos:{col:1,row:4},data:{},createdAt:now,updatedAt:now},
      'w-speed':{id:'w-speed',type:'speedtest',boardId:bid,title:'Speedtest',colSpan:1,rowSpan:2,gridPos:{col:5,row:4},data:{},createdAt:now,updatedAt:now},
    }},
    updatedAt:now
  };
}


// ── i18n ──
const I18N={
  de:{
    // Tabs
    tabGeneral:'Allgemein',tabDesign:'Design',tabBackground:'Hintergrund',
    tabCards:'Karten & Layout',tabSync:'Sync & Speicher',tabAdvanced:'Erweitert',tabPrivacy:'Datenschutz',
    tabDesignHint:'Stil, Farben & Layout',
    // General
    generalSection:'Allgemein',weatherSection:'Wetter',
    openInNewTab:'Links in neuem Tab',showClock:'Uhr anzeigen',clockFormat:'Format',
    showWeather:'Wetter anzeigen',cityLabel:'Stadt',cityPlaceholder:'z.B. Berlin, Wien, Zürich',
    saveBtn:'Speichern',refreshBtn:'Aktualisieren',feltTemp:'gefühlt',
    source:'Quelle',
    showMyIP:'IP-Adresse anzeigen',myIPHint:'Zeigt deine öffentliche IP in der Kopfzeile',
    // Appearance
    modeLabel:'Modus',darkMode:'Dunkel',lightMode:'Hell',
    panelsSection:'Panels & Fenster',windowColor:'Fensterfarbe',windowColorHint:'Einstellungen & Suche',
    colorsSection:'Farben',accentColor:'Akzentfarbe',accentHint:'Buttons, Highlights, Logo',
    textColor:'Schriftfarbe (primär)',textColorHint:'Kartentitel, Dashboard-Name, Überschriften',
    textColor2:'Schriftfarbe (sekundär)',textColor2Hint:'Domain, Untertitel, Uhrzeit, Suche',
    btnTextColor:'Button-Schriftfarbe',btnTextColorHint:'Text auf Akzent-Buttons (z.B. Speichern)',
    glassSection:'Glas',transparency:'Transparenz',blur:'Blur',rounding:'Rundung',animations:'Animationen',
    windowsWidgets:'Fenster & Widgets',textColors:'Schriftfarben',
    cardColor:'Kartenfarbe',cardColorHint:'Grundfarbe der Karten & Widgets',
    windowColorHint:'Einstellungen & Suchfeld',
    dashboardSection:'Dashboard',scrollLock:'Scroll-Achse sperren',scrollLockHint:'Nur horizontal oder vertikal scrollen',
    // Style
    stylePresets:'Stil-Vorlagen',stylePresetsHint:'Klicke auf einen Stil um ihn anzuwenden. Farben können danach einzeln angepasst werden.',
    presetNight:'Nacht',presetAurora:'Aurora',presetSunset:'Sonnenuntergang',presetOcean:'Ozean',presetForest:'Wald',presetMono:'Mono',
    // Background
    bgType:'Typ',bgStandard:'Standard',bgColor:'Farbe',bgImage:'Bild',
    bgChooseImage:'Bild wählen',bgEffects:'Effekte',bgBlur:'Unschärfe',
    bgBrightness:'Helligkeit',bgOverlay:'Overlay Deckkraft',bgOverlayColor:'Overlay Farbe',
    // Cards
    cardSizeLabel:'Kartengröße',small:'Klein',medium:'Mittel',large:'Groß',
    titleSizeLabel:'Schriftgröße Kartentitel',fontSize:'Schriftgröße',
    gapSection:'Abstände',gapLabel:'Abstand (px)',
    boardsSection:'Boards',cardsCount:'Karten',addBoardBtn:'+ Board hinzufügen',
    // Sync
    syncDesc:'Synct alle Boards, Karten und Einstellungen automatisch über einen privaten GitHub Gist. Funktioniert auf Mac, Windows und allen Geräten gleichzeitig.',
    createToken:'Token erstellen →',tokenScope:'aktivieren',
    changeToken:'Ändern',lastSync:'Letzter Sync:',never:'—',
    syncNow:'Jetzt synchronisieren',syncSuccess:'Erfolgreich synchronisiert',
    exportImport:'📁 Manueller Export / Import',
    exportImportDesc:'Einstellungen als JSON-Datei speichern und auf einem anderen Gerät laden. Ideal für einmalige Übertragungen oder als Backup in iCloud/OneDrive.',
    exportBtn:'↑ Exportieren (JSON)',importBtn2:'↓ Importieren (JSON)',
    iCloudTip:'Tipp für iCloud / OneDrive:',
    iCloudText:'Exportiere die JSON-Datei → speichere sie in iCloud Drive oder OneDrive → auf dem anderen Gerät „Importieren" und die gleiche Datei wählen.',
    // Advanced
    systemSection:'System',entranceAnim:'Einblendanimation',entranceAnimHint:'Sidebar und Header beim Laden animieren',
    cardAnimations:'Kartenanimationen',cardAnimationsHint:'Hover- und Ladeanimationen der Karten',
    infoSection:'Info',schemaVersion:'Schema-Version',
    dangerSection:'Gefahr',resetAll:'Alles zurücksetzen',resetHint:'Löscht alle Karten, Boards und Einstellungen',resetBtn:'Zurücksetzen',
    importSection:'Import',importBookmarks:'Lesezeichen importieren',importBookmarksHint:'HTML-Datei aus Firefox/Chrome exportieren',importFileBtn:'📁 Importieren',
    // Privacy
    privacySection:'Datenschutz',noTracking:'Kein Tracking',
    localStorage:'Lokale Speicherung',localStorageText:'Deine Konfiguration wird ausschließlich lokal in deinem Browser gespeichert. Nichts verlässt dein Gerät ohne dein Zutun.',
    whatWeDoNot:'Was wir nicht tun',whatWeDoNotText:'Keine Analyse oder Telemetrie · Keine Weitergabe an Dritte · Kein Tracking deiner Aktivitäten',
    externalServices:'Externe Dienste',googleFaviconLabel:'Google Favicon-Dienst',googleFaviconText:'Wird verwendet, um Icons für deine gespeicherten Links zu laden. Dabei wird nur die jeweilige Domain übermittelt.',
    githubApiLabel:'GitHub API',githubApiText:'Wird nur verwendet, wenn du Gist-Sync unter „Sync & Speicher" aktivierst. Dein Token bleibt lokal gespeichert.',
    // Sync tab
    syncTitle:'☁️ GitHub Gist Sync',
    syncDesc:'Synct alle Boards, Karten und Einstellungen automatisch über einen privaten GitHub Gist. Funktioniert auf Mac, Windows und allen Geräten gleichzeitig.',
    createToken:'Token erstellen →',tokenScopeHint:'aktivieren',
    gistIdLabel:'Gist ID',gistIdHint:'Leer lassen → wird automatisch erstellt',
    gistIdPlaceholder:'Wird beim ersten Sync automatisch ausgefüllt',
    changeToken:'Ändern',
    loadFirst:'↓ Von Gist laden',
    loadFirstHint:'Lade zuerst die aktuelle Version herunter um lokale Daten nicht zu überschreiben. Danach kannst du auch hochladen.',
    syncNow:'↑ Jetzt synchronisieren',loadGist:'↓ Von Gist laden',
    connect:'Verbinden',connectHint:'Bestehende Gist ID verwenden',
    createNew:'Neu einrichten',createNewHint:'Neuen Gist erstellen & hochladen',
    disconnect:'Token entfernen & Verbindung trennen',
    lastSyncLabel:'Letzter Sync',activeLabel:'Aktiv',
    setupOtherDevice:'Anderes Gerät einrichten:',
    setupStep1:'1. Sildesk auf dem anderen Gerät installieren',
    setupStep2:'2. Gleichen Token + Gist ID hier eintragen',
    setupStep3:'3. „Von Gist laden" klicken',
    notificationsTitle:'🔔 Benachrichtigungen',
    syncReminders:'Sync-Erinnerungen',
    syncRemindersHint:'Nach Änderungen: kleines Fenster fragt ob du hochladen möchtest. Im Hintergrund: prüft alle 60 Sek. ob eine neuere Version vorliegt.',
    exportImportTitle:'📁 Manueller Export / Import',
    exportImportDesc:'Einstellungen als JSON-Datei speichern und auf einem anderen Gerät laden. Ideal für einmalige Übertragungen oder als Backup in iCloud/OneDrive.',
    exportBtn:'↑ Exportieren (JSON)',importBtn:'↓ Importieren (JSON)',
    cloudTipTitle:'Tipp für iCloud / OneDrive:',
    cloudTipText:'Exportiere die JSON-Datei → speichere sie in iCloud Drive oder OneDrive → auf dem anderen Gerät „Importieren" und die gleiche Datei wählen.',
    // Misc
    search:'Suche',addCard:'+ Karte',edit:'Bearbeiten',done:'Fertig',
    settingsTitle:'Einstellungen',widgetAddTitle:'Widget hinzufügen',widgetEditTitle:'Widget bearbeiten',
    cardTitleLabel:'Titel',cardSubLabel:'Untertitel',
    cardTitlePlaceholder:'z. B. GitHub',cardSubPlaceholder:'Kurze Beschreibung',
    noCards:'Noch keine Links',noCardsHint:'Klick auf „+ Karte“ um loszulegen.',
    widgetNote:'Notiz',widgetNoteDesc:'Freitext, lokal gespeichert',
    widgetRSS:'RSS Feed',widgetRSSDesc:'Artikel aus einer URL',
    widgetHistory:'Zuletzt besucht',widgetHistoryDesc:'Browser-Verlauf',
    widgetCalendar:'Kalender',widgetCalendarDesc:'Monatsansicht & Einträge',
    widgetIframe:'iFrame Embed',widgetIframeDesc:'Webseite einbetten',
    widgetQR:'QR-Code',widgetQRDesc:'URL zu QR-Code + Download',
    widgetPassword:'Passwort Generator',widgetPasswordDesc:'Sicheres Passwort erstellen',
    widgetFootball:'Fußball',widgetFootballDesc:'Bundesliga Ergebnisse & Tabelle',
    widgetWeather:'5-Tage Wetter',widgetWeatherDesc:'Vorschau via Open-Meteo',
    widgetCrypto:'Aktien & Crypto',widgetCryptoDesc:'Kurse live via CoinGecko',
    widgetIP:'Meine IP',widgetIPDesc:'Public IP, Land, ISP, ASN',
    widgetSpeed:'Speedtest',widgetSpeedDesc:'Download, Upload & Ping',
    widget2048:'2048',widget2048Desc:'Klassisches Schiebepuzzle',
    widgetTodo:'Todo-Liste',widgetTodoDesc:'Aufgaben verwalten',
    widgetPomodoro:'Pomodoro Timer',widgetPomodoroDesc:'Fokus & Pausentimer',
    // Widget content strings
    wLoading:'Lädt...',wNoEntries:'Keine Einträge',wNoTasks:'Keine Aufgaben',
    wTaskPlaceholder:'Aufgabe...',wNotePlaceholder:'Notiz schreiben...',
    wTestStart:'Test starten',wPing:'Ping...',wDownload:'Download...',wUpload:'Upload...',
    wNew:'Neu',wGameOver:'Game Over',
    wFocusPhase:'Fokus',wBreakPhase:'Kurze Pause',wLongBreakPhase:'Lange Pause',
    wFocusShort:'Fokus',wBreakShort:'Kurz',wLongBreakShort:'Lang',
    wIPNotFound:'IP nicht abrufbar',wIPRetry:'Erneut versuchen',wIPUnknown:'Nicht erkannt',
    wLocationMissing:'Standort fehlt',wCityNotFound:'Stadt n.g.',
    moreOptions:'Mehr Optionen ▾',
    designExportImport:'Design exportieren / importieren',
    designExport:'Exportieren',designImport:'Importieren',
    designExportSuccess:'Design exportiert ✓',designImportSuccess:'Design importiert ✓',designImportError:'Ungültige Design-Datei',
    cancel:'Abbrechen',confirmDelete:'Löschen',
    confirmDeleteCard:'Karte wirklich löschen?',confirmDeleteWidget:'Widget wirklich löschen?',
    confirmDeleteBoard:'Board wirklich löschen?',confirmResetAll:'Wirklich alles zurücksetzen? Alle Karten, Boards und Einstellungen werden gelöscht.',
    confirmRemoveToken:'Token und Gist-Verbindung wirklich entfernen?',confirmReplaceToken:'Token ersetzen? Der aktuelle Token bleibt auf GitHub aktiv.',
    toastCardDeleted:'Karte gelöscht',toastWidgetDeleted:'Widget gelöscht',toastBoardDeleted:'Board gelöscht',
    toastSaved:'Gespeichert',toastCitySaved:'Stadt gespeichert',toastWeatherRefresh:'Wetter wird aktualisiert',
    toastConnected:'Verbunden ✓',toastSynced:'Synchronisiert ✓',toastCardMoved:'Karte verschoben',
    toastBoardCreated:'Board erstellt',toastNudgeOn:'Sync-Erinnerungen aktiviert',toastNudgeOff:'Sync-Erinnerungen deaktiviert',
    toastFetchError:'Laden fehlgeschlagen',toastXMLError:'Ungültiges XML',toastPushActive:'Sync bereits aktiv',
    lastBoardError:'Das letzte Board kann nicht gelöscht werden',
    toastQRUpdated:'QR-Code aktualisiert',toastDownloadError:'Download fehlgeschlagen',
    toastWidgetSaved:'Widget gespeichert',toastEntrySaved:'Eintrag gespeichert',
    toastHistoryError:'Verlauf nicht verfügbar',toastBGSet:'Hintergrundbild gesetzt',
    toastBackupExported:'Backup exportiert',toastImported:'Erfolgreich importiert',toastImportError:'Fehler beim Import',
    toastBGTooLarge:'Hintergrundbild zu groß für Sync (max 700 KB): ',
    toastEnterToken:'Bitte Token eingeben',toastChecking:'Wird geprüft...',toastTokenInvalid:'Token ungültig',
    toastEnterGistId:'Bitte Gist ID eingeben',toastConnecting:'Verbinde mit Gist...',toastLoading:'Lade von Gist...',
    toastSettingsLoaded:'Einstellungen geladen ✓',toastConnected:'Verbunden ✓',
    toastSyncError:'Sync fehlgeschlagen: ',toastLoadError:'Fehler: ',toastUpdated:'Aktualisiert ✓',
    toastLocationFound:'Standort erkannt',toastGPSError:'GPS nicht verfügbar',toastSyncRunning:'Sync läuft bereits...',
  },
  en:{
    // Tabs
    tabGeneral:'General',tabDesign:'Design',tabBackground:'Background',
    tabCards:'Cards & Layout',tabSync:'Sync & Storage',tabAdvanced:'Advanced',tabPrivacy:'Privacy',
    tabDesignHint:'Style, colors & layout',
    // General
    generalSection:'General',weatherSection:'Weather',
    openInNewTab:'Open links in new tab',showClock:'Show clock',clockFormat:'Format',
    showWeather:'Show weather',cityLabel:'City',cityPlaceholder:'e.g. Berlin, London, New York',
    saveBtn:'Save',refreshBtn:'Refresh',feltTemp:'feels like',
    source:'Source',
    showMyIP:'Show IP address',myIPHint:'Shows your public IP in the header',
    // Appearance
    modeLabel:'Mode',darkMode:'Dark',lightMode:'Light',
    panelsSection:'Panels & Windows',windowColor:'Window color',windowColorHint:'Settings & Search',
    colorsSection:'Colors',accentColor:'Accent color',accentHint:'Buttons, highlights, logo',
    textColor:'Text color (primary)',textColorHint:'Card title, dashboard name, headings',
    textColor2:'Text color (secondary)',textColor2Hint:'Domain, subtitle, clock, search',
    btnTextColor:'Button text color',btnTextColorHint:'Text on accent buttons (e.g. Save)',
    glassSection:'Glass',transparency:'Transparency',blur:'Blur',rounding:'Rounding',animations:'Animations',
    windowsWidgets:'Windows & widgets',textColors:'Text colors',
    cardColor:'Card color',cardColorHint:'Base color of cards & widgets',
    windowColorHint:'Settings & search field',
    dashboardSection:'Dashboard',scrollLock:'Lock scroll axis',scrollLockHint:'Only scroll horizontally or vertically',
    // Style
    stylePresets:'Style Presets',stylePresetsHint:'Click a style to apply it. Colors can be adjusted individually afterwards.',
    presetNight:'Night',presetAurora:'Aurora',presetSunset:'Sunset',presetOcean:'Ocean',presetForest:'Forest',presetMono:'Mono',
    // Background
    bgType:'Type',bgStandard:'Default',bgColor:'Color',bgImage:'Image',
    bgChooseImage:'Choose image',bgEffects:'Effects',bgBlur:'Blur',
    bgBrightness:'Brightness',bgOverlay:'Overlay opacity',bgOverlayColor:'Overlay color',
    // Cards
    cardSizeLabel:'Card size',small:'Small',medium:'Medium',large:'Large',
    titleSizeLabel:'Title font size',fontSize:'Font size',
    gapSection:'Spacing',gapLabel:'Gap (px)',
    boardsSection:'Boards',cardsCount:'Cards',addBoardBtn:'+ Add board',
    // Sync
    syncDesc:'Automatically syncs all boards, cards and settings via a private GitHub Gist. Works on Mac, Windows and all devices simultaneously.',
    createToken:'Create token →',tokenScope:'enable',
    changeToken:'Change',lastSync:'Last sync:',never:'—',
    syncNow:'Sync now',syncSuccess:'Successfully synced',
    exportImport:'📁 Manual Export / Import',
    exportImportDesc:'Save settings as a JSON file and load them on another device. Ideal for one-time transfers or as a backup in iCloud/OneDrive.',
    exportBtn:'↑ Export (JSON)',importBtn2:'↓ Import (JSON)',
    iCloudTip:'Tip for iCloud / OneDrive:',
    iCloudText:'Export the JSON file → save it to iCloud Drive or OneDrive → on the other device click "Import" and select the same file.',
    // Advanced
    systemSection:'System',entranceAnim:'Entrance animation',entranceAnimHint:'Animate sidebar and header on load',
    cardAnimations:'Card animations',cardAnimationsHint:'Hover and load animations for cards',
    infoSection:'Info',schemaVersion:'Schema version',
    dangerSection:'Danger',resetAll:'Reset everything',resetHint:'Deletes all cards, boards and settings',resetBtn:'Reset',
    importSection:'Import',importBookmarks:'Import bookmarks',importBookmarksHint:'HTML file exported from Firefox/Chrome',importFileBtn:'📁 Import',
    // Privacy
    privacySection:'Privacy',noTracking:'No Tracking',
    localStorage:'Local storage',localStorageText:'Your configuration is stored exclusively locally in your browser. Nothing leaves your device without your action.',
    whatWeDoNot:"What we don't do",whatWeDoNotText:'No analytics or telemetry · No sharing with third parties · No tracking of your activities',
    externalServices:'External services',googleFaviconLabel:'Google Favicon service',googleFaviconText:'Used to load icons for your saved links. Only the respective domain is transmitted.',
    githubApiLabel:'GitHub API',githubApiText:'Only used when you enable Gist sync under "Sync & Storage". Your token stays stored locally.',
    // Sync tab
    syncTitle:'☁️ GitHub Gist Sync',
    syncDesc:'Automatically syncs all boards, cards and settings via a private GitHub Gist. Works on Mac, Windows and all devices simultaneously.',
    createToken:'Create token →',tokenScopeHint:'enable',
    gistIdLabel:'Gist ID',gistIdHint:'Leave empty → will be created automatically',
    gistIdPlaceholder:'Filled in automatically on first sync',
    changeToken:'Change',
    loadFirst:'↓ Load from Gist',
    loadFirstHint:"Load the current version first to avoid overwriting local data. After that you can also upload.",
    syncNow:'↑ Sync now',loadGist:'↓ Load from Gist',
    connect:'Connect',connectHint:'Use existing Gist ID',
    createNew:'Create new',createNewHint:'Create new Gist & upload',
    disconnect:'Remove token & disconnect',
    lastSyncLabel:'Last sync',activeLabel:'Active',
    setupOtherDevice:'Setup another device:',
    setupStep1:'1. Install Sildesk on the other device',
    setupStep2:'2. Enter the same token + Gist ID here',
    setupStep3:'3. Click "Load from Gist"',
    notificationsTitle:'🔔 Notifications',
    syncReminders:'Sync reminders',
    syncRemindersHint:'After changes: a small window asks if you want to upload. In background: checks every 60 sec for a newer version.',
    exportImportTitle:'📁 Manual Export / Import',
    exportImportDesc:'Save settings as a JSON file and load them on another device. Ideal for one-time transfers or as a backup in iCloud/OneDrive.',
    exportBtn:'↑ Export (JSON)',importBtn:'↓ Import (JSON)',
    cloudTipTitle:'Tip for iCloud / OneDrive:',
    cloudTipText:'Export the JSON file → save it to iCloud Drive or OneDrive → on the other device click "Import" and select the same file.',
    // Misc
    search:'Search',addCard:'+ Card',edit:'Edit',done:'Done',
    settingsTitle:'Settings',widgetAddTitle:'Add Widget',widgetEditTitle:'Edit Widget',
    cardTitleLabel:'Title',cardSubLabel:'Subtitle',
    cardTitlePlaceholder:'e.g. GitHub',cardSubPlaceholder:'Short description',
    noCards:'No links yet',noCardsHint:'Click „+ Card“ to get started.',
    widgetNote:'Note',widgetNoteDesc:'Plain text, stored locally',
    widgetRSS:'RSS Feed',widgetRSSDesc:'Articles from a URL',
    widgetHistory:'Recently visited',widgetHistoryDesc:'Browser history',
    widgetCalendar:'Calendar',widgetCalendarDesc:'Monthly view & entries',
    widgetIframe:'iFrame Embed',widgetIframeDesc:'Embed a website',
    widgetQR:'QR Code',widgetQRDesc:'URL to QR code + download',
    widgetPassword:'Password Generator',widgetPasswordDesc:'Generate secure passwords',
    widgetFootball:'Football',widgetFootballDesc:'Bundesliga results & table',
    widgetWeather:'5-Day Weather',widgetWeatherDesc:'Forecast via Open-Meteo',
    widgetCrypto:'Stocks & Crypto',widgetCryptoDesc:'Live prices via CoinGecko',
    widgetIP:'My IP',widgetIPDesc:'Public IP, country, ISP, ASN',
    widgetSpeed:'Speedtest',widgetSpeedDesc:'Download, upload & ping',
    widget2048:'2048',widget2048Desc:'Classic sliding puzzle',
    widgetTodo:'Todo List',widgetTodoDesc:'Manage tasks',
    widgetPomodoro:'Pomodoro Timer',widgetPomodoroDesc:'Focus & break timer',
    // Widget content strings
    wLoading:'Loading...',wNoEntries:'No entries',wNoTasks:'No tasks',
    wTaskPlaceholder:'Task...',wNotePlaceholder:'Write a note...',
    wTestStart:'Start test',wPing:'Ping...',wDownload:'Download...',wUpload:'Upload...',
    wNew:'New',wGameOver:'Game Over',
    wFocusPhase:'Focus',wBreakPhase:'Short break',wLongBreakPhase:'Long break',
    wFocusShort:'Focus',wBreakShort:'Short',wLongBreakShort:'Long',
    wIPNotFound:'IP not available',wIPRetry:'Try again',wIPUnknown:'Not detected',
    wLocationMissing:'Location missing',wCityNotFound:'City n.f.',
    moreOptions:'More options ▾',
    designExportImport:'Export / import design',
    designExport:'Export',designImport:'Import',
    designExportSuccess:'Design exported ✓',designImportSuccess:'Design imported ✓',designImportError:'Invalid design file',
    cancel:'Cancel',confirmDelete:'Delete',
    confirmDeleteCard:'Really delete this card?',confirmDeleteWidget:'Really delete this widget?',
    confirmDeleteBoard:'Really delete this board?',confirmResetAll:'Really reset everything? All cards, boards and settings will be deleted.',
    confirmRemoveToken:'Really remove token and disconnect?',confirmReplaceToken:'Replace token? The current token stays active on GitHub.',
    toastCardDeleted:'Card deleted',toastWidgetDeleted:'Widget deleted',toastBoardDeleted:'Board deleted',
    toastSaved:'Saved',toastCitySaved:'City saved',toastWeatherRefresh:'Refreshing weather',
    toastConnected:'Connected ✓',toastSynced:'Synced ✓',toastCardMoved:'Card moved',
    toastBoardCreated:'Board created',toastNudgeOn:'Sync reminders enabled',toastNudgeOff:'Sync reminders disabled',
    toastFetchError:'Load failed',toastXMLError:'Invalid XML',toastPushActive:'Sync already in progress',
    lastBoardError:'The last board cannot be deleted',
    toastQRUpdated:'QR code updated',toastDownloadError:'Download failed',
    toastWidgetSaved:'Widget saved',toastEntrySaved:'Entry saved',
    toastHistoryError:'History not available',toastBGSet:'Background image set',
    toastBackupExported:'Backup exported',toastImported:'Successfully imported',toastImportError:'Import error',
    toastBGTooLarge:'Background image too large for sync (max 700 KB): ',
    toastEnterToken:'Please enter a token',toastChecking:'Checking...',toastTokenInvalid:'Token invalid',
    toastEnterGistId:'Please enter a Gist ID',toastConnecting:'Connecting to Gist...',toastLoading:'Loading from Gist...',
    toastSettingsLoaded:'Settings loaded ✓',toastConnected:'Connected ✓',
    toastSyncError:'Sync failed: ',toastLoadError:'Error: ',toastUpdated:'Updated ✓',
    toastLocationFound:'Location found',toastGPSError:'GPS not available',toastSyncRunning:'Sync already running...',
  }
};
function t(key){ const lang=STATE?.general?.language||'de'; return(I18N[lang]||I18N.de)[key]||key; }

// ── Storage ──
const STORE_KEY='sildesk_config_v1';
async function loadConfig(){
  try{
    const r=await browser.storage.local.get([STORE_KEY,'vela_config_v1']);
    const raw=r[STORE_KEY]||r['vela_config_v1'];
    if(raw){
      // migrate: ensure new fields
      if(!raw.widgets)raw.widgets={betaUnlocked:true,items:{}};
      if(raw.widgets)raw.widgets.betaUnlocked=true;
      // migrate: builtin background no longer exists
      if(raw.background?.type==='builtin')raw.background.type='color';
      // migrate: new theme fields added in v3.2
      if(!raw.theme)raw.theme={};
      if(raw.theme.cardColor===undefined)raw.theme.cardColor='#ffffff';
      // migrate: new general fields added in v3.2
      if(!raw.general)raw.general={};
      if(raw.general.showMyIP===undefined)raw.general.showMyIP=false;
      Object.values(raw.boards||{}).forEach(b=>{
        if(!b.layoutData)b.layoutData={cardSize:'medium',density:'normal',gap:16};
        if(b.layoutData.gap===undefined)b.layoutData.gap=16;
        if(b.showLabel===undefined)b.showLabel=true;
        if(b.iconDataUrl===undefined)b.iconDataUrl=null;
        // Migrate: ensure dynamic grid size fields exist
        if(b.gridCols===undefined)b.gridCols=GRID_COLS_DEFAULT;
        if(b.gridRows===undefined)b.gridRows=GRID_ROWS_DEFAULT;
      });
      return raw;
    }
  }catch(e){}
  const c=defaultConfig();await saveConfig(c);return c;
}
async function saveConfig(cfg){
  cfg.updatedAt=Date.now();
  try{
    await browser.storage.local.set({[STORE_KEY]:cfg});
    schedulePushNudge();
  }catch(e){console.warn('[Sildesk] save',e)}
}

// Silent save - no sync nudge (for transient widget data like speedtest results)
async function saveConfigSilent(cfg){
  try{
    await browser.storage.local.set({[STORE_KEY]:cfg});
  }catch(e){console.warn('[Sildesk] save silent',e)}
}


// ── Scroll axis lock ──
function initScrollLock(){
  // Block browser zoom via Ctrl+Scroll
  document.addEventListener('wheel', function(e){
    if(e.ctrlKey){ e.preventDefault(); return; }
    const grid=document.getElementById('card-grid');
    if(!grid||(!grid.contains(e.target)&&e.target!==grid))return;
    if(STATE.lockScrollAxis===false)return;
    // If wheel is inside a widget scroll body → let vertical scroll pass through
    const scrollBody=e.target.closest('.widget-scroll-body');
    if(scrollBody){
      const dx=Math.abs(e.deltaX),dy=Math.abs(e.deltaY);
      if(dy>=dx)return;
    }
    const dx=Math.abs(e.deltaX), dy=Math.abs(e.deltaY);
    e.preventDefault();
    const scroller = document.querySelector('.vela-main') || grid;
    if(dx>dy){ scroller.scrollLeft+=e.deltaX; }
    else      { scroller.scrollTop +=e.deltaY; }
  },{passive:false});
  // Block Ctrl+Plus / Ctrl+Minus / Ctrl+0 zoom
  document.addEventListener('keydown', function(e){
    if(e.ctrlKey && (e.key==='+' || e.key==='-' || e.key==='=' || e.key==='0')){
      e.preventDefault();
    }
  });
}

// ── Theme / BG ──
function hexRgba(hex,a){const c=(hex||'#000000').replace('#','');return`rgba(${parseInt(c.slice(0,2),16)},${parseInt(c.slice(2,4),16)},${parseInt(c.slice(4,6),16)},${a})`}
function lighten(hex,n){const c=(hex||'var(--accent)').replace('#','');return'#'+[0,2,4].map(i=>Math.min(255,parseInt(c.slice(i,i+2),16)+n).toString(16).padStart(2,'0')).join('')}


function applyTheme(t,bg,wallpapers){
  const r=document.documentElement;
  r.style.setProperty('--accent',t.accentColor);
  // Apply accent color to inline SVG logo
  document.querySelectorAll('#logo-inline path,#logo-inline rect,#logo-inline circle,#logo-inline polygon').forEach(el=>el.style.fill=t.accentColor||'#2bdfb5');
  r.style.setProperty('--accent-glow',hexRgba(t.accentColor,.25));
  r.style.setProperty('--accent-light',lighten(t.accentColor,20));
  r.style.setProperty('--glass-blur',t.blurStrength+'px');
  r.style.setProperty('--radius-lg',t.borderRadius+'px');
  r.style.setProperty('--radius-xl',(t.borderRadius+8)+'px');
  r.style.setProperty('--radius-md',Math.max(10,t.borderRadius-4)+'px');
  const ga=(t.cardOpacity*.12).toFixed(3);
  r.dataset.animations=t.animationsEnabled?'true':'false';
  const isDark=(t.colorScheme||'dark')!=='light';
  r.dataset.theme=isDark?'dark':'light';
  r.style.setProperty('--text-primary',t.textColor||(isDark?'#ffffff':'#1a1a2e'));
  r.style.setProperty('--text-secondary',t.textColorSecondary||(isDark?'#888888':'#555566'));
  r.style.setProperty('--btn-text',t.btnTextColor||'#111111');
  r.style.setProperty('--panel-bg',t.panelBg||(isDark?'#14161e':'#f0f0f7'));
  // glass vars: use cardColor as the base tint color
  const cardBase=t.cardColor||'#ffffff';
  r.style.setProperty('--glass-bg',hexRgba(cardBase,isDark?(t.cardOpacity*.12).toFixed(3):(t.cardOpacity*.07).toFixed(3)));
  r.style.setProperty('--glass-bg-hover',hexRgba(cardBase,isDark?(t.cardOpacity*.18).toFixed(3):(t.cardOpacity*.12).toFixed(3)));
  const boardNameEl=document.getElementById('board-name');
  if(boardNameEl)boardNameEl.style.color=t.textColor||(isDark?'':'#1a1a2e');
  applyBg(bg,wallpapers);
}

function applyBg(bg,wallpapers){
  const bgEl=document.getElementById('vela-bg');
  const ovEl=document.getElementById('vela-overlay');
  if(!bgEl||!ovEl)return;
  const _isDark=(STATE?.theme?.colorScheme||'dark')!=='light';
  if(bg.type==='color'){bgEl.style.background=bg.color||(_isDark?'#0f1117':'#eeeef5');bgEl.style.backgroundImage='none'}
  else if(bg.type==='builtin'){
    // builtin background removed — fallback to solid color
    bgEl.style.background='#0d0f14';bgEl.style.backgroundImage='none';
  }
  else if(bg.type==='image'&&bg.imageId&&wallpapers[bg.imageId]){
    bgEl.style.backgroundImage=`url(${wallpapers[bg.imageId].dataUrl})`;
    bgEl.style.backgroundSize='cover';bgEl.style.backgroundPosition='center';
  }
  const filters=[bg.blur>0?`blur(${bg.blur}px)`:'',bg.brightness!==100?`brightness(${bg.brightness}%)`:''].filter(Boolean).join(' ');
  bgEl.style.filter=filters||'none';
  ovEl.style.background=hexRgba(bg.overlayColor,bg.overlayOpacity);
}

// ── Favicon ──
const iconCache={};
async function resolveIcon(url){
  if(iconCache[url]!==undefined)return iconCache[url];
  try{
    const o=new URL(url).origin;
    const gf=`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`;
    const ok=await new Promise(res=>{const img=new Image();const t=setTimeout(()=>res(false),3000);img.onload=()=>{clearTimeout(t);res(img.width>1)};img.onerror=()=>{clearTimeout(t);res(false)};img.src=gf});
    iconCache[url]=ok?gf:null;
  }catch{iconCache[url]=null}
  return iconCache[url];
}

// ── State ──
let STATE=null;
let EDIT_MODE=false;
let _skipAutoAssign=false;


// ── RSS Auto-Refresh ──
async function refreshRSSWidget(wid){
  const w=STATE.widgets?.items?.[wid];if(!w||!w.data?.feedUrl)return;
  function parseXML(text){
    const parser=new DOMParser();const xml=parser.parseFromString(text,'text/xml');
    if(xml.querySelector('parsererror'))return null;
    const items=[...xml.querySelectorAll('item, entry')];
    return items.slice(0,20).map(it=>{
      const title=it.querySelector('title')?.textContent?.trim()||'Kein Titel';
      const linkEl=it.querySelector('link');
      const link=linkEl?.getAttribute('href')||linkEl?.textContent?.trim()||'';
      const pubDate=it.querySelector('pubDate,published,updated')?.textContent?.trim()||'';
      return{title,url:link,date:pubDate?new Date(pubDate).toLocaleDateString('de-DE'):''};
    });
  }
  try{
    const r=await fetch(w.data.feedUrl,{headers:{'Accept':'application/rss+xml,application/atom+xml,text/xml,*/*'}});
    if(!r.ok)return;
    const parsed=parseXML(await r.text());
    if(parsed?.length){STATE.widgets.items[wid].data.items=parsed;saveConfig(STATE);updateWidgetInPlace(wid);}
  }catch(_){}
}
async function refreshAllRSSWidgets(){
  const board=STATE.boards[STATE.activeBoardId];if(!board)return;
  const rssWidgets=Object.values(STATE.widgets?.items||{})
    .filter(w=>w.boardId===board.id&&w.type==='rss'&&w.data?.feedUrl);
  if(!rssWidgets.length)return;
  for(const w of rssWidgets){
    try{
      function parseXML(text){
        const parser=new DOMParser();
        const xml=parser.parseFromString(text,'text/xml');
        if(xml.querySelector('parsererror'))return null;
        const items=[...xml.querySelectorAll('item, entry')];
        return items.slice(0,20).map(it=>{
          const title=it.querySelector('title')?.textContent?.trim()||'Kein Titel';
          const linkEl=it.querySelector('link');
          const link=linkEl?.getAttribute('href')||linkEl?.textContent?.trim()||'';
          const pubDate=it.querySelector('pubDate,published,updated')?.textContent?.trim()||'';
          return{title,url:link,date:pubDate?new Date(pubDate).toLocaleDateString('de-DE'):''};
        });
      }
      const r=await fetch(w.data.feedUrl,{headers:{'Accept':'application/rss+xml,application/atom+xml,text/xml,*/*'}});
      if(!r.ok)continue;
      const text=await r.text();
      const parsed=parseXML(text);
      if(parsed?.length){
        STATE.widgets.items[w.id].data.items=parsed;
      }
    }catch(_){}
  }
  saveConfig(STATE);
  renderDynamic();
}

// Listen for refresh message from background script
browser.runtime.onMessage.addListener(msg=>{
  if(msg.type==='RSS_REFRESH')refreshAllRSSWidgets();
});
async function boot(){
  STATE=await loadConfig();
  renderApp();
  // Load logo.svg inline so we can color it with accent
  fetch(browser.runtime.getURL('logo.svg'))
    .then(r=>r.text())
    .then(svg=>{
      const wrap=document.getElementById('logo-inline-wrap');
      if(!wrap)return;
      // Set size and id on the svg element
      const tmp=document.createElement('div');
      tmp.innerHTML=svg;
      const svgEl=tmp.querySelector('svg');
      if(svgEl){
        svgEl.id='logo-inline';
        svgEl.style.width='32px';
        svgEl.style.height='32px';
        // Color all fill elements with accent
        svgEl.querySelectorAll('path,rect,circle,polygon,ellipse').forEach(el=>{
          el.style.fill=STATE.theme.accentColor||'#2bdfb5';
          el.removeAttribute('fill');
        });
        wrap.appendChild(svgEl);
      }
    }).catch(()=>{
      // Fallback text if SVG fails
      const wrap=document.getElementById('logo-inline-wrap');
      if(wrap)wrap.innerHTML='<span style="font-size:13px;font-weight:700;color:var(--accent)">SD</span>';
    });
  startPolling();
  window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>applyTheme(STATE.theme,STATE.background,STATE.wallpapers));
}

// ── App Shell ──
function renderApp(){
  document.getElementById('app').innerHTML=`
    <div id="vela-bg" class="vela-bg"></div>
    <div id="vela-overlay" class="vela-bg-overlay"></div>
    <aside class="vela-sidebar" id="vela-sidebar">
      <div class="sidebar-resizer" id="sidebar-resizer"></div>
      <button class="sidebar-logo" id="sidebar-logo" title="Einstellungen" style="background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"><span id="logo-inline-wrap" style="width:32px;height:32px;display:flex;align-items:center;justify-content:center"></span></button>
      <div id="board-pills" style="display:flex;flex-direction:column;align-items:center;gap:6px;overflow-y:auto;max-height:calc(100vh - 160px);padding:4px 0;scrollbar-width:none;"></div>
      <div class="sidebar-spacer"></div>
      <button class="sidebar-btn" id="btn-add-board" title="Board hinzufügen">${ICONS.folder}</button>
      <button class="sidebar-btn" id="btn-settings" title="Einstellungen">${ICONS.settings}</button>
    </aside>
    <main class="vela-main">
      <header class="vela-header">
        <span class="header-board-name" id="board-name"></span>
        <button class="edit-mode-btn" id="btn-edit-mode">${EDIT_MODE?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'}<span id="edit-label">${t('edit')}</span></button>
        <div id="gap-slider-wrap" style="display:none;align-items:center;gap:8px;padding:0 4px;margin-left:4px">
          <span style="font-size:11px;color:var(--text-tertiary);font-weight:500;white-space:nowrap">ABSTAND</span>
          <input type="range" class="vela-slider" id="gap-slider" min="6" max="48" step="2" value="16" style="width:110px"/>
          <span id="gap-value" style="font-size:12px;color:var(--text-secondary);min-width:30px;font-variant-numeric:tabular-nums;">16px</span>
        </div>
        <div class="header-spacer"></div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div id="ip-header-widget" style="display:none;align-items:center;gap:5px;"></div>
          <div id="weather-widget" style="display:flex;align-items:center;gap:5px;"></div>
          <div class="vela-clock" id="clock"></div>
        </div>
        <button class="search-trigger" id="search-trigger">${ICONS.search} Suche <span class="search-kbd">⌘K</span></button>
        <button class="btn-add-card" id="btn-add-card">${ICONS.plus} ${t('addCard').replace('+ ','')}</button>
      </header>
      <div class="vela-grid" id="card-grid"></div>
    </main>
    <div id="modal-root"></div>
    <div class="vela-toasts" id="toast-root"></div>`;
  applyTheme(STATE.theme,STATE.background,STATE.wallpapers);
  if(STATE.general?.sidebarWidth){
    const sb=document.getElementById('vela-sidebar');
    if(sb){sb.style.width=STATE.general.sidebarWidth+'px';document.documentElement.style.setProperty('--sidebar-w',STATE.general.sidebarWidth+'px')}
  }
  renderDynamic();
  bindStaticEvents();
  startClock();
  loadWeather();
  loadIPHeader();
  resolveAllIcons();
  initScrollLock();
  // Disable entrance animations if turned off
  if(STATE.general?.entranceAnim===false){
    document.querySelector('.vela-sidebar')?.style.setProperty('animation','none');
    document.querySelector('.vela-header')?.style.setProperty('animation','none');
  }
  // Fix header immediately on startup so it doesn't scroll with content
  requestAnimationFrame(()=>{
    const h=document.querySelector('.vela-header');
    const g=document.getElementById('card-grid');
    const vm=document.querySelector('.vela-main');
    const sb=document.getElementById('vela-sidebar');
    if(h && g && vm){
      const sbW=sb ? sb.offsetWidth : 60;
      h.style.position='fixed';
      h.style.top='0';
      h.style.left=sbW+'px';
      h.style.width='calc(100% - '+sbW+'px)';
      h.style.zIndex='100';
      g.style.marginTop=h.offsetHeight+'px';
      vm.style.overflow='auto';
    }
  });
}

function renderDynamic(){
  const board=STATE.boards[STATE.activeBoardId];if(!board)return;
  document.getElementById('board-name').textContent=board.name;
  renderBoardPills();
  renderGrid(board);
  const gap=board.layoutData.gap||16;
  const sl=document.getElementById('gap-slider');
  const gv=document.getElementById('gap-value');
  if(sl)sl.value=gap;
  if(gv)gv.textContent=gap+'px';
  updateUIStrings();
}

function updateUIStrings(){
  // Update all header/static UI strings based on current language
  const editLabel=document.getElementById('edit-label');
  if(editLabel)editLabel.textContent=EDIT_MODE?t('done'):t('edit');
  const addCardBtn=document.getElementById('btn-add-card');
  if(addCardBtn){
    const txt=addCardBtn.childNodes[addCardBtn.childNodes.length-1];
    if(txt&&txt.nodeType===3)txt.textContent=' '+t('addCard').replace('+ ','');
  }
  const searchTrigger=document.getElementById('search-trigger');
  if(searchTrigger){
    const kbd=searchTrigger.querySelector('.search-kbd');
    searchTrigger.childNodes[0].textContent=t('search')+' ';
    if(kbd)searchTrigger.appendChild(kbd);
  }
  // Einstellungs-Titel direkt per ID des Close-Buttons navigieren
  const settClose=document.getElementById('sett-close');
  if(settClose){
    const modalTitle=settClose.closest('.vela-modal')?.querySelector('.modal-title');
    if(modalTitle)modalTitle.textContent=t('settingsTitle');
  }
}

// ── Board Pills ──
function renderBoardPills(){
  const c=document.getElementById('board-pills');if(!c)return;
  c.innerHTML=Object.values(STATE.boards).map(b=>{
    const active=b.id===STATE.activeBoardId;
    const icon=b.iconDataUrl
      ?`<img src="${b.iconDataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:8px"/>`
      :`<span style="font-size:11px;font-weight:700;color:${active?'var(--accent-light)':'var(--text-tertiary)'};">${esc(b.name).slice(0,2).toUpperCase()}</span>`;
    const showLabel=b.showLabel!==false;
    const sbW=parseInt(document.documentElement.style.getPropertyValue('--sidebar-w'))||60;
    const scale=Math.max(1,Math.min(1.6,(sbW-52)/100+1));
    const pillW=Math.round(52*scale), icoW=Math.round(30*scale), icoFontSz=Math.round(11*scale), labelFontSz=Math.round(9*scale);
    return`<div class="bpill board-pill-btn ${active?'bpill-active':''}" data-bid="${b.id}"
        style="position:relative;width:${pillW}px;border-radius:13px;padding:${showLabel?'7px 4px 5px':'8px 4px'};
          background:${active?'color-mix(in srgb, var(--accent) 20%, transparent)':'rgba(255,255,255,0.05)'};
          border:1.5px solid ${active?'var(--accent)':'rgba(255,255,255,0.08)'};
          display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;
          transition:all 0.15s ease;flex-shrink:0;">
      <div style="width:${icoW}px;height:${icoW}px;border-radius:9px;background:rgba(255,255,255,0.07);
          display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:${icoFontSz}px;">${icon}</div>
      ${showLabel?`<div style="font-size:${labelFontSz}px;font-weight:500;color:${active?'var(--accent-light)':'var(--text-tertiary)'};text-align:center;max-width:${pillW-4}px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px">${esc(b.name)}</div>`:''}
      <input type="file" id="bpic-${b.id}" accept="image/*" style="display:none"/>
      <div class="bpill-edit" data-bedit-pill="${b.id}"
          style="position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:4px;
            background:rgba(0,0,0,0.65);display:none;align-items:center;justify-content:center;cursor:pointer;"
          title="Board bearbeiten">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" style="width:8px;height:8px"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </div>
      <!-- Drop zone shown while dragging a card -->
      <div class="bpill-drop" data-drop-to="${b.id}"
          style="position:absolute;inset:0;border-radius:12px;display:none;align-items:center;
            justify-content:center;background:color-mix(in srgb, var(--accent) 40%, transparent);border:2px dashed var(--accent);z-index:10;">
        <svg viewBox="0 0 24 24" fill="white" style="width:14px;height:14px"><path d="M12 5v14M5 12l7-7 7 7"/></svg>
      </div>
    </div>`;
  }).join('');

  c.querySelectorAll('[data-bid]').forEach(el=>{
    el.addEventListener('click',e=>{
      if(e.target.closest('[data-bedit-pill]')||e.target.closest('input'))return;
      STATE.activeBoardId=el.dataset.bid;
      // Save silently without triggering sync nudge
      STATE.updatedAt=Date.now();
      browser.storage.local.set({[STORE_KEY]:STATE}).catch(()=>{});
      renderDynamic();
    });
    el.addEventListener('mouseenter',()=>{if(!EDIT_MODE)return;const b=el.querySelector('.bpill-edit');if(b)b.style.display='flex'});
    el.addEventListener('mouseleave',()=>{const b=el.querySelector('.bpill-edit');if(b)b.style.display='none'});
  });
  c.querySelectorAll('[data-bedit-pill]').forEach(btn=>{
    btn.addEventListener('click',e=>{e.stopPropagation();openBoardEdit(btn.dataset.beditPill)});
  });
  // Drop zones for drag-to-board
  c.querySelectorAll('[data-drop-to]').forEach(dz=>{
    dz.addEventListener('dragover',e=>{e.preventDefault();e.stopPropagation()});
    dz.addEventListener('drop',e=>{
      e.preventDefault();e.stopPropagation();
      const cardId=e.dataTransfer.getData('text/plain');
      const toBid=dz.dataset.dropTo;
      if(cardId&&toBid)moveCardToBoard(cardId,toBid);
    });
  });
}

function moveCardToBoard(cardId,toBid){
  const src=Object.values(STATE.boards).find(b=>b.cardIds.includes(cardId));
  const dst=STATE.boards[toBid];
  if(!src||!dst||src.id===toBid)return;
  src.cardIds=src.cardIds.filter(x=>x!==cardId);
  if(!dst.cardIds.includes(cardId))dst.cardIds.push(cardId);
  saveConfig(STATE);renderDynamic();
  showToast(t('toastCardMoved'),'success');
}

// ── Grid ──
// Cards use CSS grid-column/grid-row to position freely.
// Position stored as {col,row} in STATE.cards[id].gridPos
// On first load, positions are auto-assigned left→right, top→bottom.
// Hard maximums — grid can grow via expandZone but not beyond these.
const GRID_COLS_MAX = 40;
const GRID_ROWS_MAX = 80;
const GRID_COLS_DEFAULT = 20;
const GRID_ROWS_DEFAULT = 40;

// Per-board dynamic size helpers.
function getBoardCols(board){ return Math.min(GRID_COLS_MAX,(board&&board.gridCols)||GRID_COLS_DEFAULT); }
function getBoardRows(board){ return Math.min(GRID_ROWS_MAX,(board&&board.gridRows)||GRID_ROWS_DEFAULT); }

// GRID_COLS() / GRID_ROWS() — always return the active board's current grid size.
// Replace the old hard-coded constants everywhere in drag/collision logic.
function GRID_COLS(){ const b=STATE&&STATE.boards&&STATE.boards[STATE.activeBoardId]; return getBoardCols(b); }
function GRID_ROWS(){ const b=STATE&&STATE.boards&&STATE.boards[STATE.activeBoardId]; return getBoardRows(b); }

function getGridCols(grid){
  return GRID_COLS();
}

function getUsedGridSize(board){
  let maxCol=1, maxRow=1;
  board?.cardIds?.forEach(cid=>{
    const p=STATE.cards[cid]?.gridPos;
    if(p){maxCol=Math.max(maxCol,p.col);maxRow=Math.max(maxRow,p.row);}
  });
  Object.values(STATE.widgets?.items||{}).forEach(ww=>{
    if(ww.boardId!==board?.id||!ww.gridPos)return;
    maxCol=Math.max(maxCol,ww.gridPos.col+(ww.colSpan||1)-1);
    maxRow=Math.max(maxRow,ww.gridPos.row+(ww.rowSpan||1)-1);
  });
  // Buffer: 2 extra cols+rows so there is always free space to place new items
  return{cols:Math.min(GRID_COLS(),maxCol+2), rows:Math.min(GRID_ROWS(),maxRow+2)};
}


function findFreeCell(colSpan,rowSpan){
  // Build full occupied set from cards + widgets on active board
  const board=STATE.boards[STATE.activeBoardId];if(!board)return{col:1,row:1};
  const grid=document.getElementById('card-grid');
  const cols=grid?getGridCols(grid):GRID_COLS();
  const rows=GRID_ROWS();
  const occ=new Set();
  board.cardIds.forEach(cid=>{const p=STATE.cards[cid]?.gridPos;if(p)occ.add(p.col+','+p.row);});
  Object.values(STATE.widgets?.items||{}).forEach(ww=>{
    if(!ww.gridPos||ww.boardId!==board.id)return;
    for(let dc=0;dc<(ww.colSpan||1);dc++)
      for(let dr=0;dr<(ww.rowSpan||1);dr++)
        occ.add((ww.gridPos.col+dc)+','+(ww.gridPos.row+dr));
  });
  // Scan row by row for a free block that fits colSpan x rowSpan
  outer: for(let r=1;r<=rows;r++){
    for(let c=1;c<=cols;c++){
      for(let dc=0;dc<colSpan;dc++)
        for(let dr=0;dr<rowSpan;dr++)
          if(occ.has((c+dc)+','+(r+dr)))continue outer;
      return{col:c,row:r};
    }
  }
  return{col:1,row:rows+1}; // fallback: new row at bottom
}

function autoAssignPositions(board){
  const grid=document.getElementById('card-grid');
  const cols=grid?getGridCols(grid):GRID_COLS();
  let changed=false;

  // Build occupied cells for all widgets (respecting spans)
  // Process widgets in order — later widgets get pushed away from earlier ones
  function buildAllOccupied(excludeWidgetId){
    const occ=new Set();
    // All cards with positions
    board.cardIds.forEach(cid=>{
      const p=STATE.cards[cid]?.gridPos;
      if(p)occ.add(p.col+','+p.row);
    });
    // All widget spans
    Object.values(STATE.widgets?.items||{}).forEach(ww=>{
      if(!ww.gridPos||ww.boardId!==board.id||ww.id===excludeWidgetId)return;
      for(let dc=0;dc<(ww.colSpan||1);dc++)
        for(let dr=0;dr<(ww.rowSpan||1);dr++)
          occ.add((ww.gridPos.col+dc)+','+(ww.gridPos.row+dr));
    });
    return occ;
  }

  // Step 0: Deduplicate — if two cards share the same gridPos, clear the later one
  const seenCardCells=new Set();
  board.cardIds.forEach(cid=>{
    const card=STATE.cards[cid];if(!card?.gridPos)return;
    const key=card.gridPos.col+','+card.gridPos.row;
    if(seenCardCells.has(key)){delete card.gridPos;changed=true;}
    else seenCardCells.add(key);
  });

  // Step 1: Fix widget-on-widget overlaps
  // Process widgets sorted by createdAt so older ones keep their position
  const boardWidgets=Object.values(STATE.widgets?.items||{})
    .filter(ww=>ww.boardId===board.id)
    .sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));

  const claimedCells=new Set();
  boardWidgets.forEach(ww=>{
    if(!ww.gridPos)return;
    // Check if any cell this widget wants is already claimed by a previous widget
    let conflict=false;
    for(let dc=0;dc<(ww.colSpan||1)&&!conflict;dc++)
      for(let dr=0;dr<(ww.rowSpan||1)&&!conflict;dr++)
        if(claimedCells.has((ww.gridPos.col+dc)+','+(ww.gridPos.row+dr)))
          conflict=true;

    if(conflict){
      // Find a free position for this widget
      const occ=new Set(claimedCells);
      board.cardIds.forEach(cid=>{
        const p=STATE.cards[cid]?.gridPos;
        if(p)occ.add(p.col+','+p.row);
      });
      let placed=false;
      for(let r=1;r<=GRID_ROWS()&&!placed;r++){
        for(let c=1;c<=cols&&!placed;c++){
          let fits=true;
          for(let dc=0;dc<(ww.colSpan||1)&&fits;dc++)
            for(let dr=0;dr<(ww.rowSpan||1)&&fits;dr++)
              if(occ.has((c+dc)+','+(r+dr)))fits=false;
          if(fits){
            ww.gridPos={col:c,row:r};
            placed=true;
            changed=true;
          }
        }
      }
    }
    // Claim cells for this widget
    for(let dc=0;dc<(ww.colSpan||1);dc++)
      for(let dr=0;dr<(ww.rowSpan||1);dr++)
        claimedCells.add((ww.gridPos.col+dc)+','+(ww.gridPos.row+dr));
  });

  // Step 2: Reset cards that overlap any widget cell
  board.cardIds.forEach(cid=>{
    const card=STATE.cards[cid];if(!card?.gridPos)return;
    if(claimedCells.has(card.gridPos.col+','+card.gridPos.row)){
      delete card.gridPos;
      changed=true;
    }
  });

  // Step 3: Assign free positions to cards that have none
  board.cardIds.forEach(cid=>{
    const card=STATE.cards[cid];if(!card||card.gridPos)return;
    const occ=new Set(claimedCells);
    board.cardIds.forEach(cid2=>{
      if(cid2===cid)return;
      const p=STATE.cards[cid2]?.gridPos;
      if(p)occ.add(p.col+','+p.row);
    });
    for(let r=1;r<=GRID_ROWS();r++){
      for(let c=1;c<=cols;c++){
        if(!occ.has(c+','+r)){card.gridPos={col:c,row:r};changed=true;break;}
      }
      if(card.gridPos)break;
    }
  });

  return changed;
}

function renderGrid(board){
  const grid=document.getElementById('card-grid');if(!grid)return;
  const gap=board.layoutData.gap||16;
  grid.style.setProperty('--gap-grid',gap+'px');
  grid.dataset.cardSize=board.layoutData.cardSize||'medium';
  grid.dataset.density=board.layoutData.density||'normal';
  grid.classList.toggle('edit-active',EDIT_MODE);
  // Use auto-fill so all columns stay equal width (no stretching into empty space).
  const {rows:usedRows,cols:usedCols}=getUsedGridSize(board);
  const cardSize=board.layoutData.cardSize||'medium';
  const colW=({small:160,medium:200,large:260})[cardSize]||200;
  const rowH=({small:90,medium:100,large:120})[cardSize]||100;
  grid.style.setProperty('--card-col-w',colW+'px');
  grid.style.setProperty('--card-row-h',rowH+'px');
  // Dot grid: pixel-perfect cell-corner alignment.
  // gap/colW/rowH are known JS values — no computed style needed.
  // Tile = one cell + one gap. Position = grid padding so dot[0,0] = first card corner.
  // Dot grid on vela-main with background-attachment:local.
  // vela-main is the scroll container so local attachment scrolls dots with content.
  // Offset = sidebar(60) + grid-padding(28) horizontally, header(56+marginTop) + grid-padding(24) vertically.
  // Dot grid removed.
  const velaMainDot = document.querySelector('.vela-main');
  if(velaMainDot){
    velaMainDot.style.backgroundImage='';
    velaMainDot.style.backgroundSize='';
    velaMainDot.style.backgroundPosition='';
    velaMainDot.style.backgroundAttachment='';
  }
  grid.style.backgroundImage='';
  grid.style.backgroundSize='';
  grid.style.backgroundPosition='';
  grid.style.backgroundAttachment='';
  // In edit mode: always render the full GRID_COLS()×GRID_ROWS() grid explicitly.
  // This ensures every cell has the correct size for drag positioning — without this,
  // cells beyond usedCols/usedRows become CSS implicit tracks with wrong dimensions.
  // Outside edit mode: render only used area for a compact layout.
  // Always render full board grid so all columns/rows are reachable by scrolling.
  const renderCols = GRID_COLS();
  const renderRows = GRID_ROWS();
  grid.style.gridTemplateColumns=`repeat(${renderCols},${colW}px)`;
  grid.style.gridTemplateRows=`repeat(${renderRows},${rowH}px)`;
  // Always set minWidth/minHeight based on board size so vela-main can scroll to all content.
  const padL=28,padR=28,padT=24,padB=40;
  const EZ = EDIT_MODE ? 48 : 0;
  grid.style.minWidth =(padL + GRID_COLS()*colW + Math.max(0,GRID_COLS()-1)*gap + padR + EZ)+'px';
  grid.style.minHeight=(padT + GRID_ROWS()*rowH + Math.max(0,GRID_ROWS()-1)*gap + padB + EZ)+'px';

  const boardWidgetCount=Object.values(STATE.widgets?.items||{}).filter(w=>w.boardId===board.id).length;
  if(!board.cardIds.length && !boardWidgetCount){
    grid.innerHTML=`<div class="vela-empty">${ICONS.link}<h3>Noch keine Links</h3><p>Klick auf „+ Karte" um loszulegen.</p></div>`;
    return;
  }

  // Auto-assign grid positions if missing
  if(autoAssignPositions(board))saveConfig(STATE);

  const cardHtml=board.cardIds.map((cid,i)=>{
    const card=STATE.cards[cid];if(!card)return'';
    return buildCardHTML(card,i,board);
  }).join('');
  const widgetHtml=Object.values(STATE.widgets?.items||{})
    .filter(w=>w.boardId===board.id)
    .map((w,i)=>buildWidgetHTML(w,i)).join('');
  // Invisible spacer at the last cell forces the scroll area to match the workspace.
  // In edit mode: use full grid dimensions so every cell is reachable by scrolling.
  const spacerCol = GRID_COLS();
  const spacerRow = GRID_ROWS();
  const spacerHtml=`<div style="grid-column:${spacerCol};grid-row:${spacerRow};width:${colW}px;height:${rowH}px;pointer-events:none;visibility:hidden;" aria-hidden="true"></div>`;
  grid.innerHTML=cardHtml+widgetHtml+spacerHtml;
  applyGridPositions(board);
  applyWidgetPositions();
  grid.querySelectorAll('.vela-card').forEach(el=>bindCardEvents(el));
  grid.querySelectorAll('.vela-widget').forEach(el=>bindWidgetEvents(el));
  // Hide broken favicons without inline onerror
  grid.querySelectorAll('img.fav-img').forEach(img=>img.addEventListener('error',()=>{img.style.display='none';}));
  // Auto-load history widgets
  Object.values(STATE.widgets?.items||{}).forEach(w=>{
    if(w.type==='history'&&(!w.data.items||w.data.items.length===0))loadHistoryWidget(w.id);
  });
  setupDragDrop(board.id);
  // Permanent expand zones visible throughout edit mode (not just during a drag).
  if(EDIT_MODE) buildStaticExpandZones(board, colW, rowH, gap);
}

function applyGridPositions(board){
  board.cardIds.forEach(cid=>{
    const card=STATE.cards[cid];if(!card||!card.gridPos)return;
    const el=document.querySelector(`.vela-card[data-card-id="${cid}"]`);
    if(el){el.style.gridColumn=card.gridPos.col;el.style.gridRow=card.gridPos.row;}
  });
}

// ── Static expand zones (permanent in edit mode) ──
// These live outside setupDragDrop so they're always visible — not just during a drag.
// When the user drags into the +strip, the drag system's own growCols/growRows takes over.
// The static zones handle the drop independently for the same grow-and-save logic.
function buildStaticExpandZones(board, colW, rowH, gap){
  // Cleanup old buttons + listeners
  document.querySelectorAll('.sd-static-ez').forEach(el=>{ if(el._cleanup) el._cleanup(); el.remove(); });
  if(window._sdEzDragover){ document.removeEventListener('dragover', window._sdEzDragover); window._sdEzDragover=null; }
  if(window._sdEzDragend){  document.removeEventListener('dragend',  window._sdEzDragend);  window._sdEzDragend=null;  }

  const grid = document.getElementById('card-grid');
  if(!grid) return;

  // Button factory
  function mkBtn(icon, label, title, onClick){
    const b = document.createElement('button');
    b.className = 'sd-static-ez edit-mode-btn';
    b.title = title;
    b.style.cssText = 'position:fixed;z-index:9999;pointer-events:auto;display:flex;align-items:center;gap:6px;padding:0 12px;height:36px;white-space:nowrap;transition:none!important;';
    b.innerHTML = '<span style="font-size:14px;line-height:1;pointer-events:none">' + icon + '</span><span style="pointer-events:none;font-size:12px;font-weight:500">' + label + '</span>';
    b.addEventListener('click', onClick);
    return b;
  }

  // Grow/shrink logic
  function minUsedCols(){
    const b2=STATE.boards[STATE.activeBoardId]; if(!b2) return 1;
    let m=1;
    (b2.cardIds||[]).forEach(cid=>{ const p=STATE.cards[cid]?.gridPos; if(p) m=Math.max(m,p.col); });
    Object.values(STATE.widgets?.items||{}).forEach(w=>{ if(w.boardId===b2.id&&w.gridPos) m=Math.max(m,w.gridPos.col+(w.colSpan||1)-1); });
    return m;
  }
  function minUsedRows(){
    const b2=STATE.boards[STATE.activeBoardId]; if(!b2) return 1;
    let m=1;
    (b2.cardIds||[]).forEach(cid=>{ const p=STATE.cards[cid]?.gridPos; if(p) m=Math.max(m,p.row); });
    Object.values(STATE.widgets?.items||{}).forEach(w=>{ if(w.boardId===b2.id&&w.gridPos) m=Math.max(m,w.gridPos.row+(w.rowSpan||1)-1); });
    return m;
  }
  function _removeEzBtns(){ document.querySelectorAll('.sd-static-ez').forEach(el=>{ if(el._cleanup) el._cleanup(); el.remove(); }); }
  function growCols(){   const n=Math.min(GRID_COLS_MAX,(board.gridCols||GRID_COLS_DEFAULT)+1); if(n===(board.gridCols||GRID_COLS_DEFAULT))return; board.gridCols=n; saveConfig(STATE); _removeEzBtns(); renderDynamic(); }
  function shrinkCols(){ const n=Math.max(minUsedCols(),(board.gridCols||GRID_COLS_DEFAULT)-1); if(n===(board.gridCols||GRID_COLS_DEFAULT))return; board.gridCols=n; saveConfig(STATE); _removeEzBtns(); renderDynamic(); }
  function growRows(){   const n=Math.min(GRID_ROWS_MAX,(board.gridRows||GRID_ROWS_DEFAULT)+1); if(n===(board.gridRows||GRID_ROWS_DEFAULT))return; board.gridRows=n; saveConfig(STATE); _removeEzBtns(); renderDynamic(); }
  function shrinkRows(){ const n=Math.max(minUsedRows(),(board.gridRows||GRID_ROWS_DEFAULT)-1); if(n===(board.gridRows||GRID_ROWS_DEFAULT))return; board.gridRows=n; saveConfig(STATE); _removeEzBtns(); renderDynamic(); }

  // ── Right side: + Spalte and − Spalte, rotated, anchored to right+center ──
  const btnRplus  = mkBtn('+', 'Spalte', 'Spalte hinzufügen', growCols);
  const btnRminus = mkBtn('−', 'Spalte', 'Spalte entfernen',  shrinkCols);

  // Rotate and anchor using CSS only — no JS coordinate math needed.
  // translateY(-50%) centers each button, translateX offset separates them.
  // Spalten-Buttons: rotiert, rechts am Rand, sauber übereinander
  // Jeder Button ist ~90px breit → nach Rotation ~90px hoch
  // Abstand: 8px zwischen den beiden
  const rotBase = 'position:fixed;z-index:9999;pointer-events:auto;' +
    'display:flex;align-items:center;gap:6px;padding:0 12px;height:36px;white-space:nowrap;transition:none!important;';
  btnRplus.style.cssText  = rotBase + 'right:6px;top:-9999px;transform:rotate(-90deg);';
  btnRminus.style.cssText = rotBase + 'right:6px;top:-9999px;transform:rotate(-90deg);';

  const btnBplus  = mkBtn('+', 'Zeile', 'Zeile hinzufügen', growRows);
  const btnBminus = mkBtn('−', 'Zeile', 'Zeile entfernen',  shrinkRows);

  const botBase = 'position:fixed;z-index:9999;pointer-events:auto;' +
    'display:flex;align-items:center;gap:6px;padding:0 12px;height:36px;white-space:nowrap;bottom:8px;transition:none!important;';
  btnBplus.style.cssText  = botBase + 'left:-9999px;';
  btnBminus.style.cssText = botBase + 'left:-9999px;';

  // Drag support
  let _hRp=false,_hBp=false,_gRp=false,_gBp=false;
  function _onDragover(e){
    if(!e.clientX&&!e.clientY) return;
    const rRp=btnRplus.getBoundingClientRect(), rBp=btnBplus.getBoundingClientRect();
    const inRp=e.clientX>=rRp.left&&e.clientX<=rRp.right&&e.clientY>=rRp.top&&e.clientY<=rRp.bottom;
    const inBp=e.clientX>=rBp.left&&e.clientX<=rBp.right&&e.clientY>=rBp.top&&e.clientY<=rBp.bottom;
    if(inRp!==_hRp){_hRp=inRp; if(inRp&&!_gRp){_gRp=true;growCols();}}
    if(inBp!==_hBp){_hBp=inBp; if(inBp&&!_gBp){_gBp=true;growRows();}}
    if(inRp||inBp) e.preventDefault();
  }
  function _onDragend(){ _gRp=false;_gBp=false;_hRp=false;_hBp=false; }
  window._sdEzDragover=_onDragover; window._sdEzDragend=_onDragend;
  document.addEventListener('dragover',_onDragover);
  document.addEventListener('dragend', _onDragend);
  btnRplus._cleanup=()=>{
    document.removeEventListener('dragover',_onDragover);
    document.removeEventListener('dragend',_onDragend);
    window._sdEzDragover=null; window._sdEzDragend=null;
  };

  document.body.appendChild(btnRplus);
  document.body.appendChild(btnRminus);
  document.body.appendChild(btnBplus);
  document.body.appendChild(btnBminus);

  const GAP  = 4;
  const midY = window.innerHeight / 2;
  const midX = window.innerWidth  / 2;

  // All positioning in one RAF — buttons start offscreen, appear instantly in correct place
  requestAnimationFrame(()=>{
    const wP  = btnBplus.offsetWidth;
    const wM  = btnBminus.offsetWidth;
    const visH = btnRplus.offsetWidth; // after rotate(-90deg), visual height = logical width
    btnBplus.style.left  = (midX - (wP + GAP + wM)/2) + 'px';
    btnBminus.style.left = (midX - (wP + GAP + wM)/2 + wP + GAP) + 'px';
    btnRplus.style.top   = (midY - visH - GAP/2) + 'px';
    btnRminus.style.top  = (midY + GAP/2) + 'px';
  });
}
function buildCardHTML(card,i,board){
  if(!board) board=STATE.boards[STATE.activeBoardId]||{};
  const dom=domain(card.url);
  const iconHtml=card.icon&&card.icon.resolvedUrl
    ?`<img src="${esc(card.icon.resolvedUrl)}" alt="" loading="lazy" data-fallback="hide"/>`
    :(card.icon&&card.icon.kind==='upload'?`<img src="${esc(card.icon.dataUrl)}" alt=""/>`
    :ICONS.globe);
  const gp=card.gridPos;
  return`<a class="vela-card${EDIT_MODE?' card-editing':''}" ${EDIT_MODE?'':`href="${esc(card.url)}"`}
      target="${card.openInNewTab?'_blank':'_self'}" rel="noopener noreferrer"
      data-card-id="${card.id}" draggable="true"
      style="animation-delay:${Math.min(i*45,400)}ms${card.accentColor?';--card-accent:'+card.accentColor:''};${gp?`grid-column:${gp.col};grid-row:${gp.row}`:''}">
    ${EDIT_MODE?`<div class="drag-handle" title="Verschieben">${ICONS.drag}</div>`:''}
    <div class="card-top">
      <div class="card-info">
        <div class="card-title" style="font-size:${board.layoutData.titleFontSize||14}px">${esc(card.title)}</div>
        ${card.subtitle?`<div class="card-subtitle">${esc(card.subtitle)}</div>`:''}
      </div>
      <div class="card-icon-wrap" data-icon-wrap="${card.id}">${iconHtml}</div>
    </div>
    <div class="card-domain">${esc(dom)}</div>
    <div class="card-actions">
      <button class="card-action-btn" data-action="edit" title="Bearbeiten">${ICONS.edit}</button>
      <button class="card-action-btn danger" data-action="delete" title="Löschen">${ICONS.trash}</button>
    </div>
  </a>`;
}

function bindCardEvents(el){
  el.querySelectorAll('.card-action-btn').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();e.stopPropagation();
    const id=el.dataset.cardId;
    if(btn.dataset.action==='edit')openCardEdit(id);
    else if(btn.dataset.action==='delete'){
      showConfirm(t('confirmDeleteCard'),()=>{
        const board=STATE.boards[STATE.activeBoardId];
        if(board)board.cardIds=board.cardIds.filter(x=>x!==id);
        delete STATE.cards[id];
        saveConfig(STATE);renderDynamic();showToast(t('toastCardDeleted'));
      });
    }
  }));
}


// ══════════════════════════════════════════════════════


function openAddWidget(){

  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="vela-overlay" id="wtype-bg">
    <div class="vela-modal" style="max-width:480px">
      <div class="modal-header"><span class="modal-title">${t('widgetAddTitle')}</span><button class="modal-close" id="wtype-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${[
            {type:'note',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',label:t('widgetNote'),desc:t('widgetNoteDesc')},
            {type:'rss',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><path d="M4 11a9 9 0 019 9"/><path d="M4 4a16 16 0 0116 16"/><circle cx="5" cy="19" r="1" fill="currentColor"/></svg>',label:t('widgetRSS'),desc:t('widgetRSSDesc')},
            {type:'history',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',label:t('widgetHistory'),desc:t('widgetHistoryDesc')},
            {type:'calendar',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',label:t('widgetCalendar'),desc:t('widgetCalendarDesc')},
            {type:'iframe',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><circle cx="5" cy="5.5" r="1" fill="currentColor"/><circle cx="8.5" cy="5.5" r="1" fill="currentColor"/></svg>',label:t('widgetIframe'),desc:t('widgetIframeDesc')},
            {type:'qrcode',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none"/><rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none"/><rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none"/><line x1="14" y1="14" x2="14" y2="17"/><line x1="14" y1="20" x2="14" y2="21"/><line x1="17" y1="14" x2="21" y2="14"/><line x1="21" y1="17" x2="21" y2="21"/><line x1="17" y1="21" x2="21" y2="21"/></svg>',label:t('widgetQR'),desc:t('widgetQRDesc')},
            {type:'password',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>',label:t('widgetPassword'),desc:t('widgetPasswordDesc')},
            {type:'football',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 010 20M2 12h20M12 2c-2.5 2.5-4 6-4 10s1.5 7.5 4 10M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10"/></svg>',label:t('widgetFootball'),desc:t('widgetFootballDesc')},
            {type:'weather5',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',label:t('widgetWeather'),desc:t('widgetWeatherDesc')},
            {type:'crypto',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',label:t('widgetCrypto'),desc:t('widgetCryptoDesc')},
            {type:'speedtest',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/><path d="M12 12l-2-3"/><path d="M12 7v1"/><path d="M7 12H6"/><path d="M18 12h-1"/><path d="M8.5 8.5l-.7-.7"/><path d="M15.5 8.5l.7-.7"/></svg>',label:t('widgetSpeed'),desc:t('widgetSpeedDesc')},
            {type:'todo',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',label:t('widgetTodo'),desc:t('widgetTodoDesc')},
            {type:'pomodoro',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',label:t('widgetPomodoro'),desc:t('widgetPomodoroDesc')},
            {type:'game2048',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:28px;height:28px"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',label:t('widget2048'),desc:t('widget2048Desc')},
          ].map(w=>`
            <button data-wtype="${w.type}" style="padding:20px;border-radius:var(--radius-lg);border:1px solid var(--glass-border);background:var(--glass-bg);cursor:pointer;text-align:left;transition:background .15s,border-color .15s;display:flex;flex-direction:column;gap:10px"
              class="widget-type-btn">
              <div style="color:var(--accent)">${w.icon}</div>
              <div><div style="font-size:13px;font-weight:600;color:var(--text-primary)">${w.label}</div>
              <div style="font-size:11px;color:var(--text-secondary);margin-top:2px">${w.desc}</div></div>
            </button>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('wtype-close').addEventListener('click',close);
  document.getElementById('wtype-bg').addEventListener('click',e=>{if(e.target.id==='wtype-bg')close()});
  wrap.querySelectorAll('[data-wtype]').forEach(btn=>btn.addEventListener('click',()=>{
    close();
    createWidget(btn.dataset.wtype);
  }));
}

function createWidget(type){
  const id=uid();
  const boardId=STATE.activeBoardId;
  const board=STATE.boards[boardId];
  if(!board)return;
  const widget={
    id, type, boardId,
    title:({note:t('widgetNote'),rss:t('widgetRSS'),history:t('widgetHistory'),calendar:t('widgetCalendar'),iframe:'iFrame',qrcode:t('widgetQR'),password:t('widgetPassword'),football:t('widgetFootball'),weather5:t('widgetWeather'),crypto:t('widgetCrypto'),myip:t('widgetIP'),speedtest:t('widgetSpeed'),game2048:t('widget2048'),todo:t('widgetTodo'),pomodoro:t('widgetPomodoro')})[type]||type,
    colSpan:({iframe:2,qrcode:1,password:2,football:2,weather5:2,crypto:2,myip:2,speedtest:2,game2048:1,todo:2,pomodoro:1})[type]||2,
    rowSpan:({iframe:2,qrcode:2,password:1,football:2,weather5:2,crypto:2,myip:2,speedtest:2,game2048:2,todo:2,pomodoro:2})[type]||2,
    gridPos:{col:1,row:1},
    data:{},
    createdAt:Date.now(),updatedAt:Date.now()
  };
  if(!STATE.widgets.items)STATE.widgets.items={};
  // Auto-assign position using findFreeCell
  widget.gridPos=findFreeCell(widget.colSpan||1,widget.rowSpan||1);
  STATE.widgets.items[id]=widget;
  saveConfig(STATE);renderDynamic();
  openWidgetEdit(id);
}

function buildWidgetHTML(w,i){
  const inner=renderWidgetContent(w,w.colSpan||2,w.rowSpan||2);
  const wcs=Math.min(5,Math.max(1,w.colSpan||2));
  const wrs=Math.min(5,Math.max(1,w.rowSpan||2));
  const wgc=w.gridPos?.col||1;
  const wgr=w.gridPos?.row||1;
  const narrow=wcs===1;
  const tiny=wcs===1&&wrs===1;
  return`<div class="vela-widget vela-card${EDIT_MODE?' card-editing':''}" data-widget-id="${w.id}"
    style="animation-delay:${i*35}ms;grid-column:${wgc} / span ${wcs};grid-row:${wgr} / span ${wrs};${tiny?'padding:8px 9px 6px;':''}${narrow&&!tiny?'padding:10px 10px 8px;':''}" draggable="${EDIT_MODE}">
    ${EDIT_MODE?`<div class="drag-handle" title="Verschieben" style="z-index:3">${ICONS.drag}</div>`:''}
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:${tiny?'4px':narrow?'5px':'8px'};flex-shrink:0">
      <span style="font-size:${tiny?'8px':narrow?'9px':'11px'};font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.06em;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(w.title)}</span>
    </div>
    <div class="widget-scroll-body" style="flex:1;overflow-x:hidden;overflow-y:auto;min-height:0;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent">${inner}</div>
    ${EDIT_MODE?`
    <div class="card-actions" style="opacity:1;transform:none;position:absolute;bottom:8px;right:44px;display:flex;gap:4px">
      <button class="card-action-btn" data-waction="edit" title="Bearbeiten">${ICONS.edit}</button>
      <button class="card-action-btn danger" data-waction="delete" title="Löschen">${ICONS.trash}</button>
    </div>
    <div class="w-rh" data-corner="se" data-wid="${w.id}" style="position:absolute;bottom:0;right:0;width:36px;height:36px;cursor:se-resize;z-index:10;opacity:.35;display:flex;align-items:flex-end;justify-content:flex-end;padding:4px" title="Größe ändern">
      <svg viewBox="0 0 14 14" style="width:14px;height:14px;color:var(--accent)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="14" y1="5" x2="5" y2="14"/><line x1="14" y1="10" x2="10" y2="14"/></svg>
    </div>`:''}
  </div>`;
}

function renderWidgetContent(w,cols,rows){
  cols=cols||2; rows=rows||2;
  const narrow=cols===1;   // single column
  const short=rows===1;    // single row
  const tiny=narrow&&rows<=2;
  const fs=narrow?'11px':'12px';     // font-size adaptive
  const gap=narrow?'4px 0':'7px 0';  // row gap adaptive
  if(w.type==='todo'){
    const todos=w.data.todos||[];
    const done=todos.filter(t=>t.done).length;
    return`<div style="display:flex;flex-direction:column;height:100%;gap:0">
      <div style="flex:1;overflow-y:auto;scrollbar-width:thin">
        ${todos.length===0?`<div style="font-size:12px;color:var(--text-tertiary);text-align:center;padding:20px 0">${t('wNoTasks')}</div>`:''}
        ${[...todos.map((td,i)=>({...td,_i:i}))].sort((a,b)=>a.done===b.done?0:a.done?1:-1).map(td=>{const i=td._i;return`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05)">
          <button data-todo-toggle="${i}" data-wid="${w.id}" style="flex-shrink:0;width:18px;height:18px;border-radius:50%;border:1.5px solid ${td.done?'var(--accent)':'rgba(255,255,255,.3)'};background:${td.done?'var(--accent)':'transparent'};cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">
            ${td.done?`<svg viewBox="0 0 10 10" fill="none" stroke="var(--btn-text)" stroke-width="2" style="width:8px;height:8px"><polyline points="1.5 5 4 7.5 8.5 2"/></svg>`:''}
          </button>
          <span data-todo-text="${i}" data-wid="${w.id}" style="flex:1;font-size:${fs};color:${td.done?'var(--text-tertiary)':'var(--text-primary)'};text-decoration:${td.done?'line-through':'none'};line-height:1.4;cursor:text;word-break:break-word">${esc(td.text)}</span>
          <button data-todo-del="${i}" data-wid="${w.id}" style="flex-shrink:0;background:none;border:none;color:rgba(255,255,255,.25);cursor:pointer;font-size:14px;padding:0 2px;line-height:1">×</button>
        </div>`}).join('')}
      </div>
      <div style="display:flex;gap:4px;padding-top:6px;border-top:1px solid rgba(255,255,255,.08);flex-shrink:0">
        <input data-todo-input data-wid="${w.id}" placeholder="${narrow?'...':t('wTaskPlaceholder')}" style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:7px;padding:${narrow?'4px 6px':'6px 10px'};color:var(--text-primary);font-size:${fs};font-family:var(--font-sans);outline:none;min-width:0"/>
        <button data-todo-add data-wid="${w.id}" style="background:var(--accent);border:none;border-radius:7px;padding:${narrow?'4px 7px':'6px 10px'};color:var(--btn-text);font-size:${narrow?'14px':'12px'};cursor:pointer;font-weight:600;flex-shrink:0">+</button>
      </div>
      ${done>0?`<div style="font-size:10px;color:var(--text-tertiary);text-align:right;padding-top:3px">${done}/${todos.length} erledigt</div>`:''}
    </div>`;
  }
  if(w.type==='pomodoro'){
    const phase=w.data.phase||'work';
    const running=w.data.running||false;
    const elapsed=w.data.elapsed||0;
    const workMins=w.data.workMins||25;
    const breakMins=w.data.breakMins||5;
    const totalSecs=(phase==='work'?workMins:(phase==='longbreak'?15:breakMins))*60;
    const remaining=Math.max(0,totalSecs-elapsed);
    const mins=String(Math.floor(remaining/60)).padStart(2,'0');
    const secs=String(remaining%60).padStart(2,'0');
    const pct=Math.min(100,Math.round((elapsed/totalSecs)*100));
    const phaseColor=phase==='work'?'var(--accent)':phase==='break'?'#4ade80':'#60a5fa';
    const phaseLabel=phase==='work'?t('wFocusPhase'):phase==='break'?t('wBreakPhase'):t('wLongBreakPhase');
    const sessions=w.data.sessions||0;
    const circleSize=narrow?64:90;
    const timeFontSize=narrow?'16px':'22px';
    const btnPad=narrow?'5px 8px':'6px 14px';
    const showPhaseButtons=rows>=2;
    const showSessions=sessions>0&&rows>=3;
    return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:${narrow?'6px':'10px'}">
      <div style="font-size:10px;font-weight:600;letter-spacing:.08em;color:${phaseColor};text-transform:uppercase">${phaseLabel}</div>
      <div style="position:relative;width:${circleSize}px;height:${circleSize}px;flex-shrink:0">
        <svg viewBox="0 0 90 90" style="width:${circleSize}px;height:${circleSize}px;transform:rotate(-90deg)">
          <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="6"/>
          <circle cx="45" cy="45" r="38" fill="none" stroke="${phaseColor}" stroke-width="6"
            stroke-dasharray="${2*Math.PI*38}" stroke-dashoffset="${2*Math.PI*38*(1-pct/100)}"
            stroke-linecap="round" style="transition:stroke-dashoffset .5s linear"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:${timeFontSize};font-weight:700;color:var(--text-primary);font-variant-numeric:tabular-nums">${mins}:${secs}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-pomo-toggle data-wid="${w.id}" style="background:${running?'rgba(248,113,113,.15)':'var(--accent)'};border:none;border-radius:8px;padding:${btnPad};color:${running?'#f87171':'var(--btn-text)'};font-size:${narrow?'11px':'12px'};font-weight:600;cursor:pointer">${running?'⏸':'▶'} ${narrow?'':'Start'}</button>
        <button data-pomo-reset data-wid="${w.id}" style="background:rgba(255,255,255,.07);border:none;border-radius:8px;padding:5px 9px;color:var(--text-secondary);font-size:12px;cursor:pointer" title="Reset">↺</button>
      </div>
      ${showPhaseButtons?`<div style="display:flex;gap:4px;flex-shrink:0">
        ${['work','break','longbreak'].map(p=>`<button data-pomo-phase="${p}" data-wid="${w.id}" style="font-size:9px;padding:2px 6px;border-radius:5px;border:1px solid ${phase===p?phaseColor:'rgba(255,255,255,.1)'};background:${phase===p?'rgba(255,255,255,.08)':'transparent'};color:${phase===p?phaseColor:'var(--text-tertiary)'};cursor:pointer">${{work:t('wFocusShort'),break:t('wBreakShort'),longbreak:t('wLongBreakShort')}[p]}</button>`).join('')}
      </div>`:''}
      ${showSessions?`<div style="font-size:9px;color:var(--text-tertiary)">🍅 ${sessions}</div>`:''}
    </div>`;
  }
  if(w.type==='note'){
    const text=w.data.text||'';
    // Always editable - textarea in all modes
    return`<textarea id="wt-${w.id}" style="width:100%;height:100%;background:transparent;border:none;outline:none;color:var(--text-primary);font-family:var(--font-sans);font-size:13px;resize:none;line-height:1.6;cursor:text" placeholder="${t('wNotePlaceholder')}">${esc(text)}</textarea>`;
  }
  if(w.type==='rss'){
    const items=w.data.items||[];
    if(!items.length)return`<div style="font-size:12px;color:var(--text-tertiary);text-align:center;padding:20px 0">Keine Artikel — Feed konfigurieren</div>`;
    return items.slice(0,8).map(it=>`<a href="${esc(it.url)}" target="_blank" rel="noopener" style="display:block;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.06);text-decoration:none">
      <div style="font-size:12px;font-weight:500;color:var(--text-primary);line-height:1.4;margin-bottom:2px">${esc(it.title)}</div>
      <div style="font-size:10px;color:var(--text-secondary)">${esc(it.date||'')}</div>
    </a>`).join('');
  }
  if(w.type==='history'){
    const items=w.data.items||[];
    if(!items.length)return`<div style="font-size:12px;color:var(--text-tertiary);text-align:center;padding:20px 0">${t('wNoEntries')}</div>`;
    return items.slice(0,narrow?6:10).map(it=>`<a href="${esc(it.url)}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:${narrow?'5px':'8px'};padding:${gap};border-bottom:1px solid rgba(255,255,255,.06);text-decoration:none">
      <img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(new URL(it.url).hostname)}&sz=16" style="width:12px;height:12px;border-radius:3px;flex-shrink:0" loading="lazy" class="fav-img">
      <div style="flex:1;min-width:0"><div style="font-size:${fs};color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(it.title||it.url)}</div></div>
    </a>`).join('');
  }
  if(w.type==='calendar'){
    const now=new Date();
    const entries=w.data.entries||[];
    const year=w.data.viewYear||now.getFullYear();
    const month=w.data.viewMonth??now.getMonth();
    const firstDay=new Date(year,month,1).getDay();
    const daysInMonth=new Date(year,month+1,0).getDate();
    const days=['Mo','Di','Mi','Do','Fr','Sa','So'];
    const monthNames=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    const offset=(firstDay+6)%7;
    let cells='';
    for(let i=0;i<offset;i++)cells+=`<div></div>`;
    for(let d=1;d<=daysInMonth;d++){
      const isToday=d===now.getDate()&&month===now.getMonth()&&year===now.getFullYear();
      const hasEntry=entries.some(e=>e.day===d&&e.month===month&&e.year===year);
      cells+=`<div data-cal-day="${d}" style="text-align:center;font-size:11px;padding:3px 2px;border-radius:6px;cursor:pointer;position:relative;
        background:${isToday?'var(--accent)':'transparent'};color:${isToday?'var(--btn-text)':'var(--text-primary)'};
        font-weight:${isToday?'600':'400'};transition:background .1s"
        style="font-size:10px;padding:2px 1px" class="cal-day${isToday?' cal-today':''}">
        ${d}${hasEntry?`<div style="width:4px;height:4px;border-radius:50%;background:var(--accent);position:absolute;bottom:1px;left:50%;transform:translateX(-50%);${isToday?'background:#fff':''}"></div>`:''}
      </div>`;
    }
    return`<div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <button data-cal-prev style="background:none;border:none;color:var(--text-secondary);cursor:pointer;padding:2px 4px;font-size:14px;border-radius:6px">‹</button>
        <span style="font-size:11px;font-weight:600;color:var(--text-primary)">${monthNames[month]} ${year}</span>
        <button data-cal-next style="background:none;border:none;color:var(--text-secondary);cursor:pointer;padding:2px 4px;font-size:14px;border-radius:6px">›</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px;margin-bottom:2px">
        ${days.map(d=>`<div style="text-align:center;font-size:9px;color:var(--text-tertiary);font-weight:500;padding:1px 0">${d}</div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px">${cells}</div>
    </div>`;
  }

  if(w.type==='iframe'){
    const url=w.data.url||'';
    if(!url)return`<div style="font-size:12px;color:var(--text-tertiary);text-align:center;padding:20px 0;display:flex;flex-direction:column;align-items:center;gap:8px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.4"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/></svg>
      <span>URL konfigurieren</span></div>`;
    const zoom=w.data.zoom||1;
    const inv=1/zoom;
    return`<div style="width:100%;height:100%;overflow:hidden;border-radius:8px;flex:1">
      <iframe src="${esc(url)}" style="width:${Math.round(inv*100)}%;height:${Math.round(inv*100)}%;border:none;transform:scale(${zoom});transform-origin:0 0;display:block" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" loading="lazy"></iframe>
    </div>`;
  }
  if(w.type==='qrcode'){
    const url=w.data.url||'';
    const size=200;
    if(!url)return`<div data-qr-empty data-wid="${w.id}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:10px;cursor:pointer" title="URL eingeben">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:36px;height:36px;opacity:.3"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span style="font-size:12px;color:var(--text-tertiary)">Tippen um URL einzugeben</span>
    </div>`;
    const qrUrl=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&bgcolor=1a1a2e&color=ffffff&format=png&margin=10`;
    return`<div style="display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:center">
      <img src="${esc(qrUrl)}" id="qr-img-${w.id}" style="border-radius:10px;max-width:calc(100% - 8px);max-height:calc(100% - 52px);image-rendering:pixelated" loading="lazy" crossorigin="anonymous"/>
      <div style="display:flex;gap:5px;width:100%;box-sizing:border-box">
        <button data-qr-edit data-wid="${w.id}" style="flex:1;min-width:0;font-size:10px;color:var(--text-secondary);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 4px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:3px;white-space:nowrap;overflow:hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px;flex-shrink:0"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Bearbeiten</button>
        <button data-qr-dl data-wid="${w.id}" data-qr-url="${esc(qrUrl)}" style="flex:1;min-width:0;font-size:10px;color:var(--accent);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 4px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:3px;white-space:nowrap;overflow:hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px;flex-shrink:0"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download</button>
      </div>
    </div>`;
  }
  if(w.type==='password'){
    const pw=w.data.lastPw||'';
    const len=w.data.length||16;
    const useUpper=w.data.upper!==false;
    const useLower=w.data.lower!==false;
    const useNum=w.data.numbers!==false;
    const useSymbol=w.data.symbols!==false;
    return`<div style="display:flex;flex-direction:column;gap:8px;height:100%;width:100%;box-sizing:border-box;overflow:hidden">
      <div style="display:flex;align-items:center;gap:6px">
        <div id="pw-out-${w.id}" style="flex:1;min-width:0;font-family:monospace;font-size:11px;color:var(--text-primary);background:rgba(0,0,0,.3);padding:6px 8px;border-radius:8px;word-break:break-all;min-height:32px;line-height:1.5;overflow:hidden">${esc(pw)||'<span style="color:var(--text-tertiary)">–</span>'}</div>
        <button data-pw-copy data-pwid="${w.id}" style="background:rgba(255,255,255,.08);border:none;border-radius:8px;padding:7px;cursor:pointer;color:var(--accent);flex-shrink:0" title="Kopieren">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>
      <button data-pw-gen data-wid="${w.id}" style="background:var(--accent);border:none;border-radius:8px;padding:7px;cursor:pointer;color:var(--btn-text);font-size:12px;font-weight:600;width:100%">Generieren</button>
      <div style="display:flex;flex-wrap:wrap;gap:5px;font-size:11px">
        ${[['upper','A–Z',useUpper],['lower','a–z',useLower],['numbers','0–9',useNum],['symbols','!@#',useSymbol]].map(([opt,label,active])=>`
        <button data-pw-opt="${opt}" data-wid="${w.id}" style="padding:3px 9px;border-radius:6px;border:1px solid ${active?'var(--accent)':'rgba(255,255,255,.12)'};background:${active?'color-mix(in srgb,var(--accent) 20%,transparent)':'transparent'};color:${active?'var(--accent)':'var(--text-secondary)'};cursor:pointer;font-size:11px;transition:all .15s">${label}</button>`).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:var(--text-secondary)">
        <span>Länge:</span>
        <input type="range" min="8" max="64" value="${len}" data-pw-len data-wid="${w.id}" style="flex:1;accent-color:var(--accent)"/>
        <span id="pw-len-${w.id}">${len}</span>
      </div>
    </div>`;
  }
  if(w.type==='football'){
    const league=w.data.league||'bl1';
    const fav=w.data.fav||'';
    const matches=w.data.matches||[];
    const table=w.data.table||[];
    const icons=w.data.icons||{};
    const leagueNames={bl1:'1. Bundesliga',bl2:'2. Bundesliga',bl3:'3. Liga'};
    const tab=w.data.tab||'matches';
    // Helper: team icon img or fallback
    const FALLBACK_ICONS={
      'Dortmund':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/120px-Borussia_Dortmund_logo.svg.png',
      'BVB':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/120px-Borussia_Dortmund_logo.svg.png',
      'Elversberg':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SV_Elversberg_Logo_2021.svg/120px-SV_Elversberg_Logo_2021.svg.png',
      'Düsseldorf':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fortuna_D%C3%BCsseldorf.svg/120px-Fortuna_D%C3%BCsseldorf.svg.png',
      'Osnabrück':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VfL_Osnabrueck_Logo_2021%E2%80%93.svg/120px-VfL_Osnabrueck_Logo_2021%E2%80%93.svg.png',
      'Verl':'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/SC_Verl_Logo.svg/120px-SC_Verl_Logo.svg.png',
      'Rostock':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/F.C._Hansa_Rostock_Logo.svg/120px-F.C._Hansa_Rostock_Logo.svg.png',
      'Hansa':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/F.C._Hansa_Rostock_Logo.svg/120px-F.C._Hansa_Rostock_Logo.svg.png',
      '1860':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/TSV_1860_M%C3%BCnchen.svg/120px-TSV_1860_M%C3%BCnchen.svg.png',
      'Wiesbaden':'https://upload.wikimedia.org/wikipedia/de/thumb/3/3d/Logo_SV_Wehen_Wiesbaden.svg/120px-Logo_SV_Wehen_Wiesbaden.svg.png',
      'Wehen':'https://upload.wikimedia.org/wikipedia/de/thumb/3/3d/Logo_SV_Wehen_Wiesbaden.svg/120px-Logo_SV_Wehen_Wiesbaden.svg.png',
      'Mannheim':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Svwaldhof.svg/120px-Svwaldhof.svg.png',
      'Waldhof':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Svwaldhof.svg/120px-Svwaldhof.svg.png',
      'Ingolstadt':'https://upload.wikimedia.org/wikipedia/de/thumb/5/55/FC-Ingolstadt_logo.svg/120px-FC-Ingolstadt_logo.svg.png',
      'Stuttgart II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/120px-VfB_Stuttgart_1893_Logo.svg.png',
      'VfB Stuttgart II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/120px-VfB_Stuttgart_1893_Logo.svg.png',
      'Hoffenheim II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/120px-Logo_TSG_Hoffenheim.svg.png',
      'TSG Hoffenheim II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/120px-Logo_TSG_Hoffenheim.svg.png',
      'Saarbrücken':'https://upload.wikimedia.org/wikipedia/de/thumb/f/ff/1._FC_Saarbr%C3%BCcken.svg/120px-1._FC_Saarbr%C3%BCcken.svg.png',
      'Aue':'https://upload.wikimedia.org/wikipedia/de/thumb/1/13/Fc_erzgebirge_aue.svg/120px-Fc_erzgebirge_aue.svg.png',
      'Erzgebirge':'https://upload.wikimedia.org/wikipedia/de/thumb/1/13/Fc_erzgebirge_aue.svg/120px-Fc_erzgebirge_aue.svg.png',
      'Ulm':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/SSV_Ulm_1846_Fussball.svg/120px-SSV_Ulm_1846_Fussball.svg.png',
      'SSV Ulm':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/SSV_Ulm_1846_Fussball.svg/120px-SSV_Ulm_1846_Fussball.svg.png',
    };
    const resolveIcon=(name,storedUrl)=>{
      if(!storedUrl) return '';
      // Always use data: URLs (cached via background script)
      if(storedUrl.startsWith('data:')) return storedUrl;
      // Allow non-wikimedia http URLs directly (e.g. official club CDN)
      if(storedUrl.startsWith('http') && !storedUrl.includes('wikimedia')) return storedUrl;
      // Block wikimedia http URLs — return empty, loadFallbackIcons will replace with data:
      return '';
    };
    const teamIcon=(name,url,size=16)=>{
      const src=resolveIcon(name,url);
      // No inline onerror (blocked by CSP) — use data-fbimg attribute, bound via JS after render
      return src
        ?`<img src="${esc(src)}" data-fbimg="1" style="width:${size}px;height:${size}px;object-fit:contain;flex-shrink:0;border-radius:2px;opacity:.9">`
        :`<span style="width:${size}px;height:${size}px;flex-shrink:0;display:inline-block"></span>`;
    };
    // If no data yet and no fav set: show team picker
    const noData=!matches.length&&!table.length;
    if(noData){
      return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:10px;padding:8px">
        <div style="font-size:11px;color:var(--text-tertiary);text-align:center">Liga wählen und Daten laden</div>
        <select data-fb-league data-wid="${w.id}" style="width:100%;font-size:11px;background:rgba(0,0,0,.3);border:1px solid var(--glass-border);border-radius:8px;color:var(--text-primary);padding:6px 8px">
          ${Object.entries(leagueNames).map(([k,v])=>`<option value="${k}" ${league===k?'selected':''}>${v}</option>`).join('')}
        </select>
        <button data-fb-refresh data-wid="${w.id}" style="width:100%;background:var(--accent);border:none;border-radius:8px;padding:8px;color:var(--btn-text);font-size:12px;font-weight:600;cursor:pointer">Laden</button>
      </div>`;
    }
    return`<div style="display:flex;flex-direction:column;height:100%;gap:6px">
      <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
        ${EDIT_MODE?`<div style="display:flex;gap:4px;flex-shrink:0">
          ${['matches','table'].map(t=>`<button data-fb-tab="${t}" data-wid="${w.id}" style="font-size:10px;padding:3px 8px;border-radius:6px;border:none;cursor:pointer;background:${tab===t?'var(--accent)':'rgba(255,255,255,.08)'};color:${tab===t?'var(--btn-text)':'var(--text-secondary)'}">${t==='matches'?'Spiele':'Tabelle'}</button>`).join('')}
        </div>`:''}
        <select data-fb-league data-wid="${w.id}" style="flex:1;min-width:0;font-size:10px;background:rgba(0,0,0,.3);border:1px solid var(--glass-border);border-radius:6px;color:var(--text-primary);padding:2px 4px">${Object.entries(leagueNames).map(([k,v])=>`<option value="${k}" ${league===k?'selected':''}>${v}</option>`).join('')}</select>
        <button data-fb-refresh data-wid="${w.id}" style="background:none;border:none;color:var(--accent);cursor:pointer;padding:2px;flex-shrink:0" title="Aktualisieren">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
        </button>
        ${!EDIT_MODE?`<div style="display:flex;gap:3px;flex-shrink:0">
          ${['matches','table'].map(t=>`<button data-fb-tab="${t}" data-wid="${w.id}" style="font-size:9px;padding:2px 6px;border-radius:5px;border:none;cursor:pointer;background:${tab===t?'var(--accent)':'rgba(255,255,255,.08)'};color:${tab===t?'var(--btn-text)':'var(--text-secondary)'}">${t==='matches'?'Spiele':'Tabelle'}</button>`).join('')}
        </div>`:''}
        <span data-fb-status style="font-size:10px;color:var(--text-tertiary)"></span>
      </div>
      <div style="flex:1;overflow-y:auto;scrollbar-width:thin">
        ${tab==='matches'?
          (!matches.length?`<div style="font-size:11px;color:var(--text-tertiary);text-align:center;padding:12px 0">Lade Spiele...</div>`:
          matches.map(m=>{
            const isFav=fav&&(m.t1===fav||m.t2===fav);
            const ic1=icons[m.t1]||m.icon1||'';
            const ic2=icons[m.t2]||m.icon2||'';
            return`<div style="display:flex;align-items:center;gap:3px;border-bottom:1px solid rgba(255,255,255,.05);${isFav?'background:color-mix(in srgb,var(--accent) 10%,transparent);border-radius:6px;padding:3px 5px;border-left:2px solid var(--accent);':'padding:3px 0;'}">
              ${teamIcon(m.t1,ic1,14)}
              <span style="flex:1;font-size:10px;color:${isFav&&m.t1===fav?'var(--accent)':'var(--text-primary)'};font-weight:${isFav&&m.t1===fav?'600':'400'};text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(m.t1)}</span>
              <span style="font-size:11px;font-weight:700;color:${isFav?'var(--accent)':'var(--text-secondary)'};padding:0 4px;white-space:nowrap;flex-shrink:0">${m.score||'–:–'}</span>
              <span style="flex:1;font-size:10px;color:${isFav&&m.t2===fav?'var(--accent)':'var(--text-primary)'};font-weight:${isFav&&m.t2===fav?'600':'400'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(m.t2)}</span>
              ${teamIcon(m.t2,ic2,14)}
            </div>`;}).join(''))
          :
          (!table.length?`<div style="font-size:11px;color:var(--text-tertiary);text-align:center;padding:12px 0">Lade Tabelle...</div>`:
          `<table style="width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed">
            <tr style="color:var(--text-tertiary);border-bottom:1px solid rgba(255,255,255,.1)"><td style="padding:2px;width:20px">#</td><td style="width:16px"></td><td style="width:auto">Verein</td><td style="text-align:center;width:30px">Diff</td><td style="text-align:center;width:26px">Pkt</td></tr>
            ${table.map((t,i)=>{
              const isFav=fav&&t.name===fav;
              const ico=icons[t.name]||t.icon||'';
              return`<tr style="background:${isFav?'color-mix(in srgb,var(--accent) 12%,transparent)':'transparent'};color:${isFav?'var(--accent)':'var(--text-primary)'};font-weight:${isFav?'600':'400'};border-bottom:1px solid rgba(255,255,255,.04)">
                <td style="padding:3px 2px">${i+1}</td>
                <td style="padding:1px 2px">${teamIcon(t.name,ico,13)}</td>
                <td style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(t.name)}</td>
                <td style="text-align:center;color:${t.diff>0?'#4ade80':t.diff<0?'#f87171':'var(--text-secondary)'}">${t.diff>0?'+':''}${t.diff??0}</td>
                <td style="text-align:center;font-weight:600">${t.pts}</td>
              </tr>`;}).join('')}
          </table>`)
        }
      </div>
      ${EDIT_MODE?`<div style="display:flex;gap:6px;align-items:center;flex-shrink:0;padding-top:4px;border-top:1px solid rgba(255,255,255,.06)">
        <span style="font-size:10px;color:var(--text-tertiary);flex-shrink:0">Verein:</span>
        <div style="flex:1;display:flex;flex-wrap:wrap;gap:3px;overflow-y:auto;max-height:48px">
          ${table.slice(0,20).map(t=>{
            const ico=icons[t.name]||t.icon||'';
            const sel=t.name===fav;
            return`<button data-fb-fav="${esc(t.name)}" data-wid="${w.id}" style="display:flex;align-items:center;gap:3px;padding:2px 5px;border-radius:5px;border:1px solid ${sel?'var(--accent)':'rgba(255,255,255,.1)'};background:${sel?'color-mix(in srgb,var(--accent) 20%,transparent)':'transparent'};cursor:pointer;flex-shrink:0">${teamIcon(t.name,ico,12)}<span style="font-size:9px;color:${sel?'var(--accent)':'var(--text-secondary)'};white-space:nowrap">${esc(t.name)}</span></button>`;
          }).join('')}
        </div>
      </div>`:''}
    </div>`;
  }

  // ── 5-Tage Wetter ──
  if(w.type==='weather5'){
    const days=w.data.days||[];
    const icons={'0':'☀️','1':'🌤','2':'⛅','3':'☁️','45':'🌫','48':'🌫','51':'🌦','53':'🌦','55':'🌧','61':'🌧','63':'🌧','65':'🌧','71':'❄️','73':'❄️','75':'❄️','80':'🌦','81':'🌧','82':'⛈','95':'⛈','96':'⛈','99':'⛈'};
    if(!days.length)return`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:12px;color:var(--text-tertiary)">${t('wLoading')}</div>`;
    const dayNames=['So','Mo','Di','Mi','Do','Fr','Sa'];
    return`<div style="display:flex;flex-direction:column;gap:6px;height:100%;overflow-y:auto">
      ${days.map((d,i)=>{
        const dt=new Date(d.date);
        const name=i===0?'Heute':i===1?'Morgen':dayNames[dt.getDay()];
        const icon=icons[String(d.code)]||'🌡';
        return`<div style="display:flex;align-items:center;gap:8px;padding:6px 4px;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0">
          <span style="font-size:11px;color:var(--text-secondary);width:40px;flex-shrink:0">${name}</span>
          <span style="font-size:16px;flex-shrink:0">${icon}</span>
          <div style="flex:1;min-width:0">
            <div style="height:4px;border-radius:4px;background:rgba(255,255,255,.08);overflow:hidden">
              <div style="height:100%;border-radius:4px;background:linear-gradient(90deg,#60a5fa,#f87171);width:${Math.min(100,Math.max(10,((d.max+10)/50)*100))}%"></div>
            </div>
          </div>
          <span style="font-size:11px;color:#60a5fa;flex-shrink:0;width:28px;text-align:right">${Math.round(d.min)}°</span>
          <span style="font-size:11px;color:#f87171;flex-shrink:0;width:28px;text-align:right">${Math.round(d.max)}°</span>
        </div>`;}).join('')}
    </div>`;
  }

  // ── Aktien & Crypto ──
  if(w.type==='crypto'){
    const coins=w.data.coins||[];
    const watchlist=w.data.watchlist||['bitcoin','ethereum','solana'];
    if(!coins.length)return`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:12px;color:var(--text-tertiary)">${t('wLoading')}</div>`;
    return`<div style="display:flex;flex-direction:column;gap:4px;height:100%;overflow-y:auto">
      ${coins.map(c=>{
        const pos=c.change>=0;
        return`<div style="display:flex;align-items:center;gap:8px;padding:6px 4px;border-bottom:1px solid rgba(255,255,255,.06)">
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:600;color:var(--text-primary)">${esc(c.symbol.toUpperCase())}</div>
            <div style="font-size:10px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.name)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:12px;font-weight:600;color:var(--text-primary)">$${c.price<1?c.price.toFixed(4):c.price<100?c.price.toFixed(2):c.price.toLocaleString('de-DE',{maximumFractionDigits:0})}</div>
            <div style="font-size:10px;color:${pos?'#4ade80':'#f87171'}">${pos?'▲':'▼'} ${Math.abs(c.change).toFixed(2)}%</div>
          </div>
        </div>`;}).join('')}
    </div>`;
  }

  // ── Meine IP ──
  if(w.type==='myip'){
    const d=w.data;
    if(d._loading||!d.ip)return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px">
      ${d._loading
        ?`<div style="font-size:12px;color:var(--text-tertiary)">${t('wLoading')}</div>`
        :`<div style="font-size:11px;color:var(--text-tertiary);text-align:center;padding:0 8px">${t('wIPNotFound')}</div>
         <button data-ip-refresh data-wid="${w.id}" style="background:var(--accent);border:none;border-radius:8px;padding:5px 14px;color:var(--btn-text);cursor:pointer;font-size:11px;font-weight:600">${t('wIPRetry')}</button>`
      }
    </div>`;
    const extIP=d.ip||'';
    const intIP=d.internalIP||'';
    const meta=[d.country,d.city].filter(Boolean).join(', ');
    const isp=d.isp||'';
    const tiny=narrow&&rows<=2;
    const ipFontSize=tiny?'11px':narrow?'12px':'13px';
    const labelFontSize='8px';
    const pad=tiny?'3px 0':narrow?'4px 0':'5px 0';
    return`<div style="display:flex;flex-direction:column;height:100%;overflow:hidden;gap:0">
      <div style="padding:${pad};border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
        <div style="font-size:${labelFontSize};color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px">Extern</div>
        <div style="font-size:${ipFontSize};font-weight:700;color:var(--text-primary);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(extIP)||'—'}</div>
      </div>
      ${intIP?`<div style="padding:${pad};border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0">
        <div style="font-size:${labelFontSize};color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px">Intern</div>
        <div style="font-size:${ipFontSize};font-weight:600;color:var(--accent);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(intIP)}</div>
      </div>`:(!tiny?`<div style="padding:${pad};border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0">
        <div style="font-size:${labelFontSize};color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px">Intern</div>
        <div style="font-size:${ipFontSize};color:var(--text-tertiary);font-family:monospace">${t('wIPUnknown')}</div>
      </div>`:'')}
      ${!tiny&&meta?`<div style="padding:${pad};border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0">
        <div style="font-size:${labelFontSize};color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px">Standort</div>
        <div style="font-size:${narrow?'10px':'11px'};color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(meta)}</div>
      </div>`:''}
      ${!tiny&&isp?`<div style="padding:${pad};border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0">
        <div style="font-size:${labelFontSize};color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.05em;margin-bottom:1px">ISP</div>
        <div style="font-size:11px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(isp)}</div>
      </div>`:''}
      <button data-ip-refresh data-wid="${w.id}" style="margin-top:auto;padding:${tiny?'3px 0':'4px 0'};background:none;border:none;color:var(--accent);cursor:pointer;font-size:${tiny?'10px':'9px'};text-align:center;width:100%;flex-shrink:0;opacity:.5;letter-spacing:.02em">${tiny?'↺':'↺ Aktualisieren'}</button>
    </div>`;
  }

  // ── Speedtest ──
  if(w.type==='speedtest'){
    const d=w.data;
    const running=d.running||false;
    const phase=d.phase||'';
    function fmtU(v){if(v==null)return'';return v>=1000?'Gbps':'Mbps';}
    function fmtV(v){if(v==null)return null;return v>=1000?(v/1000).toFixed(2):v>=100?Math.round(v).toString():v.toFixed(1);}
    const dlV=fmtV(d.downloadRaw), ulV=fmtV(d.uploadRaw);
    const dlU=fmtU(d.downloadRaw), ulU=fmtU(d.uploadRaw);
    // Progress: ping=10%, dl=60%, ul=100% — stored as wd.data.progress
    const prog=d.progress||0;
    const progPct=Math.min(100,Math.max(0,prog));
    return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;height:100%;padding:4px;container-type:inline-size">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;width:100%">
        ${[
          {icon:'↓',label:'Download',val:dlV,unit:dlU,active:phase==='dl'},
          {icon:'↑',label:'Upload',val:ulV,unit:ulU,active:phase==='ul'},
          {icon:'◉',label:'Ping',val:d.ping!=null?String(d.ping):null,unit:'ms',active:phase==='ping'}
        ].map(s=>`<div style="text-align:center;background:${s.active?'rgba(255,255,255,.06)':'transparent'};border-radius:10px;padding:6px 4px;transition:background .3s;min-width:0;overflow:hidden">
          <div style="font-size:clamp(18px,6cqi,28px);font-weight:800;color:${s.val?'var(--accent)':'var(--text-tertiary)'};line-height:1.1;white-space:nowrap">${s.val||'–'}</div>
          <div style="font-size:clamp(9px,2.5cqi,12px);color:var(--text-secondary);font-weight:500;margin-top:1px">${s.unit||''}</div>
          <div style="font-size:clamp(8px,2cqi,10px);color:var(--text-tertiary);margin-top:3px;white-space:nowrap">${s.icon} ${s.label}</div>
        </div>`).join('')}
      </div>
      ${(d.downloadRaw||running)?`<div style="font-size:9px;color:var(--text-tertiary)">Cloudflare Speed Test</div>`:''}
      <div id="sp-bar-${w.id}" style="width:100%;height:3px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden;flex-shrink:0;display:${running||progPct>0?'block':'none'}">
        <div id="sp-fill-${w.id}" style="height:100%;background:var(--accent);border-radius:2px;width:${progPct}%;transition:width .4s linear"></div>
      </div>
      <button data-speed-run data-wid="${w.id}" style="background:${running?'rgba(255,255,255,.06)':'var(--accent)'};border:none;border-radius:10px;padding:7px 16px;color:${running?'var(--text-secondary)':'var(--btn-text)'};cursor:${running?'default':'pointer'};font-size:12px;font-weight:600;width:100%;transition:all .3s;flex-shrink:0">
        ${running?`${phase==='ping'?t('wPing'):phase==='dl'?t('wDownload'):t('wUpload')}`:t('wTestStart')}
      </button>
    </div>`;
  }

  // ── 2048 ──
  if(w.type==='game2048'){
    const board=w.data.board||Array(4).fill(null).map(()=>Array(4).fill(0));
    const score=w.data.score||0;
    const over=w.data.over||false;
    // Clean dark glassmorphism palette
    const bg={'0':'rgba(255,255,255,.04)','2':'rgba(238,228,218,.15)','4':'rgba(237,224,200,.22)','8':'rgba(242,177,121,.7)','16':'rgba(245,149,99,.75)','32':'rgba(246,124,95,.8)','64':'rgba(246,94,59,.85)','128':'rgba(237,207,114,.85)','256':'rgba(237,204,97,.9)','512':'rgba(237,200,80,.9)','1024':'rgba(237,197,63,.95)','2048':'rgba(237,194,46,1)'};
    const fg={'0':'transparent','2':'rgba(255,255,255,.4)','4':'rgba(255,255,255,.5)','8':'#fff','16':'#fff','32':'#fff','64':'#fff','128':'#fff','256':'#fff','512':'#fff','1024':'#fff','2048':'#fff'};
    const fs=v=>v>=1024?'clamp(8px,2.2cqi,11px)':v>=128?'clamp(10px,2.8cqi,14px)':'clamp(12px,3.5cqi,17px)';
    return`<div data-2048 data-wid="${w.id}" style="display:flex;flex-direction:column;gap:6px;height:100%;outline:none;container-type:inline-size" tabindex="0">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-shrink:0;padding:0 2px">
        <div style="display:flex;flex-direction:column">
          <span style="font-size:10px;font-weight:700;letter-spacing:.08em;color:var(--text-tertiary);text-transform:uppercase">Score</span>
          <span style="font-size:16px;font-weight:800;color:var(--accent);line-height:1">${score}</span>
        </div>
        <button data-2048-new data-wid="${w.id}" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 10px;color:var(--text-secondary);cursor:pointer;font-size:11px;font-weight:500;letter-spacing:.02em">${t('wNew')}</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;flex:1;min-height:0;background:rgba(0,0,0,.35);border-radius:12px;padding:6px;box-shadow:inset 0 2px 8px rgba(0,0,0,.3)">
        ${board.flat().map(v=>`<div style="display:flex;align-items:center;justify-content:center;border-radius:8px;background:${bg[String(v)]||'rgba(60,58,50,.8)'};color:${fg[String(v)]||'#fff'};font-size:${fs(v)};font-weight:800;min-height:0;aspect-ratio:1;box-shadow:${v?'0 2px 6px rgba(0,0,0,.25)':'none'};transition:background .1s,transform .1s;letter-spacing:-.02em">${v||''}</div>`).join('')}
      </div>
      ${over?`<div style="text-align:center;font-size:11px;color:#f87171;font-weight:700;letter-spacing:.05em;text-transform:uppercase;flex-shrink:0">${t('wGameOver')}</div>`:''}
    </div>`;
  }
  return'';
}

function applyWidgetPositions(){
  Object.values(STATE.widgets?.items||{}).forEach(w=>{
    if(!w.gridPos)return;
    const el=document.querySelector(`.vela-widget[data-widget-id="${w.id}"]`);
    if(el){
      const col=w.gridPos.col;
      const row=w.gridPos.row;
      const cs=Math.min(5,Math.max(1,w.colSpan||2));
      const rs=Math.min(5,Math.max(1,w.rowSpan||2));
      el.style.setProperty('grid-column',`${col} / span ${cs}`,'important');
      el.style.setProperty('grid-row',`${row} / span ${rs}`,'important');
    }
  });
}



// ── Weather 5-day loader ──

// Update a single widget's body content without full re-render
function updateWidgetInPlace(wid){
  const w=STATE.widgets?.items?.[wid];if(!w)return;
  const wEl=document.querySelector(`.vela-widget[data-widget-id="${wid}"]`);if(!wEl)return;
  const bodyEl=wEl.querySelector('.widget-scroll-body');
  if(!bodyEl)return;
  bodyEl.innerHTML=renderWidgetContent(w,w.colSpan||2,w.rowSpan||2);
  bindWidgetEvents(wEl);
}

// Load fallback icons via background script (avoids Wikimedia rate limits)
const FOOTBALL_FALLBACK_URLS={
  'Dortmund':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/120px-Borussia_Dortmund_logo.svg.png',
  'BVB':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/120px-Borussia_Dortmund_logo.svg.png',
  'Elversberg':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SV_Elversberg_Logo_2021.svg/120px-SV_Elversberg_Logo_2021.svg.png',
  'Düsseldorf':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fortuna_D%C3%BCsseldorf.svg/120px-Fortuna_D%C3%BCsseldorf.svg.png',
  'Osnabrück':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VfL_Osnabrueck_Logo_2021%E2%80%93.svg/120px-VfL_Osnabrueck_Logo_2021%E2%80%93.svg.png',
  'Verl':'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/SC_Verl_Logo.svg/120px-SC_Verl_Logo.svg.png',
  'Rostock':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/F.C._Hansa_Rostock_Logo.svg/120px-F.C._Hansa_Rostock_Logo.svg.png',
  'Hansa':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/F.C._Hansa_Rostock_Logo.svg/120px-F.C._Hansa_Rostock_Logo.svg.png',
  '1860':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/TSV_1860_M%C3%BCnchen.svg/120px-TSV_1860_M%C3%BCnchen.svg.png',
  'Wiesbaden':'https://upload.wikimedia.org/wikipedia/de/thumb/3/3d/Logo_SV_Wehen_Wiesbaden.svg/120px-Logo_SV_Wehen_Wiesbaden.svg.png',
  'Wehen':'https://upload.wikimedia.org/wikipedia/de/thumb/3/3d/Logo_SV_Wehen_Wiesbaden.svg/120px-Logo_SV_Wehen_Wiesbaden.svg.png',
  'Mannheim':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Svwaldhof.svg/120px-Svwaldhof.svg.png',
  'Waldhof':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Svwaldhof.svg/120px-Svwaldhof.svg.png',
  'Ingolstadt':'https://upload.wikimedia.org/wikipedia/de/thumb/5/55/FC-Ingolstadt_logo.svg/120px-FC-Ingolstadt_logo.svg.png',
  'Stuttgart II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/120px-VfB_Stuttgart_1893_Logo.svg.png',
  'Hoffenheim II':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/120px-Logo_TSG_Hoffenheim.svg.png',
  'Saarbrücken':'https://upload.wikimedia.org/wikipedia/de/thumb/f/ff/1._FC_Saarbr%C3%BCcken.svg/120px-1._FC_Saarbr%C3%BCcken.svg.png',
  'Aue':'https://upload.wikimedia.org/wikipedia/de/thumb/1/13/Fc_erzgebirge_aue.svg/120px-Fc_erzgebirge_aue.svg.png',
  'Erzgebirge':'https://upload.wikimedia.org/wikipedia/de/thumb/1/13/Fc_erzgebirge_aue.svg/120px-Fc_erzgebirge_aue.svg.png',
  'Ulm':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/SSV_Ulm_1846_Fussball.svg/120px-SSV_Ulm_1846_Fussball.svg.png',
};
async function loadFallbackIcons(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  const icons=wd.data.icons||{};
  const table=wd.data.table||[];
  // Build list of icons to fetch
  const toFetch=[];
  for(const row of table){
    const name=row.name;
    if(!name) continue;
    if(icons[name]&&icons[name].startsWith('data:')) continue;
    let url='';
    if(FOOTBALL_FALLBACK_URLS[name]){ url=FOOTBALL_FALLBACK_URLS[name]; }
    else {
      const nl=name.toLowerCase();
      for(const [k,v] of Object.entries(FOOTBALL_FALLBACK_URLS)){
        if(nl.includes(k.toLowerCase())||k.toLowerCase().includes(nl)){url=v;break;}
      }
    }
    if(!url && row.icon) url=row.icon;
    if(!url && icons[name]&&icons[name].startsWith('http')) url=icons[name];
    if(url) toFetch.push({name,url});
  }
  if(!toFetch.length) return;
  // Fetch in parallel batches of 4
  const BATCH=4;
  let changed=false;
  for(let i=0;i<toFetch.length;i+=BATCH){
    const batch=toFetch.slice(i,i+BATCH);
    const results=await Promise.all(batch.map(({name,url})=>
      browser.runtime.sendMessage({type:'FETCH_ICON',url})
        .then(r=>({name,r})).catch(()=>({name,r:null}))
    ));
    for(const {name,r} of results){
      if(r?.ok&&r.dataUrl){ icons[name]=r.dataUrl; changed=true; }
    }
    if(i+BATCH<toFetch.length) await new Promise(r=>setTimeout(r,100));
  }
  if(changed){
    wd.data.icons=icons;
    saveConfigSilent(STATE);
    updateWidgetInPlace(wid);
  }
}
async function loadWeather5(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  try{
    const loc=STATE.general?.weatherLat||STATE.settings?.weather?.lat||52.52;
    const lon=STATE.general?.weatherLon||STATE.settings?.weather?.lon||13.405;
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${loc}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`;
    const r=await fetch(url);const d=await r.json();
    if(!d.daily)throw new Error('Keine Daten');
    wd.data.days=d.daily.time.map((date,i)=>({
      date,code:d.daily.weathercode[i],
      max:d.daily.temperature_2m_max[i],min:d.daily.temperature_2m_min[i]
    }));
    saveConfig(STATE);
    updateWidgetInPlace(wid);
  }catch(e){console.warn('Weather5 error:',e);}
}

// ── Crypto/Stocks loader (CoinGecko free API) ──
async function loadCrypto(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  const ids=(wd.data.watchlist||['bitcoin','ethereum','solana']).join(',');
  try{
    const r=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`);
    if(!r.ok)throw new Error('HTTP '+r.status);
    const d=await r.json();
    wd.data.coins=d.map(c=>({id:c.id,name:c.name,symbol:c.symbol,price:c.current_price,change:c.price_change_percentage_24h||0}));
    saveConfig(STATE);updateWidgetInPlace(wid);
  }catch(e){console.warn('Crypto error:',e);}
}

// ── My IP loader (via background script to avoid CORS/403) ──
async function getInternalIP(){
  // Firefox blockiert WebRTC host-Kandidaten durch mDNS-Obfuskation in Extension-Kontexten.
  // Zuverlässigste Alternative: browser.dns.resolve() für den lokalen Hostname.
  const isIPv4=s=>/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s)&&s!=='0.0.0.0'&&s!=='127.0.0.1';
  const isPrivate=s=>/^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/.test(s);

  // Methode 1: WebRTC ohne STUN, nur host-Kandidaten (klappt manchmal je nach Firefox-Config)
  const rtcResult=await new Promise(resolve=>{
    let pc,done=false;
    const finish=val=>{if(done)return;done=true;try{pc?.close();}catch(_){}resolve(val);};
    try{pc=new RTCPeerConnection({iceServers:[]});}catch(_){resolve(null);return;}
    const found=new Set();
    pc.createDataChannel('x');
    pc.onicecandidate=e=>{
      if(!e?.candidate){finish([...found].find(isPrivate)||null);return;}
      const cand=e.candidate.candidate||'';
      if(!cand.includes(' host '))return;
      (cand.match(/\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/g)||[])
        .filter(isIPv4).forEach(ip=>{found.add(ip);if(isPrivate(ip))finish(ip);});
    };
    pc.createOffer().then(o=>pc.setLocalDescription(o)).catch(()=>finish(null));
    setTimeout(()=>finish([...found].find(isPrivate)||null),2500);
  }).catch(()=>null);

  if(rtcResult&&isPrivate(rtcResult))return rtcResult;

  // Methode 2: Background-Script WebRTC
  try{
    const resp=await browser.runtime.sendMessage({type:'GET_INTERNAL_IP'});
    const ip=resp?.ip||null;
    if(ip&&isIPv4(ip)&&isPrivate(ip))return ip;
  }catch(_){}

  // Methode 3: browser.dns.resolve via Background (Firefox Extension API)
  try{
    const resp=await browser.runtime.sendMessage({type:'GET_DNS_IP'});
    const ip=resp?.ip||null;
    if(ip&&isIPv4(ip)&&isPrivate(ip))return ip;
  }catch(_){}

  return null;
}

async function loadMyIP(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  if(!wd.data)wd.data={};
  // Use a runtime-only property (not persisted) to prevent concurrent loads
  if(wd._ipLoading)return;
  wd._ipLoading=true;
  wd.data._loading=true;
  updateWidgetInPlace(wid);
  try{
    // Fetch internal IP via WebRTC in parallel with external APIs
    const internalIPPromise=getInternalIP();

    // Race all external IP APIs in parallel — fastest complete response wins
    const apiCalls=[
      // ipwho.is — has country, city, ISP
      fetch('https://ipwho.is/',{cache:'no-store',signal:AbortSignal.timeout?.(5000)})
        .then(r=>{if(!r.ok)throw 0;return r.json();})
        .then(d=>{
          if(!d.ip)throw 0;
          return{ip:d.ip,country:d.country||'',city:d.city||'',isp:d.connection?.isp||d.org||'',asn:d.connection?.asn?'AS'+d.connection.asn:''};
        }),
      // Background script → ip-api.com — has country, city, org, AS
      browser.runtime.sendMessage({type:'FETCH_IP'})
        .then(resp=>{
          if(!resp?.ok||!resp.data?.ip)throw 0;
          const d=resp.data;
          return{ip:d.ip,country:d.country||'',city:d.city||'',isp:d.org||'',asn:d.as||''};
        }),
      // ipify — IP only, use as last-resort
      fetch('https://api.ipify.org?format=json',{cache:'no-store',signal:AbortSignal.timeout?.(5000)})
        .then(r=>{if(!r.ok)throw 0;return r.json();})
        .then(d=>{if(!d.ip)throw 0;return{ip:d.ip,country:'',city:'',isp:'',asn:''};}),
    ].map(p=>p.catch(()=>null));

    // Take the first non-null result
    let extData=null;
    const results=await Promise.all(apiCalls);
    // Prefer results with ISP data (ipwho/ip-api) over bare IP (ipify)
    extData=results.find(r=>r?.ip&&r?.isp)||results.find(r=>r?.ip)||null;

    const internalIP=await internalIPPromise;
    // Firefox gibt manchmal mDNS UUIDs zurück — nur echte IPv4 akzeptieren
    const cleanInternal=internalIP&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(internalIP)?internalIP:null;
    if(extData?.ip){
      wd.data={
        ip:extData.ip,
        internalIP:cleanInternal||'',
        country:extData.country||'',
        city:extData.city||'',
        isp:extData.isp||'',
        asn:extData.asn||''
      };
    } else {
      wd.data={ip:'',internalIP:cleanInternal||''};
    }
    saveConfig(STATE);
  }catch(e){
    console.warn('MyIP error:',e);
    wd.data={ip:'Nicht verfügbar',internalIP:''};
  }finally{
    wd._ipLoading=false;
    if(wd.data)wd.data._loading=false;
    updateWidgetInPlace(wid);
  }
}

// ── Speedtest ──
async function runSpeedtest(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  wd._speedtestActive=true;
  wd.data={running:true,phase:'ping',download:null,upload:null,ping:null,downloadRaw:null,uploadRaw:null,progress:0};
  updateWidgetInPlace(wid);

  const setProgress=(pct)=>{
    wd.data.progress=pct;
    const fill=document.getElementById(`sp-fill-${wid}`);
    const bar=document.getElementById(`sp-bar-${wid}`);
    if(fill)fill.style.width=Math.round(pct)+'%';
    if(bar)bar.style.display='block';
  };
  const update=()=>updateWidgetInPlace(wid);

  try{
    // ── Ping ──
    setProgress(2);
    const pingResp=await browser.runtime.sendMessage({type:'SPEEDTEST_PING',samples:5});
    wd.data.ping=pingResp?.ok ? pingResp.ping : null;
    wd.data.phase='dl'; setProgress(10); update();

    // ── Download ──
    const dlPlan=[
      {bytes:2_000_000, streams:2},   // warm-up: 4MB total
      {bytes:5_000_000, streams:2},   // ramp:    10MB total
      {bytes:5_000_000, streams:3},   // measure: 15MB total
      {bytes:5_000_000, streams:3},   // repeat for accuracy
    ];
    let lastDlMbps=0;
    const dlWall=performance.now();
    for(let i=0;i<dlPlan.length;i++){
      if(performance.now()-dlWall>15000)break;
      const {bytes,streams}=dlPlan[i];
      const result=await browser.runtime.sendMessage({type:'SPEEDTEST_DOWNLOAD',bytes,streams});
      if(result?.ok&&result.secs>0.1&&result.bytes>0){
        const mbps=(result.bytes*8)/(result.secs*1_000_000);
        lastDlMbps=i===0?mbps:(mbps*0.55+lastDlMbps*0.45);
        wd.data.downloadRaw=lastDlMbps;
      }
      setProgress(10+(i+1)*12); update();
    }
    wd.data.phase='ul'; setProgress(60); update();

    // ── Upload ──
    const ulPlan=[
      {n:1,bytes:500_000},
      {n:2,bytes:1_000_000},
      {n:3,bytes:2_000_000},
      {n:3,bytes:2_000_000},
    ];
    let lastUlMbps=0;
    const ulWall=performance.now();
    for(let i=0;i<ulPlan.length;i++){
      if(performance.now()-ulWall>15000)break;
      const {n,bytes}=ulPlan[i];
      const result=await browser.runtime.sendMessage({type:'SPEEDTEST_UPLOAD',bytes,streams:n});
      if(result?.ok&&result.secs>0.1&&result.bits>0){
        const mbps=result.bits/(result.secs*1_000_000);
        lastUlMbps=i===0?mbps:(mbps*0.6+lastUlMbps*0.4);
        wd.data.uploadRaw=lastUlMbps;
      }
      setProgress(60+(i+1)*10); update();
    }
    wd.data.phase='done'; setProgress(100);
  }catch(e){
    console.warn('Speedtest error:',e);
    wd.data.phase='done';
  }
  wd._speedtestActive=false;
  wd.data.running=false;
  saveConfigSilent(STATE); update();
}

// ── 2048 Game Logic ──
function init2048(){
  const b=Array(4).fill(null).map(()=>Array(4).fill(0));
  addTile2048(b);addTile2048(b);
  return{board:b,score:0,over:false};
}
function addTile2048(b){
  const empty=[];
  for(let r=0;r<4;r++)for(let c=0;c<4;c++)if(!b[r][c])empty.push([r,c]);
  if(!empty.length)return;
  const [r,c]=empty[Math.floor(Math.random()*empty.length)];
  b[r][c]=Math.random()<0.9?2:4;
}
function move2048(b,dir,score){
  const clone=b.map(r=>[...r]);
  let moved=false,ns=score;
  const rotate=m=>m[0].map((_,i)=>m.map(r=>r[i]).reverse());
  let mat=clone;
  const times={left:0,right:2,up:3,down:1};
  for(let i=0;i<(times[dir]||0);i++)mat=rotate(mat);
  for(let r=0;r<4;r++){
    const row=mat[r].filter(v=>v);
    for(let i=0;i<row.length-1;i++){if(row[i]===row[i+1]){row[i]*=2;ns+=row[i];row.splice(i+1,1);}}
    const newRow=[...row,...Array(4-row.length).fill(0)];
    if(newRow.join()!==mat[r].join())moved=true;
    mat[r]=newRow;
  }
  const inv=4-(times[dir]||0);
  for(let i=0;i<inv;i++)mat=rotate(mat);
  return{board:mat,score:ns,moved};
}
function checkOver2048(b){
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){
    if(!b[r][c])return false;
    if(c<3&&b[r][c]===b[r][c+1])return false;
    if(r<3&&b[r][c]===b[r+1][c])return false;
  }
  return true;
}

async function loadFootball(wid){
  const wd=STATE.widgets?.items?.[wid];if(!wd)return;
  // Clear cached wikimedia http URLs so loadFallbackIcons re-fetches them as data:
  if(wd.data.icons){
    Object.keys(wd.data.icons).forEach(k=>{
      const v=wd.data.icons[k];
      if(v && v.includes('wikimedia') && !v.startsWith('data:')) delete wd.data.icons[k];
    });
  }
  const league=wd.data.league||'bl1';
  const wEl=document.querySelector(`.vela-widget[data-widget-id="${wid}"]`);
  const statusEl=wEl?.querySelector('[data-fb-status]');
  if(statusEl)statusEl.textContent=t('wLoading');
  try{
    const season=new Date().getMonth()>=6?new Date().getFullYear():new Date().getFullYear()-1;
    const bgResp=await browser.runtime.sendMessage({type:'FETCH_FOOTBALL',league,season});
    // bgResp.matches = current matchday, bgResp.table = full table
    if(!bgResp?.ok)throw new Error(bgResp?.error||'Fetch fehlgeschlagen');
    const matchRes=bgResp.matches;
    const tableRes=bgResp.table;
    if(!Array.isArray(matchRes)||!Array.isArray(tableRes))throw new Error('Ungültige Daten: '+typeof matchRes+'/'+typeof tableRes);
    const sorted=[...matchRes].sort((a,b)=>new Date(b.matchDateTime)-new Date(a.matchDateTime));
    // Build icon map: shortName/teamName → iconUrl
    const iconMap={};
    [...matchRes,...tableRes].forEach(item=>{
      ['team1','team2'].forEach(k=>{if(item[k]?.teamIconUrl){const n=item[k].shortName||item[k].teamName;if(n)iconMap[n]=item[k].teamIconUrl;}});
      if(item.teamIconUrl){const n=item.shortName||item.teamName;if(n)iconMap[n]=item.teamIconUrl;}
    });
    wd.data.icons={...wd.data.icons,...iconMap};
    wd.data.matches=sorted.slice(0,10).map(m=>{
      const res=Array.isArray(m.matchResults)
        ?(m.matchResults.find(r=>r.resultTypeID===2)||m.matchResults.find(r=>r.resultTypeID===1))
        :null;
      return{
        t1:m.team1?.shortName||m.team1?.teamName||'?',
        t2:m.team2?.shortName||m.team2?.teamName||'?',
        score:(m.matchIsFinished&&res!=null)?`${res.pointsTeam1}:${res.pointsTeam2}`:'–:–',
        icon1:m.team1?.teamIconUrl||'',
        icon2:m.team2?.teamIconUrl||''
      };
    });
    wd.data.table=tableRes.map(t=>({
      name:t.shortName||t.teamName||'?',
      icon:t.teamIconUrl||'',
      games:t.matches||((t.won||0)+(t.lost||0)+(t.draw||0)),
      pts:t.points||0,
      diff:t.goalDiff||(t.goals||0)-(t.opponentGoals||0)
    }));
    saveConfig(STATE);
    updateWidgetInPlace(wid);
    loadFallbackIcons(wid);
  }catch(e){
    const statusEl2=document.querySelector(`.vela-widget[data-widget-id="${wid}"] [data-fb-status]`);
    if(statusEl2)statusEl2.textContent='Fehler: '+e.message;
    console.warn('Football error:',e);
  }
}


function openQREdit(wid){
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="vela-overlay" id="qr-edit-bg">
    <div class="vela-modal" style="max-width:380px">
      <div class="modal-header"><span class="modal-title">QR-Code</span>
        <button class="modal-close" id="qr-edit-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="modal-body" style="display:flex;flex-direction:column;gap:12px">
        <div><div class="settings-label" style="margin-bottom:6px">URL oder Text</div>
          <input class="vela-input" id="qr-edit-input" value="${esc(STATE.widgets.items[wid]?.data?.url||'')}" placeholder="https://example.com" style="width:100%"/>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Quelle: api.qrserver.com (kostenlos, kein Account nötig)</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="qr-edit-cancel">Abbrechen</button>
        <button class="btn btn-primary" id="qr-edit-save">Speichern</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('qr-edit-close').addEventListener('click',close);
  document.getElementById('qr-edit-cancel').addEventListener('click',close);
  document.getElementById('qr-edit-bg').addEventListener('click',ev=>{if(ev.target.id==='qr-edit-bg')close();});
  document.getElementById('qr-edit-save').addEventListener('click',()=>{
    const val=document.getElementById('qr-edit-input').value.trim();
    if(val){
      STATE.widgets.items[wid].data.url=val;
      saveConfig(STATE);
      renderDynamic();
    }
    close();
    if(val)showToast(t('toastQRUpdated'),'success');
  });
  document.getElementById('qr-edit-input').focus();
  document.getElementById('qr-edit-input').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('qr-edit-save').click();});
}


function bindWidgetEvents(el){
  const wid=el.dataset.widgetId;
  const w=STATE.widgets?.items?.[wid];if(!w)return;
  // Edit/Delete buttons
  el.querySelectorAll('[data-waction]').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();e.stopPropagation();
    if(btn.dataset.waction==='edit')openWidgetEdit(wid);
    else if(btn.dataset.waction==='delete'){
      showConfirm(t('confirmDeleteWidget'),()=>{
        delete STATE.widgets.items[wid];
        saveConfig(STATE);renderDynamic();showToast(t('toastWidgetDeleted'));
      });
    }
  }));
  // Note: save on input
  if(w.type==='note'){
    el.querySelector(`#wt-${wid}`)?.addEventListener('input',e=>{
      STATE.widgets.items[wid].data.text=e.target.value;
      saveConfig(STATE);
    });
  }
  // Todo widget
  if(w.type==='todo'){
    function addTodo(){
      const inp=el.querySelector('[data-todo-input]');
      if(!inp||!inp.value.trim())return;
      const wd=STATE.widgets.items[wid];if(!wd)return;
      if(!wd.data.todos)wd.data.todos=[];
      wd.data.todos.push({text:inp.value.trim(),done:false,createdAt:Date.now()});
      inp.value='';saveConfig(STATE);updateWidgetInPlace(wid);
    }
    el.querySelector('[data-todo-add]')?.addEventListener('click',e=>{e.stopPropagation();addTodo();});
    el.querySelector('[data-todo-input]')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.stopPropagation();addTodo();}e.stopPropagation();});
    el.querySelector('[data-todo-input]')?.addEventListener('click',e=>e.stopPropagation());
    el.querySelectorAll('[data-todo-toggle]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd?.data.todos)return;
      wd.data.todos[+btn.dataset.todoToggle].done=!wd.data.todos[+btn.dataset.todoToggle].done;
      saveConfig(STATE);updateWidgetInPlace(wid);
    }));
    el.querySelectorAll('[data-todo-del]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd?.data.todos)return;
      wd.data.todos.splice(+btn.dataset.todoDel,1);
      saveConfig(STATE);updateWidgetInPlace(wid);
    }));
    el.querySelectorAll('[data-todo-text]').forEach(span=>span.addEventListener('dblclick',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd?.data.todos)return;
      const i=+span.dataset.todoText;
      const inp=document.createElement('input');
      inp.value=wd.data.todos[i].text;
      inp.style.cssText='flex:1;background:rgba(255,255,255,.08);border:1px solid var(--accent);border-radius:5px;padding:2px 6px;color:var(--text-primary);font-size:12px;font-family:var(--font-sans);outline:none';
      span.replaceWith(inp);inp.focus();inp.select();
      const save=()=>{if(inp.value.trim())wd.data.todos[i].text=inp.value.trim();saveConfig(STATE);updateWidgetInPlace(wid);};
      inp.addEventListener('blur',save);
      inp.addEventListener('keydown',e2=>{if(e2.key==='Enter')inp.blur();e2.stopPropagation();});
      inp.addEventListener('click',e2=>e2.stopPropagation());
    }));
  }
  // Pomodoro widget
  if(w.type==='pomodoro'){
    function pomodoroTick(){
      const wd=STATE.widgets.items[wid];if(!wd?.data.running)return;
      const phase=wd.data.phase||'work';
      const totalSecs=((phase==='work'?wd.data.workMins||25:phase==='longbreak'?15:wd.data.breakMins||5))*60;
      if(wd.data.startedAt){
        wd.data.elapsed=Math.min(totalSecs,Math.floor((Date.now()-wd.data.startedAt)/1000)+(wd.data.elapsedBeforeStart||0));
      } else {
        wd.data.elapsed=(wd.data.elapsed||0)+1;
      }
      if(wd.data.elapsed>=totalSecs){
        wd.data.running=false;wd.data.elapsed=0;wd.data.startedAt=null;
        if(phase==='work'){wd.data.sessions=(wd.data.sessions||0)+1;wd.data.phase=wd.data.sessions%4===0?'longbreak':'break';}
        else wd.data.phase='work';
        saveConfig(STATE);updateWidgetInPlace(wid);return;
      }
      updateWidgetInPlace(wid);
      wd._pomoTimer=setTimeout(pomodoroTick,1000);
    }
    el.querySelector('[data-pomo-toggle]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd)return;
      wd.data.running=!wd.data.running;
      if(wd.data.running){wd.data.elapsedBeforeStart=wd.data.elapsed||0;wd.data.startedAt=Date.now();clearTimeout(wd._pomoTimer);wd._pomoTimer=setTimeout(pomodoroTick,1000);}
      else clearTimeout(wd._pomoTimer);
      saveConfig(STATE);updateWidgetInPlace(wid);
    });
    el.querySelector('[data-pomo-reset]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd)return;
      clearTimeout(wd._pomoTimer);wd.data.running=false;wd.data.elapsed=0;wd.data.startedAt=null;
      saveConfig(STATE);updateWidgetInPlace(wid);
    });
    el.querySelectorAll('[data-pomo-phase]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd)return;
      clearTimeout(wd._pomoTimer);wd.data.phase=btn.dataset.pomoPhase;wd.data.running=false;wd.data.elapsed=0;wd.data.startedAt=null;
      saveConfig(STATE);updateWidgetInPlace(wid);
    }));
    if(w.data.running){clearTimeout(w._pomoTimer);w._pomoTimer=setTimeout(pomodoroTick,1000);}
  }
  // Corner resize handles
  if(EDIT_MODE){
    el.querySelectorAll(`.w-rh[data-wid="${wid}"]`).forEach(handle=>{
      handle.addEventListener('mousedown',e=>{
        e.preventDefault();e.stopPropagation();
        const startX=e.clientX,startY=e.clientY;
        const wdata=STATE.widgets.items[wid];
        const startCol=wdata?.colSpan||2;
        const startRow=wdata?.rowSpan||2;
        const grid=document.getElementById('card-grid');
        // Measure cell size from a 1x1 card or CSS variable
        let cellW=200,cellH=100,gap=16;
        const gridStyle=window.getComputedStyle(grid);
        gap=parseFloat(gridStyle.columnGap||gridStyle.gap)||16;
        // Find a 1×1 card for reference
        const ref1x1=grid?.querySelector('.vela-card:not(.vela-widget)');
        if(ref1x1){
          const r=ref1x1.getBoundingClientRect();
          cellW=Math.round(r.width); cellH=Math.round(r.height);
        } else {
          // Fallback: parse computed columns (works for explicit repeat)
          const colDefs=gridStyle.gridTemplateColumns.split(' ');
          const rowDefs=gridStyle.gridTemplateRows.split(' ');
          cellW=parseFloat(colDefs[0])||200;
          cellH=parseFloat(rowDefs[0])||100;
        }

        const wd=STATE.widgets.items[wid];
        const _mc=({iframe:1,football:1,weather5:1,password:1,calendar:1,rss:1,qrcode:1,speedtest:1,game2048:1})[wd?.type]||1;
        const _mr=({iframe:2,football:2,weather5:2,password:2,calendar:2,rss:2,qrcode:2,speedtest:2,game2048:3})[wd?.type]||1;
        const onMove=e2=>{
          const dx=e2.clientX-startX;
          const dy=e2.clientY-startY;
          const newCol=Math.max(_mc,Math.min(5,startCol+Math.round(dx/(cellW+gap))));
          const newRow=Math.max(_mr,Math.min(5,startRow+Math.round(dy/(cellH+gap))));
          if(wd&&(wd.colSpan!==newCol||wd.rowSpan!==newRow)){
            wd.colSpan=newCol;wd.rowSpan=newRow;
            const wEl=document.querySelector(`.vela-widget[data-widget-id="${wid}"]`);
            if(wEl){
              const gp=wd.gridPos||{col:1,row:1};
              wEl.style.setProperty('grid-column',`${gp.col} / span ${newCol}`,'important');
              wEl.style.setProperty('grid-row',`${gp.row} / span ${newRow}`,'important');
            }
          }
        };
        const onUp=()=>{
          document.removeEventListener('mousemove',onMove);
          document.removeEventListener('mouseup',onUp);
          saveConfig(STATE);renderDynamic();
        };
        document.addEventListener('mousemove',onMove);
        document.addEventListener('mouseup',onUp);
      });
      handle.addEventListener('mouseover',()=>{handle.style.opacity='1';handle.style.background='rgba(255,255,255,.08)';handle.style.borderRadius='10px 0 var(--radius-lg) 0';});
      handle.addEventListener('mouseout',()=>{handle.style.opacity='.35';handle.style.background='transparent';});
    });
  }


  // Password widget interactions
  if(w.type==='password'){
    function genPw(wid){
      const wd=STATE.widgets.items[wid];if(!wd)return;
      const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lower='abcdefghijklmnopqrstuvwxyz';
      const nums='0123456789';
      const syms='!@#$%^&*()_+-=[]{}|;:,.<>?';
      let chars='';
      if(wd.data.upper!==false)chars+=upper;
      if(wd.data.lower!==false)chars+=lower;
      if(wd.data.numbers!==false)chars+=nums;
      if(wd.data.symbols!==false)chars+=syms;
      if(!chars)chars=lower+nums;
      const len=wd.data.length||16;
      const arr=new Uint32Array(len);
      crypto.getRandomValues(arr);
      const pw=Array.from(arr).map(n=>chars[n%chars.length]).join('');
      STATE.widgets.items[wid].data.lastPw=pw;
      saveConfig(STATE);
      const out=el.querySelector(`#pw-out-${wid}`);
      if(out)out.textContent=pw;
    }
    el.querySelector('[data-pw-copy]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const pwid=e.currentTarget.dataset.pwid;
      const out=document.getElementById('pw-out-'+pwid);
      if(out)navigator.clipboard.writeText(out.textContent).catch(()=>{});
    });
    el.querySelector('[data-pw-gen]')?.addEventListener('click',e=>{
      e.stopPropagation();genPw(wid);
    });
    el.querySelectorAll('[data-pw-opt]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      const opt=btn.dataset.pwOpt;
      const cur=STATE.widgets.items[wid].data[opt]!==false;
      const next=!cur;
      STATE.widgets.items[wid].data[opt]=next;
      saveConfig(STATE);
      // Update button style without full re-render
      btn.style.borderColor=next?'var(--accent)':'rgba(255,255,255,.12)';
      btn.style.background=next?'color-mix(in srgb,var(--accent) 20%,transparent)':'transparent';
      btn.style.color=next?'var(--accent)':'var(--text-secondary)';
    }));
    el.querySelector('[data-pw-len]')?.addEventListener('input',e=>{
      e.stopPropagation();
      const v=parseInt(e.target.value);
      STATE.widgets.items[wid].data.length=v;
      const lbl=el.querySelector(`#pw-len-${wid}`);
      if(lbl)lbl.textContent=v;
      saveConfig(STATE);
    });
  }

  // QR widget
  if(w.type==='qrcode'){
    // Click on empty state also opens edit
    el.querySelector('[data-qr-empty]')?.addEventListener('click',e=>{
      e.stopPropagation();e.preventDefault();
      openQREdit(wid);
    });
    el.querySelector('[data-qr-edit]')?.addEventListener('click',e=>{
      e.stopPropagation();e.preventDefault();
      // Open dedicated QR edit modal (not the full widget edit)
      const root=document.getElementById('modal-root');
      const wrap=document.createElement('div');
      wrap.innerHTML=`<div class="vela-overlay" id="qr-edit-bg">
        <div class="vela-modal" style="max-width:380px">
          <div class="modal-header"><span class="modal-title">QR-Code bearbeiten</span>
            <button class="modal-close" id="qr-edit-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
          <div class="modal-body" style="display:flex;flex-direction:column;gap:12px">
            <div><div class="settings-label" style="margin-bottom:6px">URL oder Text</div>
              <input class="vela-input" id="qr-edit-input" value="${esc(STATE.widgets.items[wid]?.data?.url||'')}" placeholder="https://example.com" style="width:100%"/>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Quelle: api.qrserver.com (kostenlos)</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" id="qr-edit-cancel">Abbrechen</button>
            <button class="btn btn-primary" id="qr-edit-save">Speichern</button>
          </div>
        </div>
      </div>`;
      root.appendChild(wrap);
      const close=()=>root.removeChild(wrap);
      document.getElementById('qr-edit-close').addEventListener('click',close);
      document.getElementById('qr-edit-cancel').addEventListener('click',close);
      document.getElementById('qr-edit-bg').addEventListener('click',ev=>{if(ev.target.id==='qr-edit-bg')close();});
      document.getElementById('qr-edit-save').addEventListener('click',()=>{
        const val=document.getElementById('qr-edit-input').value.trim();
        const tit=document.getElementById('qr-edit-title').value.trim();
        if(val)STATE.widgets.items[wid].data.url=val;
        if(tit)STATE.widgets.items[wid].title=tit;
        saveConfig(STATE);
        // Only re-render this widget, not full page
        const wEl=document.querySelector(`.vela-widget[data-widget-id="${wid}"]`);
        const bodyEl=wEl?.querySelector('div[style*="flex-direction:column"]');
        if(bodyEl&&val){
          const size=200;
          const qrUrl=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(val)}&bgcolor=1a1a2e&color=ffffff&format=png&margin=10`;
          const img=wEl.querySelector('img[id^="qr-img"]');
          if(img)img.src=qrUrl;
        }
        close();showToast(t('toastQRUpdated'),'success');
      });
      document.getElementById('qr-edit-input').focus();
    });
    el.querySelector('[data-qr-dl]')?.addEventListener('click',async e=>{
      e.stopPropagation();e.preventDefault();
      const qrUrl=e.currentTarget.dataset.qrUrl;
      if(!qrUrl)return;
      try{
        const r=await fetch(qrUrl);
        const blob=await r.blob();
        const a=document.createElement('a');
        a.href=URL.createObjectURL(blob);
        a.download='qrcode.png';
        a.click();
        URL.revokeObjectURL(a.href);
      }catch(err){showToast(t('toastDownloadError'),'error');}
    });
  }

  // Football widget interactions
  if(w.type==='football'){
    // Bind onerror for team icons via JS (inline onerror blocked by CSP)
    el.querySelectorAll('img[data-fbimg]').forEach(img=>{
      img.addEventListener('error',()=>{ img.style.display='none'; });
    });
    el.querySelectorAll('[data-fb-tab]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      STATE.widgets.items[wid].data.tab=btn.dataset.fbTab;
      saveConfig(STATE);
      updateWidgetInPlace(wid);
    }));
    el.querySelector('[data-fb-league]')?.addEventListener('change',e=>{
      e.stopPropagation();
      STATE.widgets.items[wid].data.league=e.target.value;
      STATE.widgets.items[wid].data.matches=[];
      STATE.widgets.items[wid].data.table=[];
      STATE.widgets.items[wid].data.icons={};
      saveConfig(STATE);
      loadFootball(wid);
    });
    el.querySelector('[data-fb-refresh]')?.addEventListener('click',e=>{
      e.stopPropagation();loadFootball(wid);
    });
    // Favorite team buttons (edit mode only)
    el.querySelectorAll('[data-fb-fav]').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      const name=btn.dataset.fbFav;
      STATE.widgets.items[wid].data.fav=name;
      saveConfig(STATE);
      updateWidgetInPlace(wid);
    }));

    // Auto-refresh every 5 minutes
    if(w._fbTimer)clearInterval(w._fbTimer);
    w._fbTimer=setInterval(()=>{
      if(document.querySelector(`.vela-widget[data-widget-id="${wid}"]`))loadFootball(wid);
      else clearInterval(w._fbTimer);
    }, 5*60*1000);

    // Auto-load if no data
    if(!w.data.matches?.length)loadFootball(wid);
  }


  // RSS Auto-Refresh
  if(w.type==='rss'){
    if(w.data?.feedUrl&&!w.data?.items?.length) refreshRSSWidget(wid);
    if(w._rssTimer)clearInterval(w._rssTimer);
    w._rssTimer=setInterval(()=>{
      if(document.querySelector(`.vela-widget[data-widget-id="${wid}"]`))refreshRSSWidget(wid);
      else clearInterval(w._rssTimer);
    },30*60*1000);
  }

  // Weather 5-day
  if(w.type==='weather5'){
    if(!w.data.days?.length)loadWeather5(wid);
    // Auto-refresh every 30 min
    if(w._w5Timer)clearInterval(w._w5Timer);
    w._w5Timer=setInterval(()=>{if(document.querySelector(`.vela-widget[data-widget-id="${wid}"]`))loadWeather5(wid);else clearInterval(w._w5Timer);},30*60*1000);
  }

  // Crypto
  if(w.type==='crypto'){
    if(!w.data.coins?.length)loadCrypto(wid);
    if(w._cryptoTimer)clearInterval(w._cryptoTimer);
    w._cryptoTimer=setInterval(()=>{if(document.querySelector(`.vela-widget[data-widget-id="${wid}"]`))loadCrypto(wid);else clearInterval(w._cryptoTimer);},60*1000);
  }

  // My IP
  if(w.type==='myip'){
    if(!w.data.ip)loadMyIP(wid);
    el.querySelector('[data-ip-refresh]')?.addEventListener('click',e=>{
      e.stopPropagation();
      // Force reload — clear cached failure state first
      w.data.ip='';
      loadMyIP(wid);
    });
  }

  // Speedtest
  if(w.type==='speedtest'){
    // Clear stale running state only if this is a fresh mount (not an in-progress update).
    // We detect "stale" by checking if there's no active runSpeedtest promise on the widget object.
    if(w.data?.running && !w._speedtestActive){
      w.data.running=false;
      w.data.phase='done';
    }
    el.querySelector('[data-speed-run]')?.addEventListener('click',e=>{
      e.stopPropagation();
      if(!STATE.widgets.items[wid]?.data?.running)runSpeedtest(wid);
    });
  }

  // 2048
  if(w.type==='game2048'){
    const gameEl=el.querySelector('[data-2048]');
    if(!gameEl)return;
    // Init board if empty
    if(!w.data.board){
      const init=init2048();
      STATE.widgets.items[wid].data=init;
      saveConfig(STATE);updateWidgetInPlace(wid);return;
    }
    el.querySelector('[data-2048-new]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const init=init2048();
      STATE.widgets.items[wid].data=init;
      saveConfig(STATE);updateWidgetInPlace(wid);
    });
    function handleKey2048(e){
      const dirs={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'};
      const dir=dirs[e.key];if(!dir)return;
      e.preventDefault();e.stopPropagation();
      const wd=STATE.widgets.items[wid];if(!wd||wd.data.over)return;
      const {board,score,moved}=move2048(wd.data.board,dir,wd.data.score);
      if(!moved)return;
      addTile2048(board);
      wd.data.board=board;wd.data.score=score;
      wd.data.over=checkOver2048(board);
      saveConfig(STATE);updateWidgetInPlace(wid);
    }
    // Touch/swipe support
    let tx=0,ty=0;
    gameEl.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
    gameEl.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-tx;
      const dy=e.changedTouches[0].clientY-ty;
      if(Math.abs(dx)<20&&Math.abs(dy)<20)return;
      const dir=Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up');
      handleKey2048({key:'Arrow'+dir.charAt(0).toUpperCase()+dir.slice(1),preventDefault:()=>{},stopPropagation:()=>{}});
    },{passive:true});
    gameEl.addEventListener('keydown',handleKey2048);
    gameEl.focus();
  }

  // Calendar nav
  if(w.type==='calendar'){
    el.querySelector('[data-cal-prev]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const now=new Date();
      let m=w.data.viewMonth??now.getMonth(),y=w.data.viewYear||now.getFullYear();
      m--;if(m<0){m=11;y--;}
      STATE.widgets.items[wid].data.viewMonth=m;STATE.widgets.items[wid].data.viewYear=y;
      saveConfig(STATE);renderDynamic();
    });
    el.querySelector('[data-cal-next]')?.addEventListener('click',e=>{
      e.stopPropagation();
      const now=new Date();
      let m=w.data.viewMonth??now.getMonth(),y=w.data.viewYear||now.getFullYear();
      m++;if(m>11){m=0;y++;}
      STATE.widgets.items[wid].data.viewMonth=m;STATE.widgets.items[wid].data.viewYear=y;
      saveConfig(STATE);renderDynamic();
    });
    el.querySelectorAll('[data-cal-day]').forEach(d=>d.addEventListener('click',e=>{
      e.stopPropagation();
      const day=parseInt(d.dataset.calDay);
      const now=new Date();
      const month=w.data.viewMonth??now.getMonth();
      const year=w.data.viewYear||now.getFullYear();
      openCalendarEntry(wid,day,month,year);
    }));
  }
}

function openWidgetEdit(wid){
  const w=STATE.widgets?.items?.[wid];if(!w)return;
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  const isRSS=w.type==='rss';
  wrap.innerHTML=`<div class="vela-overlay" id="wedit-bg">
    <div class="vela-modal">
      <div class="modal-header"><span class="modal-title">${t('widgetEditTitle')}</span><button class="modal-close" id="we-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body"><div style="display:flex;flex-direction:column;gap:16px">
        <div><div class="settings-label" style="margin-bottom:6px">${t('cardTitleLabel')}</div>
          <input class="vela-input" id="we-title" value="${esc(w.title)}"/></div>
        <div><div class="settings-label" style="margin-bottom:6px">Größe (Spalten × Zeilen)</div>
          <div style="display:flex;gap:10px;align-items:center">
            <div style="flex:1"><div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Breite (1–5)</div>
              <div class="vela-segmented">${[1,2,3,4,5].map(n=>{const minC=({iframe:1,football:1,weather5:1,password:1,calendar:1,rss:1,qrcode:1,speedtest:1,game2048:1})[w.type]||1;const maxC=({game2048:1})[w.type]||5;const dis=n<minC||(typeof maxC!=='undefined'&&n>maxC);return`<button class="seg-btn${(w.colSpan||2)===n?' active':''}${dis?' disabled':''}" data-wspan="col-${n}" ${dis?'disabled style="opacity:.3;cursor:not-allowed"':''}>${n}×</button>`;}).join('')}</div></div>
            <div style="flex:1"><div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Höhe (1–5)</div>
              <div class="vela-segmented">${[1,2,3,4,5].map(n=>{const minR=({iframe:2,football:2,weather5:2,password:2,calendar:2,rss:2,qrcode:2,speedtest:2,game2048:3})[w.type]||1;const dis=n<minR;return`<button class="seg-btn${(w.rowSpan||2)===n?' active':''}${dis?' disabled':''}" data-wspan="row-${n}" ${dis?'disabled style="opacity:.3;cursor:not-allowed"':''}>${n}×</button>`;}).join('')}</div></div>
          </div></div>
        ${isRSS?`<div><div class="settings-label" style="margin-bottom:6px">RSS Feed URL</div>
          <input class="vela-input" id="we-rss-url" value="${esc(w.data.feedUrl||'')}" placeholder="https://example.com/feed.xml"/>
          <button class="btn btn-secondary" id="we-rss-load" style="margin-top:8px;font-size:12px">Feed laden</button>
          <div id="we-rss-status" style="font-size:11px;margin-top:6px;color:var(--text-secondary)"></div>
        </div>`:''}
        ${w.type==='iframe'?`<div style="display:flex;flex-direction:column;gap:12px">
          <div><div class="settings-label" style="margin-bottom:6px">URL</div>
            <input class="vela-input" id="we-iframe-url" value="${esc(w.data.url||'')}" placeholder="https://example.com"/>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">⚠️ Manche Seiten blockieren das Einbetten (X-Frame-Options)</div>
          </div>
          <div><div class="settings-label" style="margin-bottom:6px">Zoom (${Math.round((w.data.zoom||1)*100)}%)</div>
            <input type="range" id="we-iframe-zoom" min="25" max="150" value="${Math.round((w.data.zoom||1)*100)}" style="width:100%;accent-color:var(--accent)"/>
            <span id="we-iframe-zoom-val" style="font-size:11px;color:var(--text-secondary)">${Math.round((w.data.zoom||1)*100)}%</span>
          </div>
        </div>`:''}
        ${w.type==='qrcode'?`<div><div class="settings-label" style="margin-bottom:6px">URL oder Text</div>
          <input class="vela-input" id="we-qr-url" value="${esc(w.data.url||'')}" placeholder="https://example.com"/>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Quelle: api.qrserver.com (kostenlos)</div>
        </div>`:''}
        ${w.type==='crypto'?`<div>
          <div class="settings-label" style="margin-bottom:6px">Watchlist</div>
          <div id="we-crypto-tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;min-height:28px">
            ${(w.data.watchlist||['bitcoin','ethereum','solana']).map(id=>`<span data-coin-tag="${esc(id)}" style="display:inline-flex;align-items:center;gap:4px;font-size:11px;padding:3px 8px;border-radius:20px;background:color-mix(in srgb,var(--accent) 18%,transparent);border:1px solid color-mix(in srgb,var(--accent) 50%,transparent);color:var(--accent);cursor:default">${esc(id)}<button data-coin-remove="${esc(id)}" style="background:none;border:none;color:inherit;cursor:pointer;padding:0;line-height:1;font-size:13px;margin-left:1px;opacity:.7">×</button></span>`).join('')}
          </div>
          <div style="position:relative">
            <input class="vela-input" id="we-crypto-search" placeholder="Coin suchen (z.B. bitcoin, ethereum)..." autocomplete="off" style="padding-right:32px"/>
            <div id="we-crypto-suggestions" style="display:none;position:absolute;left:0;right:0;top:calc(100% + 4px);background:rgba(18,20,28,.97);border:1px solid rgba(255,255,255,.12);border-radius:10px;overflow-y:auto;max-height:180px;z-index:1000;box-shadow:0 8px 24px rgba(0,0,0,.5)"></div>
          </div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Kurs-Daten via CoinGecko (kostenlos, kein API-Key)</div>
        </div>`:''}
        ${w.type==='football'?`<div><div class="settings-label" style="margin-bottom:6px">Lieblingsverein</div>
          <input class="vela-input" id="we-fb-fav" value="${esc(w.data.fav||'')}" placeholder="Verein suchen..." autocomplete="off"/>
          <div id="we-fb-suggestions" style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;max-height:80px;overflow-y:auto"></div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Quelle: openligadb.de (kostenlos)</div>
        </div>`:''}
      </div></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="we-cancel">Abbrechen</button>
        <button class="btn btn-primary" id="we-save">Speichern</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('we-close').addEventListener('click',close);
  document.getElementById('we-cancel').addEventListener('click',close);
  // Iframe zoom slider
  document.getElementById('we-iframe-zoom')?.addEventListener('input',e=>{
    const v=document.getElementById('we-iframe-zoom-val');
    if(v)v.textContent=e.target.value+'%';
  });
  document.getElementById('wedit-bg').addEventListener('click',e=>{if(e.target.id==='wedit-bg')close()});
  // Football fav autocomplete
  if(w.type==='football'){
    const favInput=document.getElementById('we-fb-fav');
    const sugBox=document.getElementById('we-fb-suggestions');
    const teams=(STATE.widgets.items[wid]?.data?.table||[]).map(t=>t.name).filter(Boolean);
    function showSuggestions(q){
      if(!sugBox)return;
      const matches=q?teams.filter(t=>t.toLowerCase().includes(q.toLowerCase())):teams;
      sugBox.innerHTML=matches.map(t=>`<button style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid ${t===w.data.fav?'var(--accent)':'rgba(255,255,255,.12)'};background:${t===w.data.fav?'color-mix(in srgb,var(--accent) 20%,transparent)':'transparent'};color:${t===w.data.fav?'var(--accent)':'var(--text-secondary)'};cursor:pointer" data-team="${esc(t)}">${esc(t)}</button>`).join('');
      sugBox.querySelectorAll('[data-team]').forEach(btn=>btn.addEventListener('click',()=>{
        favInput.value=btn.dataset.team;
        showSuggestions('');
      }));
    }
    favInput?.addEventListener('input',e=>showSuggestions(e.target.value));
    showSuggestions('');
  }
  // Crypto autocomplete
  if(w.type==='crypto'){
    const tagsEl=document.getElementById('we-crypto-tags');
    const searchEl=document.getElementById('we-crypto-search');
    const sugEl=document.getElementById('we-crypto-suggestions');
    let currentWatchlist=[...(w.data.watchlist||['bitcoin','ethereum','solana'])];
    // Popular coins as fallback list
    const POPULAR=[
      {id:'bitcoin',symbol:'BTC',name:'Bitcoin'},
      {id:'ethereum',symbol:'ETH',name:'Ethereum'},
      {id:'solana',symbol:'SOL',name:'Solana'},
      {id:'xrp',symbol:'XRP',name:'XRP'},
      {id:'cardano',symbol:'ADA',name:'Cardano'},
      {id:'dogecoin',symbol:'DOGE',name:'Dogecoin'},
      {id:'polkadot',symbol:'DOT',name:'Polkadot'},
      {id:'chainlink',symbol:'LINK',name:'Chainlink'},
      {id:'litecoin',symbol:'LTC',name:'Litecoin'},
      {id:'uniswap',symbol:'UNI',name:'Uniswap'},
      {id:'avalanche-2',symbol:'AVAX',name:'Avalanche'},
      {id:'tron',symbol:'TRX',name:'TRON'},
      {id:'stellar',symbol:'XLM',name:'Stellar'},
      {id:'shiba-inu',symbol:'SHIB',name:'Shiba Inu'},
      {id:'monero',symbol:'XMR',name:'Monero'},
      {id:'cosmos',symbol:'ATOM',name:'Cosmos'},
      {id:'near',symbol:'NEAR',name:'NEAR Protocol'},
      {id:'aptos',symbol:'APT',name:'Aptos'},
      {id:'sui',symbol:'SUI',name:'Sui'},
      {id:'pepe',symbol:'PEPE',name:'Pepe'},
    ];
    let allCoins=POPULAR;
    // Try to load search list from CoinGecko
    fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
      .then(r=>r.ok?r.json():null)
      .then(d=>{if(d&&d.length)allCoins=d.map(c=>({id:c.id,symbol:c.symbol.toUpperCase(),name:c.name}));})
      .catch(()=>{});

    function renderTags(){
      tagsEl.innerHTML=currentWatchlist.map(id=>`<span data-coin-tag="${esc(id)}" style="display:inline-flex;align-items:center;gap:4px;font-size:11px;padding:3px 8px;border-radius:20px;background:color-mix(in srgb,var(--accent) 18%,transparent);border:1px solid color-mix(in srgb,var(--accent) 50%,transparent);color:var(--accent);cursor:default">${esc(id)}<button data-coin-remove="${esc(id)}" style="background:none;border:none;color:inherit;cursor:pointer;padding:0;line-height:1;font-size:13px;margin-left:1px;opacity:.7">×</button></span>`).join('');
      tagsEl.querySelectorAll('[data-coin-remove]').forEach(btn=>{
        btn.addEventListener('click',e=>{
          e.stopPropagation();
          currentWatchlist=currentWatchlist.filter(id=>id!==btn.dataset.coinRemove);
          renderTags();
        });
      });
    }
    renderTags();

    function showCoinSuggestions(q){
      if(!q){sugEl.style.display='none';return;}
      const ql=q.toLowerCase();
      const matches=allCoins.filter(c=>
        c.id.includes(ql)||c.name.toLowerCase().includes(ql)||(c.symbol&&c.symbol.toLowerCase().includes(ql))
      ).slice(0,10);
      if(!matches.length){sugEl.style.display='none';return;}
      sugEl.innerHTML=matches.map(c=>`<div data-coin-pick="${esc(c.id)}" style="display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:background .1s">
        <span style="font-size:11px;font-weight:700;color:var(--accent);width:36px;flex-shrink:0">${esc(c.symbol||'')}</span>
        <span style="font-size:12px;color:var(--text-primary);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(c.name)}</span>
        <span style="font-size:10px;color:var(--text-tertiary)">${esc(c.id)}</span>
      </div>`).join('');
      sugEl.style.display='block';
      sugEl.querySelectorAll('[data-coin-pick]').forEach(el=>{
        el.addEventListener('mouseenter',()=>el.style.background='rgba(255,255,255,.07)');
        el.addEventListener('mouseleave',()=>el.style.background='');
        el.addEventListener('click',()=>{
          const id=el.dataset.coinPick;
          if(!currentWatchlist.includes(id))currentWatchlist.push(id);
          renderTags();
          searchEl.value='';
          sugEl.style.display='none';
        });
      });
    }
    searchEl?.addEventListener('input',e=>showCoinSuggestions(e.target.value));
    searchEl?.addEventListener('blur',()=>setTimeout(()=>{sugEl.style.display='none';},150));
    searchEl?.addEventListener('focus',()=>{if(searchEl.value)showCoinSuggestions(searchEl.value);});
    // Store ref so save handler can read it
    wrap._cryptoWatchlist=currentWatchlist;
    // Proxy so save handler always sees latest array
    Object.defineProperty(wrap,'_cryptoWatchlist',{get:()=>currentWatchlist,configurable:true});
  }

  wrap.querySelectorAll('[data-wspan]').forEach(btn=>btn.addEventListener('click',()=>{
    wrap.querySelectorAll(`[data-wspan^="${btn.dataset.wspan.split('-')[0]}"]`).forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }));
  // RSS load
  if(isRSS){
    document.getElementById('we-rss-load')?.addEventListener('click',async()=>{
      const url=document.getElementById('we-rss-url').value.trim();
      if(!url)return;
      const st=document.getElementById('we-rss-status');
      st.textContent=t('wLoading');st.style.color='var(--text-secondary)';
      try{
        function parseXML(text){
          const parser=new DOMParser();
          const xml=parser.parseFromString(text,'text/xml');
          // Check for parse error
          if(xml.querySelector('parsererror'))throw new Error('Ungültiges XML');
          const items=[...xml.querySelectorAll('item, entry')];
          if(!items.length)throw new Error('Keine Artikel gefunden');
          return items.slice(0,20).map(it=>{
            const title=it.querySelector('title')?.textContent?.trim()||'Kein Titel';
            const linkEl=it.querySelector('link');
            const link=linkEl?.getAttribute('href')||linkEl?.textContent?.trim()||'';
            const pubDate=it.querySelector('pubDate,published,updated')?.textContent?.trim()||'';
            return{title,url:link,date:pubDate?new Date(pubDate).toLocaleDateString('de-DE'):''};
          });
        }
        // Firefox extensions can fetch cross-origin directly with host_permissions
        // Try direct fetch first, then proxies as fallback
        const fetchers=[
          // Direct (works in Firefox extension with host_permissions: <all_urls>)
          ()=>fetch(url,{headers:{'Accept':'application/rss+xml,application/atom+xml,text/xml,*/*'}})
               .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.text();}),
          // allorigins
          ()=>fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
               .then(r=>r.json()).then(d=>{if(!d?.contents)throw new Error();return d.contents;}),
          // corsproxy.io
          ()=>fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`)
               .then(r=>{if(!r.ok)throw new Error();return r.text();}),
        ];
        let xmlText=null,lastErr='Feed nicht erreichbar';
        for(const fn of fetchers){
          try{xmlText=await fn();if(xmlText)break;}
          catch(e){lastErr=e.message;}
        }
        if(!xmlText)throw new Error(lastErr);
        const parsed=parseXML(xmlText);
        STATE.widgets.items[wid].data.feedUrl=url;
        STATE.widgets.items[wid].data.items=parsed;
        st.textContent=`✓ ${parsed.length} Artikel geladen`;st.style.color='#22c55e';
      }catch(e){st.textContent='Fehler: '+e.message;st.style.color='#f87171';}
    });
  }
  document.getElementById('we-save').addEventListener('click',()=>{
    const _minC=({iframe:1,football:1,weather5:1,password:1,calendar:1,rss:1,qrcode:1,speedtest:1,game2048:1})[w.type]||1;
    const _minR=({iframe:2,football:2,weather5:2,password:2,calendar:2,rss:2,qrcode:2,speedtest:2,game2048:3})[w.type]||1;
    const colSpan=Math.max(_minC,parseInt(wrap.querySelector('[data-wspan^="col-"].active')?.dataset.wspan.split('-')[1]||w.colSpan||2));
    const rowSpan=Math.max(_minR,parseInt(wrap.querySelector('[data-wspan^="row-"].active')?.dataset.wspan.split('-')[1]||w.rowSpan||2));
    STATE.widgets.items[wid].title=document.getElementById('we-title').value.trim()||w.title;
    STATE.widgets.items[wid].colSpan=colSpan;
    STATE.widgets.items[wid].rowSpan=rowSpan;
    if(isRSS)STATE.widgets.items[wid].data.feedUrl=document.getElementById('we-rss-url').value.trim();
    if(w.type==='iframe'){
      const v=document.getElementById('we-iframe-url')?.value.trim();if(v)STATE.widgets.items[wid].data.url=v;
      const z=document.getElementById('we-iframe-zoom')?.value;if(z)STATE.widgets.items[wid].data.zoom=parseInt(z)/100;
    }
    if(w.type==='qrcode'){const v=document.getElementById('we-qr-url')?.value.trim();if(v)STATE.widgets.items[wid].data.url=v;}
    if(w.type==='football'){const v=document.getElementById('we-fb-fav')?.value.trim();STATE.widgets.items[wid].data.fav=v;}
    if(w.type==='crypto'){const wl=wrap._cryptoWatchlist;if(wl&&wl.length){STATE.widgets.items[wid].data.watchlist=wl;STATE.widgets.items[wid].data.coins=[];loadCrypto(wid);}}

    saveConfig(STATE);renderDynamic();close();showToast(t('toastWidgetSaved'),'success');
  });
}

function openCalendarEntry(wid,day,month,year){
  const w=STATE.widgets?.items?.[wid];if(!w)return;
  const existing=w.data.entries?.find(e=>e.day===day&&e.month===month&&e.year===year);
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  const monthNames=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  wrap.innerHTML=`<div class="vela-overlay" id="cal-bg">
    <div class="vela-modal" style="max-width:380px">
      <div class="modal-header"><span class="modal-title">${day}. ${monthNames[month]} ${year}</span><button class="modal-close" id="cal-close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div class="modal-body">
        <input class="vela-input" id="cal-text" value="${esc(existing?.text||'')}" placeholder="Eintrag hinzufügen..." style="width:100%"/>
      </div>
      <div class="modal-footer">
        ${existing?'<button class="btn btn-ghost" id="cal-delete" style="color:#f87171">Löschen</button>':'<div></div>'}
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" id="cal-cancel">Abbrechen</button>
          <button class="btn btn-primary" id="cal-save">Speichern</button>
        </div>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('cal-close').addEventListener('click',close);
  document.getElementById('cal-cancel').addEventListener('click',close);
  document.getElementById('cal-bg').addEventListener('click',e=>{if(e.target.id==='cal-bg')close()});
  document.getElementById('cal-delete')?.addEventListener('click',()=>{
    STATE.widgets.items[wid].data.entries=(w.data.entries||[]).filter(e=>!(e.day===day&&e.month===month&&e.year===year));
    saveConfig(STATE);renderDynamic();close();
  });
  document.getElementById('cal-save').addEventListener('click',()=>{
    const text=document.getElementById('cal-text').value.trim();
    if(!text){close();return;}
    if(!STATE.widgets.items[wid].data.entries)STATE.widgets.items[wid].data.entries=[];
    const idx=STATE.widgets.items[wid].data.entries.findIndex(e=>e.day===day&&e.month===month&&e.year===year);
    if(idx>=0)STATE.widgets.items[wid].data.entries[idx].text=text;
    else STATE.widgets.items[wid].data.entries.push({day,month,year,text});
    saveConfig(STATE);renderDynamic();close();showToast(t('toastEntrySaved'),'success');
  });
  document.getElementById('cal-text').focus();
}

async function loadHistoryWidget(wid){
  try{
    const items=await browser.history.search({text:'',maxResults:15,startTime:Date.now()-7*24*60*60*1000});
    STATE.widgets.items[wid].data.items=items.map(h=>({title:h.title||h.url,url:h.url}));
    saveConfig(STATE);renderDynamic();
  }catch(e){showToast(t('toastHistoryError'),'error');}
}

// ── Drag & Drop ──
let dragSrcId = null;

function setupDragDrop(boardId) {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  const showBoardDropZones = show =>
    document.querySelectorAll('.bpill-drop').forEach(dz =>
      dz.style.display = show ? 'flex' : 'none');

  let dragIsWidget = false;
  let dragOffsetC = 0, dragOffsetR = 0;
  let dropAnchor = { col: 1, row: 1 };
  let _dzCols = 0, _dzRows = 0;
  let overlayEl = null, previewEl = null;
  let edgeRAF = null, edgeDir = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0 };
  let expandZoneR = null, expandZoneB = null;
  let _docDragover = null; // document-level fallback listener ref

  function cs() {
    const style = window.getComputedStyle(grid);
    const gap = parseFloat(style.columnGap || style.gap) || 16;
    const w = parseFloat(grid.style.getPropertyValue('--card-col-w')) || 200;
    const h = parseFloat(grid.style.getPropertyValue('--card-row-h')) || 100;
    return { w, h, gap };
  }

  function pxToCell(px, size, gap) {
    return Math.max(1, Math.floor(px / (size + gap)) + 1);
  }

  function mouseToGrid(clientX, clientY) {
    const rect = grid.getBoundingClientRect();
    const style = window.getComputedStyle(grid);
    const padL = parseFloat(style.paddingLeft) || 28;
    const padT = parseFloat(style.paddingTop) || 24;
    return {
      x: clientX - rect.left + grid.scrollLeft - padL,
      y: clientY - rect.top + grid.scrollTop - padT
    };
  }

  function refreshDZ() {
    // Start from the board's stored grid size — not just used cells.
    // This ensures _dz matches what renderGrid already rendered.
    const board = STATE.boards[boardId];
    _dzCols = getBoardCols(board);
    _dzRows = getBoardRows(board);
  }

  function applyDZ() {
    const { w, h, gap } = cs();
    const colW = grid.style.getPropertyValue('--card-col-w') || '200px';
    const rowH = grid.style.getPropertyValue('--card-row-h') || '100px';
    const style = window.getComputedStyle(grid);
    const padL = parseFloat(style.paddingLeft) || 28;
    const padR = parseFloat(style.paddingRight) || 28;
    const padT = parseFloat(style.paddingTop) || 24;
    const padB = parseFloat(style.paddingBottom) || 40;
    // Extra 48px ensures the expandZone strip (32px + 16px margin) is always
    // inside the scrollable area and reachable by dragging.
    const EZ = 48;
    grid.style.gridTemplateColumns = 'repeat(' + _dzCols + ',' + colW + ')';
    grid.style.gridTemplateRows = 'repeat(' + _dzRows + ',' + rowH + ')';
    grid.style.minWidth  = (padL + _dzCols * w + Math.max(0, _dzCols - 1) * gap + padR + EZ) + 'px';
    grid.style.minHeight = (padT + _dzRows * h + Math.max(0, _dzRows - 1) * gap + padB + EZ) + 'px';
    if (overlayEl) {
      // Overlay covers only the cell area — expandZone sits in the EZ strip beyond it.
      const oW = (padL + _dzCols * w + Math.max(0, _dzCols-1) * gap + padR);
      const oH = (padT + _dzRows * h + Math.max(0, _dzRows-1) * gap + padB);
      overlayEl.style.width  = oW + 'px';
      overlayEl.style.height = oH + 'px';
    }
  }

  function showSnapDots() {
    grid.querySelectorAll('.vela-card,.vela-widget').forEach(el => {
      if (el.dataset.cardId === dragSrcId || el.dataset.widgetId === dragSrcId) return;
      ['top:-3px;left:-3px','top:-3px;right:-3px','bottom:-3px;left:-3px','bottom:-3px;right:-3px'].forEach(pos => {
        const d = document.createElement('div');
        d.className = 'sd-snap-dot';
        d.style.cssText = 'position:absolute;width:5px;height:5px;border-radius:50%;' +
          'background:var(--accent);pointer-events:none;z-index:10;' +
          'box-shadow:0 0 5px var(--accent);' + pos + ';';
        el.appendChild(d);
      });
    });
  }

  function hideSnapDots() {
    document.querySelectorAll('.sd-snap-dot').forEach(d => d.remove());
  }

  function updatePreview(col, row) {
    if (!previewEl) return;
    const { w, h, gap } = cs();
    const style = window.getComputedStyle(grid);
    const padL = parseFloat(style.paddingLeft) || 28;
    const padT = parseFloat(style.paddingTop) || 24;
    let spanC = 1, spanR = 1;
    if (dragIsWidget) {
      const ww = STATE.widgets && STATE.widgets.items && STATE.widgets.items[dragSrcId];
      if (ww) { spanC = ww.colSpan || 1; spanR = ww.rowSpan || 1; }
    }
    previewEl.style.display = 'block';
    previewEl.style.left = (padL + (col - 1) * (w + gap)) + 'px';
    previewEl.style.top = (padT + (row - 1) * (h + gap)) + 'px';
    previewEl.style.width = (spanC * w + (spanC - 1) * gap) + 'px';
    previewEl.style.height = (spanR * h + (spanR - 1) * gap) + 'px';
  }

  function calcAnchor(clientX, clientY) {
    if (!dragSrcId) return;
    // Ensure workspace size is initialized (might be called before buildOverlay)
    if (_dzCols < 1 || _dzRows < 1) refreshDZ();
    if (_dzCols < 1) return; // still not ready, keep current dropAnchor
    const { x, y } = mouseToGrid(clientX, clientY);
    const { w, h, gap } = cs();
    let spanC = 1, spanR = 1;
    if (dragIsWidget) {
      const ww = STATE.widgets && STATE.widgets.items && STATE.widgets.items[dragSrcId];
      if (ww) { spanC = ww.colSpan || 1; spanR = ww.rowSpan || 1; }
    }
    const rawCol = pxToCell(x, w, gap) - dragOffsetC;
    const rawRow = pxToCell(y, h, gap) - dragOffsetR;
    const col = Math.max(1, Math.min(rawCol, GRID_COLS() - spanC + 1));
    const row = Math.max(1, Math.min(rawRow, GRID_ROWS() - spanR + 1));
    // Expand workspace if cursor went beyond current dz bounds
    if (col + spanC - 1 > _dzCols && _dzCols < GRID_COLS()) _dzCols = Math.min(GRID_COLS(), col + spanC + 1);
    if (row + spanR - 1 > _dzRows && _dzRows < GRID_ROWS()) _dzRows = Math.min(GRID_ROWS(), row + spanR + 1);
    dropAnchor = { col, row };
    updatePreview(col, row);
  }

  function edgeTick() {
    if (edgeDir.x === 0 && edgeDir.y === 0) { edgeRAF = null; return; }
    grid.scrollLeft += edgeDir.x;
    grid.scrollTop  += edgeDir.y;
    // Keep overlay in sync with scroll position — without this the overlay
    // shrinks behind the scrolled content and dragover stops firing.
    if (overlayEl) {
      // Recalculate cell-only size (without EZ buffer) after scroll.
      const { w: ew, h: eh, gap: eg } = cs();
      const es = window.getComputedStyle(grid);
      const epL = parseFloat(es.paddingLeft)||28, epR = parseFloat(es.paddingRight)||28;
      const epT = parseFloat(es.paddingTop)||24,  epB = parseFloat(es.paddingBottom)||40;
      overlayEl.style.width  = (epL + _dzCols*ew + Math.max(0,_dzCols-1)*eg + epR) + 'px';
      overlayEl.style.height = (epT + _dzRows*eh + Math.max(0,_dzRows-1)*eg + epB) + 'px';
    }
    calcAnchor(lastMouse.x, lastMouse.y);
    edgeRAF = requestAnimationFrame(edgeTick);
  }

  function updateEdgeScroll(clientX, clientY) {
    const rect = grid.getBoundingClientRect();
    // Wider trigger zones (80px on all sides) and faster speed (14px/frame)
    // make edge-scrolling reliable across the full 20×40 grid.
    const ZL = 80, ZR = 80, ZT = 80, ZB = 80, S = 14;
    let x = 0, y = 0;
    if (clientX - rect.left < ZL) x = -S;
    else if (rect.right - clientX < ZR && grid.scrollLeft < grid.scrollWidth - grid.clientWidth) x = S;
    if (clientY - rect.top < ZT) y = -S;
    else if (rect.bottom - clientY < ZB && grid.scrollTop < grid.scrollHeight - grid.clientHeight) y = S;
    edgeDir = { x, y };
    if ((x !== 0 || y !== 0) && !edgeRAF) edgeRAF = requestAnimationFrame(edgeTick);
  }

  function buildExpandZones() {
    removeExpandZones();
    function pos() {
      const { w, h, gap } = cs();
      const style = window.getComputedStyle(grid);
      const padL = parseFloat(style.paddingLeft) || 28;
      const padT = parseFloat(style.paddingTop) || 24;
      const base = 'position:absolute;z-index:5;pointer-events:auto;cursor:crosshair;' +
        'background:color-mix(in srgb,var(--accent) 8%,transparent);' +
        'border:1.5px dashed color-mix(in srgb,var(--accent) 35%,transparent);' +
        'border-radius:10px;display:flex;align-items:center;justify-content:center;transition:background .15s;';
      const lbl = '<span style="color:color-mix(in srgb,var(--accent) 55%,transparent);font-size:20px;font-weight:300;pointer-events:none">+</span>';
      expandZoneR.style.cssText = base + 'top:' + padT + 'px;left:' + (padL + _dzCols * (w + gap)) + 'px;width:32px;bottom:0;';
      expandZoneB.style.cssText = base + 'left:' + padL + 'px;top:' + (padT + _dzRows * (h + gap)) + 'px;height:32px;right:0;';
      if (!expandZoneR.innerHTML) expandZoneR.innerHTML = lbl;
      if (!expandZoneB.innerHTML) expandZoneB.innerHTML = lbl;
    }
    expandZoneR = document.createElement('div');
    expandZoneB = document.createElement('div');
    pos();
    grid.appendChild(expandZoneR);
    grid.appendChild(expandZoneB);

    const hl = (el, on) => {
      el.style.background = on
        ? 'color-mix(in srgb,var(--accent) 22%,transparent)'
        : 'color-mix(in srgb,var(--accent) 8%,transparent)';
    };
    // Helper: grow the board's stored grid size, persist, and update the live grid.
    function growCols() {
      const board = STATE.boards[boardId];
      if (!board) return;
      const newCols = Math.min(GRID_COLS_MAX, (board.gridCols || GRID_COLS_DEFAULT) + 1);
      if (newCols === (board.gridCols || GRID_COLS_DEFAULT)) return; // already at max
      board.gridCols = newCols;
      _dzCols = newCols;
      // Update grid template immediately so the new column has the right width.
      const { w, gap } = cs();
      const colW = grid.style.getPropertyValue('--card-col-w') || '200px';
      grid.style.gridTemplateColumns = 'repeat(' + newCols + ',' + colW + ')';
      applyDZ();
      pos();
    }
    function growRows() {
      const board = STATE.boards[boardId];
      if (!board) return;
      const newRows = Math.min(GRID_ROWS_MAX, (board.gridRows || GRID_ROWS_DEFAULT) + 1);
      if (newRows === (board.gridRows || GRID_ROWS_DEFAULT)) return;
      board.gridRows = newRows;
      _dzRows = newRows;
      const rowH = grid.style.getPropertyValue('--card-row-h') || '100px';
      grid.style.gridTemplateRows = 'repeat(' + newRows + ',' + rowH + ')';
      applyDZ();
      pos();
    }

    expandZoneR.addEventListener('dragover', e => { e.preventDefault(); e.stopPropagation(); hl(expandZoneR,true); growCols(); });
    expandZoneR.addEventListener('dragleave', () => hl(expandZoneR,false));
    expandZoneR.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); hl(expandZoneR,false); commitDrop(dropAnchor.col,dropAnchor.row); });
    expandZoneB.addEventListener('dragover', e => { e.preventDefault(); e.stopPropagation(); hl(expandZoneB,true); growRows(); });
    expandZoneB.addEventListener('dragleave', () => hl(expandZoneB,false));
    expandZoneB.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); hl(expandZoneB,false); commitDrop(dropAnchor.col,dropAnchor.row); });
  }

  function removeExpandZones() {
    expandZoneR && expandZoneR.remove(); expandZoneR = null;
    expandZoneB && expandZoneB.remove(); expandZoneB = null;
  }

  function buildOverlay() {
    removeOverlay();
    // Start from the board's current stored grid size — the expandZone grows it further.
    // This keeps the overlay exactly as large as the current board workspace.
    const board = STATE.boards[boardId];
    _dzCols = getBoardCols(board);
    _dzRows = getBoardRows(board);
    grid._savedCols = grid.style.gridTemplateColumns;
    grid._savedRows = grid.style.gridTemplateRows;
    applyDZ();

    overlayEl = document.createElement('div');
    overlayEl.style.cssText = 'position:absolute;left:0;top:0;z-index:4;';
    // Overlay covers only the grid cells — NOT the expandZone strip (last 48px).
    // The expandZone has z-index:5 and sits in that strip, so it must not be covered.
    const { w: ow, h: oh, gap: og } = cs();
    const ostyle = window.getComputedStyle(grid);
    const opadL = parseFloat(ostyle.paddingLeft) || 28;
    const opadR = parseFloat(ostyle.paddingRight) || 28;
    const opadT = parseFloat(ostyle.paddingTop) || 24;
    const opadB = parseFloat(ostyle.paddingBottom) || 40;
    overlayEl.style.width  = (opadL + _dzCols * ow + Math.max(0,_dzCols-1)*og + opadR) + 'px';
    overlayEl.style.height = (opadT + _dzRows * oh + Math.max(0,_dzRows-1)*og + opadB) + 'px';
    grid.appendChild(overlayEl);

    previewEl = document.createElement('div');
    previewEl.style.cssText = 'position:absolute;pointer-events:none;z-index:3;display:none;' +
      'border-radius:var(--radius-lg);' +
      'border:2px dashed color-mix(in srgb,var(--accent) 70%,transparent);' +
      'background:color-mix(in srgb,var(--accent) 12%,transparent);' +
      'transition:left .05s,top .05s,width .05s,height .05s;';
    grid.appendChild(previewEl);

    overlayEl.addEventListener('dragover', e => {
      e.preventDefault();
      // Guard against Firefox bug: first dragover can fire with clientX=0/clientY=0
      if (e.clientX > 0 || e.clientY > 0) lastMouse = { x: e.clientX, y: e.clientY };
      calcAnchor(lastMouse.x, lastMouse.y);
      updateEdgeScroll(lastMouse.x, lastMouse.y);
    });
    overlayEl.addEventListener('drop', e => {
      e.preventDefault(); e.stopPropagation();
      commitDrop(dropAnchor.col, dropAnchor.row);
    });
    overlayEl.addEventListener('dragleave', e => {
      if (!grid.contains(e.relatedTarget)) edgeDir = { x:0, y:0 };
    });

    buildExpandZones();
    showBoardDropZones(true);
    showSnapDots();

    // Document-level fallback: keeps lastMouse current even when the cursor
    // briefly leaves the overlay (e.g. passing over a card or widget element).
    // Also drives edge-scroll reliably across the full scrollable area.
    _docDragover = function(e) {
      if (!dragSrcId) return;
      if (e.clientX > 0 || e.clientY > 0) lastMouse = { x: e.clientX, y: e.clientY };
      updateEdgeScroll(e.clientX, e.clientY);
    };
    document.addEventListener('dragover', _docDragover);
  }

  function removeOverlay() {
    if (edgeRAF) { cancelAnimationFrame(edgeRAF); edgeRAF = null; }
    edgeDir = { x:0, y:0 };
    overlayEl && overlayEl.remove(); overlayEl = null;
    previewEl && previewEl.remove(); previewEl = null;
    removeExpandZones();
    hideSnapDots();
    showBoardDropZones(false);
    if (grid._savedCols) grid.style.gridTemplateColumns = grid._savedCols;
    if (grid._savedRows) grid.style.gridTemplateRows = grid._savedRows;
    grid._savedCols = ''; grid._savedRows = '';
    // Remove document-level fallback listener
    if (_docDragover) { document.removeEventListener('dragover', _docDragover); _docDragover = null; }
  }

  function cells(col, row, cs, rs) {
    const s = new Set();
    for (let dc=0;dc<cs;dc++) for(let dr=0;dr<rs;dr++) s.add((col+dc)+','+(row+dr));
    return s;
  }

  function resolveCollisions(targetCol, targetRow) {
    const board = STATE.boards[boardId];
    const all = [];
    board && board.cardIds && board.cardIds.forEach(cid => {
      const p = STATE.cards[cid] && STATE.cards[cid].gridPos;
      if (p) all.push({ type:'card', id:cid, col:p.col, row:p.row, cs:1, rs:1 });
    });
    Object.values((STATE.widgets && STATE.widgets.items) || {}).forEach(ww => {
      if (ww.boardId !== boardId || !ww.gridPos) return;
      all.push({ type:'widget', id:ww.id, col:ww.gridPos.col, row:ww.gridPos.row, cs:ww.colSpan||1, rs:ww.rowSpan||1 });
    });

    const srcType = dragIsWidget ? 'widget' : 'card';
    const src = all.find(item => item.id === dragSrcId && item.type === srcType);
    if (!src) return [];

    const others = all.filter(item => !(item.id === src.id && item.type === src.type));
    const targetCells = cells(targetCol, targetRow, src.cs, src.rs);
    const colliders = others.filter(item => {
      const c = cells(item.col, item.row, item.cs, item.rs);
      for (const k of c) if (targetCells.has(k)) return true;
      return false;
    });

    const moves = [{ type:src.type, id:src.id, col:targetCol, row:targetRow }];
    const planned = new Set(targetCells);

    colliders.forEach((collider, i) => {
      if (i === 0) {
        // Swap: collider moves to the source's original position.
        // Check against ALL other elements (not just `planned`) to avoid
        // placing the collider on top of a third element.
        const swapCells = cells(src.col, src.row, collider.cs, collider.rs);
        const otherOcc = new Set();
        others.filter(o => o.id !== collider.id).forEach(o => {
          cells(o.col, o.row, o.cs, o.rs).forEach(k => otherOcc.add(k));
        });
        let free = true;
        for (const k of swapCells) {
          if (otherOcc.has(k)) { free = false; break; }
        }
        if (free) {
          moves.push({ type:collider.type, id:collider.id, col:src.col, row:src.row });
          for (const c of swapCells) planned.add(c);
          return;
        }
      }
      const movedIds = new Set(moves.map(m => m.id));
      const occ = new Set(planned);
      others.forEach(item => {
        if (movedIds.has(item.id)) return;
        cells(item.col, item.row, item.cs, item.rs).forEach(k => occ.add(k));
      });
      let placed = null;
      outer: for (let r=1;r<=GRID_ROWS()&&!placed;r++)
        for (let c=1;c<=GRID_COLS()&&!placed;c++) {
          const tc = cells(c, r, collider.cs, collider.rs);
          for (const k of tc) if (occ.has(k)) continue outer;
          placed = { col:c, row:r };
        }
      if (placed) {
        moves.push({ type:collider.type, id:collider.id, col:placed.col, row:placed.row });
        cells(placed.col, placed.row, collider.cs, collider.rs).forEach(k => planned.add(k));
      }
    });
    return moves;
  }

  function applyMoves(moves) {
    moves.forEach(function(m) {
      if (m.type === 'widget' && STATE.widgets && STATE.widgets.items && STATE.widgets.items[m.id])
        STATE.widgets.items[m.id].gridPos = { col:m.col, row:m.row };
      else if (m.type === 'card' && STATE.cards && STATE.cards[m.id])
        STATE.cards[m.id].gridPos = { col:m.col, row:m.row };
    });
  }

  function commitDrop(col, row) {
    if (!dragSrcId) return;
    const moves = resolveCollisions(col, row);
    if (moves.length > 0) applyMoves(moves);
    // Persist any grid growth that happened via expandZone during this drag.
    const board = STATE.boards[boardId];
    if (board) {
      if (_dzCols > (board.gridCols || GRID_COLS_DEFAULT)) board.gridCols = _dzCols;
      if (_dzRows > (board.gridRows || GRID_ROWS_DEFAULT)) board.gridRows = _dzRows;
    }
    dragSrcId = null; dragIsWidget = false;
    removeOverlay();
    saveConfig(STATE);
    renderDynamic();
  }

  function bindCard(el) {
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', function(e) {
      if (!EDIT_MODE) { e.preventDefault(); return; }
      // Do NOT call e.preventDefault() here — that cancels the drag in Firefox
      dragSrcId = el.dataset.cardId;
      dragIsWidget = false;
      dragOffsetC = 0; dragOffsetR = 0;
      try {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', dragSrcId);
        // Invisible ghost image so browser default ghost doesn't show
        const ghost = document.createElement('div');
        ghost.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;';
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, 0, 0);
        setTimeout(function() { ghost.remove(); }, 0);
      } catch(_) {}
      // Init dropAnchor to current card position so a very short drag lands correctly
      var _card = STATE.cards && STATE.cards[dragSrcId];
      if (_card && _card.gridPos) dropAnchor = { col: _card.gridPos.col, row: _card.gridPos.row };
      // Always set a valid lastMouse — fall back to element center when Firefox fires clientX=0
      var _elRc = el.getBoundingClientRect();
      lastMouse = {
        x: (e.clientX > 0) ? e.clientX : (_elRc.left + _elRc.width  / 2),
        y: (e.clientY > 0) ? e.clientY : (_elRc.top  + _elRc.height / 2)
      };
      // Initialize workspace size synchronously so calcAnchor works immediately
      refreshDZ();
      el.classList.add('dragging');
      // Build overlay in next microtask — Firefox requires dragstart to complete first
      setTimeout(function() { buildOverlay(); }, 0);
    });
    el.addEventListener('dragend', function() {
      el.classList.remove('dragging');
      const srcId = dragSrcId;
      if (dragSrcId) { dragSrcId = null; dragIsWidget = false; removeOverlay(); }
      // Re-render after drag so grid reflects any size growth from expandZone.
      // Then scroll the dropped element into view.
      setTimeout(()=>{
        renderDynamic();
        setTimeout(()=>{
          const dropped = srcId && (
            document.querySelector(`.vela-card[data-card-id="${srcId}"]`) ||
            document.querySelector(`.vela-widget[data-widget-id="${srcId}"]`)
          );
          if(dropped) dropped.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'});
        }, 80);
      }, 50);
    });
  }

  function bindWidget(el) {
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', function(e) {
      if (!EDIT_MODE) { e.preventDefault(); return; }
      dragSrcId = el.dataset.widgetId;
      dragIsWidget = true;
      const ww = STATE.widgets && STATE.widgets.items && STATE.widgets.items[dragSrcId];
      if (ww) {
        const { w, h, gap } = cs();
        const rect = el.getBoundingClientRect();
        dragOffsetC = Math.max(0, Math.min((ww.colSpan||1)-1, Math.floor((e.clientX-rect.left)/(w+gap))));
        dragOffsetR = Math.max(0, Math.min((ww.rowSpan||1)-1, Math.floor((e.clientY-rect.top)/(h+gap))));
      } else { dragOffsetC = 0; dragOffsetR = 0; }
      try {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', dragSrcId);
        const ghost = document.createElement('div');
        ghost.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;';
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, 0, 0);
        setTimeout(function() { ghost.remove(); }, 0);
      } catch(_) {}
      // Init dropAnchor to current widget position
      var _ww = STATE.widgets && STATE.widgets.items && STATE.widgets.items[dragSrcId];
      if (_ww && _ww.gridPos) dropAnchor = { col: _ww.gridPos.col, row: _ww.gridPos.row };
      // Always set a valid lastMouse — fall back to element center when Firefox fires clientX=0
      var _elRw = el.getBoundingClientRect();
      lastMouse = {
        x: (e.clientX > 0) ? e.clientX : (_elRw.left + _elRw.width  / 2),
        y: (e.clientY > 0) ? e.clientY : (_elRw.top  + _elRw.height / 2)
      };
      // Initialize workspace size synchronously
      refreshDZ();
      el.classList.add('dragging');
      setTimeout(function() { buildOverlay(); }, 0);
    });
    el.addEventListener('dragend', function() {
      el.classList.remove('dragging');
      const srcId = dragSrcId;
      if (dragSrcId) { dragSrcId = null; dragIsWidget = false; removeOverlay(); }
      setTimeout(()=>{
        renderDynamic();
        setTimeout(()=>{
          const dropped = srcId && (
            document.querySelector(`.vela-widget[data-widget-id="${srcId}"]`) ||
            document.querySelector(`.vela-card[data-card-id="${srcId}"]`)
          );
          if(dropped) dropped.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'});
        }, 80);
      }, 50);
    });
  }

  grid.querySelectorAll('.vela-card:not(.vela-widget)').forEach(bindCard);
  grid.querySelectorAll('.vela-widget').forEach(bindWidget);

  // Remove any previously registered grid-level drag listeners to prevent stacking
  // (setupDragDrop is called on every renderGrid, so without this handlers accumulate)
  if (grid._dndDragover) grid.removeEventListener('dragover', grid._dndDragover);
  if (grid._dndDrop)     grid.removeEventListener('drop',     grid._dndDrop);

  grid._dndDragover = function(e) {
    e.preventDefault();
    // Also update anchor from grid dragover (fires before/after overlay exists)
    if (dragSrcId) {
      // Guard against Firefox bug: first dragover can fire with clientX=0/clientY=0
      if (e.clientX > 0 || e.clientY > 0) lastMouse = { x: e.clientX, y: e.clientY };
      calcAnchor(lastMouse.x, lastMouse.y);
    }
  };
  grid._dndDrop = function(e) {
    e.preventDefault();
    // Fallback: fires when drop lands on grid but outside overlay (e.g. on a card)
    if (dragSrcId) commitDrop(dropAnchor.col, dropAnchor.row);
  };
  grid.addEventListener('dragover', grid._dndDragover);
  grid.addEventListener('drop',     grid._dndDrop);

  // Sidebar Board-Pill Drop Zones — handled by renderBoardPills for static drops,
  // but we also need dragover/drop here for when a drag is active
  document.querySelectorAll('.bpill-drop').forEach(function(dz) {
    dz.addEventListener('dragover', function(e) {
      e.preventDefault(); e.stopPropagation();
      dz.style.display = 'flex';
      dz.style.background = 'color-mix(in srgb,var(--accent) 30%,transparent)';
    });
    dz.addEventListener('dragleave', function() { dz.style.background = ''; });
    dz.addEventListener('drop', function(e) {
      e.preventDefault(); e.stopPropagation();
      dz.style.background = '';
      if (!dragSrcId || dragIsWidget) return;
      const toBid = dz.dataset.dropTo;
      if (!toBid || toBid === boardId) return;
      const srcBoard = STATE.boards[boardId];
      const dstBoard = STATE.boards[toBid];
      if (!srcBoard || !dstBoard) return;
      srcBoard.cardIds = srcBoard.cardIds.filter(function(x) { return x !== dragSrcId; });
      if (!dstBoard.cardIds.includes(dragSrcId)) dstBoard.cardIds.push(dragSrcId);
      dragSrcId = null; dragIsWidget = false;
      removeOverlay();
      saveConfig(STATE); renderDynamic();
      showToast(t('toastCardMoved'),'success');
    });
  });
}


// ── Edit Mode Toggle ──
function toggleEditMode(){
  EDIT_MODE=!EDIT_MODE;
  // In edit mode: vela-main scrolls. Header gets position:fixed so it stays
  // visible during both vertical AND horizontal scrolling.
  const velaMain = document.querySelector('.vela-main');
  const velaHeader = document.querySelector('.vela-header');
  const cardGrid = document.getElementById('card-grid');
  // vela-main is the scroll container in both modes.
  // The grid uses background-attachment:local so dots scroll correctly with it.
  if(velaMain) velaMain.style.overflow = 'auto';
  if(cardGrid) cardGrid.style.overflow = 'visible'; // grid content drives vela-main scroll
  // In edit mode: fix header so it stays during horizontal+vertical scroll.
  if(velaHeader){
    if(EDIT_MODE){
      const hr = velaHeader.getBoundingClientRect();
      velaHeader.style.position = 'fixed';
      velaHeader.style.top      = hr.top + 'px';
      velaHeader.style.left     = hr.left + 'px';
      velaHeader.style.width    = hr.width + 'px';
      velaHeader.style.zIndex   = '100';
      if(cardGrid) cardGrid.style.marginTop = hr.height + 'px';
    }
  }
  const btn=document.getElementById('btn-edit-mode');
  const label=document.getElementById('edit-label');
  if(btn){
    btn.classList.toggle('active',EDIT_MODE);
    // Swap icon: save icon in edit mode, edit icon otherwise
    const saveIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>';
    const editIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
    btn.innerHTML=(EDIT_MODE?saveIcon:editIcon)+`<span id="edit-label">${EDIT_MODE?t('done'):t('edit')}</span>`;
  }
  // Show/hide gap slider in header
  const gapWrap=document.getElementById('gap-slider-wrap');
  if(gapWrap)gapWrap.style.display=EDIT_MODE?'flex':'none';
  // Toggle sidebar edit class (enables resize handle)
  document.getElementById('vela-sidebar')?.classList.toggle('edit-sidebar',EDIT_MODE);
  // Remove expand zone buttons and reset fixed header when leaving edit mode
  if(!EDIT_MODE){
    document.querySelectorAll('.sd-static-ez').forEach(el=>{ if(el._cleanup) el._cleanup(); el.remove(); });
    if(window._sdEzDragover){ document.removeEventListener('dragover', window._sdEzDragover); window._sdEzDragover=null; }
    if(window._sdEzDragend){  document.removeEventListener('dragend',  window._sdEzDragend);  window._sdEzDragend=null;  }
    const velaHeader=document.querySelector('.vela-header');
    const cardGrid=document.getElementById('card-grid');
    // Keep header fixed in normal mode too so it doesn't scroll away horizontally
    if(velaHeader && cardGrid){
      velaHeader.style.zIndex='100';
      // position/top/left/width stay as-is from edit mode — already correct
    }
    if(cardGrid){ cardGrid.style.paddingTop=''; cardGrid.style.overflow=''; }
    const velaMain2=document.querySelector('.vela-main');
    if(velaMain2) velaMain2.style.overflow='auto';
  }
  const board=STATE.boards[STATE.activeBoardId];
  if(board){
    const gap=board.layoutData.gap||16;
    const sl=document.getElementById('gap-slider');
    const gv=document.getElementById('gap-value');
    if(sl)sl.value=gap;
    if(gv)gv.textContent=gap+'px';
  }
  renderGrid(STATE.boards[STATE.activeBoardId]);
  // Show/hide widget button
  const header=document.querySelector('.vela-header');

  const existingWBtn=document.getElementById('btn-add-widget');
  if(EDIT_MODE && !existingWBtn && header){
    const wBtn=document.createElement('button');
    wBtn.className='btn-add-card';
    wBtn.id='btn-add-widget';
    wBtn.style.cssText='background:var(--accent);color:var(--btn-text);';
    wBtn.innerHTML=`${ICONS.folder} Widget`;
    wBtn.addEventListener('click',()=>openAddWidget());
    header.appendChild(wBtn);
  } else if(!EDIT_MODE && existingWBtn){
    existingWBtn.remove();
  }
}

// ── Icon resolution ──
async function resolveAllIcons(){
  const board=STATE.boards[STATE.activeBoardId];if(!board)return;
  for(const cid of board.cardIds){
    const card=STATE.cards[cid];
    if(!card||card.icon.kind!=='auto'||card.icon.resolvedUrl)continue;
    const r=await resolveIcon(card.url);
    if(r){
      card.icon.resolvedUrl=r;
      const wrap=document.querySelector(`[data-icon-wrap="${cid}"]`);
      if(wrap)wrap.innerHTML=`<img src="${r}" alt="" loading="lazy"/>`;
      saveConfig(STATE);
    }
  }
}

// ── Clock ──
function startClock(){
  const el=document.getElementById('clock');if(!el)return;
  const upd=()=>{
    if(!STATE?.general?.showClock){el.innerHTML='';el.style.cssText='';return}
    const now=new Date();
    const time=now.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit',hour12:STATE.general.clockFormat==='12h'});
    const date=now.toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'long',year:'numeric'});
    el.style.cssText='display:flex;align-items:center;gap:8px;height:36px;padding:0 14px;border-radius:var(--radius-lg);background:var(--glass-bg);border:1px solid var(--glass-border);backdrop-filter:blur(var(--glass-blur))';
    el.innerHTML=`<span style="font-size:13px;font-weight:600;color:var(--text-primary);font-variant-numeric:tabular-nums;letter-spacing:.02em;min-width:38px;display:inline-block;text-align:center">${time}</span>`
      +`<span style="width:1px;height:14px;background:rgba(255,255,255,.15);flex-shrink:0"></span>`
      +`<span style="font-size:11px;color:var(--text-secondary);white-space:nowrap">${date}</span>`;
  };
  upd();setInterval(upd,10000);
}

// ── Toast ──
function showToast(msg,type='default',duration=3000){
  const root=document.getElementById('toast-root');if(!root)return;
  const t=document.createElement('div');
  t.className='vela-toast'+(type!=='default'?' '+type:'');
  t.innerHTML=`<div class="toast-dot"></div>${esc(msg)}`;
  root.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.parentNode?.removeChild(t),300)},duration);
}

// ── Confirm Dialog (replaces native confirm()) ──
function showConfirm(msg,onConfirm,onCancel){
  const root=document.getElementById('modal-root');if(!root)return;
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div id="confirm-bg" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);backdrop-filter:blur(4px)">
    <div style="background:var(--panel-bg,#1a1c25);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px;max-width:320px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.5)">
      <p style="font-size:13px;color:var(--text-primary);margin:0 0 20px;line-height:1.6">${esc(msg)}</p>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button id="confirm-cancel" class="btn btn-ghost" style="font-size:12px;padding:7px 16px">${t('cancel')||'Abbrechen'}</button>
        <button id="confirm-ok" class="btn btn-primary" style="font-size:12px;padding:7px 16px;background:#f87171;border-color:transparent;color:#fff">${t('confirmDelete')||'Löschen'}</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('confirm-cancel').addEventListener('click',()=>{close();onCancel?.();});
  document.getElementById('confirm-ok').addEventListener('click',()=>{close();onConfirm?.();});
  document.getElementById('confirm-bg').addEventListener('click',e=>{if(e.target.id==='confirm-bg'){close();onCancel?.();}});
}

// ── Search ──
let searchOpen=false;
function openSearch(){
  if(searchOpen)return;searchOpen=true;
  const root=document.getElementById('modal-root');
  root.innerHTML=`<div class="search-overlay" id="srch-overlay">
    <div class="search-box">
      <div class="search-input-wrap">${ICONS.search}<input class="search-input" id="srch-input" placeholder="Link suchen…" autocomplete="off"/></div>
      <div class="search-results" id="srch-results"></div>
    </div>
  </div>`;
  const inp=document.getElementById('srch-input');inp.focus();
  inp.addEventListener('input',()=>renderSearchResults(inp.value));
  renderSearchResults('');
  document.getElementById('srch-overlay').addEventListener('click',e=>{if(e.target.id==='srch-overlay')closeSearch()});
  document.addEventListener('keydown',srchEscHandler);
}
function closeSearch(){searchOpen=false;const root=document.getElementById('modal-root');if(root)root.innerHTML='';document.removeEventListener('keydown',srchEscHandler)}
function srchEscHandler(e){if(e.key==='Escape')closeSearch()}
function renderSearchResults(q){
  const cards=Object.values(STATE.cards);
  const list=q.trim()?cards.filter(c=>c.title.toLowerCase().includes(q.toLowerCase())||c.url.toLowerCase().includes(q.toLowerCase())):cards.slice(0,10);
  const c=document.getElementById('srch-results');if(!c)return;
  c.innerHTML=list.map(card=>`<div class="search-result-item" data-url="${esc(card.url)}">
    <div class="search-result-icon">${card.icon?.resolvedUrl?`<img src="${esc(card.icon.resolvedUrl)}" alt=""/>`:ICONS.globe}</div>
    <div><div class="search-result-title">${esc(card.title)}</div><div class="search-result-url">${esc(domain(card.url))}</div></div>
  </div>`).join('');
  c.querySelectorAll('.search-result-item').forEach(el=>el.addEventListener('click',()=>{window.open(el.dataset.url,STATE.general.openLinksInNewTab?'_blank':'_self');closeSearch()}));
}

// ── Board Create Modal ──
function openBoardCreate(){
  let previewUrl=null;
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="vela-overlay" id="bcreate-bg">
    <div class="vela-modal" style="width:400px">
      <div class="modal-header"><span class="modal-title">Neues Board</span><button class="modal-close" id="bc-close">${ICONS.close}</button></div>
      <div class="modal-body"><div style="display:flex;flex-direction:column;gap:16px">
        <div>
          <div class="settings-label" style="margin-bottom:6px">Name</div>
          <input class="vela-input" id="bc-name" placeholder="z. B. Arbeit, Privat…" autofocus/>
        </div>
        <div>
          <div class="settings-label" style="margin-bottom:8px">Icon <span style="color:var(--text-tertiary);font-weight:400">(optional)</span></div>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="bc-icon-prev" style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.07);border:1.5px dashed rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:pointer;flex-shrink:0" title="Klicken zum Hochladen">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:20px;height:20px;color:var(--text-tertiary)"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <div>
              <input type="file" id="bc-icon-file" accept="image/*" style="display:none"/>
              <button class="btn btn-secondary" id="bc-icon-btn" style="font-size:12px;padding:7px 14px">Bild wählen</button>
              <div class="settings-hint" style="margin-top:4px">PNG, JPG oder SVG</div>
            </div>
          </div>
        </div>
        <div>
          <div class="settings-label" style="margin-bottom:8px">Label in Sidebar</div>
          <div style="display:flex;align-items:center;gap:10px">
            <label class="vela-toggle"><input type="checkbox" id="bc-showlabel" checked/><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
            <span style="font-size:12px;color:var(--text-secondary)">Namen unter Icon anzeigen</span>
          </div>
        </div>
      </div></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="bc-cancel">Abbrechen</button>
        <button class="btn btn-primary" id="bc-save">Erstellen</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('bc-close').addEventListener('click',close);
  document.getElementById('bc-cancel').addEventListener('click',close);
  document.getElementById('bc-create-bg')?.addEventListener('click',e=>{if(e.target.id==='bcreate-bg')close()});

  const prev=document.getElementById('bc-icon-prev');
  const file=document.getElementById('bc-icon-file');
  prev.addEventListener('click',()=>file.click());
  document.getElementById('bc-icon-btn').addEventListener('click',()=>file.click());
  file.addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=()=>{previewUrl=r.result;prev.innerHTML=`<img src="${previewUrl}" style="width:100%;height:100%;object-fit:cover"/>`};r.readAsDataURL(f);
  });
  document.getElementById('bc-save').addEventListener('click',()=>{
    const name=(document.getElementById('bc-name').value||'').trim();
    if(!name){document.getElementById('bc-name').focus();return}
    const showLabel=document.getElementById('bc-showlabel').checked;
    const id=uid(),now=Date.now();
    STATE.boards[id]={id,name,iconDataUrl:previewUrl,showLabel,cardIds:[],categoryIds:[],layoutData:{cardSize:'medium',density:'normal',gap:16},createdAt:now,updatedAt:now};
    saveConfig(STATE);renderDynamic();showToast(t('toastBoardCreated'),'success');close();
  });
}

// ── Board Edit Modal (only from sidebar hover edit btn) ──
function openBoardEdit(boardId){
  const board=STATE.boards[boardId];if(!board)return;
  let previewUrl=board.iconDataUrl;
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="vela-overlay" id="bedit-bg">
    <div class="vela-modal" style="width:400px">
      <div class="modal-header"><span class="modal-title">Board bearbeiten</span><button class="modal-close" id="be-close">${ICONS.close}</button></div>
      <div class="modal-body"><div style="display:flex;flex-direction:column;gap:16px">
        <div>
          <div class="settings-label" style="margin-bottom:6px">Name</div>
          <input class="vela-input" id="be-name" value="${esc(board.name)}"/>
        </div>
        <div>
          <div class="settings-label" style="margin-bottom:8px">Icon</div>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="be-icon-prev" style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.07);border:1.5px dashed rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:pointer;flex-shrink:0">
              ${previewUrl?`<img src="${previewUrl}" style="width:100%;height:100%;object-fit:cover"/>`:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:20px;height:20px;color:var(--text-tertiary)"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`}
            </div>
            <div>
              <input type="file" id="be-icon-file" accept="image/*" style="display:none"/>
              <button class="btn btn-secondary" id="be-icon-btn" style="font-size:12px;padding:7px 14px">Bild wählen</button>
              ${previewUrl?`<button class="btn btn-ghost" id="be-icon-remove" style="font-size:12px;padding:7px 10px;margin-left:6px;color:#f87171">Entfernen</button>`:''}
            </div>
          </div>
        </div>
        <div>
          <div class="settings-label" style="margin-bottom:8px">Label in Sidebar anzeigen</div>
          <div style="display:flex;align-items:center;gap:10px">
            <label class="vela-toggle"><input type="checkbox" id="be-showlabel" ${board.showLabel!==false?'checked':''}/><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
            <span style="font-size:12px;color:var(--text-secondary)">Namen unter Icon anzeigen</span>
          </div>
        </div>
        <div style="padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
          <button class="btn btn-ghost" id="be-delete" style="color:#f87171;font-size:12px">${ICONS.trash} Board löschen</button>
        </div>
      </div></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="be-cancel">Abbrechen</button>
        <button class="btn btn-primary" id="be-save">Speichern</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('be-close').addEventListener('click',close);
  document.getElementById('be-cancel').addEventListener('click',close);
  document.getElementById('bedit-bg').addEventListener('click',e=>{if(e.target.id==='bedit-bg')close()});

  const prev=document.getElementById('be-icon-prev');
  const file=document.getElementById('be-icon-file');
  prev.addEventListener('click',()=>file.click());
  document.getElementById('be-icon-btn').addEventListener('click',()=>file.click());
  file.addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=()=>{previewUrl=r.result;prev.innerHTML=`<img src="${previewUrl}" style="width:100%;height:100%;object-fit:cover"/>`};r.readAsDataURL(f);
  });
  document.getElementById('be-icon-remove')?.addEventListener('click',()=>{
    previewUrl=null;
    prev.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:20px;height:20px;color:var(--text-tertiary)"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
  });
  document.getElementById('be-delete').addEventListener('click',()=>{
    if(Object.keys(STATE.boards).length<=1){showToast(t('lastBoardError')||'Letztes Board','error');return}
    showConfirm(t('confirmDeleteBoard'),()=>{
      delete STATE.boards[boardId];
      if(STATE.activeBoardId===boardId)STATE.activeBoardId=Object.keys(STATE.boards)[0];
      saveConfig(STATE);renderDynamic();showToast(t('toastBoardDeleted'));close();
    });
  });
  document.getElementById('be-save').addEventListener('click',()=>{
    const name=(document.getElementById('be-name').value||'').trim();if(!name)return;
    board.name=name;board.iconDataUrl=previewUrl;board.showLabel=document.getElementById('be-showlabel').checked;board.updatedAt=Date.now();
    saveConfig(STATE);renderDynamic();showToast(t('toastSaved'),'success');close();
  });
}

// ── Card Edit Modal ──
function openCardEdit(cardId){
  const card=STATE.cards[cardId];
  const root=document.getElementById('modal-root');
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="vela-overlay" id="cedit-bg">
    <div class="vela-modal">
      <div class="modal-header"><span class="modal-title">${card?'Karte bearbeiten':'Neue Karte'}</span><button class="modal-close" id="ce-close">${ICONS.close}</button></div>
      <div class="modal-body"><div style="display:flex;flex-direction:column;gap:16px">
        <div><div class="settings-label" style="margin-bottom:6px">${t('cardTitleLabel')}</div><input class="vela-input" id="ce-title" value="${esc(card?.title||'')}" placeholder="${t('cardTitlePlaceholder')}"/></div>
        <div><div class="settings-label" style="margin-bottom:6px">URL</div><input class="vela-input" id="ce-url" value="${esc(card?.url||'https://')}" placeholder="https://…"/></div>
        <div><div class="settings-label" style="margin-bottom:6px">${t('cardSubLabel')} <span style="color:var(--text-tertiary);font-weight:400">(optional)</span></div><input class="vela-input" id="ce-sub" value="${esc(card?.subtitle||'')}" placeholder="${t('cardSubPlaceholder')}"/></div>
        <div>
          <div class="settings-label" style="margin-bottom:6px">Icon hochladen</div>
          <div style="display:flex;align-items:center;gap:12px">
            <input type="file" id="ce-icon-file" accept="image/*,.svg" style="display:none"/>
            <button class="btn btn-secondary" id="ce-icon-btn" style="font-size:12px;padding:7px 12px">Bild wählen</button>
            <div id="ce-icon-preview" style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">${card&&card.icon&&card.icon.kind==='upload'?`<img src="${esc(card.icon.dataUrl)}" style="width:100%;height:100%;object-fit:contain"/>`:ICONS.globe.replace('width:18px;height:18px','width:22px;height:22px')}</div>
          </div>
        </div>
      </div></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" id="ce-cancel">Abbrechen</button>
        <button class="btn btn-primary" id="ce-save">Speichern</button>
      </div>
    </div>
  </div>`;
  root.appendChild(wrap);
  const close=()=>root.removeChild(wrap);
  document.getElementById('ce-close').addEventListener('click',close);
  document.getElementById('ce-cancel').addEventListener('click',close);
  document.getElementById('cedit-bg').addEventListener('click',e=>{if(e.target.id==='cedit-bg')close()});
  document.getElementById('ce-icon-btn').addEventListener('click',()=>document.getElementById('ce-icon-file').click());
  document.getElementById('ce-icon-file').addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=()=>{if(STATE.cards[cardId])STATE.cards[cardId].icon={kind:'upload',dataUrl:r.result};const prev=document.getElementById('ce-icon-preview');if(prev)prev.innerHTML=`<img src="${r.result}" style="width:100%;height:100%;object-fit:contain"/>`;};r.readAsDataURL(f);
  });
  document.getElementById('ce-save').addEventListener('click',()=>{
    const title=(document.getElementById('ce-title').value||'').trim();
    const url=(document.getElementById('ce-url').value||'').trim();
    if(!title||!url)return;
    const now=Date.now();
    if(!STATE.cards[cardId]){
      STATE.cards[cardId]={id:cardId,title,url,subtitle:document.getElementById('ce-sub').value.trim()||undefined,icon:{kind:'auto',resolvedUrl:null},openInNewTab:true,position:0,createdAt:now,updatedAt:now};
    }else{
      const existing=STATE.cards[cardId];
      const urlChanged=existing.url!==url;
      Object.assign(existing,{title,url,subtitle:document.getElementById('ce-sub').value.trim()||undefined,updatedAt:now});
      if(urlChanged)existing.icon={kind:'auto',resolvedUrl:null};
    }
    saveConfig(STATE);renderDynamic();resolveAllIcons();showToast(t('toastSaved'),'success');close();
  });
}

// ── Settings ──
const STABS=()=>[
  {id:'general',label:t('tabGeneral')},{id:'design',label:t('tabDesign')},
  {id:'background',label:t('tabBackground')},
  {id:'cards',label:t('tabCards')},{id:'sync',label:t('tabSync')},
  {id:'advanced',label:t('tabAdvanced')},{id:'privacy',label:t('tabPrivacy')}
];
let settingsOpen=false,settingsTab='general';

function openSettings(tab='general'){
  if(settingsOpen)return;settingsOpen=true;settingsTab=tab;
  const root=document.getElementById('modal-root');
  const el=document.createElement('div');el.id='sett-root';
  el.innerHTML=buildSettingsShell();root.appendChild(el);
  bindSettingsEvents();
}
function closeSettings(){
  settingsOpen=false;const el=document.getElementById('sett-root');if(el)el.parentNode?.removeChild(el);
}

function buildSettingsShell(){
  return`<div class="vela-overlay" id="sett-bg">
    <div class="vela-modal settings-modal">
      <div class="modal-header"><span class="modal-title">${t('settingsTitle')}</span><button class="modal-close" id="sett-close">${ICONS.close}</button></div>
      <div class="settings-layout">
        <nav class="settings-sidebar">${STABS().map(t=>`<button class="settings-nav-item${t.id===settingsTab?' active':''}" data-stab="${t.id}">${t.label}</button>`).join('')}</nav>
        <div class="settings-content" id="sett-content">${buildTab(settingsTab)}</div>
      </div>
    </div>
  </div>`;
}

function buildTab(tab){
  const s=STATE;
  if(tab==='general')return`
    <div class="settings-section-title">Sprache / Language</div>
    <div class="settings-row"><div></div>
      <div class="vela-segmented">
        <button class="seg-btn${(s.general?.language||'de')==='de'?' active':''}" data-lang="de" style="display:flex;align-items:center;gap:6px">
          <svg viewBox="0 0 20 15" style="width:18px;height:13px;border-radius:2px;flex-shrink:0"><rect width="20" height="5" fill="#000"/><rect y="5" width="20" height="5" fill="#D00"/><rect y="10" width="20" height="5" fill="#FFCE00"/></svg>Deutsch
        </button>
        <button class="seg-btn${s.general?.language==='en'?' active':''}" data-lang="en" style="display:flex;align-items:center;gap:6px">
          <svg viewBox="0 0 60 30" style="width:18px;height:9px;border-radius:2px;flex-shrink:0"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>English
        </button>
      </div>
    </div>
    <div class="settings-section-title" style="margin-top:16px">${t('generalSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('openInNewTab')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-newtab" ${s.general.openLinksInNewTab?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    <div class="settings-row"><div><div class="settings-label">${t('showClock')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-clock" ${s.general.showClock?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    <div class="settings-row"><div><div class="settings-label">${t('clockFormat')}</div></div><div class="vela-segmented"><button class="seg-btn${s.general.clockFormat==='24h'?' active':''}" data-clkfmt="24h">24h</button><button class="seg-btn${s.general.clockFormat==='12h'?' active':''}" data-clkfmt="12h">12h</button></div></div>
    <div class="settings-section-title" style="margin-top:16px">${t('weatherSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('showWeather')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-weather" ${s.general.showWeather?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    ${s.general.showWeather?`
    <div style="margin-top:4px">
      <div class="settings-label" style="margin-bottom:6px">${t('cityLabel')}</div>
      <div style="display:flex;gap:8px">
        <div style="flex:1;position:relative">
          <input class="vela-input" id="inp-weather-city" value="${esc(s.general.weatherCity||'')}" placeholder="${t('cityPlaceholder')}" autocomplete="off"/>
          <div id="weather-suggestions" style="position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:200;background:var(--panel-bg,#14161e);border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;display:none;box-shadow:0 8px 24px rgba(0,0,0,.5)"></div>
        </div>
        <button class="btn btn-primary" id="btn-weather-save" style="font-size:12px;padding:7px 16px;white-space:nowrap">${t('saveBtn')}</button>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn btn-secondary" id="btn-weather-location" style="font-size:12px;padding:7px 14px;display:flex;align-items:center;gap:6px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>GPS
        </button>
        <button class="btn btn-secondary" id="btn-weather-refresh" style="font-size:12px;padding:7px 14px;display:flex;align-items:center;gap:6px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>${t('refreshBtn')}
        </button>
      </div>
      ${s.general.weatherData?`
      <div style="margin-top:10px;padding:12px 14px;background:rgba(255,255,255,.05);border-radius:12px">
        <div style="display:flex;align-items:center;gap:10px">
          ${weatherIcon(s.general.weatherData.code,20)}
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${s.general.weatherData.temp}° <span style="font-size:11px;font-weight:400;color:var(--text-secondary)">${t('feltTemp')} ${s.general.weatherData.feels}°</span></div>
            ${s.general.weatherCity?`<div style="font-size:11px;color:var(--text-secondary);margin-top:2px">${esc(s.general.weatherCity)}</div>`:''}
          </div>
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.06);font-size:10px;color:var(--text-secondary)">
          ${t('source')}: <a href="https://open-meteo.com" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none">Open-Meteo</a>
        </div>
      </div>`:''}
    </div>
    `:''}
    <div class="settings-section-title" style="margin-top:16px">IP</div>
    <div class="settings-row"><div><div class="settings-label">${t('showMyIP')}</div><div class="settings-hint">${t('myIPHint')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-myip" ${s.general.showMyIP?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>`;

  if(tab==='appearance'||tab==='style')return ''; // legacy redirect

  if(tab==='design'){
    const PRESETS=[
      {key:'presetNight',    accent:'#2bdfb5',panelBg:'#0d0f14',text:'#f0f0f0',text2:'#8a8a9a',btnText:'#0d0f14'},
      {key:'presetAurora',   accent:'#a78bfa',panelBg:'#12101e',text:'#ede9fe',text2:'#a0899e',btnText:'#12101e'},
      {key:'presetSunset',   accent:'#f97316',panelBg:'#1a1008',text:'#fff7ed',text2:'#a08060',btnText:'#1a1008'},
      {key:'presetOcean',    accent:'#38bdf8',panelBg:'#0c1a2e',text:'#e0f2fe',text2:'#6a9ab0',btnText:'#0c1a2e'},
      {key:'presetForest',   accent:'#4ade80',panelBg:'#0a1a0f',text:'#dcfce7',text2:'#6a9a78',btnText:'#0a1a0f'},
      {key:'presetMono',     accent:'#e5e5e5',panelBg:'#111111',text:'#ffffff',text2:'#888888',btnText:'#111111'},
    ];
    return`
    <!-- PRESETS -->
    <div class="settings-section-title" style="margin-top:0">${t('stylePresets')}</div>
    <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:10px">${t('stylePresetsHint')}</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:20px">
      ${PRESETS.map((p,i)=>`
        <button data-preset="${i}" title="${t(p.key)}" style="padding:10px 8px 8px;border-radius:11px;border:2px solid rgba(255,255,255,.07);background:${p.panelBg};cursor:pointer;text-align:left;transition:border-color .15s;box-shadow:0 2px 8px rgba(0,0,0,.35)">
          <div style="width:12px;height:12px;border-radius:4px;background:${p.accent};margin-bottom:6px"></div>
          <div style="font-size:10px;font-weight:700;color:${p.text};letter-spacing:.02em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t(p.key)}</div>
          <div style="display:flex;gap:3px;margin-top:5px">
            <div style="width:7px;height:7px;border-radius:2px;background:${p.accent}"></div>
            <div style="width:7px;height:7px;border-radius:2px;background:${p.text}"></div>
            <div style="width:7px;height:7px;border-radius:2px;background:${p.text2}"></div>
            <div style="width:7px;height:7px;border-radius:2px;background:${p.panelBg};border:1px solid rgba(255,255,255,.2)"></div>
          </div>
        </button>`).join('')}
    </div>

    <!-- AKZENTFARBE -->
    <div class="settings-section-title">${t('accentColor')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('accentColor')}</div><div class="settings-hint">${t('accentHint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-accent" value="${s.theme.accentColor}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-accent-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>

    <!-- FENSTER & WIDGETS -->
    <div class="settings-section-title" style="margin-top:14px">${t('windowsWidgets')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('cardColor')}</div><div class="settings-hint">${t('cardColorHint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-cardcolor" value="${s.theme.cardColor||'#ffffff'}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-cardcolor-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>
    <div class="settings-row"><div><div class="settings-label">${t('transparency')}</div><div class="settings-hint" id="hint-op">${Math.round(s.theme.cardOpacity*100)}%</div></div><input type="range" class="vela-slider" id="sld-op" min="0" max="1" step="0.01" value="${s.theme.cardOpacity}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('blur')}</div><div class="settings-hint" id="hint-bl">${s.theme.blurStrength}px</div></div><input type="range" class="vela-slider" id="sld-bl" min="0" max="24" value="${s.theme.blurStrength}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('rounding')}</div><div class="settings-hint" id="hint-ra">${s.theme.borderRadius}px</div></div><input type="range" class="vela-slider" id="sld-ra" min="8" max="32" step="2" value="${s.theme.borderRadius}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('windowColor')}</div><div class="settings-hint">${t('windowColorHint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-panelbg" value="${s.theme.panelBg||'#14161e'}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-panelbg-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>

    <!-- SCHRIFTFARBEN -->
    <div class="settings-section-title" style="margin-top:14px">${t('textColors')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('textColor')}</div><div class="settings-hint">${t('textColorHint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-textcolor" value="${s.theme.textColor||'#ffffff'}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-textcolor-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>
    <div class="settings-row"><div><div class="settings-label">${t('textColor2')}</div><div class="settings-hint">${t('textColor2Hint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-textcolor2" value="${s.theme.textColorSecondary||'#888888'}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-textcolor2-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>
    <div class="settings-row"><div><div class="settings-label">${t('btnTextColor')}</div><div class="settings-hint">${t('btnTextColorHint')}</div></div><div style="display:flex;gap:8px;align-items:center"><input type="color" id="inp-btntextcolor" value="${s.theme.btnTextColor||'#111111'}" style="width:36px;height:28px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:7px;padding:2px"/><button class="btn btn-ghost" id="btn-btntextcolor-reset" style="font-size:11px;padding:4px 8px">Reset</button></div></div>

    <!-- SYSTEM -->
    <div class="settings-section-title" style="margin-top:14px">${t('systemSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('animations')}</div><div class="settings-hint">${t('cardAnimationsHint')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-anim" ${s.theme.animationsEnabled?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    <div class="settings-row"><div><div class="settings-label">${t('scrollLock')}</div><div class="settings-hint">${t('scrollLockHint')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-scroll-lock" ${STATE.lockScrollAxis!==false?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>

    <!-- DESIGN EXPORT / IMPORT -->
    <div class="settings-section-title" style="margin-top:14px">${t('designExportImport')}</div>
    <div style="display:flex;gap:8px;margin-top:2px">
      <button class="btn btn-secondary" id="btn-design-export" style="flex:1;font-size:12px">↑ ${t('designExport')}</button>
      <button class="btn btn-secondary" id="btn-design-import" style="flex:1;font-size:12px">↓ ${t('designImport')}</button>
      <input type="file" id="inp-design-import" accept=".json" style="display:none"/>
    </div>`
  }

  if(tab==='background'){
    const wps=Object.values(s.wallpapers);
    return`
    <div class="settings-section-title">${t('bgType')}</div>
    <div class="settings-row"><div class="vela-segmented" style="width:100%"><button class="seg-btn${s.background.type==='color'?' active':''}" data-bgtype="color">${t('bgColor')}</button><button class="seg-btn${s.background.type==='image'?' active':''}" data-bgtype="image">${t('bgImage')}</button></div></div>
    ${s.background.type==='color'?`<div class="settings-row"><div><div class="settings-label">${t('bgColor')}</div></div><input type="color" id="inp-bgcol" value="${s.background.color||'#0f1117'}" style="width:40px;height:30px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:8px;padding:2px"/></div>`:''}
    ${s.background.type==='image'?`<div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
      <input type="file" id="wp-upload" accept="image/*" style="display:none"/>
      <button class="btn btn-secondary" id="btn-wp-trigger">${t('bgChooseImage')}</button>
      ${wps.length?`<div style="display:flex;flex-wrap:wrap;gap:8px">${wps.map(w=>`<div data-wpid="${w.id}" style="width:70px;height:44px;border-radius:10px;overflow:hidden;cursor:pointer;border:2px solid ${s.background.imageId===w.id?'var(--accent)':'transparent'}"><img src="${w.dataUrl}" style="width:100%;height:100%;object-fit:cover"/></div>`).join('')}</div>`:''}</div>`:''}
    <div class="settings-section-title" style="margin-top:16px">${t('bgEffects')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('bgBlur')}</div><div class="settings-hint" id="hint-bgbl">${s.background.blur}px</div></div><input type="range" class="vela-slider" id="sld-bgbl" min="0" max="20" value="${s.background.blur}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('bgBrightness')}</div><div class="settings-hint" id="hint-bri">${s.background.brightness}%</div></div><input type="range" class="vela-slider" id="sld-bri" min="50" max="150" value="${s.background.brightness}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('bgOverlay')}</div><div class="settings-hint" id="hint-ovc">${Math.round(s.background.overlayOpacity*100)}%</div></div><input type="range" class="vela-slider" id="sld-ovc" min="0" max="0.9" step="0.01" value="${s.background.overlayOpacity}"/></div>
    <div class="settings-row"><div><div class="settings-label">${t('bgOverlayColor')}</div></div><input type="color" id="inp-ovcol" value="${s.background.overlayColor}" style="width:40px;height:30px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;border-radius:8px;padding:2px"/></div>`;
  }

  if(tab==='cards'){
    const board=s.boards[s.activeBoardId];
    return`
    <div class="settings-section-title">${t('cardSizeLabel')}</div>
    <div class="settings-row"><div class="vela-segmented" style="width:100%"><button class="seg-btn${board?.layoutData.cardSize==='small'?' active':''}" data-csize="small">${t('small')}</button><button class="seg-btn${board?.layoutData.cardSize==='medium'?' active':''}" data-csize="medium">${t('medium')}</button><button class="seg-btn${board?.layoutData.cardSize==='large'?' active':''}" data-csize="large">${t('large')}</button></div></div>
    <div class="settings-section-title" style="margin-top:16px">${t('titleSizeLabel')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('fontSize')}</div><div class="settings-hint" id="hint-titlesize">${board?.layoutData.titleFontSize||14}px</div></div><input type="range" class="vela-slider" id="sld-titlesize" min="10" max="20" step="1" value="${board?.layoutData.titleFontSize||14}"/></div>
    <div class="settings-section-title" style="margin-top:16px">${t('gapSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('gapLabel')}</div><div class="settings-hint" id="hint-gap">${board?.layoutData.gap||16}px</div></div><input type="range" class="vela-slider" id="sld-gap" min="6" max="48" step="2" value="${board?.layoutData.gap||16}"/></div>
    <div class="settings-section-title" style="margin-top:20px">${t('boardsSection')}</div>
    ${Object.values(s.boards).map(b=>`<div class="settings-row">
      <div style="display:flex;align-items:center;gap:8px">${b.iconDataUrl?`<img src="${b.iconDataUrl}" style="width:20px;height:20px;border-radius:5px;object-fit:cover"/>`:''}<div class="settings-label">${esc(b.name)} (${b.cardIds.length} ${t('cardsCount')})</div></div>
      <button class="btn btn-ghost" data-bedit-s="${b.id}" style="padding:6px 10px;font-size:12px">${ICONS.edit}</button>
    </div>`).join('')}
    <button class="btn btn-secondary" id="btn-addboard-s" style="margin-top:10px">${t('addBoardBtn')}</button>`;
  }

  if(tab==='sync'){
    const gs=s.storage.gist||{};
    const gistOk=!!(gs.token&&gs.gistId);
    const lang=STATE?.general?.language||'de';
    const lastSync=gs.lastSync?new Date(gs.lastSync).toLocaleString(lang==='en'?'en-GB':'de-DE',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}):t('never')||'—';
    return`
    <div class="settings-section-title">${t('syncTitle')}</div>
    <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:12px;line-height:1.7">${t('syncDesc')}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div>
        <div class="settings-label" style="margin-bottom:6px">GitHub Personal Access Token</div>
        <div class="settings-hint" style="margin-bottom:6px">
          <a href="https://github.com/settings/tokens/new?scopes=gist&description=Sildesk+Sync" target="_blank" rel="noopener"
            style="color:var(--accent);text-decoration:none">${t('createToken')}</a>
          &nbsp;(Scope: <code style="background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:4px">gist</code> ${t('tokenScopeHint')})
        </div>
        ${gs.token
          ? `<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;background:rgba(255,255,255,0.05);border-radius:10px;font-family:monospace;font-size:12px;color:var(--text-tertiary)">
              <span style="flex:1">ghp_••••••••••••••••••••••••••••••••••••</span>
              <button id="btn-change-token" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:11px;padding:2px 6px">${t('changeToken')}</button>
            </div>
            <input type="hidden" id="inp-gist-token" value="${esc(gs.token||'')}"/>`
          : `<input class="vela-input" id="inp-gist-token" type="text" autocomplete="off" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" value=""/>`
        }</div>
      </div>
      <div>
        <div class="settings-label" style="margin-bottom:6px">${t('gistIdLabel')} <span style="color:var(--text-tertiary);font-weight:400">(${t('gistIdHint')})</span></div>
        <input class="vela-input" id="inp-gist-id" placeholder="${t('gistIdPlaceholder')}" value="${esc(gs.gistId||'')}"/>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">
        ${gistOk
          ? (gs.lastSync===null
            ? `<div style="width:100%">
                 <button class="btn btn-primary" id="btn-gist-pull" style="width:100%;margin-bottom:8px">${t('loadFirst')}</button>
                 <div style="font-size:11px;color:var(--text-tertiary);text-align:center;line-height:1.5">${t('loadFirstHint')}</div>
               </div>`
            : `<button class="btn btn-primary" id="btn-gist-save" style="flex:1">${t('syncNow')}</button>
               <button class="btn btn-secondary" id="btn-gist-pull" style="flex:1">${t('loadGist')}</button>`)
          : `<div style="display:flex;flex-direction:column;gap:8px;width:100%">
               <button class="btn btn-primary" id="btn-gist-connect" style="width:100%;display:flex;align-items:center;gap:10px;padding:12px 16px">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                 <div style="text-align:left"><div style="font-weight:600;font-size:13px">${t('connect')}</div><div style="font-size:11px;opacity:0.7;font-weight:400">${t('connectHint')}</div></div>
               </button>
               <button class="btn btn-secondary" id="btn-gist-save" style="width:100%;display:flex;align-items:center;gap:10px;padding:12px 16px">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                 <div style="text-align:left"><div style="font-weight:600;font-size:13px">${t('createNew')}</div><div style="font-size:11px;opacity:0.7;font-weight:400">${t('createNewHint')}</div></div>
               </button>
             </div>`
        }
      </div>
      ${gistOk?`<div style="margin-top:6px"><button class="btn btn-ghost" id="btn-gist-disconnect" style="font-size:11px;color:#f87171;padding:6px 10px;width:100%">${t('disconnect')}</button></div>`:''}
      ${gistOk?`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:rgba(255,255,255,0.04);border-radius:10px;margin-top:4px">
        <div><div style="font-size:12px;color:var(--text-secondary);font-weight:500">${t('lastSyncLabel')}</div><div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${lastSync}</div></div>
        <div style="display:flex;align-items:center;gap:6px">
          <div style="width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e"></div>
          <span style="font-size:11px;color:#22c55e;font-weight:500">${t('activeLabel')}</span>
        </div>
      </div>`:''}
      ${gistOk?`
      <div style="margin-top:4px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:11px;color:var(--text-tertiary);line-height:1.8">
          <strong style="color:var(--text-secondary)">${t('setupOtherDevice')}</strong><br>
          ${t('setupStep1')}<br>${t('setupStep2')}<br>${t('setupStep3')}
        </div>
      </div>`:''}
    </div>
    <div class="settings-section-title" style="margin-top:24px">${t('notificationsTitle')}</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div class="settings-row" style="padding:12px 14px;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(255,255,255,0.07)">
        <div>
          <div class="settings-label">${t('syncReminders')}</div>
          <div class="settings-hint" style="line-height:1.55">${t('syncRemindersHint')}</div>
        </div>
        <label class="vela-toggle"><input type="checkbox" id="tog-nudge" ${(s.general?.nudgeEnabled!==false)?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
      </div>
    </div>
    <div class="settings-section-title" style="margin-top:24px">${t('exportImportTitle')}</div>
    <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:12px;line-height:1.7">${t('exportImportDesc')}</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-secondary" id="btn-export" style="flex:1">${t('exportBtn')}</button>
      <button class="btn btn-secondary" id="btn-import" style="flex:1">${t('importBtn')}</button>
      <input type="file" id="inp-import" accept=".json" style="display:none"/>
    </div>
    <div style="margin-top:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06)">
      <div style="font-size:11px;color:var(--text-tertiary);line-height:1.8">
        <strong style="color:var(--text-secondary)">${t('cloudTipTitle')}</strong><br>${t('cloudTipText')}
      </div>
    </div>`;
  }

  if(tab==='advanced')return`
    <div class="settings-section-title">${t('systemSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('entranceAnim')}</div><div class="settings-hint">${t('entranceAnimHint')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-entrance-anim" ${s.general?.entranceAnim!==false?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    <div class="settings-row"><div><div class="settings-label">${t('cardAnimations')}</div><div class="settings-hint">${t('cardAnimationsHint')}</div></div><label class="vela-toggle"><input type="checkbox" id="tog-anim-adv" ${s.theme.animationsEnabled!==false?'checked':''}><div class="toggle-track"></div><div class="toggle-thumb"></div></label></div>
    <div class="settings-section-title" style="margin-top:16px">${t('infoSection')}</div>
    <div style="font-size:12px;color:var(--text-tertiary);line-height:1.9"><div>Sildesk v3.1.0</div><div>${t('schemaVersion')}: 4</div><div style="margin-top:8px">Made with ❤️ by Siljan Drijaj</div></div>
    <div class="settings-section-title" style="margin-top:16px">${t('importSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('importBookmarks')}</div><div class="settings-hint">${t('importBookmarksHint')}</div></div><button class="btn btn-secondary" id="btn-import-bookmarks" style="font-size:12px;padding:7px 12px">${t('importFileBtn')}</button></div>
    <input type="file" id="inp-bookmark-file" accept=".html" style="display:none"/>
    <div class="settings-section-title" style="margin-top:20px;color:#f87171">${t('dangerSection')}</div>
    <div class="settings-row"><div><div class="settings-label">${t('resetAll')}</div><div class="settings-hint">${t('resetHint')}</div></div><button class="btn btn-ghost" id="btn-reset" style="color:#f87171">${t('resetBtn')}</button></div>`;
  if(tab==='privacy')return`
    <div class="settings-section-title">${t('privacySection')}</div>
    <div style="display:inline-block;font-size:10px;padding:2px 8px;border-radius:5px;background:rgba(34,197,94,.12);color:#4ade80;border:1px solid rgba(34,197,94,.2);margin-bottom:16px">${t('noTracking')}</div>
    <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:6px">
      <div class="settings-label">${t('localStorage')}</div>
      <div class="settings-hint">${t('localStorageText')}</div>
    </div>
    <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:6px">
      <div class="settings-label">${t('whatWeDoNot')}</div>
      <div class="settings-hint" style="line-height:1.9">${t('whatWeDoNotText')}</div>
    </div>
    <div class="settings-section-title" style="margin-top:16px">${t('externalServices')}</div>
    <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:6px">
      <div class="settings-label">${t('googleFaviconLabel')}</div>
      <div class="settings-hint">${t('googleFaviconText')}</div>
    </div>
    <div class="settings-row" style="flex-direction:column;align-items:flex-start;gap:6px">
      <div class="settings-label">${t('githubApiLabel')}</div>
      <div class="settings-hint">${t('githubApiText')}</div>
    </div>`;
  return'';
}

function bindSettingsEvents(){
  document.getElementById('sett-close').addEventListener('click',closeSettings);
  document.getElementById('sett-bg').addEventListener('click',e=>{if(e.target.id==='sett-bg')closeSettings()});
  document.querySelectorAll('[data-stab]').forEach(btn=>btn.addEventListener('click',()=>{
    settingsTab=btn.dataset.stab;
    document.getElementById('sett-content').innerHTML=buildTab(settingsTab);
    document.querySelectorAll('[data-stab]').forEach(b=>b.classList.toggle('active',b.dataset.stab===settingsTab));
    bindTabEvents();
  }));
  // Delegated click handler for sync buttons — fires once, always fresh
  const settContent = document.getElementById('sett-content');
  settContent.addEventListener('click', handleSyncClick);
  settContent.addEventListener('change', handleSyncChange);
  bindTabEvents();
}

async function handleSyncClick(e){
  const btn = e.target.closest('button[id]');
  if(!btn) return;
  const id = btn.id;
  if(!['btn-gist-save','btn-gist-connect','btn-gist-pull','btn-gist-test','btn-gist-disconnect','btn-change-token'].includes(id)) return;
  e.stopImmediatePropagation();

  const gs = STATE.storage?.gist || {};

  if(id === 'btn-gist-test'){
    const token=(document.getElementById('inp-gist-token')?.value||'').replace(/[\s\r\n]/g,'') || gs.token || '';
    if(!token){showToast(t('toastEnterToken'),'error');return}
    showToast(t('toastChecking'));
    const rUser = await ghFetch(token, 'GET', '/user');
    if(!rUser.ok){showToast(t('toastTokenInvalid')+' ('+rUser.status+')','error');return}
    const rGist = await ghFetch(token, 'GET', '/gists?per_page=1');
    if(!rGist.ok){showToast('❌ Benutzer "'+rUser.data.login+'" OK — aber kein Gist-Scope!','error');return}
    showToast('✓ Benutzer: '+rUser.data.login+' — Gist-Scope: OK','success');
    return;
  }

  if(id === 'btn-gist-save'){
    // "Neu einrichten" or "Jetzt synchronisieren" — uses existing gistId if already connected
    const inputToken=(document.getElementById('inp-gist-token')?.value||'').replace(/[\s\r\n]/g,'');
    const token = inputToken || gs.token || '';
    if(!token){showToast(t('toastEnterToken'),'error');return}
    if(_pushInProgress){showToast(t('toastSyncRunning'),'error');return}
    if(_autoSyncTimer){clearTimeout(_autoSyncTimer);_autoSyncTimer=null;}
    // If already connected: push to existing gistId. If new setup: create new gist (null = auto-create)
    const gistId = gs.gistId || null;
    showToast(gistId ? t('toastSynced').replace('✓','...')||'Wird synchronisiert...' : t('toastBoardCreated')||'Neuer Gist wird erstellt...');
    const r = await gistPush(token, gistId);
    if(r.ok){
      if(!STATE.storage.gist)STATE.storage.gist={};
      STATE.storage.gist.token = token;
      STATE.storage.gist.gistId = r.gistId;
      STATE.storage.gist.lastSync = Date.now();
      STATE.updatedAt = Date.now();
      await browser.storage.local.set({[STORE_KEY]: STATE});
      document.getElementById('sett-content').innerHTML=buildTab('sync');
      showToast(t('toastSynced'),'success');
    } else {
      showToast(t('toastLoadError')+r.error,'error');
    }
    return;
  }

  if(id === 'btn-gist-connect'){
    // "Verbinden" — connect to EXISTING gist using entered ID, no new gist created
    const inputToken=(document.getElementById('inp-gist-token')?.value||'').replace(/[\s\r\n]/g,'');
    const inputGistId=(document.getElementById('inp-gist-id')?.value||'').trim();
    const token = inputToken || gs.token || '';
    if(!token){showToast(t('toastEnterToken'),'error');return}
    if(!inputGistId){showToast(t('toastEnterGistId'),'error');return}
    showToast(t('toastConnecting'));
    // Just verify the gist exists, then save credentials without pushing
    const res = await ghFetch(token,'GET','/gists/'+inputGistId);
    if(!res.ok){showToast(ghError(res),'error');return}
    if(!STATE.storage)STATE.storage={};
    if(!STATE.storage.gist)STATE.storage.gist={};
    STATE.storage.gist.token = token;
    STATE.storage.gist.gistId = inputGistId;
    STATE.storage.gist.lastSync = null; // freshConnect flag — no sync yet
    STATE.updatedAt = Date.now();
    await browser.storage.local.set({[STORE_KEY]: STATE});
    document.getElementById('sett-content').innerHTML=buildTab('sync');
    showToast(t('toastConnected'),'success');
    return;
  }

  if(id === 'btn-gist-pull'){
    const token=((document.getElementById('inp-gist-token')?.value||'').replace(/[\s\r\n]/g,'')) || gs.token || '';
    const gistId=((document.getElementById('inp-gist-id')?.value||'').trim()) || gs.gistId || '';
    if(!token){showToast(t('toastEnterToken'),'error');return}
    if(!gistId){showToast(t('toastEnterGistId'),'error');return}
    showToast(t('toastLoading'));
    const r = await gistPull(token, gistId);
    if(r.ok){
      // saveConfig is already done inside gistPull via STATE mutation
      // Write directly and wait for completion before reload
      STATE.updatedAt = Date.now();
      await browser.storage.local.set({[STORE_KEY]: STATE});
      // Verify write succeeded
      const verify = await browser.storage.local.get(STORE_KEY);
      const vBoards = Object.keys(verify[STORE_KEY]?.boards||{}).length;
      const vCards = Object.keys(verify[STORE_KEY]?.cards||{}).length;
      showToast(t('toastSettingsLoaded'),'success');
      await new Promise(res=>setTimeout(res,1200));
      location.reload();
    } else {
      showToast(t('toastLoadError')+r.error,'error');
    }
    return;
  }

  if(id === 'btn-gist-disconnect'){
    showConfirm(t('confirmRemoveToken'),()=>{
      STATE.storage.gist={token:'',gistId:'',autoSync:false,lastSync:null};
      saveConfig(STATE);
      document.getElementById('sett-content').innerHTML=buildTab('sync');
      bindTabEvents();
      showToast(t('toastSaved'));
    });
    return;
  }

  if(id === 'btn-change-token'){
    showConfirm(t('confirmReplaceToken'),()=>{
      STATE.storage.gist.token='';
      saveConfig(STATE);
      document.getElementById('sett-content').innerHTML=buildTab('sync');
      bindTabEvents();
    });
    return;
  }
}

// Delegated change handler for sync toggles
function handleSyncChange(e){
  const el = e.target;
  if(el.id === 'tog-nudge'){
    if(!STATE.general) STATE.general={};
    STATE.general.nudgeEnabled = el.checked;
    STATE.updatedAt = Date.now();
    browser.storage.local.set({[STORE_KEY]: STATE});
    if(!el.checked){ removeSyncNudge(); if(_nudgeUploadTimer){clearTimeout(_nudgeUploadTimer);_nudgeUploadTimer=null;} }
    else startPolling();
    showToast(el.checked ? t('toastNudgeOn') : t('toastNudgeOff'));
    return;
  }

}

function bindTabEvents(){

  const s=STATE;
  // Theme scheme switch (dark/light)
  document.querySelectorAll('[data-theme-scheme]').forEach(btn=>btn.addEventListener('click',()=>{
    const scheme=btn.dataset.themeScheme;
    STATE.theme.colorScheme=scheme;
    const isDark=scheme!=='light';
    if(isDark&&STATE.background.type==='color'&&STATE.background.color==='#eeeef5'){
      STATE.background.color='#000000';
    } else if(!isDark&&STATE.background.type==='color'&&(STATE.background.color==='#000000'||STATE.background.color==='//')){
      STATE.background.color='#eeeef5';
    }
    saveConfig(STATE);
    applyTheme(STATE.theme,STATE.background,STATE.wallpapers);
    // Update buttons active state
    document.querySelectorAll('[data-theme-scheme]').forEach(b=>b.classList.toggle('active',b.dataset.themeScheme===scheme));
  }));
  // Language switch
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{
    const lang=btn.dataset.lang;
    if(STATE.general.language===lang)return;
    STATE.general.language=lang;

    // Widget-Titel auf neue Sprache aktualisieren (nur Standard-Titel, keine benutzerdefinierten)
    const defaultTitles={
      note:{de:'Notiz',en:'Note'},
      rss:{de:'RSS Feed',en:'RSS Feed'},
      history:{de:'Zuletzt besucht',en:'Recently visited'},
      calendar:{de:'Kalender',en:'Calendar'},
      iframe:{de:'iFrame Embed',en:'iFrame Embed'},
      qrcode:{de:'QR-Code',en:'QR Code'},
      password:{de:'Passwort Generator',en:'Password Generator'},
      football:{de:'Fußball',en:'Football'},
      weather5:{de:'5-Tage Wetter',en:'5-Day Weather'},
      crypto:{de:'Aktien & Crypto',en:'Stocks & Crypto'},
      myip:{de:'Meine IP',en:'My IP'},
      speedtest:{de:'Speedtest',en:'Speedtest'},
      game2048:{de:'2048',en:'2048'},
      todo:{de:'Todo-Liste',en:'Todo List'},
      pomodoro:{de:'Pomodoro Timer',en:'Pomodoro Timer'},
    };
    // Alle Widgets durchgehen — Titel updaten wenn er dem alten Sprachstring entspricht
    const otherLang=lang==='en'?'de':'en';
    Object.values(STATE.widgets?.items||{}).forEach(w=>{
      const map=defaultTitles[w.type];
      if(!map)return;
      // Nur updaten wenn Titel dem alten Standard entspricht (nicht benutzerdefiniert)
      if(w.title===map[otherLang]||w.title===map[lang]){
        w.title=map[lang];
      }
    });

    saveConfig(STATE);
    // Re-render sidebar nav labels
    const nav=document.querySelector('.settings-sidebar');
    if(nav)nav.innerHTML=STABS().map(st=>`<button class="settings-nav-item${st.id===settingsTab?' active':''}" data-stab="${st.id}">${st.label}</button>`).join('');
    // Re-render tab content
    document.getElementById('sett-content').innerHTML=buildTab(settingsTab);
    bindTabEvents();
    // Rebind nav
    document.querySelectorAll('[data-stab]').forEach(b=>b.addEventListener('click',()=>{
      settingsTab=b.dataset.stab;
      document.getElementById('sett-content').innerHTML=buildTab(settingsTab);
      bindTabEvents();
      document.querySelectorAll('[data-stab]').forEach(x=>x.classList.toggle('active',x.dataset.stab===settingsTab));
    }));
    renderDynamic();
    updateUIStrings();
    showToast(lang==='en'?'Language: English':'Sprache: Deutsch','success');
  }));
  // Beta unlock
  document.getElementById('inp-beta-code')?.addEventListener('keydown',e=>{

  });
  // General
  document.getElementById('tog-newtab')?.addEventListener('change',e=>{s.general.openLinksInNewTab=e.target.checked;saveConfig(s)});
  document.getElementById('tog-weather')?.addEventListener('change',e=>{
    s.general.showWeather=e.target.checked;saveConfig(s);
    document.getElementById('sett-content').innerHTML=buildTab('general');bindTabEvents();
    loadWeather();
  });
  document.getElementById('btn-weather-save')?.addEventListener('click',()=>{
    const val=document.getElementById('inp-weather-city')?.value.trim();
    if(!val)return;
    s.general.weatherCity=val;
    s.general.weatherLat=null;s.general.weatherLon=null;
    s.general.weatherData=null;s.general.weatherLastFetch=0;
    saveConfig(s);loadWeather();showToast(t('toastCitySaved'),'success');
  });
  document.getElementById('inp-weather-city')?.addEventListener('change',e=>{
    s.general.weatherCity=e.target.value.trim();
    s.general.weatherLat=null;s.general.weatherLon=null;
    s.general.weatherData=null;s.general.weatherLastFetch=0;
    saveConfig(s);
  });
  document.getElementById('btn-weather-location')?.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(async pos=>{
      s.general.weatherLat=pos.coords.latitude;
      s.general.weatherLon=pos.coords.longitude;
      s.general.weatherData=null;s.general.weatherLastFetch=0;
      // Reverse geocoding: Koordinaten → Stadtname
      try{
        const geo=await fetch('https://geocoding-api.open-meteo.com/v1/search?name=&latitude='+pos.coords.latitude+'&longitude='+pos.coords.longitude+'&count=1&language=de');
        // open-meteo hat kein reverse geocoding, nutze nominatim
        const nom=await fetch('https://nominatim.openstreetmap.org/reverse?lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&format=json&accept-language=de');
        const nd=await nom.json();
        const city=nd.address?.city||nd.address?.town||nd.address?.village||nd.address?.county||'';
        s.general.weatherCity=city;
        const inp=document.getElementById('inp-weather-city');
        if(inp)inp.value=city;
      }catch(e){s.general.weatherCity='';}
      saveConfig(s);loadWeather();
      document.getElementById('sett-content').innerHTML=buildTab('general');bindTabEvents();
      showToast(t('toastLocationFound'),'success');
    },()=>showToast(t('toastGPSError'),'error'));
  });
  document.getElementById('btn-weather-refresh')?.addEventListener('click',()=>{
    s.general.weatherData=null;s.general.weatherLastFetch=0;saveConfig(s);loadWeather();showToast(t('toastWeatherRefresh'));
  });
  // Autocomplete for city search
  const cityInput=document.getElementById('inp-weather-city');
  const suggestions=document.getElementById('weather-suggestions');
  let _acTimer=null;
  cityInput?.addEventListener('input',e=>{
    clearTimeout(_acTimer);
    const q=e.target.value.trim();
    if(q.length<2){if(suggestions)suggestions.style.display='none';return}
    _acTimer=setTimeout(async()=>{
      try{
        const r=await fetch('https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(q)+'&count=10&language=de');
        const d=await r.json();
        if(!d.results?.length){suggestions.style.display='none';return}
        // Sort: Germany first, then Austria, then Switzerland, then rest
        const order={'Deutschland':0,'Austria':1,'Österreich':1,'Switzerland':2,'Schweiz':2};
        const sorted=[...d.results].sort((a,b)=>(order[a.country]??9)-(order[b.country]??9));
        suggestions.innerHTML=sorted.map(loc=>`
          <div data-lat="${loc.latitude}" data-lon="${loc.longitude}" data-name="${esc(loc.name)}" data-country="${esc(loc.country||'')}"
            style="padding:10px 14px;cursor:pointer;font-size:13px;color:var(--text-primary);border-bottom:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;transition:background .1s"
            class="fb-suggest-btn"
          >
            <span>${esc(loc.name)}</span>
            <span style="font-size:11px;color:var(--text-secondary)">${esc(loc.admin1||'')} ${esc(loc.country||'')}</span>
          </div>`).join('');
        suggestions.style.display='block';
        suggestions.style.maxHeight='180px';
        suggestions.style.overflowY='auto';
        suggestions.querySelectorAll('[data-name]').forEach(el=>el.addEventListener('click',()=>{
          const name=el.dataset.name;
          s.general.weatherCity=name;
          s.general.weatherLat=parseFloat(el.dataset.lat);
          s.general.weatherLon=parseFloat(el.dataset.lon);
          s.general.weatherData=null;s.general.weatherLastFetch=0;
          cityInput.value=name;
          suggestions.style.display='none';
          saveConfig(s);loadWeather();
        }));
      }catch(e){suggestions.style.display='none';}
    },300);
  });
  document.addEventListener('click',e=>{if(suggestions&&!suggestions.contains(e.target)&&e.target!==cityInput)suggestions.style.display='none';},{once:false});
  document.getElementById('tog-clock')?.addEventListener('change',e=>{s.general.showClock=e.target.checked;saveConfig(s)});
  document.querySelectorAll('[data-clkfmt]').forEach(b=>b.addEventListener('click',()=>{s.general.clockFormat=b.dataset.clkfmt;saveConfig(s);document.querySelectorAll('[data-clkfmt]').forEach(x=>x.classList.toggle('active',x.dataset.clkfmt===b.dataset.clkfmt))}));
  document.getElementById('tog-myip')?.addEventListener('change',e=>{s.general.showMyIP=e.target.checked;saveConfig(s);loadIPHeader();});
  // Appearance
  document.getElementById('inp-accent')?.addEventListener('input',e=>{s.theme.accentColor=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('inp-textcolor')?.addEventListener('input',e=>{s.theme.textColor=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('btn-textcolor-reset')?.addEventListener('click',()=>{s.theme.textColor='';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);document.getElementById('inp-textcolor').value='#ffffff';});
  document.getElementById('inp-btntextcolor')?.addEventListener('input',e=>{s.theme.btnTextColor=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('btn-btntextcolor-reset')?.addEventListener('click',()=>{s.theme.btnTextColor='#ffffff';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);document.getElementById('inp-btntextcolor').value='#ffffff';});
  document.getElementById('inp-panelbg')?.addEventListener('input',e=>{s.theme.panelBg=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('btn-panelbg-reset')?.addEventListener('click',()=>{s.theme.panelBg='#14161e';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);document.getElementById('inp-panelbg').value='#14161e';});
  document.getElementById('btn-accent-reset')?.addEventListener('click',()=>{s.theme.accentColor='#2bdfb5';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);document.getElementById('inp-accent').value='#2bdfb5';});
  document.getElementById('inp-cardcolor')?.addEventListener('input',e=>{s.theme.cardColor=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('btn-cardcolor-reset')?.addEventListener('click',()=>{s.theme.cardColor='#ffffff';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);const el=document.getElementById('inp-cardcolor');if(el)el.value='#ffffff';});
  document.getElementById('inp-textcolor2')?.addEventListener('input',e=>{s.theme.textColorSecondary=e.target.value;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('btn-textcolor2-reset')?.addEventListener('click',()=>{s.theme.textColorSecondary='';saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);document.getElementById('inp-textcolor2').value='#ffffff';});
  // Style presets
  document.querySelectorAll('[data-preset]').forEach(btn=>btn.addEventListener('click',()=>{
    const PRESETS=[
      {accent:'#2bdfb5',panelBg:'#0d0f14',text:'#f0f0f0',text2:'#8a8a9a',btnText:'#0d0f14'},
      {accent:'#a78bfa',panelBg:'#12101e',text:'#ede9fe',text2:'#a0899e',btnText:'#12101e'},
      {accent:'#f97316',panelBg:'#1a1008',text:'#fff7ed',text2:'#a08060',btnText:'#1a1008'},
      {accent:'#38bdf8',panelBg:'#0c1a2e',text:'#e0f2fe',text2:'#6a9ab0',btnText:'#0c1a2e'},
      {accent:'#4ade80',panelBg:'#0a1a0f',text:'#dcfce7',text2:'#6a9a78',btnText:'#0a1a0f'},
      {accent:'#e5e5e5',panelBg:'#111111',text:'#ffffff',text2:'#888888',btnText:'#111111'},
    ];
    const p=PRESETS[parseInt(btn.dataset.preset)];if(!p)return;
    s.theme.accentColor=p.accent;s.theme.textColor=p.text;s.theme.textColorSecondary=p.text2;
    s.theme.btnTextColor=p.btnText;s.theme.panelBg=p.panelBg;s.theme.cardColor='#ffffff';
    saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers);
    document.getElementById('sett-content').innerHTML=buildTab('design');bindTabEvents();
    showToast(t('stylePresets')+' ✓','success');
  }));

  // Design Export
  document.getElementById('btn-design-export')?.addEventListener('click',()=>{
    const design={theme:STATE.theme,background:{...STATE.background,imageId:null},_sildeskDesign:true,_version:1};
    const blob=new Blob([JSON.stringify(design,null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download='sildesk-design.json';a.click();URL.revokeObjectURL(a.href);
    showToast(t('designExportSuccess'),'success');
  });

  // Design Import
  document.getElementById('btn-design-import')?.addEventListener('click',()=>{
    document.getElementById('inp-design-import')?.click();
  });
  document.getElementById('inp-design-import')?.addEventListener('change',async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try{
      const text=await file.text();
      const data=JSON.parse(text);
      if(!data._sildeskDesign||!data.theme)throw new Error('invalid');
      STATE.theme={...STATE.theme,...data.theme};
      if(data.background&&data.background.type!=='image'){
        STATE.background={...STATE.background,...data.background};
      }
      saveConfig(STATE);applyTheme(STATE.theme,STATE.background,STATE.wallpapers);
      document.getElementById('sett-content').innerHTML=buildTab('design');bindTabEvents();
      showToast(t('designImportSuccess'),'success');
    }catch(_){showToast(t('designImportError'),'error');}
    e.target.value='';
  });
  [['sld-op','cardOpacity','hint-op',v=>Math.round(v*100)+'%'],['sld-bl','blurStrength','hint-bl',v=>v+'px'],['sld-ra','borderRadius','hint-ra',v=>v+'px']].forEach(([id,key,hint,fmt])=>document.getElementById(id)?.addEventListener('input',e=>{s.theme[key]=parseFloat(e.target.value);document.getElementById(hint).textContent=fmt(s.theme[key]);saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)}));
  document.getElementById('tog-anim')?.addEventListener('change',e=>{s.theme.animationsEnabled=e.target.checked;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('tog-anim-adv')?.addEventListener('change',e=>{s.theme.animationsEnabled=e.target.checked;saveConfig(s);applyTheme(s.theme,s.background,s.wallpapers)});
  document.getElementById('tog-entrance-anim')?.addEventListener('change',e=>{
    if(!s.general)s.general={};
    s.general.entranceAnim=e.target.checked;
    saveConfig(s);
    // Apply immediately
    document.querySelector('.vela-sidebar')?.style.setProperty('animation',e.target.checked?'':'none');
    document.querySelector('.vela-header')?.style.setProperty('animation',e.target.checked?'':'none');
  });
  // Background
  document.querySelectorAll('[data-bgtype]').forEach(b=>b.addEventListener('click',()=>{s.background.type=b.dataset.bgtype;saveConfig(s);applyBg(s.background,s.wallpapers);document.getElementById('sett-content').innerHTML=buildTab('background');bindTabEvents()}));
  document.getElementById('inp-bgcol')?.addEventListener('input',e=>{s.background.color=e.target.value;saveConfig(s);applyBg(s.background,s.wallpapers)});
  [['sld-bgbl','blur','hint-bgbl',v=>v+'px'],['sld-bri','brightness','hint-bri',v=>v+'%'],['sld-ovc','overlayOpacity','hint-ovc',v=>Math.round(v*100)+'%']].forEach(([id,key,hint,fmt])=>document.getElementById(id)?.addEventListener('input',e=>{s.background[key]=parseFloat(e.target.value);document.getElementById(hint).textContent=fmt(s.background[key]);saveConfig(s);applyBg(s.background,s.wallpapers)}));
  document.getElementById('inp-ovcol')?.addEventListener('input',e=>{s.background.overlayColor=e.target.value;saveConfig(s);applyBg(s.background,s.wallpapers)});
  document.getElementById('btn-wp-trigger')?.addEventListener('click',()=>document.getElementById('wp-upload')?.click());
  document.getElementById('wp-upload')?.addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=()=>{
      const id=uid();s.wallpapers[id]={id,name:f.name,dataUrl:r.result,createdAt:Date.now()};
      s.background.type='image';s.background.imageId=id;
      saveConfig(s);applyBg(s.background,s.wallpapers);
      document.getElementById('sett-content').innerHTML=buildTab('background');bindTabEvents();
      showToast(t('toastBGSet'),'success');
    };r.readAsDataURL(f);
  });
  document.querySelectorAll('[data-wpid]').forEach(el=>el.addEventListener('click',()=>{s.background.imageId=el.dataset.wpid;s.background.type='image';saveConfig(s);applyBg(s.background,s.wallpapers)}));
  // Cards
  document.querySelectorAll('[data-csize]').forEach(b=>b.addEventListener('click',()=>{const board=s.boards[s.activeBoardId];if(board){board.layoutData.cardSize=b.dataset.csize;saveConfig(s);renderDynamic()}document.querySelectorAll('[data-csize]').forEach(x=>x.classList.toggle('active',x.dataset.csize===b.dataset.csize))}));
  document.getElementById('sld-gap')?.addEventListener('input',e=>{
    const board=s.boards[s.activeBoardId];if(!board)return;
    board.layoutData.gap=parseInt(e.target.value);
    document.getElementById('hint-gap').textContent=board.layoutData.gap+'px';
    saveConfig(s);renderDynamic();
  });
  document.getElementById('sld-titlesize')?.addEventListener('input',e=>{
    const board=s.boards[s.activeBoardId];if(!board)return;
    board.layoutData.titleFontSize=parseInt(e.target.value);
    document.getElementById('hint-titlesize').textContent=board.layoutData.titleFontSize+'px';
    saveConfig(s);renderDynamic();
  });
  document.getElementById('btn-addboard-s')?.addEventListener('click',()=>{closeSettings();openBoardCreate()});
  document.querySelectorAll('[data-bedit-s]').forEach(b=>b.addEventListener('click',()=>{closeSettings();openBoardEdit(b.dataset.beditS)}));
  // Sync
  // ── Export / Import ──
  document.getElementById('btn-export')?.addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(s,null,2)],{type:'application/json'});
    const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(blob),download:`sildesk-backup-${new Date().toISOString().slice(0,10)}.json`});
    a.click();URL.revokeObjectURL(a.href);
    showToast(t('toastBackupExported'),'success');
  });
  document.getElementById('btn-import')?.addEventListener('click',()=>document.getElementById('inp-import').click());
  document.getElementById('inp-import')?.addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=async()=>{
      try{
        const imported=JSON.parse(r.result);
        Object.assign(STATE,imported);
        await saveConfig(STATE);
        showToast(t('toastImported'),'success');
        setTimeout(()=>location.reload(),800);
      }catch{showToast(t('toastImportError'),'error')}
    };
    r.readAsText(f);
  });

    // Advanced
  document.getElementById('btn-reset')?.addEventListener('click',()=>{
    showConfirm(t('confirmResetAll'),()=>{browser.storage.local.clear().then(()=>location.reload())});
  });
}

// ── Static Events ──
function bindStaticEvents(){
  // Logo fallback
  // Logo is loaded inline via fetch, fallback handled in boot()
  // Card icon fallbacks (delegated)
  document.getElementById('card-grid')?.addEventListener('error',e=>{
    if(e.target.dataset.fallback==='hide')e.target.style.display='none';
  },true);
  document.getElementById('search-trigger').addEventListener('click',openSearch);
  document.getElementById('sidebar-logo').addEventListener('click',()=>openSettings('general'));
  document.getElementById('btn-settings').addEventListener('click',()=>openSettings('general'));
  document.getElementById('btn-edit-mode').addEventListener('click',toggleEditMode);
  document.getElementById('btn-add-board').addEventListener('click',openBoardCreate);
  document.getElementById('btn-add-card').addEventListener('click',()=>{
    const board=STATE.boards[STATE.activeBoardId];if(!board)return;
    const id=uid(),now=Date.now();
    const grid=document.getElementById('card-grid');
    const cols=grid?getGridCols(grid):GRID_COLS();
    const freePos=findFreeCell(1,1);
    STATE.cards[id]={id,title:t('newCardTitle')||'Neue Karte',url:'https://',icon:{kind:'auto',resolvedUrl:null},openInNewTab:true,position:board.cardIds.length,gridPos:freePos,createdAt:now,updatedAt:now};
    board.cardIds.push(id);saveConfig(STATE);renderDynamic();
    setTimeout(()=>openCardEdit(id),80);
  });
  // Gap slider in edit toolbar
  document.getElementById('gap-slider').addEventListener('input',e=>{
    const board=STATE.boards[STATE.activeBoardId];if(!board)return;
    const gap=parseInt(e.target.value);
    board.layoutData.gap=gap;
    document.getElementById('gap-value').textContent=gap+'px';
    const g=document.getElementById('card-grid');
    g.style.setProperty('--gap-grid',gap+'px');
    const cardSize=board.layoutData.cardSize||'medium';
    const colW=({small:160,medium:200,large:260})[cardSize]||200;
    const rowH=({small:90,medium:100,large:120})[cardSize]||100;
    // Update gridTemplateColumns so cards reflow with new gap immediately
    g.style.gridTemplateColumns=`repeat(${GRID_COLS()},${colW}px)`;
    g.style.gridTemplateRows=`repeat(${GRID_ROWS()},${rowH}px)`;
    saveConfig(STATE);
  });
  // ── Sidebar resize (drag right edge) ──
  {
    const sidebar=document.getElementById('vela-sidebar');
    const resizer=document.getElementById('sidebar-resizer');
    let isResizing=false,startX=0,startW=0;
    resizer.addEventListener('mousedown',e=>{
      if(!EDIT_MODE)return;  // only resize in edit mode
      isResizing=true;startX=e.clientX;startW=sidebar.offsetWidth;
      resizer.classList.add('active');
      document.body.style.cursor='col-resize';
      document.body.style.userSelect='none';
    });
    document.addEventListener('mousemove',e=>{
      if(!isResizing)return;
      const w=Math.max(52,Math.min(200,startW+(e.clientX-startX)));
      sidebar.style.width=w+'px';
      document.documentElement.style.setProperty('--sidebar-w',w+'px');
      // Scale board pills with sidebar width
      const scale=Math.max(1,Math.min(1.6,(w-52)/100+1));
      document.querySelectorAll('#board-pills .board-pill-btn').forEach(p=>{
        p.style.width=(52*scale)+'px';
        const ico=p.querySelector('div[style*="width:40px"]');
        if(ico){ico.style.width=(40*scale)+'px';ico.style.height=(40*scale)+'px';ico.style.fontSize=(15*scale)+'px';}
      });
      // Fix header left position
      const hdr=document.querySelector('.vela-header');
      if(hdr){hdr.style.left=w+'px';hdr.style.width='calc(100% - '+w+'px)';}
    });
    document.addEventListener('mouseup',()=>{
      if(!isResizing)return;
      isResizing=false;resizer.classList.remove('active');
      document.body.style.cursor='';document.body.style.userSelect='';
      const w=parseInt(sidebar.style.width)||60;
      if(!STATE.general)STATE.general={};
      STATE.general.sidebarWidth=w;
      // Update header to not overlap sidebar
      const hdr=document.querySelector('.vela-header');
      if(hdr){hdr.style.left=w+'px';hdr.style.width='calc(100% - '+w+'px)';}
      // Re-render pills with new scale
      renderBoardPills();
      saveConfig(STATE);
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch()}
    if((e.metaKey||e.ctrlKey)&&e.key===','){e.preventDefault();openSettings()}
    if(e.key==='Escape'&&EDIT_MODE)toggleEditMode();
  });
}

boot();

// ── Weather ──
async function loadWeather(){
  const w=document.getElementById('weather-widget');
  if(!w||!STATE.general?.showWeather){if(w)w.innerHTML='';return}
  const saved=STATE.general.weatherData;
  const lastFetch=STATE.general.weatherLastFetch||0;
  if(saved&&Date.now()-lastFetch<1800000){renderWeather(saved);return}
  const city=STATE.general.weatherCity;
  let lat=STATE.general.weatherLat,lon=STATE.general.weatherLon;
  if(!city&&!lat){
    w.innerHTML=`<span style="font-size:11px;color:var(--text-tertiary)">${t('wLocationMissing')}</span>`;
    return;
  }
  w.innerHTML='<span style="font-size:11px;color:var(--text-tertiary)">...</span>';
  try{
    if(city&&!lat){
      const geo=await fetch('https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(city)+'&count=1&language=de');
      const gd=await geo.json();
      if(!gd.results?.length){w.innerHTML=`<span style="font-size:11px;color:var(--text-tertiary)">${t('wCityNotFound')}</span>`;return}
      lat=gd.results[0].latitude;lon=gd.results[0].longitude;
      STATE.general.weatherLat=lat;STATE.general.weatherLon=lon;
      STATE.general.weatherCity=gd.results[0].name||city;
    }
    const resp=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weathercode,apparent_temperature&timezone=auto');
    const data=await resp.json();
    const wd={temp:Math.round(data.current.temperature_2m),code:data.current.weathercode,feels:Math.round(data.current.apparent_temperature)};
    STATE.general.weatherData=wd;STATE.general.weatherLastFetch=Date.now();
    saveConfig(STATE);renderWeather(wd);
  }catch(e){w.innerHTML='<span style="font-size:11px;color:var(--text-tertiary)">N/A</span>'}
}
// Weather icons — exact Lucide paths from lucide.dev (MIT license, v0.363)
function weatherIcon(code,size=18){
  const st=`width:${size}px;height:${size}px;color:var(--accent);flex-shrink:0;display:inline-block;vertical-align:middle`;
  const svg=p=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${st}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  // sun (code 0)
  if(code===0)return svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>');
  // cloud-sun (code 1-2)
  if(code<=2)return svg('<path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H5a3 3 0 0 1 0-6 3 3 0 0 1 3-2z"/><path d="M19.5 13A2.5 2.5 0 0 1 22 15.5c0 1.38-1.12 2.5-2.5 2.5H13a4 4 0 1 1 0-8 4 4 0 0 1 3.25 1.67"/>');
  // cloud (code 3)
  if(code<=3)return svg('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>');
  // wind/fog (code 45-48)
  if(code<=48)return svg('<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>');
  // cloud-rain (code 51-67)
  if(code<=67)return svg('<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>');
  // cloud-snow (code 71-77)
  if(code<=77)return svg('<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 15h.01"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M12 21h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/>');
  // cloud-drizzle (code 80-82)
  if(code<=82)return svg('<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M12 19v1"/><path d="M12 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/>');
  // cloud-lightning (code 95-99)
  return svg('<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/>');
}

function renderWeather(wd){
  const w=document.getElementById('weather-widget');if(!w)return;
  const city=STATE.general.weatherCity||'';
  w.style.cssText='display:flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:var(--radius-lg);background:var(--glass-bg);border:1px solid var(--glass-border);backdrop-filter:blur(var(--glass-blur))';
  w.innerHTML=weatherIcon(wd.code,15)
    +(city?`<span style="font-size:12px;color:var(--text-secondary)">${esc(city)}</span>`:'')
    +`<span style="font-size:13px;font-weight:600;color:var(--text-primary)">${wd.temp}°</span>`
    +`<span style="font-size:11px;color:var(--text-secondary)">${wd.feels}°</span>`;
}

// ── IP Header ──
async function loadIPHeader(){
  const el=document.getElementById('ip-header-widget');
  if(!el)return;
  if(!STATE.general?.showMyIP){el.style.display='none';el.innerHTML='';return;}
  el.style.cssText='display:flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:var(--radius-lg);background:var(--glass-bg);border:1px solid var(--glass-border);backdrop-filter:blur(var(--glass-blur))';
  el.innerHTML=`<span style="font-size:11px;color:var(--text-tertiary)">...</span>`;
  try{
    // Externe IP parallel aus zwei Quellen holen
    const apis=[
      fetch('https://ipwho.is/',{cache:'no-store',signal:AbortSignal.timeout?.(5000)})
        .then(r=>{if(!r.ok)throw 0;return r.json();})
        .then(d=>{if(!d.ip)throw 0;return{ip:d.ip,isp:d.connection?.isp||d.org||''};}),
      browser.runtime.sendMessage({type:'FETCH_IP'})
        .then(resp=>{if(!resp?.ok||!resp.data?.ip)throw 0;return{ip:resp.data.ip,isp:resp.data.org||''};})
    ].map(p=>p.catch(()=>null));
    const results=await Promise.all(apis);
    const data=results.find(r=>r?.ip)||null;
    if(!data?.ip){el.innerHTML=`<span style="font-size:11px;color:var(--text-tertiary)">N/A</span>`;return;}
    // IP-Icon (Netzwerk-Symbol)
    const icon=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;color:var(--accent);flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    el.innerHTML=icon+`<span style="font-size:12px;font-weight:600;color:var(--text-primary);font-family:monospace;letter-spacing:-.02em">${esc(data.ip)}</span>`;
    // Klick → kopiert IP in Zwischenablage
    el.style.cursor='pointer';
    el.title='IP kopieren';
    el.onclick=()=>{navigator.clipboard.writeText(data.ip).then(()=>{
      const orig=el.innerHTML;
      el.innerHTML=icon+`<span style="font-size:12px;font-weight:600;color:var(--accent);font-family:monospace">Kopiert!</span>`;
      setTimeout(()=>{el.innerHTML=orig;},1500);
    }).catch(()=>{});};
  }catch(e){
    el.innerHTML=`<span style="font-size:11px;color:var(--text-tertiary)">N/A</span>`;
  }
}

// ══════════════════════════════════════════════════════
// ── GitHub Gist Sync ──
// ══════════════════════════════════════════════════════
const GIST_FILENAME = 'sildesk-config.json';

// Low-level fetch — returns {ok, data, status, error}
async function ghFetch(token, method, path, body){
  const clean = token.replace(/[\s\r\n]/g, '');
  const hdrs = {'Authorization': 'token '+clean, 'Accept':'application/vnd.github+json'};
  if(body) hdrs['Content-Type'] = 'application/json';
  try{
    const r = await fetch('https://api.github.com'+path, {
      method, headers: hdrs,
      body: body ? JSON.stringify(body) : undefined
    });
    const data = r.status === 204 ? {} : await r.json().catch(()=>({}));
    return {ok: r.ok, status: r.status, data};
  } catch(e){
    return {ok:false, status:0, error: e.message};
  }
}

function ghError(res){
  if(res.status===401) return 'Token ungültig — prüfe ob er noch aktiv ist';
  if(res.status===403) return 'Kein Zugriff — Token braucht Scope "gist"';
  if(res.status===404) return 'Gist nicht gefunden — ID prüfen';
  return res.data?.message || res.error || 'HTTP '+res.status;
}

// Push local config to Gist — returns {ok, gistId, error}
const WALLPAPER_SYNC_LIMIT = 700 * 1024; // 700 KB base64 — safe under GitHub Gist 1 MB limit

async function buildPushContent(){
  const pushState = JSON.parse(JSON.stringify(STATE));
  const skippedWallpapers = [];
  // Include wallpapers under limit, strip those that are too large
  Object.values(pushState.wallpapers||{}).forEach(wp => {
    const size = (wp.dataUrl||'').length;
    if(size > WALLPAPER_SYNC_LIMIT){
      skippedWallpapers.push({name: wp.name, sizeMB: (size/1024/1024).toFixed(1)});
      wp.dataUrl = null;
    }
  });
  // Card icons are always included (small)
  // !! CRITICAL: Remove token before pushing to Gist
  if(pushState.storage?.gist) pushState.storage.gist.token = '';
  return {content: JSON.stringify(pushState, null, 2), skippedWallpapers};
}

async function gistPush(token, gistId){
  if(_pushInProgress){console.warn('[GH] Push already in progress, skipping');return {ok:false,error:t('toastPushActive')||'Push bereits aktiv'};}
  _pushInProgress = true;
  try{
    const {content, skippedWallpapers} = await buildPushContent();
    if(skippedWallpapers.length > 0){
      const names = skippedWallpapers.map(w=>`"${w.name}" (${w.sizeMB} MB)`).join(', ');
      showToast(t('toastBGTooLarge')+names,'error',6000);
    }
    const files = {[GIST_FILENAME]: {content}};
    let res;
    if(gistId){
      res = await ghFetch(token, 'PATCH', '/gists/'+gistId, {files});
    } else {
      // POST already includes content — no need for a follow-up PATCH
      res = await ghFetch(token, 'POST', '/gists', {description:'Sildesk Config', public:false, files});
    }
    _pushInProgress = false;
    if(!res.ok) return {ok:false, error: ghError(res)};
    return {ok:true, gistId: res.data.id, isNew: !gistId};
  }catch(e){ _pushInProgress=false; throw e; }
}

// Pull config from Gist — returns {ok, error}
async function gistPull(token, gistId){
  const res = await ghFetch(token, 'GET', '/gists/'+gistId+'?t='+Date.now());
  if(!res.ok) return {ok:false, error: ghError(res)};
  const fileObj = res.data.files?.[GIST_FILENAME];
  let raw = fileObj?.content;
  // GitHub truncates large files — fetch via raw_url
  if(fileObj?.truncated || !raw){
    if(!fileObj?.raw_url) return {ok:false, error:'Keine Sildesk-Daten in diesem Gist gefunden'};
    try{
      const rawRes = await fetch(fileObj.raw_url+'?t='+Date.now(), {cache:'no-store'});
      raw = await rawRes.text();
    }catch(e){ return {ok:false, error:'raw_url fetch fehlgeschlagen: '+e.message}; }
  }
  if(!raw) return {ok:false, error:'Keine Sildesk-Daten in diesem Gist gefunden'};
  try{
    const remote = JSON.parse(raw);
    // Replace STATE entirely with remote, then restore local gist credentials
    const localToken = token;
    const localGistId = gistId;
    // Clear STATE and replace with remote
    Object.keys(STATE).forEach(k => delete STATE[k]);
    Object.assign(STATE, remote);
    if(!STATE.storage) STATE.storage={};
    if(!STATE.storage.gist) STATE.storage.gist={};
    STATE.storage.gist.token = localToken;
    STATE.storage.gist.gistId = localGistId;
    STATE.storage.gist.lastSync = Date.now();
    // Ensure activeBoardId is valid after pull
    const boardIds = Object.keys(STATE.boards||{});
    if(boardIds.length > 0 && !STATE.boards[STATE.activeBoardId]){
      STATE.activeBoardId = boardIds[0];
    }
    return {ok:true};
  }catch(e){
    return {ok:false, error:'JSON-Fehler: '+e.message};
  }
}


// ── Sync Nudge System ──
let _nudgeEl = null;
let _pollInterval = null;

function removeSyncNudge(){
  if(_nudgeEl){ _nudgeEl.style.opacity='0'; _nudgeEl.style.transition='opacity .25s'; setTimeout(()=>_nudgeEl?.parentNode?.removeChild(_nudgeEl),260); _nudgeEl=null; }
}

function showSyncNudge({title, sub, primaryLabel, primaryAction, secondaryLabel}){
  removeSyncNudge();
  const root = document.getElementById('toast-root');
  if(!root) return;
  const el = document.createElement('div');
  el.className = 'sync-nudge';
  el.innerHTML = `
    <div class="sync-nudge-title"><div class="sync-nudge-dot"></div>${esc(title)}</div>
    <div class="sync-nudge-sub">${esc(sub)}</div>
    <div class="sync-nudge-actions">
      <button class="btn btn-primary" id="sn-primary" style="flex:1;padding:8px 10px;font-size:12px;border-radius:10px">${esc(primaryLabel)}</button>
      <button class="btn btn-secondary" id="sn-later" style="flex:1;padding:8px 10px;font-size:12px;border-radius:10px">${esc(secondaryLabel||'Nein, später')}</button>
    </div>`;
  root.appendChild(el);
  _nudgeEl = el;
  el.querySelector('#sn-primary').addEventListener('click', async()=>{ removeSyncNudge(); await primaryAction(); });
  el.querySelector('#sn-later').addEventListener('click', ()=>{ removeSyncNudge(); });
}

// Called after every local change — prompt to push
let _nudgeUploadTimer = null;
function schedulePushNudge(){
  if(!STATE) return; // STATE not yet initialized
  if(!STATE.general?.nudgeEnabled) return; // user disabled nudges
  const gs = STATE.storage?.gist;
  if(!gs?.token || !gs?.gistId) return; // not connected
  if(_nudgeUploadTimer) clearTimeout(_nudgeUploadTimer);
  _nudgeUploadTimer = setTimeout(()=>{
    _nudgeUploadTimer = null;
    if(_nudgeEl) return; // already showing
    showSyncNudge({
      title: 'Änderungen synchronisieren?',
      sub: 'Du hast Änderungen vorgenommen. Möchtest du die aktuelle Version hochladen?',
      primaryLabel: 'Jetzt hochladen',
      secondaryLabel: 'Nein, später',
      primaryAction: async()=>{
        const gs = STATE.storage?.gist;
        if(!gs?.token || !gs?.gistId) return;
        const r = await gistPush(gs.token, gs.gistId);
        if(r.ok){ STATE.storage.gist.gistId=r.gistId; STATE.storage.gist.lastSync=Date.now(); STATE.updatedAt=Date.now(); await browser.storage.local.set({[STORE_KEY]:STATE}); showToast(t('toastSynced'),'success'); }
        else showToast(t('toastSyncError')+r.error,'error');
      }
    });
  }, 4000); // 4s after last change
}

// Poll Gist every 60s — show nudge if remote is newer
async function pollForUpdates(){
  if(!STATE.general?.nudgeEnabled) return; // user disabled nudges
  const gs = STATE.storage?.gist;
  if(!gs?.token || !gs?.gistId) return;
  try{
    const res = await ghFetch(gs.token,'GET','/gists/'+gs.gistId+'?t='+Date.now());
    if(!res.ok) return;
    const fileObj = res.data.files?.['sildesk-config.json'];
    let raw = fileObj?.content;
    if(fileObj?.truncated || !raw){
      if(!fileObj?.raw_url) return;
      const rawRes = await fetch(fileObj.raw_url+'?t='+Date.now(),{cache:'no-store'});
      raw = await rawRes.text();
    }
    const remote = JSON.parse(raw);
    const remoteTime = remote.updatedAt || 0;
    const localTime = STATE.updatedAt || 0;
    if(remoteTime > localTime + 5000){ // remote is >5s newer
      if(_nudgeEl) return; // already showing a nudge
      showSyncNudge({
        title: 'Neuere Version verfügbar',
        sub: 'Ein anderes Gerät hat eine aktuellere Version. Möchtest du jetzt aktualisieren?',
        primaryLabel: 'Jetzt aktualisieren',
        secondaryLabel: 'Nein, später',
        primaryAction: async()=>{
          const gs2 = STATE.storage?.gist;
          if(!gs2?.token || !gs2?.gistId) return;
          showToast(t('toastLoading'));
          const r = await gistPull(gs2.token, gs2.gistId);
          if(r.ok){
            STATE.updatedAt = Date.now();
            await browser.storage.local.set({[STORE_KEY]: STATE});
            showToast(t('toastUpdated'),'success');
            await new Promise(res=>setTimeout(res,800));
            location.reload();
          } else showToast(t('toastLoadError')+r.error,'error');
        }
      });
    }
  }catch(e){ console.warn('[Sildesk] Poll error:', e); }
}

function startPolling(){
  if(_pollInterval) clearInterval(_pollInterval);
  const gs = STATE.storage?.gist;
  if(!gs?.token || !gs?.gistId) return;
  pollForUpdates(); // immediate first check
  _pollInterval = setInterval(pollForUpdates, 60000);
  // Also check immediately when tab becomes visible again
  document.removeEventListener('visibilitychange', _onVisibilityChange);
  document.addEventListener('visibilitychange', _onVisibilityChange);
}
function _onVisibilityChange(){
  if(document.visibilityState === 'visible'){
    const gs = STATE.storage?.gist;
    if(gs?.token && gs?.gistId) pollForUpdates();
  }
}

// Auto-sync hook — debounced 10s to avoid GitHub rate limiting
let _autoSyncTimer = null;
let _pushInProgress = false;

function maybeAutoSync(){
  if(_autoSyncTimer) clearTimeout(_autoSyncTimer);
  _autoSyncTimer = setTimeout(async()=>{
    _autoSyncTimer = null;
    const gs = STATE.storage?.gist;
    if(!gs?.autoSync || !gs?.token || !gs?.gistId){
      return;
    }
    const r = await gistPush(gs.token, gs.gistId);
    if(r.ok){
      STATE.storage.gist.gistId=r.gistId;
      STATE.storage.gist.lastSync=Date.now();
      STATE.updatedAt=Date.now();
      browser.storage.local.set({[STORE_KEY]:STATE}).catch(()=>{});
    } else {
      console.warn('[Sildesk] Auto-sync failed:', r.error);
    }
  }, 10000); // 10s debounce
}
