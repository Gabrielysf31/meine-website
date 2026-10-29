import { services, faqs, scenes, visuals } from "./content.mjs";
import { icon, button, eyebrow, pageIntro, escape } from "./components.mjs";

const visualImage = (key, lazy = true) => {
  const image = visuals[key];
  return `<img src="${image.src}" alt="${escape(image.alt)}" width="${image.width}" height="${image.height}" ${lazy ? 'loading="lazy"' : ""}>`;
};
const visualFigure = (key, classes = "") =>
  `<figure class="technology-figure ${classes}">${visualImage(key, false)}<figcaption>${escape(visuals[key].caption)}</figcaption></figure>`;

const serviceRows = (withImages = false) =>
  services
    .map(
      (s) =>
        `<a class="service-row" href="/leistungen/${s.slug}/"><span class="service-number">${s.number}</span>${withImages ? `<span class="service-thumb">${visualImage(s.visual)}</span>` : `<span class="service-icon">${icon(s.icon)}</span>`}<div><h3>${s.label}</h3><p>${s.short}</p></div><span class="row-arrow">${icon("diagonal")}</span></a>`,
    )
    .join("");
const faqList = (items = faqs) =>
  items
    .map(
      (f) =>
        `<details class="faq-item" data-faq data-keywords="${escape(f.keywords || "")}"><summary><span>${escape(f.question)}</span>${icon("plus")}</summary><div class="faq-answer"><span class="tag">${f.category}</span><p>${escape(f.answer)}</p></div></details>`,
    )
    .join("");
const steps = `<ol class="process-list"><li><span>01</span><div><h3>Deine Idee</h3><p>Du erzählst, was du verändern möchtest und was dir wichtig ist.</p></div></li><li><span>02</span><div><h3>Ein gemeinsamer Blick</h3><p>Gebäude, Möglichkeiten und offene Fragen werden zusammen betrachtet.</p></div></li><li><span>03</span><div><h3>Ein klarer nächster Schritt</h3><p>Aus deinen Wünschen wird eine verständliche Grundlage für die weitere Planung.</p></div></li></ol>`;
const scenesSection = () =>
  `<section class="container scene-section" aria-labelledby="scene-heading"><div class="scene-intro">${eyebrow("SMART HOME IM ALLTAG")}<h2 id="scene-heading">Dein Tag.<br>Deine Möglichkeiten.</h2><p>Was wäre, wenn ein Handgriff mehrere passende Einstellungen zusammenfasst? Entdecke drei Ideen für deinen Alltag.</p><div class="scene-tabs" role="group" aria-label="Alltagssituation auswählen"><button class="scene-tab" data-scene="ankommen" aria-pressed="true">Ankommen</button><button class="scene-tab" data-scene="feierabend" aria-pressed="false">Feierabend</button><button class="scene-tab" data-scene="unterwegs" aria-pressed="false">Unterwegs</button></div><small>Illustratives Beispiel. Keine Verbindung zu echten Geräten.</small></div><div class="scene-card" aria-live="polite" aria-atomic="true"><div class="scene-card-top"><span class="scene-home">${icon("home")}</span><span class="tag">DEIN ZUHAUSE</span></div><h3 data-scene-title>${scenes.ankommen.title}</h3><p data-scene-text>${scenes.ankommen.text}</p><dl class="scene-values"><div><dt>${icon("sun")}Licht</dt><dd data-scene-light>${scenes.ankommen.light}</dd></div><div><dt>${icon("shade")}Beschattung</dt><dd data-scene-blinds>${scenes.ankommen.blinds}</dd></div><div><dt>${icon("temperature")}Raumkomfort</dt><dd data-scene-heating>${scenes.ankommen.heating}</dd></div></dl></div></section>`;

const home = `<section class="hero container"><div class="hero-copy">${eyebrow("FÜR WOHNUNGEN & EIGENHEIME")}<h1>Dein Zuhause.<br>Einfach <span>smarter.</span></h1><p>Durchdachte Elektrik, gutes Licht und Technik, die deinen Alltag leichter macht.</p><div class="hero-actions">${button("Dein Projekt planen", "/anfrage/")}<a class="text-link" href="/leistungen/">Leistungen entdecken${icon("arrow")}</a></div><div class="hero-note"><span class="tiny-home">${icon("home")}</span><span>Für das, was dein Zuhause ausmacht.</span></div></div><div class="hero-visual"><img src="/assets/wohnraum.jpg" width="1800" height="1350" alt="Heller Wohnraum mit warmen Naturmaterialien und großzügigen Fenstern" fetchpriority="high"><span class="image-caption">WOHNINSPIRATION · BEISPIELBILD</span><div class="photo-note"><span>${icon("sun")}</span><div>Weniger Aufwand.<br><strong>Mehr Zuhause.</strong></div><span class="photo-note-dot"></span></div></div></section>
<div class="container values-strip"><div>${icon("home")}<span>Für dein Zuhause gedacht</span></div><div>${icon("chat")}<span>Verständlich von Anfang an</span></div><div>${icon("leaf")}<span>Mit Blick nach vorn</span></div></div>
<section class="container section services-section"><div class="section-heading"><div>${eyebrow("WAS MÖCHTEST DU VERÄNDERN?")}<h2>Gute Ideen beginnen<br>bei deinem Alltag.</h2></div><p>Ob kleine Veränderung oder großes Vorhaben: Hier findest du die passende Richtung.</p></div><div class="service-list">${serviceRows()}</div><p class="section-footnote">Vorgesehene Themenbereiche. Der tatsächliche Leistungsumfang wird noch festgelegt.</p></section>
<section class="smart-teaser"><div class="container smart-teaser-grid"><div class="smart-photo">${visualImage("lighting")}<span class="image-caption">LICHT IM ALLTAG · KI-VISUALISIERUNG</span></div><div class="smart-copy">${eyebrow("VERNETZT. ABER GANZ EINFACH.")}<h2>Ein Zuhause,<br>das mitdenkt.</h2><p>Das Licht wird gemütlich. Die Rollläden fahren herunter. Dein Feierabend beginnt. Smart Home setzt dort an, wo es dir wirklich etwas bringt.</p>${button("Smart Home entdecken", "/smart-home/", true)}<span class="small-note">Dein Alltag gibt die Richtung vor. Die Technik folgt.</span></div></div></section>
<section class="container section process-section"><div>${eyebrow("VON DER IDEE ZUM PLAN")}<h2>Gut geplant.<br>Von Anfang an.</h2><p class="muted-copy">Ein verständlicher Weg für deine Wünsche.<br>So ist der spätere Ablauf gedacht.</p></div>${steps}</section>
<section class="container section home-faq"><div class="section-heading"><div>${eyebrow("GUT ZU WISSEN")}<h2>Erste Fragen?<br>Hier geht’s weiter.</h2></div><a class="text-link" href="/wissen/">Alle Fragen ansehen${icon("arrow")}</a></div>${faqList(faqs.slice(0, 3))}</section>`;

const servicesPage = `${pageIntro("LEISTUNGEN IM ÜBERBLICK", "Was dein Zuhause<br>weiterbringt.", "Vom Neubau über die Modernisierung bis zum eigenen Solarstrom: Hier findest du die passende Richtung.")}<section class="container content-section"><div class="service-list">${serviceRows(true)}</div><p class="section-footnote">Diese Bereiche zeigen die geplante Ausrichtung. Es werden noch keine Leistungen angeboten.</p></section>`;

const smartPage = `
${pageIntro("SMART HOME & GEBÄUDEINTEGRATION", "Einfach wohnen.<br>Intelligent verbunden.", "Beleuchtung per Taster, Jalousien vom Garten aus oder eine gemeinsame Szene für den Abend. Gebäudetechnik wird dann gut, wenn sie zu deinem Alltag passt.")}
<div class="container">${visualFigure("shading", "smart-hero-image")}</div>
${scenesSection()}
<section class="container section">
  <div class="section-heading"><div>${eyebrow("LICHT, BESCHATTUNG & BEDIENUNG")}<h2>Technik, die<br>zusammenspielt.</h2></div><p>Ein System wie KNX kann unterschiedliche Gebäudefunktionen verbinden. Welche Lösung passt, entscheidet sich an deinem Zuhause.</p></div>
  <div class="smart-detail-grid">
    ${visualFigure("lighting")}
    <div class="smart-detail-copy"><h3>Licht ist mehr als an und aus.</h3><p>Gedimmte Pendelleuchten, indirektes LED-Licht und einzelne Lichtgruppen lassen sich zu passenden Szenen zusammenfassen.</p><h3>Deine Jalousien. Deine Bedienung.</h3><p>Beschattung über Wandtaster, automatische Abläufe oder eine eingerichtete App steuern – auch von der Terrasse aus.</p><p class="section-footnote">Die Bilder veranschaulichen Funktionen. Sie zeigen keine zertifizierten Produkte oder bereits realisierte Anlagen.</p></div>
  </div>
</section>`;

const inspirationPage = `
${pageIntro("ELEKTROTECHNIK IM ALLTAG", "Gute Technik.<br>Sichtbar im Zuhause.", "Beleuchtung, Beschattung, Neubau und Solarstrom: vier beispielhafte Vorhaben. Die Visualisierungen zeigen keine eigenen Kundenprojekte.")}
<section class="container inspiration-grid">
  <article class="inspiration-feature">
    <figure class="inspiration-image">${visualImage("lighting", false)}<figcaption class="image-caption">BELEUCHTUNG · KI-VISUALISIERUNG</figcaption></figure>
    <div><span class="tag">LICHT & BEDIENUNG</span><h2>Wenn das Licht<br>den Abend verändert.</h2><p>Pendelleuchte, Deckenspots und indirektes LED-Licht – gemeinsam dimmbar, mit einer passenden Szene für den Feierabend.</p><a class="text-link" href="/leistungen/licht/">Beleuchtung entdecken${icon("arrow")}</a></div>
  </article>
  <article class="inspiration-small inspiration-technical">
    <figure class="inspiration-image">${visualImage("shading")}<figcaption class="image-caption">BESCHATTUNG · KI-VISUALISIERUNG</figcaption></figure>
    <div class="inspiration-body"><span class="tag">SMART HOME & KNX</span><h2>Die Jalousien steuern.<br>Auch vom Garten aus.</h2><p>Beschattung passend zu deinem Alltag bedienen: per Taster, App oder abgestimmter Automatik.</p><a class="text-link" href="/smart-home/">Vernetzung entdecken${icon("arrow")}</a></div>
  </article>
  <article class="inspiration-small inspiration-technical">
    <figure class="inspiration-image">${visualImage("installation")}<figcaption class="image-caption">ELEKTROINSTALLATION · KI-VISUALISIERUNG</figcaption></figure>
    <div class="inspiration-body"><span class="tag">NEUBAU</span><h2>Bevor die Wände<br>fertig sind.</h2><p>Leitungswege, Steckdosen und Lichtauslässe dort vorsehen, wo du sie später brauchst. Mit Platz für künftige Ideen.</p><a class="text-link" href="/leistungen/neubau/">Elektroinstallation ansehen${icon("arrow")}</a></div>
  </article>
  <article class="inspiration-feature inspiration-solar">
    <figure class="inspiration-image">${visualImage("solar")}<figcaption class="image-caption">PHOTOVOLTAIK · KI-VISUALISIERUNG</figcaption></figure>
    <div><span class="tag">SOLARSTROM & ELEKTRISCHER ANSCHLUSS</span><h2>Vom Dach<br>ins Energiesystem.</h2><p>Photovoltaik, elektrischer Anschluss und die Vorbereitung für Speicher oder Wallbox als zusammenhängendes Vorhaben betrachten.</p><a class="text-link" href="/leistungen/photovoltaik/">Photovoltaik entdecken${icon("arrow")}</a></div>
  </article>
</section>`;

const aboutPage = `${pageIntro("DIE PERSON HINTER DER IDEE", "Hi, ich bin Gabriel.", "Mich interessiert, wie Elektrotechnik und intelligente Gebäude den Alltag zu Hause einfacher machen können.")}<section class="container about-grid"><div class="about-art" aria-hidden="true"><span class="about-orbit orbit-one"></span><span class="about-orbit orbit-two"></span><span class="about-initial">g<span>.</span></span><span class="about-art-caption">TECHNIK MIT EINEM PERSÖNLICHEN BLICK.</span></div><div class="about-copy">${eyebrow("MEINE RICHTUNG")}<h2>Gute Technik beginnt<br>mit guten Fragen.</h2><p>Diese Website ist ein erster Entwurf für eine mögliche spätere Selbstständigkeit. Mein Fokus liegt zunächst auf Privatkunden mit Wohnungen und Eigenheimen.</p><p>Ein Meisterabschluss im Bereich Energie- und Gebäudetechnik beziehungsweise Gebäudesystemintegration ist eine Zukunftsüberlegung. Der genaue Weg und das spätere Leistungsangebot stehen noch nicht fest.</p><div class="about-principle">${icon("chat")}<p>Mein Anspruch an diesen Auftritt: verständlich, persönlich und auf den Punkt.</p></div></div></section><section class="container section"><div class="three-columns"><article><span class="number-label">01 / VERSTÄNDLICH</span><h3>Dein Vorhaben zuerst.</h3><p>Du sollst beschreiben können, was du brauchst – auch ohne technische Begriffe.</p></article><article><span class="number-label">02 / PERSÖNLICH</span><h3>Klare Ansprechpartner.</h3><p>Eine Website, auf der du schnell herausfindest, worum es geht und wie der nächste Schritt aussieht.</p></article><article><span class="number-label">03 / MIT WEITBLICK</span><h3>Offen für morgen.</h3><p>Eine Grundlage, die später mit dem Betrieb und neuen Möglichkeiten wachsen kann.</p></article></div></section>`;

const knowledgePage = `${pageIntro("WISSEN & HÄUFIGE FRAGEN", "Gut zu wissen.<br>Einfach erklärt.", "Ein erster Überblick für deine Planung. Die Antworten helfen dir, dein Vorhaben besser zu sortieren.")}<section class="container knowledge-layout"><aside class="knowledge-aside"><span class="feature-icon">${icon("chat")}</span><h2>Deine Frage<br>ist der Anfang.</h2><p>Du musst nicht wissen, wie die Technik heißt. Beschreibe, was du zu Hause verändern möchtest.</p><a class="text-link" href="/smart-home/">Smart Home verstehen${icon("arrow")}</a></aside><div><label class="search-label" for="faq-search">Welche Frage beschäftigt dich?</label><input class="search-input" id="faq-search" type="search" placeholder="Zum Beispiel: Renovierung, App, Planung …" aria-controls="faq-results"><p class="search-status" id="faq-status" aria-live="polite"></p><div id="faq-results">${faqList()}</div><p class="empty-search" hidden>Zu diesem Begriff gibt es noch keine Antwort. Versuche es mit „Planung“, „Smart Home“ oder „Projektanfrage“.</p><noscript><p>Alle Antworten sind unten erreichbar. Die Suche benötigt JavaScript.</p></noscript></div></section>`;

const contactPage = `${pageIntro("KONTAKT & NÄCHSTER SCHRITT", "Deine Idee verdient<br>einen guten Anfang.", "Ob du schon einen Plan hast oder erst Möglichkeiten sammelst: Ein paar klare Angaben helfen weiter.")}<section class="container contact-grid"><article class="contact-planner">${eyebrow("VOM WUNSCH ZUM ÜBERBLICK")}<h2>Was möchtest du<br>verändern?</h2><p>Mit dem Projektplaner stellst du dein Vorhaben in wenigen Schritten zusammen. Am Ende nimmst du deine persönliche Zusammenfassung mit.</p>${button("Projektplaner öffnen", "/anfrage/")}<small>Nur lokal im Browser. Es wird keine Anfrage versendet.</small></article><article class="contact-details"><span class="feature-icon">${icon("chat")}</span><h2>Persönlicher Kontakt</h2><p>Diese Website ist ein privater Entwurf für einen möglichen späteren Betrieb.</p><dl><div><dt>E-Mail & Telefon</dt><dd>Werden vor dem Betriebsstart ergänzt</dd></div><div><dt>Einsatzgebiet</dt><dd>Wird noch festgelegt</dd></div><div><dt>Auftragsannahme</dt><dd>Aktuell noch nicht möglich</dd></div></dl><a class="text-link" href="/ueber-mich/">Mehr über die Idee${icon("arrow")}</a></article></section>`;

const choice = (name, value, title, description, type = "radio") =>
  `<label class="choice"><input type="${type}" name="${name}" value="${value}"><span class="choice-marker"></span><span><strong>${title}</strong>${description ? `<small>${description}</small>` : ""}</span></label>`;
const plannerPage = `${pageIntro("DEIN PROJEKTPLANER", "Eine Idee.<br>Ein klarer nächster Schritt.", "Sortiere deine Wünsche und nimm eine Zusammenfassung mit. Ohne Registrierung, ohne Versand.")}<section class="container planner-layout"><aside class="planner-aside"><ol class="planner-progress" aria-label="Fortschritt"><li data-progress="0" aria-current="step"><span>01</span><div>Dein Vorhaben<small>Was möchtest du verändern?</small></div></li><li data-progress="1"><span>02</span><div>Ein paar Details<small>Was ist dir wichtig?</small></div></li><li data-progress="2"><span>03</span><div>Dein Überblick<small>Prüfen und mitnehmen</small></div></li></ol><div class="privacy-note">${icon("check")}<p>Deine Angaben bleiben im geöffneten Browserfenster. Es wird nichts versendet oder dauerhaft gespeichert.</p></div></aside><div class="planner-main"><div class="notice" data-planner-fallback>Der interaktive Projektplaner benötigt JavaScript. Die übrigen Seiten und häufigen Fragen kannst du auch ohne JavaScript nutzen.</div><form id="project-form" hidden novalidate><p class="step-label" data-step-label>SCHRITT 01 VON 03</p><div class="form-error" id="form-error" role="alert" hidden></div><section data-step="0" aria-labelledby="step-one-title"><h2 id="step-one-title" tabindex="-1">Worum geht es bei dir?</h2><fieldset><legend>Dein Zuhause <span>(bitte auswählen)</span></legend><div class="choice-grid">${choice("building", "Wohnung", "Wohnung", "Einzelne Räume oder die ganze Wohnung")}${choice("building", "Eigenheim", "Eigenheim", "Haus, Reihenhaus oder Doppelhaushälfte")}${choice("building", "Noch offen", "Noch offen", "Ich sammle erst einmal Ideen")}</div></fieldset><fieldset><legend>Deine Themen <span>(mindestens eines)</span></legend><div class="choice-grid">${services.map((s) => choice("topics", s.label, s.label, "", "checkbox")).join("")}</div></fieldset></section><section data-step="1" aria-labelledby="step-two-title" hidden><h2 id="step-two-title" tabindex="-1">Was ist dir wichtig?</h2><label class="field-label" for="timeline">Dein gewünschter Zeitraum</label><select id="timeline" name="timeline"><option>Ich möchte mich erst orientieren</option><option>In den nächsten 3 Monaten</option><option>In 3 bis 6 Monaten</option><option>Später / noch offen</option></select><label class="field-label" for="location">Ort oder Postleitzahl <span>(optional)</span></label><input id="location" name="location" type="text" maxlength="100" autocomplete="off" placeholder="Zum Beispiel: Musterstadt"><label class="field-label" for="wishes">Beschreibe kurz deine Wünsche <span>(optional)</span></label><textarea id="wishes" name="wishes" rows="5" maxlength="2000" placeholder="Was soll sich verändern? Was ist dir im Alltag wichtig?"></textarea><p class="field-help">Eine kurze Beschreibung reicht. Bitte keine sensiblen oder persönlichen Daten eintragen.</p></section><section data-step="2" aria-labelledby="step-three-title" hidden><h2 id="step-three-title" tabindex="-1">Das ist deine Projektidee.</h2><p class="summary-intro">Prüfe deine Angaben. Du kannst sie noch ändern und anschließend selbst mitnehmen.</p><dl id="project-summary" class="project-summary"></dl><div class="summary-actions"><button class="button" type="button" id="copy-summary">${icon("copy")}Zusammenfassung kopieren</button><button class="text-button" type="button" id="download-summary">Als Textdatei speichern${icon("arrow")}</button></div><p id="copy-status" class="copy-status" role="status"></p><p class="summary-note">Deine Angaben wurden nicht versendet. Eine echte Kontaktaufnahme ist in diesem Entwurf noch nicht möglich.</p></section><div class="form-navigation"><button type="button" class="text-button" id="previous-step" hidden>${icon("arrow", "back-arrow")}Zurück</button><button type="submit" class="button" id="next-step">Weiter${icon("arrow")}</button></div></form></div></section>`;

const legalPage = (kind) =>
  kind === "impressum"
    ? `${pageIntro("PRIVATER WEBSITE-ENTWURF", "Impressum", "Diese Seite ist noch kein vollständiges Impressum für einen veröffentlichten Geschäftsauftritt.")}<section class="container legal-copy"><h2>Angaben noch offen</h2><p>Firmenname, Rechtsform, ladungsfähige Anschrift und Kontaktdaten werden erst festgelegt. Berufs- und betriebsbezogene Angaben werden anhand der tatsächlichen Situation ergänzt.</p><p>Der Entwurf wird ausschließlich lokal entwickelt. Es werden noch keine Aufträge angenommen.</p><a class="text-link" href="/ueber-mich/">Zum Projektstand${icon("arrow")}</a></section>`
    : `${pageIntro("PRIVATER WEBSITE-ENTWURF", "Datenschutz", "Hinweise zur aktuellen lokalen Vorschau. Eine vollständige Datenschutzerklärung für einen späteren Betrieb wird noch erstellt.")}<section class="container legal-copy"><h2>Was der lokale Entwurf tut</h2><p>Der Projektplaner verarbeitet Eingaben ausschließlich im Arbeitsspeicher des geöffneten Browserfensters. Es gibt keinen Versand an einen Server, kein Nutzerkonto und keine dauerhafte Speicherung im Browser. Beim Neuladen gehen die Eingaben verloren.</p><p>Erst wenn du „Zusammenfassung kopieren“ oder „Als Textdatei speichern“ auswählst, werden die Angaben in deine Zwischenablage beziehungsweise eine Datei auf deinem Gerät übernommen.</p><h2>Keine externen Dienste eingebunden</h2><p>Bilder, Schriftgestaltung und Skripte werden lokal bereitgestellt. Der Entwurf enthält keine Analysewerkzeuge, Werbetracker oder eingebundenen KI-Dienste. Der lokale Vorschau-Server speichert keine Zugriffsprotokolle.</p><h2>Vor einem späteren Betriebsstart</h2><p>Verantwortlicher, Hosting und gegebenenfalls Kontakt-, Termin- oder KI-Dienste werden konkret festgelegt und die Datenschutzhinweise darauf abgestimmt.</p></section>`;

export const pages = [
  {
    path: "/",
    title: "Dein Zuhause. Einfach smarter.",
    description:
      "Privater Entwurf für Elektrotechnik und Smart Home für Wohnungen und Eigenheime.",
    content: home,
  },
  {
    path: "/leistungen/",
    title: "Leistungen",
    description:
      "Geplante Themen rund um Modernisierung, Licht, Smart Home und Energie.",
    content: servicesPage,
  },
  {
    path: "/smart-home/",
    title: "Smart Home",
    description:
      "Ideen für ein vernetztes Zuhause. Entdecke Alltagssituationen als interaktive Beispiele.",
    content: smartPage,
    scriptData: `<script id="scene-data" type="application/json">${JSON.stringify(scenes)}</script>`,
  },
  {
    path: "/inspiration/",
    title: "Inspiration",
    description:
      "Beispiele für Beleuchtung, smarte Beschattung, Neubau und Photovoltaik.",
    content: inspirationPage,
  },
  {
    path: "/ueber-mich/",
    title: "Über mich",
    description: "Gabriel und die Idee hinter dem privaten Website-Entwurf.",
    content: aboutPage,
  },
  {
    path: "/wissen/",
    title: "Wissen & Fragen",
    description: "Verständliche Antworten für die erste Projektplanung.",
    content: knowledgePage,
  },
  {
    path: "/kontakt/",
    title: "Kontakt",
    description:
      "Der nächste Schritt für deine Projektidee im privaten Website-Entwurf.",
    content: contactPage,
  },
  {
    path: "/anfrage/",
    title: "Projekt planen",
    description:
      "Stelle deine Projektidee in drei Schritten zusammen. Lokal und ohne Versand.",
    content: plannerPage,
  },
  ...["impressum", "datenschutz"].map((kind) => ({
    path: `/${kind}/`,
    title: kind === "impressum" ? "Impressum" : "Datenschutz",
    description: "Hinweise zum privaten lokalen Website-Entwurf.",
    content: legalPage(kind),
  })),
  {
    path: "/bildnachweise/",
    title: "Bildnachweise",
    description: "Bildquellen des privaten Website-Entwurfs.",
    content: `${pageIntro("BILDQUELLEN", "Technik sichtbar machen.", "Wohnraumfotos und KI-Visualisierungen illustrieren die Themen. Sie zeigen keine eigenen Arbeiten oder Kundenprojekte.")}<section class="container legal-copy"><h2>Wohnraum</h2><p>Bildquelle: Unsplash · Foto-ID 1600210492486-724fe5c67fb0.</p><p><a class="text-link" href="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" target="_blank" rel="noopener noreferrer">Originalbild öffnen${icon("diagonal")}</a></p><h2>Offener Wohn- und Essbereich</h2><p>Bildquelle: Unsplash · Foto-ID 1600607687920-4e2a09cf159d.</p><p><a class="text-link" href="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" target="_blank" rel="noopener noreferrer">Originalbild öffnen${icon("diagonal")}</a></p><h2>Technikmotive</h2><p>Die Motive für Beleuchtung am Abend, Außenjalousien, Elektroinstallation im Neubau sowie Photovoltaik und Wallbox wurden für diesen Entwurf mit KI erstellt. Sie sind illustrative Beispiele und keine Produkt- oder Ausführungsnachweise.</p></section>`,
  },
  ...services.map((s) => ({
    path: `/leistungen/${s.slug}/`,
    title: s.label,
    description: s.description,
    content: `${pageIntro("LEISTUNGEN / " + s.number, s.intro, s.description)}<div class="container">${visualFigure(s.visual, "service-figure")}</div><section class="container content-section"><a class="text-link back-link" href="/leistungen/">${icon("arrow", "back-arrow")}Alle Leistungen</a><div class="three-columns detail-columns">${s.details.map(([title, text]) => `<article>${icon(s.icon)}<h2>${title}</h2><p>${text}</p></article>`).join("")}</div><div class="preparation-note"><span class="feature-icon">${icon("chat")}</span><div><h2>Was du schon mitbringen kannst</h2><p>${s.prepare}</p></div></div><p class="section-footnote">Geplanter Themenbereich im privaten Zukunftsentwurf. Noch kein buchbares Leistungsangebot.</p>${s.slug === "smart-home" ? button("Alltagssituationen entdecken", "/smart-home/", true) : s.slug === "energie" ? `<a class="text-link" href="/leistungen/photovoltaik/">Mehr zur Photovoltaik${icon("arrow")}</a>` : ""}</section>`,
  })),
  {
    path: "/404.html",
    title: "Seite nicht gefunden",
    description: "Diese Seite ist im Entwurf nicht vorhanden.",
    content: `${pageIntro("404 / HIER GEHT ES NICHT WEITER", "Zurück nach Hause.", "Diese Seite gibt es im Entwurf nicht. Auf der Startseite findest du den richtigen Einstieg.")}<div class="container error-page">${button("Zur Startseite", "/")}</div>`,
  },
];
