import { eyebrow, icon } from "./components.mjs";

const rooms = [
  { id: "wohnen", name: "Wohnzimmer", furniture: "sofa" },
  { id: "kueche", name: "Küche", furniture: "kitchen" },
  { id: "schlafen", name: "Schlafzimmer", furniture: "bed" },
];

export const shadingDemo = `<section class="container shading-demo" id="jalousien" aria-labelledby="shading-heading" data-shading-demo>
  <div class="section-heading"><div>${eyebrow("DEIN TAGESLICHT. DEINE ENTSCHEIDUNG.")}<h2 id="shading-heading">Einzeln einstellen.<br>Gemeinsam bewegen.</h2></div><p>Morgens Licht hereinlassen, am Nachmittag etwas abschirmen: Probiere aus, wie du drei Jalousien einzeln oder mit einem Handgriff gemeinsam bedienen kannst.</p></div>
  <div class="shading-demo-grid">
    <div class="shading-house"><div class="shading-house-top"><span>${icon("home")}Dein Zuhause</span><span>Drei Räume im Zusammenspiel</span></div>
      <div class="shading-rooms">${rooms.map(room => `<figure class="shade-room" id="shade-${room.id}" data-shade-room="${room.id}" data-position="open" role="img" aria-label="${room.name}: Jalousie offen, viel Tageslicht.">
        <div class="shade-room-name" aria-hidden="true"><span>${room.name}</span><span data-shade-label>Offen</span></div>
        <div class="shade-room-interior" aria-hidden="true"><div class="shade-window"><svg viewBox="0 0 160 240" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="160" height="240" fill="#c6dde0"/><circle cx="118" cy="49" r="15" fill="#fff0b6"/><path d="M0 166L44 132 83 160 131 125 160 149V240H0Z" fill="#a1b59c"/><path d="M0 194L55 176 103 191 160 171V240H0Z" fill="#79977c"/></svg><div class="shade-slats"></div><div class="shade-window-frame"></div></div><div class="shade-daylight"></div><div class="shade-furniture shade-furniture-${room.furniture}"></div></div>
      </figure>`).join("")}</div>
      <p class="shading-house-caption">BESCHATTUNG IM ALLTAG · INTERAKTIVE ILLUSTRATION</p>
      <p class="shading-summary" data-shade-status role="status" aria-live="polite" aria-atomic="true">Alle drei Jalousien sind offen.</p>
    </div>
    <div class="shading-phone" aria-labelledby="shade-app-heading"><div class="shade-phone-speaker" aria-hidden="true"></div><div class="shade-app-header"><span class="shade-app-symbol">${icon("home")}</span><span>DEIN ZUHAUSE<small>Beispiel-App</small></span><span class="shade-app-dot" aria-hidden="true"></span></div>
      <h3 id="shade-app-heading">Deine Jalousien</h3><p class="shade-app-intro">Jeder Raum, wie du ihn magst.</p>
      ${rooms.map(room => `<fieldset class="shade-control" data-shade-control="${room.id}"><legend>${room.name}</legend><p class="shade-control-state" data-shade-state>Offen</p><div class="shade-control-buttons">${[["open", "Öffnen"], ["half", "Halb"], ["closed", "Schließen"]].map(([state, label]) => `<button type="button" data-shade-choice="${state}" aria-controls="shade-${room.id}" aria-pressed="${state === "open"}">${label}</button>`).join("")}</div></fieldset>`).join("")}
      <div class="shade-group-controls" role="group" aria-label="Alle Jalousien gemeinsam bedienen"><button class="button" type="button" data-shade-all="open" aria-controls="${rooms.map(room => `shade-${room.id}`).join(" ")}" aria-pressed="true">Alle öffnen ${icon("shade")}</button><button class="button button-secondary" type="button" data-shade-all="closed" aria-controls="${rooms.map(room => `shade-${room.id}`).join(" ")}" aria-pressed="false">Alle schließen ${icon("shade")}</button></div>
      <span class="shade-phone-home" aria-hidden="true"></span>
    </div>
  </div>
  <p class="shading-demo-note">Illustratives Beispiel. Die Beispiel-App steuert nur die gezeigten Fenster und ist mit keinen echten Geräten verbunden.</p>
  <p class="shading-demo-note shading-no-script">Zum Ausprobieren der Jalousien benötigst du JavaScript. Die Illustration zeigt drei Räume mit geöffneten Jalousien.</p>
</section>`;
