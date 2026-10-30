import { site } from "./content.mjs";

export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );

const paths = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  home: '<path d="m3 10 9-7 9 7v11H3V10Z"/><path d="M9 21v-8h6v8"/>',
  leaf: '<path d="M20 3C8 2 2 8 5 16c8 5 16-1 15-13Z"/><path d="m3 21 12-12"/>',
  solar:
    '<path d="m5 10-2 9h18l-2-9H5ZM12 10v9M4 15h16M12 19v3M8 22h8"/><path d="M12 1v2M5 4l1 1m12-1-1 1"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  chat: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H3l1.8-4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h8m-8 4h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  shade: '<path d="M4 3h16v18H4zM4 7h16M4 11h16M4 15h16"/>',
  temperature:
    '<path d="M9 14V5a3 3 0 0 1 6 0v9a5 5 0 1 1-6 0Z"/><path d="M12 8v10"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
};
export const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? paths.arrow}</svg>`;
export const button = (text, href, secondary = false) =>
  `<a class="button ${secondary ? "button-secondary" : ""}" href="${href}">${text}${icon("diagonal")}</a>`;
export const eyebrow = (text) => `<p class="eyebrow"><span></span>${text}</p>`;
export const pageIntro = (kicker, title, text) =>
  `<section class="page-intro container">${eyebrow(kicker)}<h1>${title}</h1><p class="intro-copy">${text}</p></section>`;
export function layout({ title, description, path, content, scriptData = "" }) {
  const nav = [
    ["/leistungen/", "Leistungen"],
    ["/smart-home/", "Smart Home"],
    ["/inspiration/", "Inspiration"],
    ["/ueber-mich/", "Über mich"],
    ["/wissen/", "Wissen"],
  ];
  return `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#163e3c"><meta name="description" content="${escape(description)}"><title>${escape(title)} · ${site.name}</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css">${["/", "/smart-home/"].includes(path) ? '<link rel="stylesheet" href="/assets/smart-demos.css">' : ""}${path.startsWith("/leistungen/") && path !== "/leistungen/" ? '<link rel="stylesheet" href="/assets/services.css">' : ""}${path === "/" ? '<link rel="preload" as="image" href="/assets/zuhause-elektrotechnik.jpg">' : ""}<script type="module" src="/assets/app.js"></script></head>
<body><a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<div class="preview-banner"><span class="status-dot"></span>${site.preview}</div>
<header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="Gabriel – Startseite"><span class="brand-symbol">${icon("bolt")}</span><span><strong>gabriel<span class="brand-dot">.</span></strong><small>ELEKTROTECHNIK & SMART HOME</small></span></a>
<button class="menu-toggle" aria-expanded="false" aria-controls="hauptnavigation" aria-label="Menü öffnen">${icon("menu")}<span>Menü</span></button>
<nav class="main-nav" id="hauptnavigation" aria-label="Hauptnavigation">${nav.map(([href, label]) => `<a href="${href}" ${path.startsWith(href) ? 'aria-current="page"' : ""}>${label}</a>`).join("")}<a class="nav-contact" href="/kontakt/" ${path === "/kontakt/" ? 'aria-current="page"' : ""}>Kontakt</a></nav><a class="header-cta button" href="/anfrage/">Projekt planen${icon("diagonal")}</a></div></header>
<main id="inhalt" tabindex="-1">${content}</main>
<footer class="site-footer"><div class="container footer-top"><div><a class="brand footer-brand" href="/"><span class="brand-symbol">${icon("bolt")}</span><span><strong>gabriel.</strong><small>ELEKTROTECHNIK & SMART HOME</small></span></a><p>Gute Technik.<br>Ein gutes Gefühl zu Hause.</p></div><div><p class="footer-label">ENTDECKEN</p><a href="/leistungen/">Leistungen</a><a href="/smart-home/">Smart Home</a><a href="/inspiration/">Inspiration</a></div><div><p class="footer-label">PERSÖNLICH</p><a href="/ueber-mich/">Über mich</a><a href="/wissen/">Wissen & Fragen</a><a href="/kontakt/">Kontakt</a></div><div class="footer-note"><span class="status-dot"></span><strong>Eine Idee nimmt Form an.</strong><p>Privater Zukunftsentwurf. Noch kein aktiver Betrieb und keine Auftragsannahme.</p></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Gabriel · Website-Entwurf</span><div><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/bildnachweise/">Bildnachweise</a></div></div></footer>
<button class="assistant-trigger" aria-label="Dein Assistent – in Vorbereitung" title="Assistent in Vorbereitung" aria-haspopup="dialog" aria-controls="assistant-dialog">${icon("chat")}<span>Dein Assistent<small>In Vorbereitung</small></span><span class="assistant-spark">✧</span></button>
<dialog id="assistant-dialog" class="assistant-dialog" aria-labelledby="assistant-title"><div class="dialog-top"><span class="assistant-avatar">${icon("chat")}</span><div><h2 id="assistant-title">Dein Zuhause-Assistent</h2><span>KI-Funktion in Vorbereitung</span></div><button class="icon-button" data-close-dialog aria-label="Assistent schließen">${icon("close")}</button></div><div class="dialog-content"><p class="eyebrow">SCHÖN, DASS DU DA BIST.</p><h3>Eine gute Frage ist<br>ein guter Anfang.</h3><p>Hier soll dir später ein KI-Assistent bei Fragen zu deinem Vorhaben helfen. Aktuell kannst du bereits:</p><a class="assistant-link" href="/anfrage/">Dein Projekt Schritt für Schritt planen${icon("arrow")}</a><a class="assistant-link" href="/wissen/">Antworten auf häufige Fragen finden${icon("arrow")}</a><p class="dialog-footnote">Diese Vorschau verwendet noch keine KI und übermittelt keine Chatnachrichten.</p></div></dialog>
${scriptData}</body></html>`;
}
