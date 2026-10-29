# Projektstand

Stand: 29.10.2026 · Sitzungsabschluss

## Letzte Sitzung und abschließende Entscheidungen

- Inspirationsseite mit vier eigenen Bildmotiven, fünf Beraterfragen und bearbeitbarer Planerübergabe umgesetzt und geprüft.
- Smart-Home-Seite um zwei eigene Bilder, Funktionsübersicht, Bedienung, Nachrüstung/Neubau, KNX-Einordnung und fünf aufklappbare Antworten erweitert. Am Ende führt ein Button zur ausdrücklich als Vorschau gekennzeichneten Assistentenfunktion.
- Gabriels interaktive Lichtidee umgesetzt: illustrierter Wohnraum mit Pendel- und Stehleuchte. Lampen, Lichtkegel, Raumtönung und Lichtbeschreibung wechseln gemeinsam.
- Endgültige Auswahl nach Gabriels Feedback: **Warm, Gedimmt und Aus**. Gelb, Grün und Rot wurden zwischenzeitlich ausprobiert und wieder entfernt, weil die bunten Farben ihm zu unseriös wirken. Diese gestalterische Entscheidung beim Wiedereinstieg beibehalten.
- Ankommen: heller Raum mit Tageslicht, blauem Himmel und Sonne, passend zu „Tageslicht nutzen“; Licht warm. Feierabend: Abendansicht, warm und gedimmt. Unterwegs: Abendansicht mit ausgeschalteten Lampen.
- Manuelle Lichtwahl verändert nur die Beleuchtung und erhält die gewählte Tageszeit. Ein Szenenwechsel stellt die Vorgabe der jeweiligen Situation wieder her. Auf Mobilgeräten stehen Raumansicht und Lichtauswahl direkt zusammen.
- Raum als skalierbare SVG-/CSS-Illustration in `src/room.mjs`, ohne Geräteanbindung. Bedienelemente mit Tastatur und sichtbarem Auswahlzustand; bei reduzierter Bewegung ohne Übergangsanimation. Ohne JavaScript bleibt die warme Tagesansicht sichtbar.
- Sämtliche Umsetzungsänderungen bis Commit `e4ad57b` sind auf `feat/smart-home-ruhige-lichtstimmungen` gesichert. Der Abschluss aktualisiert ausschließlich die Übergabedokumentation.

## Aktueller Stand

- Die Inspirationsseite zeigt vier eigene Alltagssituationen mit neuen, gekennzeichneten KI-Motiven: nächtliches Orientierungslicht, Morgenroutine mit Jalousien, Arbeits- und Wohnlicht sowie Energieüberblick. Die bisherigen Bilder auf den Leistungsseiten bleiben erhalten.
- Ein kurzer Berater stellt fünf Fragen zu Zuhause, Vorhaben, Wünschen, Bedienung und Priorität. Bis zu drei konkrete Wünsche oder „Noch offen“ sind auswählbar. Rücknavigation erhält die Antworten.
- Das Ergebnis zeigt die eigenen Antworten, ein bis drei begründete Ansätze und offene Fragen. Bei offenen Wünschen erscheinen zwei Anregungen, ohne zusätzliche Themen zu unterstellen.
- „Zusammenfassung kopieren“ bietet bei fehlendem Zwischenablagezugriff einen markierbaren Text. „In Projektplaner übernehmen“ öffnet den gemeinsamen Planer direkt unter dem Ergebnis.
- Übernommene Angaben bleiben bearbeitbar. Vor dem Ersetzen eines bestehenden Entwurfs werden alte und neue Angaben verglichen. „Neu beginnen“ setzt den Berater zurück und erhält den bereits bearbeiteten Planer.
- Angaben bleiben im Arbeitsspeicher der aktuellen Seite. Kein Versand, kein Browser-Speicher und keine Angaben in URLs. Neuladen und Verlassen setzen die Eingaben zurück, auch bei Rückkehr über die Browsernavigation.
- Die normale Planerseite unter `/anfrage/` bleibt erhalten. Kopie und Textdateiexport funktionieren weiterhin.

## Vereinbarte Richtung und Grenzen

Gabriel plant einen möglichen späteren Betrieb für Elektrotechnik und intelligente Gebäude. Primäre Zielgruppe sind Privatkunden mit Wohnungen und Eigenheimen; Gewerbe ist eine mögliche spätere Erweiterung.

Die Website soll modern, schlicht und mehrseitig sein. Kurze Texte, verständliche Sprache und leicht erreichbare Details haben Vorrang. Später sind ein KI-Assistent und Agentenfunktionen vorgesehen.

Ein Meisterabschluss ist bisher eine Zukunftsüberlegung. Keine abgeschlossene Qualifikation, realisierten Kundenprojekte, Kontaktdaten oder betrieblichen Angaben erfinden. Firmenname, Einsatzgebiet und tatsächlicher späterer Leistungsumfang sind noch offen.

Die Website bleibt ein lokaler privater Entwurf. Veröffentlichung, kostenpflichtige Dienste und echter Anfrageversand sind nicht beauftragt. Es gibt kein Backend, keine Analysewerkzeuge und keine aktive KI-Anbindung.

## Übrige Umsetzung

- 17 Inhaltsseiten und eine Fehlerseite, helle Gestaltung mit Petrol und lokal ausgelieferten Bildern, Schriften und Skripten.
- Sechs Leistungsbereiche mit eigenen Unterseiten und Motiven: Neubau, Modernisierung, Licht, Smart Home, Photovoltaik sowie Energie und Laden.
- Mobile Navigation mit Tastaturbedienung, drei interaktive Smart-Home-Situationen und durchsuchbare häufige Fragen.
- Über mich, Kontakt, Entwurfsseiten für Impressum und Datenschutz sowie Bildnachweise.
- Assistenteneinstieg als ausdrücklich gekennzeichnete Vorschau, auf Mobilgeräten als kleines Symbol.
- Keine großen wiederkehrenden Abschlussblöcke mit Projektaufruf. Planerzugänge oben rechts, auf der Startseite und auf der Kontaktseite bleiben erhalten. Auf der Inspirationsseite ist die Übernahme Bestandteil des Beraterergebnisses.
- Alle zwölf KI-Motive sind Visualisierungen; sie weisen weder Kundenprojekte noch konkrete Produktkompatibilität nach.

## Technischer Einstieg

Statisches HTML aus JavaScript-Vorlagen, CSS und ergänzende Browsermodule. Node.js dient für Build und Vorschau; Playwright ist eine Entwicklungsabhängigkeit.

- `src/smart-home.mjs`: erweiterte Smart-Home-Seite und Assistentenhinweis.
- `src/room.mjs`: interaktive Raumillustration und reduzierte Lichtauswahl; Szenensteuerung in `public/assets/app.js`, Gestaltung in `public/assets/styles.css`.
- `src/inspiration.mjs`: Geschichten, fünf Fragen und Ergebnisrahmen.
- `src/planner.mjs`: gemeinsamer Planerabschnitt für Inspiration und `/anfrage/`.
- `public/assets/project-draft.js`: Fragen, Themenzuordnung, feste Ergebnisregeln, Entwurfsformat Version 1 und Validierung. Wünsche, mögliche Ansätze und offene Fragen bleiben getrennt.
- `public/assets/advisor.js`: Berater, Ergebnisse, Kopie und kontrollierte Übernahme.
- `public/assets/planner.js`: Planer, Bearbeitung, Zusammenfassung und Export.
- `public/assets/app.js`: übrige Websitefunktionen und Zurücksetzen beim Verlassen beziehungsweise Wiederherstellen einer Seite.
- `src/content.mjs`: Leistungsinhalte und Bilddefinitionen.

Fragen und Verhalten stehen in [INSPIRATIONSBERATER.md](INSPIRATIONSBERATER.md). Die vier neuen Bilder mit Dateipfaden und vollständigen Prompts sind in [INSPIRATION-BILDPROMPTS.md](INSPIRATION-BILDPROMPTS.md) dokumentiert. Die Originale bleiben im Imagegen-Ausgabeordner; die Website verwendet lokale JPEG-Dateien.

## Geprüft

- Build und Verweise: 18 Seiten, 465 interne Verweise.
- Alle zehn Playwright-Prüfungen bestanden: neun Browserabläufe und eine Prüfung des gemeinsamen Entwurfsformats. Nach den abschließenden kleinen Änderungen an Tageslicht und Lichtfarben wurden Build/Verweise und gezielt die Smart-Home-Browserprüfung erneut erfolgreich ausgeführt. Für diesen reinen Dokumentationsabschluss ist kein erneuter App-Build erforderlich.
- Berater: Pflichtantworten, maximal drei Wünsche, ausschließliche Wahl „Noch offen“, Rücknavigation und passende Ergebnisanzahl.
- Übernahme: richtige Themen, bearbeitbare Angaben, alte und neue Entwürfe vergleichen, Behalten und Ersetzen sowie Erhalt des Planers beim Neustart des Beraters.
- Kein automatisches Vorauswählen von Photovoltaik allein aufgrund der gemeinsamen Antwort zu Verbrauch und Solarstrom. Bei offenen Wünschen bleiben Themen offen, bis der Besucher selbst auswählt.
- Bestehender Planer mit Validierung, sicherer Freitextdarstellung, Rücknavigation und Textdateiexport. Beraterkopie mit Fehlerfall und manueller Alternative.
- Keine Datenanfragen während der geprüften Eingaben, kein Browser-Speicher und keine Angaben in URL-Parametern. Rücksetzen nach Neuladen und nach Verlassen/Rückkehr geprüft.
- Alle Seiten bei 375 Pixeln Breite ohne horizontales Überlaufen. Geschichten und erklärender Hinweis bei deaktiviertem JavaScript erreichbar.
- Inspiration, Ergebnis und geöffneter Planer auf Desktop (1440 Pixel) und Mobil (375 Pixel) visuell geprüft. Aktuelle Ansichten liegen unter `docs/vorschau/`; auch Smart Home und die Lichtsimulation wurden auf Desktop und Mobil aufgenommen und geprüft.

## Nächster gemeinsamer Schritt

Beim Wiedereinstieg diesen Abschlussstand lesen und mit Gabriel die nächste gewünschte Überarbeitung festlegen. Die zuletzt gewünschte reduzierte Lichtauswahl ist umgesetzt; daraus ergibt sich keine weitere offene Funktionsaufgabe. Bei weiterer Smart-Home-Arbeit an `src/smart-home.mjs` und `src/room.mjs` anknüpfen. Inspiration und Berater können bei Bedarf weiter verfeinert werden.

Gabriels ergänzende Idee ist festgehalten: Wiederkehrende Fragen aus dem späteren echten Chatbot sollen als „Top-Fragen“ mit kurzen Antworten beim Berater ergänzt werden. Fehlt für die Beratung regelmäßig eine Angabe, kann auch der Fragenablauf gezielt erweitert werden. Es werden dafür jetzt keine häufigen Kundenfragen behauptet. Die spätere Auswertung und Übernahme sind noch nicht implementiert.

Danach bleiben Firmenname, Einsatzgebiet, tatsächlicher Leistungsumfang, echte Profilinformationen und Kontaktangaben offen. Vor einer KI-Anbindung braucht es eine geprüfte Wissensgrundlage und eine gesonderte serverseitige Umsetzung. Der gemeinsame Projektentwurf ist dafür vorbereitet; ein konkreter KI-Anbieter ist noch nicht gewählt.

## Git und Vorschau

Privates Repository: https://github.com/Gabrielysf31/meine-website

Die erste Website-Umsetzung liegt auf `feat/erster-website-entwurf` bis Commit `b73bed2`. Die konkrete Konzeptausarbeitung wurde auf `docs/inspirationsberater-konzept` mit Commit `82b6863` gesichert. Inspiration und Berater wurden mit Commit `a33994a` auf `feat/inspiration-berater` gesichert. Darauf bauen Smart Home (`8ddc091`), Lichtsimulation (`a7aeeec`), Tageslicht (`e6a6a90`), die zwischenzeitliche rote Lichtfarbe (`630896b`) und die endgültige reduzierte Auswahl (`e4ad57b`) auf. Der aktuelle, vollständige Arbeitsstand liegt auf `feat/smart-home-ruhige-lichtstimmungen`; dort wird auch die Abschlussdokumentation gesichert. `main` enthält weiterhin die ursprüngliche Repository-Initialisierung; es wurde nichts in `main` integriert oder als Website veröffentlicht.

Die von Gabriel geöffnete lokale Vorschau unter `http://localhost:4173` wurde wiederverwendet und während der Umsetzung aktualisiert. Falls sie nicht läuft: `npm run dev`. Nach weiteren Änderungen `npm run build` ausführen und den Browser neu laden.

## Bisherige fachliche Orientierung

- [KNX Planning Guide: Anwendungen](https://planning.knx.org/submit/step7) für Beleuchtung und Beschattung.
- [KNX: Home Shading](https://www.knx.org/news/home-shading-benefits-jalousie) für Außenjalousien und Gebäudesteuerung.
- [VDE: Prüfung von Photovoltaik- und Speicheranlagen](https://www.vde-verlag.de/p/fachwissen/pruefung-von-photovoltaik-und-speicheranlagen/316493) zur Einordnung von Prüfung und Dokumentation.

Der Solarbereich beschreibt Anschluss, Inbetriebnahme, Prüfung sowie Übergabe und Abnahmevorbereitung als vorgesehene Themen. Eine pauschale Zusage zur Abnahme beliebiger Fremdanlagen wird daraus nicht abgeleitet.
