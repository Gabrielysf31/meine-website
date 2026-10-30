# Meine Website

Website für Gabriels mögliche spätere Selbstständigkeit im Bereich Elektrotechnik und intelligente Gebäude.

## Ausrichtung

- Primär Privatkunden mit Wohnungen und Eigenheimen; später gegebenenfalls Gewerbekunden.
- Moderne, schlichte Website mit mehreren Seiten und klarer Navigation.
- Kurze, verständliche Inhalte und leicht erreichbare Informationen.
- Später erweiterbar um einen KI-Assistenten und eine geführte Projektanfrage.

## Projektstand

Der erste lokale Entwurf ist umgesetzt: helle Gestaltung mit Petrol, echte Unterseiten, mobile Navigation und kurze Inhalte für Privatkunden.

- Startseite, Leistungsübersicht und sechs Leistungsunterseiten: Neubau, Modernisierung, Licht, Smart Home, Photovoltaik sowie Energie und Laden.
- Einheitlicher warmer und salbeigrüner Hintergrundschein auf allen Unterseiten, mit kurzer Einblendung und statischer Darstellung bei reduzierter Bewegung. Die Startseite behält ihr pausierbares Lichtspiel. Aufbau in [docs/HINTERGRUNDLICHT.md](docs/HINTERGRUNDLICHT.md).
- Einheitlicher Hover-Effekt für klickbare Links, Buttons, Fragen und Formularauswahl auf der gesamten Website. Die drei Infopunkte bleiben statisch. Einzelheiten stehen in [docs/INTERAKTIONEN.md](docs/INTERAKTIONEN.md).
- Neues Startbild mit großzügigem Blick auf Wohn- und Essbereich: seitlich angebrachte Steckdosen und Wandtaster, Jalousien, eingeschaltete Leuchten und eine offene Küche. Vollständig im Querformat und als KI-Visualisierung gekennzeichnet; Bild und vollständiger Prompt stehen in [docs/STARTBILD-WOHNRAUM.md](docs/STARTBILD-WOHNRAUM.md).
- Alle sechs Leistungsseiten mit ausgeschriebenem Navigationspfad „Leistungen / Leistungsname“, drei ausführlichen Themenabschnitten, Sprunglinks und insgesamt 18 erklärenden Vektorskizzen. Dazu gehören ein markierter Beispielgrundriss, eine schematische Verteilung, Lichtbereiche und Energieübersichten.
- Erweiterte Smart-Home-Seite mit eigenen Bildern, Funktionsübersicht, Bedienung, Einstieg im Bestand oder Neubau, fünf Antworten und Assistentenhinweis. Drei interaktive Alltagssituationen steuern eine illustrierte Raumansicht mit zwei Lampen. Warm, gedimmt und Aus lassen sich zusätzlich direkt ausprobieren.
- Neue Bedienungsdemo unter „Du bestimmst. Die Technik unterstützt.“: derselbe Beispielraum über Taster, App oder Automatik steuerbar. Kurz schalten, durch Halten dimmen, Helligkeitsregler sowie änderbare Beispielzeiten mit vorgespulter Uhr.
- Eine Jalousien-Demo unter der Lichtsimulation mit drei Räumen und Beispiel-App: einzeln öffnen, halb schließen oder schließen sowie alle gemeinsam öffnen und schließen. Fenster, Raumhelligkeit und angezeigte Zustände ändern sich zusammen. Auf Mobil bleibt die Fensteransicht beim Bedienen sichtbar.
- Dezentes bewegtes Lichtspiel im Hintergrund des Startseiteneinstiegs, mit Pausentaste. Bei reduzierter Bewegung oder ohne JavaScript bleibt es statisch; außerhalb des sichtbaren Bereichs und bei verborgenem Tab pausiert die Bewegung.
- Inspiration mit vier seitlich bedienbaren Bildergalerien und 13 Ansichten: Nachtlicht, Beschattung, Wohnlicht sowie Energie und Laden. Je drei bis vier Ideen mit eigenem Text, Pfeilen, Bildpunkten und Endlosschleife; Wallboxen in Garage, Einfahrt und Carport.
- Kurzer Berater mit fünf Fragen, begründeten Ansätzen und bearbeitbarer Übergabe in den Projektplaner.
- Über mich, Kontakt sowie ein Wissensbereich mit 50 Fragen, sieben Themenfiltern, Volltextsuche, verwandten Fragen und Technik-ABC. Acht Fragen bilden den Einstieg; der vollständige Katalog lässt sich aus- und wieder einklappen.
- Projektplaner mit mitwachsender Vorschau, sanftem Hintergrundschein und drei erklärten Schritten. Gefüllte Wünsche stehen oben, leere Eingabefelder unter den Themen. Zwei freiwillige Zusatzfragen zu Planungsstand und Prioritäten; alle Angaben im bearbeitbaren Überblick und Export.
- Als Vorschau gekennzeichneter Einstieg für einen späteren KI-Assistenten.
- Entwurfsseiten für Impressum und Datenschutz sowie Bildnachweise und Fehlerseite.

Der KI-Assistent ist noch nicht angebunden. Der Planer versendet keine Daten. Es gibt kein Backend, keine Analysewerkzeuge und keine dauerhafte Speicherung von Eingaben.

Firmenname, Einsatzgebiet und tatsächlicher Leistungsumfang sind noch offen. Ein Meisterabschluss ist eine Zukunftsüberlegung; Qualifikationen und Referenzen werden nur entsprechend dem tatsächlichen Stand dargestellt.

## Lokal ansehen

Voraussetzung: Node.js ab Version 22.

```sh
npm ci
npm run dev
```

Danach: **http://localhost:4173**. Der Vorschau-Server ist ausschließlich an das lokale Gerät gebunden. Er erstellt beim Start die Website; nach Änderungen `npm run build` ausführen und den Browser neu laden.

## Prüfen

```sh
npm run check
npm test
```

`check` erstellt alle 18 HTML-Seiten einschließlich Fehlerseite und prüft interne Verweise. 27 Playwright-Prüfungen decken Entwurfsformat, Navigation, Projektplaner, Export, Suche, Alltagssituationen und Nutzung ohne JavaScript ab. Hinzu kommen Beraterfragen, Auswahlgrenzen, Rücknavigation, Übernahme, Schutz vorhandener Eingaben und Kopierfehler. Die Leistungsseiten werden einschließlich Navigationspfad, Sprungzielen und Rückkehr zur Übersicht ohne JavaScript geprüft. Die neuen Prüfungen kontrollieren Jalousien auf Desktop und Mobil, Tastaturbedienung, Lichtspiel-Pause, reduzierte Bewegung und die Darstellung ohne JavaScript. Auf diesem Mac verwenden die Browserprüfungen das vorhandene Google Chrome; auf anderen Geräten ist gegebenenfalls einmalig `npx playwright install chromium` nötig.

Der Wissensbereich wird zusätzlich auf Suche mit mehreren Wörtern, Themenfilter, den vollständigen Katalog, verwandte Fragen, Direktlinks und Nutzung ohne JavaScript geprüft. Aufbau und fachliche Quellen stehen in [docs/WISSEN.md](docs/WISSEN.md).

## Aufbau

- `src/content.mjs`: zentrale Inhalte, Leistungsbereiche und Fragen.
- `src/knowledge.mjs`, `src/knowledge-data.mjs`, `public/assets/knowledge.js` und `knowledge.css`: Wissensseite, 50 Antworten, Suche und Themenfilter.
- `src/components.mjs`: gemeinsamer Seitenrahmen und wiederverwendbare Elemente.
- `public/assets/ambience.css`: gemeinsamer Hintergrundschein auf allen Unterseiten, zentral im Seitenrahmen eingebunden.
- `public/assets/interactions.css`: gemeinsame Hervorhebung klickbarer Elemente, mit Rücksicht auf Touch und reduzierte Bewegung.
- `src/pages.mjs`: Inhalte der einzelnen Seiten.
- `src/service-page.mjs`, `src/service-details.mjs` und `src/service-illustrations.mjs`: ausführliche Leistungsseiten, Themeninhalte und eigene Vektorskizzen; Gestaltung in `public/assets/services.css`.
- `src/control-demo.mjs` und `public/assets/control-demo.js` / `.css`: gemeinsame Raumdemo für Taster, App und Zeitabläufe; nur auf der Smart-Home-Seite geladen.
- `src/shading.mjs` sowie `public/assets/smart-demos.js` und `smart-demos.css`: Jalousien-Demo und Startseiten-Lichtspiel.
- `src/inspiration-gallery.mjs` sowie `public/assets/inspiration-gallery.js` / `.css`: Galerieinhalte, seitliches Scrollen und Endlosschleife.
- `src/inspiration.mjs` und `src/planner.mjs`: Inspirationsseite und wiederverwendbarer Planer.
- `public/assets/project-draft.js`: gemeinsame Fragen, Ergebnisregeln und geprüftes Entwurfsformat.
- `public/assets/advisor.js` und `public/assets/planner.js`: Berater und Planer im Browser.
- `public/assets/`: lokale Bilder, Gestaltung, Browserfunktionen und Favicon.
- `scripts/`: statischer Build, lokaler Server und Verweisprüfung.
- `tests/`: Browserprüfungen mit Playwright.
- `dist/`: erzeugte Website, nicht versioniert.
- `docs/`: Projektstand, Bildquellen und Ansichten des Entwurfs.

Die Website liefert fertiges HTML mit CSS und ergänzendem JavaScript aus. Es werden keine externen Schriften, Skripte oder Bilder beim Seitenaufruf nachgeladen. Eine spätere KI-Anbindung und ein echter Anfrageversand brauchen eine gesonderte serverseitige Umsetzung.

## Vorschau

[Desktopansicht](docs/vorschau/startseite-desktop.png) · [Mobilansicht](docs/vorschau/startseite-mobil.png)

[Inspiration auf Desktop](docs/vorschau/inspiration-desktop.png) · [Inspiration auf Mobil](docs/vorschau/inspiration-mobil.png)

[Ausführliche Leistungsseite auf Desktop](docs/vorschau/leistungen-neubau-desktop.png) · [auf Mobil](docs/vorschau/leistungen-neubau-mobil.png)

[Jalousien auf Desktop](docs/vorschau/jalousien-desktop.png) · [auf Mobil](docs/vorschau/jalousien-mobil.png) · [Startseite mit Lichtspiel](docs/vorschau/startseite-lichtspiel-desktop.png)

Die großen wiederkehrenden Projektaufrufe wurden auf Gabriels Wunsch entfernt. Der Planer ist weiterhin über den Button oben rechts und den Einstieg auf der Startseite erreichbar. Jeder Leistungsbereich hat ein eigenes Technikmotiv: Modernisierung zeigt einen bestehenden Wohnraum mit erneuerter Elektrik, Energie und Laden eine Wallbox mit angeschlossenem Elektroauto. Die generierten Bilder und ihre Prompts sind in [BILDPROMPTS.md](docs/BILDPROMPTS.md) dokumentiert.

[Projektplaner auf Desktop](docs/vorschau/projektplaner-desktop.png) · [auf Mobil](docs/vorschau/projektplaner-mobil.png) · [Zusatzfragen](docs/vorschau/projektplaner-rahmen-desktop.png)

## Nächster Schritt

Die neue Smart-Home-Bedienungsdemo mit Gabriel unter `/smart-home/#bedienung` ansehen. Der erweiterte Projektplaner bleibt ebenfalls zur Durchsicht bereit. Danach die kostenlose Chat-Anbindung abstimmen; Empfehlung und Quellen in [docs/ASSISTENT-KONZEPT.md](docs/ASSISTENT-KONZEPT.md). Die Inspirationsgalerien sind bestätigt. Die Wissensseite bleibt ebenfalls zur Durchsicht bereit. Das Startbild und der Hover-Effekt sind bestätigt. Jalousien-Demo und Lichtspiel sind in [docs/SMART-HOME-DEMO.md](docs/SMART-HOME-DEMO.md) dokumentiert. Auch die sechs erweiterten Leistungsseiten können weiter verfeinert werden; Aufbau und Inhalte stehen in [docs/LEISTUNGEN.md](docs/LEISTUNGEN.md). Inspiration, Berater und bearbeitbare Planerübergabe sind lokal umgesetzt; der Planer öffnet direkt unter dem Ergebnis. Beim Neuladen oder Verlassen werden die Angaben zurückgesetzt; es gibt keine Browser-Speicherung und keinen Versand.

Der konkrete Wiedereinstieg und die Abgrenzung zwischen bestehender Umsetzung und besprochenem Konzept stehen in [docs/PROJEKTSTAND.md](docs/PROJEKTSTAND.md).

Fragen, Ergebnisregeln und Entwurfsformat stehen in [docs/INSPIRATIONSBERATER.md](docs/INSPIRATIONSBERATER.md). Die zwölf mit dem eingebauten Imagegen-Werkzeug erzeugten Inspirationsmotive liegen unter `public/assets/inspiration-*.jpg`; Dateipfade und vollständige Prompts stehen in [docs/INSPIRATION-BILDPROMPTS.md](docs/INSPIRATION-BILDPROMPTS.md).

Später sollen wiederkehrende Fragen aus dem echten Chatbot als „Top-Fragen“ mit kurzen Antworten beim Berater ergänzt werden. Bei wiederholt fehlenden Angaben kann auch der Fragenablauf gezielt erweitert werden. Dieser Ausbau und die KI-Anbindung sind noch offen.

Die Website ist noch nicht veröffentlicht. Eine Veröffentlichung oder kostenpflichtige Anbindung wird gesondert abgestimmt. Der Entwurf ist mit `noindex` gekennzeichnet; das ersetzt keine Zugriffsbeschränkung, falls er später gehostet wird.
