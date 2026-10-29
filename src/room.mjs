// Vector room: lamp surfaces and light pools share the same live CSS variables.
export const interactiveRoom = `<div class="light-room" data-light="warm" data-time="day" role="img" aria-label="Wohnraum mit zwei Lampen bei Tageslicht: einladend und warm">
<svg viewBox="0 0 640 430" aria-hidden="true" focusable="false">
<defs><radialGradient id="room-glow"><stop offset="0" stop-color="var(--lamp-color)" stop-opacity=".7"/><stop offset="1" stop-color="var(--lamp-color)" stop-opacity="0"/></radialGradient><linearGradient id="room-beam" x1="0" y1="0" x2="0" y2="1"><stop stop-color="var(--lamp-color)" stop-opacity=".38"/><stop offset="1" stop-color="var(--lamp-color)" stop-opacity="0"/></linearGradient></defs>
<rect width="640" height="430" rx="10" fill="var(--room-wall)"/>
<path d="M0 315H640V430H0Z" fill="var(--room-floor)"/>
<path d="M0 315H640M0 365H640M0 415H640M180 315L120 430M460 315L520 430" stroke="#ffffff" stroke-opacity=".07"/>
<rect x="48" y="55" width="145" height="178" rx="3" fill="var(--window-sky, #243c47)" stroke="#9a9b88" stroke-width="7"/>
<path d="M120 58V229M52 144H188" stroke="#9a9b88" stroke-width="4"/>
<circle cx="155" cy="95" r="17" fill="var(--sky-light, #c4d2c5)" opacity=".9"/>
<path d="M51 178L85 157 124 184 154 167 189 188V230H51Z" fill="var(--window-landscape, #1a3438)"/>
<ellipse cx="350" cy="359" rx="190" ry="37" fill="#b1ac94" opacity=".35"/>
<path d="M238 265Q238 235 265 235H421Q449 235 449 265V327H238Z" fill="#8b9b8d"/>
<rect x="223" y="277" width="241" height="61" rx="14" fill="#667e72"/>
<rect x="242" y="273" width="99" height="44" rx="8" fill="#9da99a"/>
<rect x="346" y="273" width="99" height="44" rx="8" fill="#9da99a"/>
<path d="M241 335V352M447 335V352" stroke="#354b42" stroke-width="9"/>
<rect x="268" y="247" width="39" height="32" rx="7" fill="#d7c5a1"/>
<rect x="395" y="247" width="35" height="32" rx="7" fill="#486b61"/>
<g class="room-light-pools"><ellipse cx="343" cy="164" rx="161" ry="147" fill="url(#room-glow)"/><path d="M294 134L209 323H479L392 134Z" fill="url(#room-beam)"/><ellipse cx="533" cy="265" rx="93" ry="130" fill="url(#room-glow)"/></g>
<path d="M343 0V96" stroke="#384a41" stroke-width="4"/>
<path d="M294 129Q301 88 343 88Q385 88 392 129Z" fill="#4a6054"/>
<ellipse class="room-lamp" cx="343" cy="130" rx="49" ry="8" fill="var(--lamp-surface)"/>
<path d="M532 258V341M508 342H556" stroke="#3c5046" stroke-width="6" stroke-linecap="round"/>
<path d="M506 204H558L570 253H494Z" fill="#b5b29b"/>
<path class="room-lamp" d="M508 208H556L565 249H499Z" fill="var(--lamp-surface)"/>
<ellipse cx="344" cy="369" rx="64" ry="14" fill="#bda783"/><path d="M301 370V398M387 370V398" stroke="#6e624d" stroke-width="6"/>
<path d="M72 317H116L110 362H79Z" fill="#9b8e73"/><path d="M94 318V265M94 287Q58 275 67 247Q93 249 94 287M94 301Q129 288 120 266Q96 267 94 301" stroke="#496a50" stroke-width="8" fill="#648565"/>
</svg><span class="room-caption">LICHT IM ALLTAG · INTERAKTIVE ILLUSTRATION</span></div>`;

export const lightControls = `<div class="light-controls"><p class="light-control-label" id="light-control-label">Probiere deine Lichtstimmung aus</p><div class="light-options" role="group" aria-labelledby="light-control-label"><button type="button" data-light-choice="warm" aria-pressed="true"><span class="light-swatch warm"></span>Warm</button><button type="button" data-light-choice="dim" aria-pressed="false"><span class="light-swatch dim"></span>Gedimmt</button><button type="button" data-light-choice="off" aria-pressed="false"><span class="light-swatch off"></span>Aus</button></div><p class="light-manual-note">Die Auswahl verändert nur das Licht im Beispiel. Ein Klick auf eine Alltagssituation stellt deren Lichtstimmung wieder ein.</p></div>`;
