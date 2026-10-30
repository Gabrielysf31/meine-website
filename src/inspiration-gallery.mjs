import { visuals } from "./content.mjs";
import { escape, icon } from "./components.mjs";

const existing = (key, title, text) => ({ ...visuals[key], title, text });
const image = (name, alt, title, text) => ({
  src: `/assets/inspiration-${name}.jpg`, alt, title, text,
  width: 1536, height: 1024,
});

export const inspirationGalleries = [
  [
    existing("orientation", "Ein Lichtstreifen durch den Flur", "Bodennahe Leuchten zeigen nachts den Weg. Die große Deckenbeleuchtung kann aus bleiben."),
    image("nachtlicht-treppe", "Treppe bei Nacht mit warmen bodennahen Wandleuchten und Handlauf", "Jede Stufe im Blick", "An der Treppe macht sanftes Licht den Verlauf der Stufen sichtbar. Position und Helligkeit werden passend zur Treppe geplant."),
    image("nachtlicht-bett", "Schlafzimmer mit sanftem Orientierungslicht unter dem Bett", "Sanft aufstehen", "Licht unter dem Bett erhellt den Boden statt den ganzen Raum. Auf Wunsch kann ein passend platzierter Bewegungsmelder den Weg beleuchten."),
  ],
  [
    existing("morning", "Morgenlicht im Schlafzimmer", "Jalousien öffnen sich nach deinem Rhythmus – am Taster oder über einen abgestimmten Ablauf. Du kannst jederzeit selbst eingreifen."),
    image("beschattung-wohnen", "Wohnraum mit geneigten Außenjalousien vor den großen Fenstern", "Tageslicht ohne direkte Sonne", "Geneigte Lamellen lassen Licht herein und schirmen direkte Sonne ab. So lässt sich die Stimmung im Wohnraum verändern."),
    image("beschattung-terrasse", "Terrasse mit ausgefahrener Stoffmarkise und beschattetem Sitzbereich", "Ein Schattenplatz draußen", "Auch eine Markise kann zur Beschattung gehören. Bei einer automatischen Bedienung werden Wetter, Windschutz und das konkrete System mitgeplant."),
  ],
  [
    existing("workspace", "Arbeiten und Wohnen verbinden", "Gezieltes Licht am Schreibtisch und eine eigene Leuchte am Sessel schaffen zwei Bereiche in einem Raum."),
    image("licht-kueche", "Küche mit beleuchteter Arbeitsfläche und separaten Pendelleuchten am Esstisch", "Hell zum Kochen. Warm zum Essen.", "Arbeitsfläche und Esstisch brauchen unterschiedliches Licht. Getrennt bedienbare Gruppen machen beides möglich."),
    image("licht-lesen", "Lesesessel mit gerichteter Stehleuchte und sanftem Hintergrundlicht", "Dein Platz für eine ruhige Stunde", "Eine Leselampe bringt Licht ans Buch. Ein sanft beleuchteter Hintergrund ergänzt die gemütliche Stimmung."),
  ],
  [
    existing("energyOverview", "Das Zuhause als Ganzes sehen", "Verbrauch und eigener Solarstrom gehören zusammen. Ein Überblick hilft, auch einen späteren Ladeplatz mitzudenken."),
    image("wallbox-garage", "Wallbox an einer Garagenwand mit Ladekabel zum geparkten Elektroauto", "Laden in der Garage", "Die Wallbox sitzt nahe am Stellplatz. Kabelführung, Ladeanschluss am Auto und ein freier Durchgang gehören zur Planung."),
    image("wallbox-einfahrt", "Wallbox an einer Hausaußenwand mit angeschlossenem Elektroauto auf der Einfahrt", "Laden direkt an der Einfahrt", "Ein Ladeplatz funktioniert auch draußen. Geeignete Ausstattung, Montageort und Leitungsweg werden für die Situation vor Ort abgestimmt."),
    existing("energy", "Ein Ladeplatz am Carport", "Am Carport liegt die Wallbox direkt beim Stellplatz. Die Befestigung und der Weg der Zuleitung werden passend zum Aufbau geplant."),
  ],
];

export function renderGallery(slides, index) {
  return `<section class="inspiration-gallery" data-gallery aria-roledescription="Bildergalerie" aria-labelledby="inspiration-story-${index}">
<div class="gallery-track" id="gallery-track-${index}" tabindex="0" aria-label="Inspirationsbilder, seitlich scrollen">${slides.map((slide, i) => `<figure class="gallery-slide" role="group" aria-label="${i + 1} von ${slides.length}"><div class="gallery-photo"><img src="${slide.src}" alt="${escape(slide.alt)}" width="${slide.width}" height="${slide.height}" ${index || i ? 'loading="lazy"' : 'fetchpriority="high"'}><span class="gallery-image-label">KI-VISUALISIERUNG</span></div><figcaption><span class="gallery-kicker">IDEE ${String(i + 1).padStart(2, "0")}</span><h3>${escape(slide.title)}</h3><p>${escape(slide.text)}</p></figcaption></figure>`).join("")}</div>
<div class="gallery-controls" hidden><button type="button" data-gallery-prev aria-label="Vorheriges Bild" aria-controls="gallery-track-${index}">${icon("arrow", "back-arrow")}</button><span class="gallery-position" role="status" aria-live="polite" aria-atomic="true">1 / ${slides.length}</span><div class="gallery-dots" role="group" aria-label="Bild wählen">${slides.map((slide, i) => `<button type="button" data-gallery-dot="${i}" aria-label="Bild ${i + 1}: ${escape(slide.title)}" aria-pressed="${i === 0}"><span></span></button>`).join("")}</div><button type="button" data-gallery-next aria-label="Nächstes Bild" aria-controls="gallery-track-${index}">${icon("arrow")}</button></div>
<p class="gallery-hint">Zur Seite wischen oder scrollen · ${slides.length} Ideen</p></section>`;
}
