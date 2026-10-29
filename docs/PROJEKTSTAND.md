# Projektstand

Stand: 29.10.2026 · interaktive Lichtsimulation ergänzt

## Aktueller Stand

- Gestalterische Korrektur nach Gabriels Feedback: Bunte Lichtfarben wirken ihm zu unseriös. Gelb, Grün und Rot wurden aus der Simulation entfernt; Warm, Gedimmt und Aus bleiben. Die Tageszeiten und Szenenwechsel bleiben erhalten. Branch: `feat/smart-home-ruhige-lichtstimmungen`.


- Rot als zusätzliche manuelle Lichtfarbe ergänzt: Lampen, Lichtkegel, Raumtönung und Beschriftung reagieren gemeinsam. Bestehende Alltagssituationen behalten ihre Lichtvorgaben. Branch: `feat/smart-home-rotes-licht`.


- Tageslichtkorrektur: „Ankommen“ zeigt jetzt einen hellen Raum, blauen Himmel und Sonne passend zu „Tageslicht nutzen“. Feierabend und Unterwegs behalten die Abendansicht. Manuelle Lichtfarben erhalten die Tageszeit der gewählten Situation. Branch: `fix/smart-home-tageslicht`.


- Gabriels Lichtidee umgesetzt: eigener illustrierter Wohnraum mit Pendel- und Stehleuchte. Ankommen setzt warmes Licht, Feierabend gedimmtes Licht und Unterwegs ausgeschaltetes Licht. Rechts sind Warm, Gedimmt, Gelb, Grün und Aus direkt wählbar. Raumhintergrund, Leuchtflächen, Lichtkegel und Lichtbeschreibung wechseln gemeinsam. Ein Szenenwechsel setzt eine manuelle Lichtwahl zurück.
- Umsetzung als skalierbare SVG-/CSS-Illustration in `src/room.mjs`, ohne neue Bilddateien oder Geräteanbindung. Bedienelemente mit Tastatur und sichtbarem Auswahlzustand; bei reduzierter Bewegung ohne Übergangsanimation. Ohne JavaScript bleibt die statische warme Illustration sichtbar. Themenbranch: `feat/smart-home-lichtsimulation`, abgeleitet von `feat/smart-home-details` (Commit `8ddc091`).


- Smart Home auf Gabriels Wunsch erweitert: zwei neue eigene Bildmotive, vier Funktionsbereiche, Taster/App/Automatik, Bestand und Neubau, KNX-Einordnung, fünf aufklappbare Antworten und ein abschließender Hinweis mit Button zur Assistenten-Vorschau. Keine aktive Chatbot-Anbindung behauptet.
- Neue Umsetzung: `src/smart-home.mjs`; Bilddateien, Prompts und fachliche Quellen: [SMART-HOME-BILDER.md](SMART-HOME-BILDER.md). Themenbranch: `feat/smart-home-details`, abgeleitet von `feat/inspiration-berater` (Commit `a33994a`).


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
- Alle zehn Playwright-Prüfungen bestanden: neun Browserabläufe und eine Prüfung des gemeinsamen Entwurfsformats.
- Berater: Pflichtantworten, maximal drei Wünsche, ausschließliche Wahl „Noch offen“, Rücknavigation und passende Ergebnisanzahl.
- Übernahme: richtige Themen, bearbeitbare Angaben, alte und neue Entwürfe vergleichen, Behalten und Ersetzen sowie Erhalt des Planers beim Neustart des Beraters.
- Kein automatisches Vorauswählen von Photovoltaik allein aufgrund der gemeinsamen Antwort zu Verbrauch und Solarstrom. Bei offenen Wünschen bleiben Themen offen, bis der Besucher selbst auswählt.
- Bestehender Planer mit Validierung, sicherer Freitextdarstellung, Rücknavigation und Textdateiexport. Beraterkopie mit Fehlerfall und manueller Alternative.
- Keine Datenanfragen während der geprüften Eingaben, kein Browser-Speicher und keine Angaben in URL-Parametern. Rücksetzen nach Neuladen und nach Verlassen/Rückkehr geprüft.
- Alle Seiten bei 375 Pixeln Breite ohne horizontales Überlaufen. Geschichten und erklärender Hinweis bei deaktiviertem JavaScript erreichbar.
- Inspiration, Ergebnis und geöffneter Planer auf Desktop (1440 Pixel) und Mobil (375 Pixel) visuell geprüft. Sechs aktuelle Ansichten liegen unter `docs/vorschau/`.

## Nächster gemeinsamer Schritt

Die erweiterte Smart-Home-Seite mit Gabriel ansehen; anschließend bei Bedarf die Inspirationsseite und einen Beraterdurchlauf gemeinsam ansehen. Bildmotive, Texte, Fragen und Ergebnislänge anhand seines Feedbacks verfeinern.

Gabriels ergänzende Idee ist festgehalten: Wiederkehrende Fragen aus dem späteren echten Chatbot sollen als „Top-Fragen“ mit kurzen Antworten beim Berater ergänzt werden. Fehlt für die Beratung regelmäßig eine Angabe, kann auch der Fragenablauf gezielt erweitert werden. Es werden dafür jetzt keine häufigen Kundenfragen behauptet. Die spätere Auswertung und Übernahme sind noch nicht implementiert.

Danach bleiben Firmenname, Einsatzgebiet, tatsächlicher Leistungsumfang, echte Profilinformationen und Kontaktangaben offen. Vor einer KI-Anbindung braucht es eine geprüfte Wissensgrundlage und eine gesonderte serverseitige Umsetzung. Der gemeinsame Projektentwurf ist dafür vorbereitet; ein konkreter KI-Anbieter ist noch nicht gewählt.

## Git und Vorschau

Privates Repository: https://github.com/Gabrielysf31/meine-website

Die erste Website-Umsetzung liegt auf `feat/erster-website-entwurf` bis Commit `b73bed2`. Die konkrete Konzeptausarbeitung wurde auf `docs/inspirationsberater-konzept` mit Commit `82b6863` gesichert. Die aktuelle Umsetzung liegt auf dem davon abgeleiteten Themenbranch `feat/inspiration-berater`. `main` enthält weiterhin die ursprüngliche Repository-Initialisierung; es wurde nichts in `main` integriert oder als Website veröffentlicht.

Die von Gabriel geöffnete lokale Vorschau unter `http://localhost:4173` wurde wiederverwendet und während der Umsetzung aktualisiert. Falls sie nicht läuft: `npm run dev`. Nach weiteren Änderungen `npm run build` ausführen und den Browser neu laden.

## Bisherige fachliche Orientierung

- [KNX Planning Guide: Anwendungen](https://planning.knx.org/submit/step7) für Beleuchtung und Beschattung.
- [KNX: Home Shading](https://www.knx.org/news/home-shading-benefits-jalousie) für Außenjalousien und Gebäudesteuerung.
- [VDE: Prüfung von Photovoltaik- und Speicheranlagen](https://www.vde-verlag.de/p/fachwissen/pruefung-von-photovoltaik-und-speicheranlagen/316493) zur Einordnung von Prüfung und Dokumentation.

Der Solarbereich beschreibt Anschluss, Inbetriebnahme, Prüfung sowie Übergabe und Abnahmevorbereitung als vorgesehene Themen. Eine pauschale Zusage zur Abnahme beliebiger Fremdanlagen wird daraus nicht abgeleitet.
