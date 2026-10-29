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
- Smart-Home-Seite mit drei interaktiven Alltagssituationen.
- Inspiration mit vier eigenen Alltagsszenen: Orientierungslicht, Morgenroutine, Arbeits- und Wohnlicht sowie Energieüberblick.
- Kurzer Berater mit fünf Fragen, begründeten Ansätzen und bearbeitbarer Übergabe in den Projektplaner.
- Über mich, Kontakt sowie durchsuchbare häufige Fragen.
- Projektplaner mit Auswahl, Detailangaben und exportierbarer Zusammenfassung.
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

`check` erstellt alle 18 HTML-Seiten einschließlich Fehlerseite und prüft interne Verweise. Zehn Playwright-Prüfungen decken Entwurfsformat, Navigation, Projektplaner, Export, Suche, Alltagssituationen und Nutzung ohne JavaScript ab. Hinzu kommen Beraterfragen, Auswahlgrenzen, Rücknavigation, Übernahme, Schutz vorhandener Eingaben und Kopierfehler. Auf diesem Mac verwenden die Browserprüfungen das vorhandene Google Chrome; auf anderen Geräten ist gegebenenfalls einmalig `npx playwright install chromium` nötig.

## Aufbau

- `src/content.mjs`: zentrale Inhalte, Leistungsbereiche und häufige Fragen.
- `src/components.mjs`: gemeinsamer Seitenrahmen und wiederverwendbare Elemente.
- `src/pages.mjs`: Inhalte der einzelnen Seiten.
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

Die großen wiederkehrenden Projektaufrufe wurden auf Gabriels Wunsch entfernt. Der Planer ist weiterhin über den Button oben rechts und den Einstieg auf der Startseite erreichbar. Jeder Leistungsbereich hat ein eigenes Technikmotiv: Modernisierung zeigt einen bestehenden Wohnraum mit erneuerter Elektrik, Energie und Laden eine Wallbox mit angeschlossenem Elektroauto. Die generierten Bilder und ihre Prompts sind in [BILDPROMPTS.md](docs/BILDPROMPTS.md) dokumentiert.

## Nächster Schritt

Den neuen Inspirationsbereich und die Beraterergebnisse gemeinsam ansehen und anhand von Gabriels Feedback verfeinern. Vier eigene Bilder, fünf Fragen und die bearbeitbare Übergabe sind lokal umgesetzt. Der Planer öffnet direkt unter dem Ergebnis. Beim Neuladen oder Verlassen werden die Angaben zurückgesetzt; es gibt keine Browser-Speicherung und keinen Versand.

Der konkrete Wiedereinstieg und die Abgrenzung zwischen bestehender Umsetzung und besprochenem Konzept stehen in [docs/PROJEKTSTAND.md](docs/PROJEKTSTAND.md).

Fragen, Ergebnisregeln und Entwurfsformat stehen in [docs/INSPIRATIONSBERATER.md](docs/INSPIRATIONSBERATER.md). Die vier mit dem eingebauten Imagegen-Werkzeug erzeugten Inspirationsmotive liegen unter `public/assets/inspiration-*.jpg`; Dateipfade und vollständige Prompts stehen in [docs/INSPIRATION-BILDPROMPTS.md](docs/INSPIRATION-BILDPROMPTS.md).

Später sollen wiederkehrende Fragen aus dem echten Chatbot als „Top-Fragen“ mit kurzen Antworten beim Berater ergänzt werden. Bei wiederholt fehlenden Angaben kann auch der Fragenablauf gezielt erweitert werden. Dieser Ausbau und die KI-Anbindung sind noch offen.

Die Website ist noch nicht veröffentlicht. Eine Veröffentlichung oder kostenpflichtige Anbindung wird gesondert abgestimmt. Der Entwurf ist mit `noindex` gekennzeichnet; das ersetzt keine Zugriffsbeschränkung, falls er später gehostet wird.
