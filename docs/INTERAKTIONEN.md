# Einheitlicher Hover-Effekt für klickbare Elemente

Stand: 30.10.2026 · lokal umgesetzt und geprüft

Gabriels Korrektur: Die drei Infopunkte auf der Startseite sind nicht anklickbar und sollen wieder statisch sein. Der Effekt gehört stattdessen auf die klickbaren Elemente der gesamten Website.

## Verhalten

- Links, Buttons, aufklappbare Fragen, Auswahlkarten, Feldbeschriftungen und Eingabefelder werden beim Darüberfahren hervorgehoben: leichte Vergrößerung, Anheben, Hintergrund und weicher Schatten.
- Kleine Links und Buttons: acht Prozent größer und sechs Pixel angehoben. Breite Leistungszeilen, Fragen und Auswahlkarten: 2,5 Prozent und vier Pixel. Eingabefelder: ein Prozent und zwei Pixel.
- Die Platzaufteilung bleibt stabil; die Vergrößerung ist rein visuell. Bei schmaleren Flächen entstehen keine zusätzlichen Zeilen oder Layoutsprünge durch den Effekt.
- Tastaturfokus bekommt die gleiche Hervorhebung. Die vorhandenen Fokusumrandungen bleiben erhalten.
- Bei reduzierter Bewegung bleibt die Hervorhebung ohne Vergrößern oder Verschieben. Auf Touch-Geräten wird kein zusätzlicher Hover-Effekt ausgelöst.
- Ausgewählte Zustände, dunkle Buttons und dunkle Seitenbereiche behalten passende Farben und erkennbare Auswahlmarkierungen. Der Assistentenbutton und der Sprunglink behalten ihre nötige Vordergrundposition.
- Deaktivierte Buttons und Eingabefelder bekommen den neuen Effekt nicht.
- Die drei reinen Infopunkte bleiben ohne Effekt und ohne Klickfunktion. Das ausdrücklich freigegebene Startbild bleibt erhalten.

## Umsetzung

- `public/assets/interactions.css`: gemeinsame Regeln, auf allen Seiten eingebunden.
- `src/components.mjs`: globale Stylesheet-Einbindung.
- `src/pages.mjs` und `public/assets/smart-demos.css`: vorherigen Infopunkt-Effekt vollständig entfernt.
- `public/assets/styles.css`: bisherigen einzelnen Button-Versatz entfernt; native Radio-/Checkbox-Eingaben decken ihre komplette Auswahlkarte transparent ab. Damit bleiben die Karten auch beim Vergrößern mit nativen Eingaben zuverlässig anklickbar.
- Kein zusätzliches JavaScript und kein neuer Datentransport.

## Prüfung

- Build: 18 Seiten und 527 interne Verweise.
- Alle 15 bestehenden Playwright-Prüfungen erfolgreich, einschließlich Berater, Planer, Navigation, Jalousien und Nutzung ohne JavaScript.
- Im Browser zusätzlich kontrolliert: statische Infopunkte, Hauptbutton, Navigation, Leistungszeile mit tatsächlicher Navigation, Navigationspfad, Öffnen einer Frage, Auswahlkarte, aktive Lichtszene, Lichtauswahl und Jalousien-Tasten.
- Leistungszeilen bei 768, 1024 und 1440 Pixeln ohne horizontalen Überlauf. Logo und Leistungsübersicht behalten ihre Anordnung.
- Dunkler Smart-Home-Einstieg, ausgewählte Gruppentaste, reduzierte Bewegung und echte Touch-Navigation im emulierten iPhone geprüft.
