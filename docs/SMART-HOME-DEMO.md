# Jalousien-Demo und Startseiten-Lichtspiel

Stand: 30.10.2026 · lokal umgesetzt und geprüft

Gabriel hat die Kombination aus ruhiger Hintergrundbewegung und einer zweiten Smart-Home-Simulation freigegeben: Unter der Lichtdemo drei Jalousien zeigen, rechts eine Handyansicht, jede Jalousie einzeln und alle gemeinsam bedienen.

## Jalousien

- Auf `/smart-home/` direkt unter der bestehenden Lichtsimulation, im gleichen hellen Hintergrundbereich. Neuer Sprunglink „Jalousien ausprobieren“.
- Drei illustrierte Räume: Wohnzimmer, Küche und Schlafzimmer. Jeder hat eine eigene Jalousie und eine andere Einrichtung.
- Die Beispiel-App bietet je Raum „Öffnen“, „Halb“ und „Schließen“. „Alle öffnen“ und „Alle schließen“ gleichen alle drei Räume an.
- Die Lamellen fahren mit einem ruhigen Übergang. Der sichtbare Tageslichteinfall und die Wandhelligkeit ändern sich passend zur gewählten Stellung.
- Beschriftungen und ausgewählte Tasten folgen dem aktuellen Zustand. Bei gemischten Stellungen sind beide Gruppentasten nicht ausgewählt; eine Einzelbedienung erhält die anderen beiden Räume.
- Auf Desktop stehen Räume und Handyansicht nebeneinander. Bis 850 Pixel Breite stehen sie untereinander; die kompakte Fensteransicht bleibt unter der Kopfzeile sichtbar, während die App bedient wird.
- Tastaturbedienbare native Buttons, benannte Raumgruppen, sichtbarer Auswahlzustand und eine gemeinsame vorgelesene Zustandsmeldung. Die Fenster haben passende Bildbeschreibungen.
- Bei reduzierter Bewegung wechseln die Zustände sofort. Ohne JavaScript sind die drei geöffneten Fenster und ein erklärender Hinweis sichtbar; die inaktive Beispiel-App wird ausgeblendet.
- Reine lokale Illustration, keine echte App oder Geräteverbindung, kein Versand und keine Speicherung. Nach Neuladen ist alles geöffnet. Die Lichtsimulation bleibt unabhängig.

## Lichtspiel

- Nur im Hintergrund des Einstiegs auf der Startseite: zwei weiche Flächen in warmen und salbeigrünen Tönen. Auf Gabriels Wunsch deutlicher sichtbar, mit stärkerem Farbverlauf und größerem Bewegungsweg.
- Nach weiterem Feedback wurde nur die Lichtstärke noch leicht angehoben; Tempo und Bewegungsweg bleiben erhalten.
- Ruhige CSS-Bewegung über 16 beziehungsweise 22 Sekunden je Richtung, mit leichter Drehung und Größenänderung. Der Bewegungsweg passt sich der Bildschirmbreite an. Texte und Bild bewegen sich nicht.
- „Lichtspiel pausieren“ hält die Bewegung an derselben Stelle an; „Lichtspiel fortsetzen“ lässt sie weiterlaufen.
- Automatische Pause außerhalb des sichtbaren Bereichs und bei verborgenem Browser-Tab.
- Bei reduzierter Bewegung und ohne JavaScript bleibt der Hintergrund statisch. Die dafür nicht benötigte Pausentaste ist dann ausgeblendet.
- Keine neuen Rasterbilder, Videos, externen Dienste oder Bibliotheken.

## Einstieg im Code

Die drei Infopunkte unter dem Startseiteneinstieg sind nach Gabriels Korrektur wieder statisch. Der gemeinsame Hover-Effekt gilt für klickbare Elemente auf der gesamten Website, einschließlich Licht- und Jalousien-Tasten. Umsetzung und Prüfung stehen in [INTERAKTIONEN.md](INTERAKTIONEN.md).

- `src/shading.mjs`: Räume, Illustration und Beispiel-App.
- `src/smart-home.mjs`: Einbau unter der Lichtsimulation und Sprunglink.
- `src/pages.mjs`: Startseiten-Hintergrund und Pausentaste.
- `public/assets/smart-demos.js`: Jalousien-Zustände und Lichtspiel-Pause.
- `public/assets/smart-demos.css`: Darstellung, Bewegung und mobile Anpassung; nur auf Startseite und `/smart-home/` geladen.
- `public/assets/app.js`: Initialisierung.
- `tests/smart-demos.spec.mjs`: vier neue Browserprüfungen.

## Prüfung

- 18 Seiten erstellt, aktuell 527 interne Verweise geprüft; alle 15 Playwright-Prüfungen erfolgreich.
- Einzelbedienung, Halbposition, Gruppentasten, Rückmeldungen, Tastaturbedienung, Neuladen und ausbleibende Datenanfragen auf Desktop und Mobil geprüft.
- Beim Bedienen auf Mobil bleibt das zugehörige Fenster im sichtbaren Bereich.
- Lichtspiel pausieren/fortsetzen, Pause außerhalb des sichtbaren Bereichs sowie reduzierte Bewegung geprüft.
- Statische Darstellung und erklärender Hinweis ohne JavaScript geprüft.
- Smart Home bei 320, 375, 768, 850, 1024 und 1440 Pixeln ohne horizontales Überlaufen. Desktop, Mobil und die Startseitenwirkung visuell geprüft.

[Jalousien Desktop](vorschau/jalousien-desktop.png) · [Jalousien Mobil](vorschau/jalousien-mobil.png) · [Lichtspiel Startseite](vorschau/startseite-lichtspiel-desktop.png)
