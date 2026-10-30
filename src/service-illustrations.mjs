import { escape } from "./components.mjs";

// Eigene Vektorskizzen zur Orientierung, ohne Verdrahtungs- oder Auslegungsangaben.
const text = (x, y, label, size = 15, attrs = "") => `<text x="${x}" y="${y}" font-size="${size}" ${attrs}>${escape(label)}</text>`;
const card = (x, y, width, height, fill = "#f8f7f3", attrs = "") => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="10" fill="${fill}" ${attrs}/>`;
const line = (d, color = "#789488", attrs = "") => `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${attrs}/>`;
const badge = (x, y, label, color = "#163e3c") => `<circle cx="${x}" cy="${y}" r="15" fill="${color}"/>${text(x, y + 5, label, 14, 'fill="#fff" text-anchor="middle" font-weight="600"')}`;
const lamp = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#f1dba5" stroke="#ac8745" stroke-width="2"/>${line(`M${x - 6} ${y - 6}l12 12m0 -12l-12 12`, "#ac8745", 'stroke-width="2"')}`;
const socket = (x, y, color = "#436f63") => `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" rx="4" fill="#f8f7f3" stroke="${color}" stroke-width="2"/><circle cx="${x - 3}" cy="${y}" r="1.8" fill="${color}"/><circle cx="${x + 3}" cy="${y}" r="1.8" fill="${color}"/>`;
const point = (x, y, label) => `${badge(x, y, label)}${line(`M${x + 18} ${y}h28`, "#789488", 'stroke-dasharray="3 5"')}`;
const panel = (x, y, label, symbol = "") => `${card(x, y, 126, 76)}${symbol}${text(x + 63, y + 49, label, 14, 'text-anchor="middle"')}`;

function floorplan(kitchen = false) {
  return `${text(30, 36, kitchen ? "ANSCHLÜSSE IM NEUEN RAUM" : "VOM GRUNDRISS ZUR ELEKTROPLANUNG", 12, 'letter-spacing="1.3"')}
  ${card(30, 62, 500, 302, "#fbfaf6")}
  <path d="M54 84H506V340H54ZM315 84V198M315 252V340M54 229H197M255 229H315" fill="none" stroke="#7a8b7d" stroke-width="7"/>
  ${line("M315 198q54 0 54 54M315 198v54M197 229q0 58 58 58M197 229h58", "#b5c0b1", 'stroke-width="1.5"')}
  <path d="M83 84H200M506 110V180M86 340H191" stroke="#b8d4d7" stroke-width="9"/>
  ${card(82, 114, 95, 46, "#d5dfcc")}${card(84, 164, 91, 13, "#b3c3a8")}
  ${card(221, 115, 60, 80, "#e8d8b9")}${text(251, 158, "Tisch", 13, 'text-anchor="middle"')}
  ${card(349, 104, 124, 24, "#d5dfcc")}${card(449, 104, 24, 88, "#d5dfcc")}
  ${card(80, 267, 110, 26, "#d5dfcc")}${card(115, 301, 36, 17, "#e8d8b9")}
  ${text(88, 211, "Wohnen", 14)}${text(352, 212, "Küche", 14)}${text(204, 291, "Arbeiten", 14)}
  ${lamp(208, 177)}${lamp(388, 164)}${lamp(215, 270)}
  ${socket(72, 119)}${socket(293, 120)}${socket(427, 141)}${socket(103, 252)}
  ${card(165, 243, 19, 19, "#6f8fa5")}${text(174.5, 257, "N", 11, 'fill="#fff" text-anchor="middle"')}
  ${badge(305, 219, "T")}${badge(162, 315, "1")}${line("M165 297L174 267", "#789488", 'stroke-dasharray="3 5"')}${badge(373, 269, "2")}${line("M358 258L320 231", "#789488", 'stroke-dasharray="3 5"')}
  ${text(30, 399, "1  Strom + Netzwerk am Arbeitsplatz", 13)}${text(30, 424, "2  Taster am Raumzugang", 13)}
  ${socket(349, 394)}${text(367, 399, "Steckdose", 12)}${lamp(349, 421)}${text(367, 426, "Lichtauslass", 12)}`;
}

function cabinet() {
  const rows = [
    [113, "Wohnen", 7, "#7d9c87"],
    [181, "Küche", 8, "#b9a178"],
    [249, "Weitere Technik", 5, "#7892a3"],
    [317, "Reserve", 0, "#b6c0b0"],
  ];
  return `${text(30, 36, "ORDNUNG HINTER DEN ANSCHLÜSSEN", 12, 'letter-spacing="1.3"')}
  ${card(42, 63, 310, 341, "#d2d9cd", 'stroke="#7d8d7c" stroke-width="2"')}${card(57, 79, 280, 308, "#f8f7f3")}
  ${rows.map(([y, label, count, color]) => `${text(73, y - 8, label, 11)}${card(71, y, 251, 42, "#e5e8df")}${count ? line(`M77 ${y + 23}H315`, "#a4afa0", 'stroke-width="2"') : ""}${Array.from({length:count}, (_, i) => `${card(79 + i * 28, y + 5, 24, 32, "#fcfcf8", 'stroke="#c5cbbd"')}${card(85 + i * 28, y + 17, 12, 12, color)}`).join("")}${!count ? text(196, y + 27, "Platz für Erweiterungen", 12, 'text-anchor="middle" fill="#65716a"') : ""}`).join("")}
  ${point(365, 128, "1")}${text(389, 158, "Beschriftung", 14)}${point(365, 231, "2")}${text(389, 261, "Geordnete", 14)}${text(389, 282, "Bereiche", 14)}${point(365, 334, "3")}${text(389, 364, "Reserve", 14)}
  ${text(42, 435, "Vereinfachte Ansicht · keine Geräteauslegung", 12)}`;
}

function future() {
  return `${text(30, 36, "HEUTE PLANEN. SPÄTER ERGÄNZEN.", 12, 'letter-spacing="1.3"')}
  ${line("M130 218H430M280 135V322", "#8ba28d", 'stroke-dasharray="6 8"')}
  ${card(201, 168, 158, 100, "#163e3c")}${text(280, 211, "Dein Zuhause", 19, 'fill="#fff" text-anchor="middle"')}${text(280, 238, "Platz für deine Ideen", 12, 'fill="#dce9d4" text-anchor="middle"')}
  ${panel(35, 180, "Beschattung")}${panel(399, 180, "Wallbox")}${panel(217, 68, "Photovoltaik")}${panel(217, 322, "Vernetzung")}
  ${text(280, 432, "Leitungswege · Anschlusspunkte · Reserven", 13, 'text-anchor="middle"')}`;
}

function stages() {
  const items = [["01", "Bestand ansehen", "Was ist vorhanden?"], ["02", "Jetzt verändern", "Was brauchst du heute?"], ["03", "Später ergänzen", "Was soll möglich bleiben?"]];
  return `${text(30, 36, "EIN PLAN FÜR MEHRERE ETAPPEN", 12, 'letter-spacing="1.3"')}${line("M75 109V347", "#a1b29a")}${items.map(([n, title, subtitle], i) => `${card(106, 73 + i * 115, 414, 92, i === 1 ? "#dce9d4" : "#f8f7f3")}${badge(75, 119 + i * 115, n)}${text(130, 110 + i * 115, title, 20)}${text(130, 139 + i * 115, subtitle, 14, 'fill="#65716a"')}`).join("")}${text(30, 432, "Arbeiten und Übergänge gemeinsam abstimmen", 13)}`;
}

function inspection() {
  return `${text(30, 36, "DEN BESTAND VERSTEHEN", 12, 'letter-spacing="1.3"')}
  ${card(35, 78, 215, 278, "#f8f7f3")}${text(57, 111, "Vorhandene Anlage", 17)}${card(60, 133, 165, 119, "#d5ddce")}${Array.from({length:6}, (_, i) => card(72 + i * 23, 158, 18, 55, "#f8f7f3")).join("")}${socket(90, 295)}${socket(137, 295)}${badge(200, 295, "?")}
  ${line("M266 214H295", "#789488", 'stroke-dasharray="4 6"')}${card(310, 99, 215, 264, "#fff")}${text(333, 140, "Gemeinsam klären", 17)}
  ${["Zustand", "Unterlagen", "Möglichkeiten", "Offene Punkte"].map((label, i) => `${card(332, 166 + i * 43, 16, 16, "#dce9d4")}${text(358, 180 + i * 43, label, 15)}`).join("")}
  ${text(30, 423, "Fotos und Pläne helfen bei der Vorbereitung.", 13)}`;
}

function lighting() {
  return `${text(30, 36, "EIN RAUM. DREI LICHTBEREICHE.", 12, 'letter-spacing="1.3"')}
  ${card(30, 66, 500, 316, "#344b43")}
  <path d="M30 312H530V382H30Z" fill="#66705b"/>
  <path d="M115 120L40 310H191ZM280 151L218 310H343ZM438 170L375 310H500Z" fill="#f3d291" opacity=".15"/>
  ${line("M115 67V111M280 67V142", "#c5d2bb", 'stroke-width="2"')}${lamp(115, 120)}${lamp(280, 151)}${lamp(438, 170)}
  ${card(58, 258, 121, 18, "#d3c29e")}${line("M70 276v36M166 276v36", "#b2a585")}
  <ellipse cx="280" cy="280" rx="55" ry="13" fill="#d3c29e"/>${line("M248 284v30M312 284v30", "#b2a585")}
  ${card(389, 254, 105, 60, "#8fa48a")}${card(400, 242, 85, 38, "#a9baa0")}
  ${badge(115, 349, "1")}${badge(280, 349, "2")}${badge(438, 349, "3")}
  ${text(52, 418, "1  Arbeiten", 14)}${text(222, 418, "2  Essen", 14)}${text(385, 418, "3  Entspannen", 14)}`;
}

function controls() {
  return `${text(30, 36, "LICHT VERSTÄNDLICH BEDIENEN", 12, 'letter-spacing="1.3"')}
  ${card(62, 88, 207, 276, "#e2e4d9", 'stroke="#bac4b3" stroke-width="2"')}${card(78, 105, 175, 242, "#fafaf5")}
  ${["Grundlicht", "Leselicht", "Abend"].map((label, i) => `${card(92, 119 + i * 74, 147, 62, i === 2 ? "#dce9d4" : "#eeeee6")}${text(165, 156 + i * 74, label, 16, 'text-anchor="middle"')}${line(`M277 ${150 + i * 74}H326`, "#a1b29a", 'stroke-dasharray="4 6"')}${lamp(363, 150 + i * 74)}${text(395, 155 + i * 74, ["Hell", "Gezielt", "Gedimmt"][i], 15)}`).join("")}
  ${text(280, 425, "Lichtgruppen und Szenen klar zuordnen", 13, 'text-anchor="middle"')}`;
}

function outdoor() {
  return `${text(30, 36, "VOM EINGANG BIS ZUR TERRASSE", 12, 'letter-spacing="1.3"')}
  ${card(30, 65, 500, 320, "#354e4d")}
  <path d="M67 184L210 92 353 184" fill="#8a9c88"/>${card(91, 183, 239, 154, "#c3c5aa")}${card(160, 237, 56, 100, "#647c6b")}${card(243, 221, 57, 51, "#eed7a3")}
  <path d="M170 337L122 385H268L207 337" fill="#acac92"/>
  ${card(355, 308, 150, 43, "#81917b")}${line("M373 307v-52m0 0h91v52", "#b7b698")}
  ${[ [135, 245], [126, 356], [425, 284] ].map(([x,y]) => `<ellipse cx="${x}" cy="${y + 26}" rx="30" ry="42" fill="#f1dba5" opacity=".16"/>${lamp(x,y)}`).join("")}
  ${text(64, 420, "Eingang", 14)}${text(223, 420, "Laufweg", 14)}${text(407, 420, "Terrasse", 14)}`;
}

function scene() {
  return `${text(30, 36, "EIN HANDGRIFF. DEINE ABENDSZENE.", 12, 'letter-spacing="1.3"')}
  ${card(132, 77, 296, 82, "#163e3c")}${text(280, 128, "Feierabend", 25, 'text-anchor="middle" fill="#fff"')}
  ${line("M280 159V203M116 251V203H444V251", "#8ba28d")}
  ${panel(53, 250, "Licht dimmen")}${panel(217, 250, "Jalousien")}${panel(381, 250, "Raumkomfort")}
  ${lamp(116, 268)}${text(280, 283, "≡", 26, 'text-anchor="middle"')}${text(444, 283, "°", 26, 'text-anchor="middle"')}
  ${card(103, 365, 354, 45, "#dce9d4")}${text(280, 394, "Einzeln bedienen bleibt mitgedacht", 15, 'text-anchor="middle"')}`;
}

function shading() {
  return `${text(30, 36, "BESCHATTUNG NACH DEINEM ALLTAG", 12, 'letter-spacing="1.3"')}
  ${[["Morgens", 2], ["Tagsüber", 5], ["Abends", 9]].map(([label, slats], i) => `${card(39 + i * 177, 100, 128, 223, "#d4e2df", 'stroke="#a2afa0" stroke-width="6"')}${Array.from({length:slats}, (_, j) => `<rect x="${43 + i * 177}" y="${104 + j * 23}" width="120" height="16" fill="#84947e"/>`).join("")}${text(103 + i * 177, 363, label, 18, 'text-anchor="middle"')}`).join("")}
  ${text(280, 420, "Zeitplan · Tageslicht · direkte Bedienung", 13, 'text-anchor="middle"')}`;
}

function interfaces() {
  return `${text(30, 36, "DREI ZUGÄNGE ZU DEINEM ZUHAUSE", 12, 'letter-spacing="1.3"')}
  ${card(38, 113, 137, 183)}${card(63, 143, 87, 89, "#dce9d4")}${line("M106 145v85M65 188h83", "#a1b29a", 'stroke-width="2"')}${text(106, 275, "Taster", 18, 'text-anchor="middle"')}
  ${card(213, 79, 133, 240, "#163e3c")}${card(223, 98, 113, 194, "#f8f7f3")}${text(280, 136, "Zuhause", 15, 'text-anchor="middle"')}${[150, 189, 228].map((y, i) => `${card(234, y, 91, 29, i === 1 ? "#dce9d4" : "#eeeee6")}${text(279, y + 20, ["Licht", "Beschattung", "Zeitplan"][i], 11, 'text-anchor="middle"')}`).join("")}${text(280, 348, "App", 18, 'text-anchor="middle"')}
  ${card(385, 113, 137, 183)}<circle cx="454" cy="183" r="37" fill="#dce9d4"/>${line("M454 158v25l18 12", "#436f63")}${text(454, 275, "Automatik", 18, 'text-anchor="middle"')}
  ${text(280, 422, "Vertraut bedienen. Passend ergänzen.", 14, 'text-anchor="middle"')}`;
}

function solar() {
  return `${text(30, 36, "SOLARSTROM INS GEBÄUDE EINBINDEN", 12, 'letter-spacing="1.3"')}
  <path d="M46 194L160 100 274 194Z" fill="#81917b"/>${card(76, 194, 169, 172, "#d4dcc9")}
  <path d="M116 151L160 114 226 170H139Z" fill="#527180" stroke="#bccdd0" stroke-width="2"/>${line("M139 132l45 38M128 160l57-24", "#adbfbd", 'stroke-width="1"')}
  ${line("M244 216H302V160H348M302 216V310H348", "#ad925c", 'stroke-dasharray="5 6"')}
  ${panel(348, 117, "Wechselrichter")}${panel(348, 269, "Zählerplatz")}${text(159, 402, "Photovoltaik", 16, 'text-anchor="middle"')}
  ${text(280, 439, "Schnittstellen mit den Beteiligten abstimmen", 13, 'text-anchor="middle"')}`;
}

function testing() {
  return `${text(30, 36, "PRÜFEN. FESTHALTEN. KLÄREN.", 12, 'letter-spacing="1.3"')}
  ${card(38, 116, 185, 230, "#536f64")}${card(58, 140, 145, 73, "#dce9d4")}${text(130, 184, "Prüfung", 20, 'text-anchor="middle"')}<circle cx="131" cy="270" r="30" fill="#d2d9cd"/>${line("M131 270l15-17", "#536f64")}
  ${line("M240 232H286", "#8ba28d", 'stroke-dasharray="5 6"')}${card(303, 87, 218, 291)}${text(328, 129, "Prüfprotokoll", 21)}
  ${["Besichtigung", "Messungen", "Funktionen", "Offene Punkte"].map((label, i) => `${card(326, 153 + i * 48, 20, 20, "#dce9d4")}${text(358, 169 + i * 48, label, 15)}`).join("")}
  ${text(280, 429, "Ergebnisse statt bloßer Betriebsanzeige", 13, 'text-anchor="middle"')}`;
}

function documents() {
  return `${text(30, 36, "DEINE ANLAGE NACHVOLLZIEHBAR", 12, 'letter-spacing="1.3"')}
  ${card(92, 87, 338, 292, "#c8d5c0")}${card(115, 105, 338, 292, "#e0e7d7")}${card(138, 123, 338, 292, "#fff")}
  ${text(167, 169, "Unterlagen zur Anlage", 23)}${["Anlagenübersicht", "Prüfergebnisse", "Bedienung", "Zuständigkeiten"].map((label, i) => `${badge(179, 211 + i * 47, String(i + 1))}${text(208, 217 + i * 47, label, 17)}`).join("")}`;
}

function consumption() {
  return `${text(30, 36, "WELCHER ÜBERBLICK HILFT DIR?", 12, 'letter-spacing="1.3"')}
  ${card(36, 75, 488, 310)}${text(62, 119, "Verbrauchsbereiche", 22)}${text(62, 148, "Illustration · keine Messwerte", 12, 'fill="#65716a"')}
  ${[["Haushalt", 287, "#7e9e85"], ["Laden", 194, "#6f8fa5"], ["Weitere", 119, "#baa178"]].map(([label, width, color], i) => `${text(62, 197 + i * 65, label, 14)}${card(62, 209 + i * 65, 426, 15, "#eeeee6")}${card(62, 209 + i * 65, width, 15, color)}`).join("")}
  ${text(280, 428, "Erst die Fragen. Dann die passende Messung.", 13, 'text-anchor="middle"')}`;
}

function charging() {
  return `${text(30, 36, "VON DER VERTEILUNG ZUM LADEPLATZ", 12, 'letter-spacing="1.3"')}
  ${card(35, 88, 129, 259, "#d4dcc9")}${card(56, 122, 87, 111)}${text(99, 171, "Haus", 18, 'text-anchor="middle"')}${text(99, 196, "Verteilung", 12, 'text-anchor="middle"')}
  ${line("M164 199H230V344H354", "#ad925c", 'stroke-dasharray="6 7"')}${text(191, 379, "Leitungsweg", 13)}
  ${line("M270 129H523M285 130V342M510 130V342", "#82917a", 'stroke-width="7"')}${card(293, 158, 43, 66, "#163e3c")}${text(314, 190, "↯", 24, 'fill="#fff" text-anchor="middle"')}${line("M315 224v48h32", "#163e3c")}
  <path d="M346 255L371 217H447L473 255L492 266V310H332V267Z" fill="#afc0a2" stroke="#70856e" stroke-width="2"/>
  <path d="M377 225H440L458 252H360Z" fill="#d7e6e1"/><circle cx="362" cy="310" r="17" fill="#526457"/><circle cx="465" cy="310" r="17" fill="#526457"/>
  ${text(420, 380, "Stellplatz + Wallbox", 14, 'text-anchor="middle"')}${text(280, 433, "Standort, Gebäude und Nutzung gemeinsam planen", 13, 'text-anchor="middle"')}`;
}

function energyFlow() {
  return `${text(30, 36, "ENERGIE ALS ZUSAMMENSPIEL", 12, 'letter-spacing="1.3"')}
  ${line("M280 145V205M115 260V205H445V260", "#8ba28d", 'stroke-dasharray="6 7"')}
  ${card(188, 75, 184, 76, "#163e3c")}${text(280, 121, "Photovoltaik", 21, 'fill="#fff" text-anchor="middle"')}
  ${panel(52, 259, "Haushalt")}${panel(217, 259, "Speicher")}${panel(382, 259, "Laden")}
  ${card(94, 378, 372, 41, "#dce9d4")}${text(280, 404, "Prioritäten und Schnittstellen abstimmen", 14, 'text-anchor="middle"')}`;
}

const drawings = {
  floorplan: () => floorplan(), kitchen: () => floorplan(true), cabinet, future,
  stages, inspection, lighting, controls, outdoor, scene, shading, interfaces,
  solar, testing, documents, consumption, charging, "energy-flow": energyFlow,
};

export function serviceIllustration({ visual, caption }) {
  if (!drawings[visual]) throw new Error(`Unbekannte Leistungsillustration: ${visual}`);
  return `<figure class="service-drawing"><div class="service-drawing-canvas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 460" role="img" aria-label="${escape(caption)}" font-family="Avenir Next, Avenir, Segoe UI, sans-serif" fill="#203a36">${drawings[visual]()}</svg></div><figcaption><span>ILLUSTRATIVES PLANUNGSBEISPIEL</span>${escape(caption)}</figcaption></figure>`;
}
