# Smart-Home-Demos und Startseiten-Lichtspiel

Stand: 30.10.2026 · lokal umgesetzt und geprüft

Gabriel hat die Kombination aus ruhiger Hintergrundbewegung und einer zweiten Smart-Home-Simulation freigegeben: Unter der Lichtdemo drei Jalousien zeigen, rechts eine Handyansicht, jede Jalousie einzeln und alle gemeinsam bedienen.

## Taster, App und Automatik

Gabriels Ergänzung vom 30.10.2026: Eine Tasterbedienung mit Dimmen ergänzen oder die drei Wege Taster/App/Automatik unter „Du bestimmst. Die Technik unterstützt.“ ausprobieren lassen. Umgesetzt wurde eine gemeinsame, eigenständige Raumdemo direkt unter den bisherigen Bedienungserklärungen im Abschnitt `#bedienung`.

- **Ein Raum, drei Wege:** Pendelleuchte, Sofa und Fenster mit Jalousie als eigene SVG-Illustration. Lichtwert, Jalousiestellung, gewählte Bedienungsart und Rückmeldung folgen demselben Zustand. Wechsel der Bedienungsart erhält Licht und Jalousie.
- **Taster:** Vier sichtbare Tasten für Licht ein/aus und Jalousie öffnen/schließen. Kurz drücken schaltet; mindestens 450 ms halten dimmt heller/dunkler in Zehn-Prozent-Schritten. Loslassen stoppt das Dimmen und löst keinen zusätzlichen kurzen Tastendruck aus. Als Alternative zum Halten gibt es zwei direkt anklickbare Dimm-Tasten; Tastaturbedienung ist damit ebenfalls möglich.
- **Beispiel-App:** Helligkeitsregler von 0 bis 100 Prozent in Fünfer-Schritten sowie Licht und Jalousie schalten. Das Einschalten stellt den letzten Lichtwert wieder her. Der Regler folgt auch Werten, die vorher am Taster eingestellt wurden.
- **Automatik:** Zwei bearbeitbare Uhrzeiten, anfangs 08:00 Uhr „Licht ausschalten“ und 10:00 Uhr „Jalousie schließen“. Die Vorschau startet ausdrücklich auf Knopfdruck mit 65 Prozent Licht und offener Jalousie. Eine Beispieluhr springt jeweils zur Minute vor dem nächsten Ereignis und anschließend zum Ereignis. Zeitabstände werden übersprungen; das ist kein Echtzeit-Zeitplan. Ereignisse werden nach Uhrzeit sortiert, gleichzeitige Aktionen gemeinsam ausgeführt und in einer Liste angezeigt. Beim Lauf sind die Uhrzeitfelder vorübergehend gesperrt.
- **Selbst eingreifen:** Stopptaste, Wechsel zu Taster/App oder Zurücksetzen beendet die laufende Vorschau. Verbergen des Tabs oder Verlassen des sichtbaren Demobereichs stoppt Timer. Reset stellt die Anfangswerte und Standardzeiten wieder her; die gewählte Bedienungsart bleibt erhalten. Neuladen startet wieder beim Taster.
- **Mobil und zugänglich:** Die kompakte Raumansicht bleibt während der Bedienung sichtbar. Native Buttons/Range/Time-Eingaben, Tabs mit Links/Rechts/Pos1/Ende, passende Beschriftungen und eine vorgelesene Statusmeldung. Bewegungsreduktion schaltet die Raumübergänge ab; die ausdrücklich gestartete Beispieluhr bleibt bedienbar. Ohne JavaScript bleiben Illustration und Erklärung sichtbar, inaktive Bedienelemente verborgen.
- Reine lokale Simulation, ohne Datenversand, Speicherung oder Verbindung zu Geräten. Die bereits vorhandenen drei Lichtszenen und die Jalousien-App bleiben unabhängig.

### Fachliche Einordnung

Eine mögliche Belegung als KNX-Taster, kein bestimmtes Produkt oder Kompatibilitätsversprechen. Zum Dimmen müssen Taster, Aktor und Beleuchtung zusammenpassen. Als Orientierung am 30.10.2026 geprüfte Primärquellen: [KNX-Gerätebeispiel mit Schalten, Dimmen und Jalousien](https://knx.org/devices/3-gang-md-push-button) und [KNX-Trainingsbeispiel mit Tastern, dimmbaren Leuchten und Dimmaktor](https://support.knx.org/hc/en-us/articles/4502581459090-Dimming-advanced). Keine Installations- oder Verdrahtungsanleitung.

### Umsetzung und Prüfung

`src/control-demo.mjs`, `public/assets/control-demo.js` und `.css`; Einbau in `src/smart-home.mjs`, Skript/CSS nur auf `/smart-home/` im gemeinsamen Seitenrahmen eingebunden.

18 Seiten und 564 interne Verweise geprüft. Alle 27 Playwright-Prüfungen erfolgreich, davon vier neue Prüfungen für gemeinsame Zustände, Taster-Halten, App-Regler und Tastatur, Mobil, Zeitabläufe und Änderungen, gleichzeitige Uhrzeiten, Übersteuerung und Darstellung ohne JavaScript. Keine Datenanfragen während der Bedienung. Alle drei Bedienungsarten bei 320, 375, 768, 850, 1024 und 1440 Pixeln ohne Seitenüberlauf kontrolliert.

[Taster Desktop](vorschau/bedienung-taster-desktop.png) · [Mobil](vorschau/bedienung-taster-mobil.png) · [App Desktop](vorschau/bedienung-app-desktop.png) · [Mobil](vorschau/bedienung-app-mobil.png) · [Automatik Desktop](vorschau/bedienung-automatik-desktop.png) · [Mobil](vorschau/bedienung-automatik-mobil.png)

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
