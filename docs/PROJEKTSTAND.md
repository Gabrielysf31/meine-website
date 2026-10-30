# Projektstand

Stand: 30.10.2026 · Startseitenpunkte mit Hover-Effekt

## Aktuelle Startseitenanpassung

- Gabriel hat das neue Startbild mit „JAAAAA 100%“ ausdrücklich bestätigt. Dieses Motiv beibehalten.
- Die drei Punkte direkt unter dem Einstieg („Für dein Zuhause gedacht“, „Verständlich von Anfang an“, „Mit Blick nach vorn“) treten beim Darüberfahren mit der Maus hervor: leicht angehoben, um acht Prozent vergrößert, heller Hintergrund und weicher Schatten. Beim Wechsel geht der vorherige Punkt zurück.
- Reiner CSS-Effekt mit ruhigem Übergang. Der Hover-Bereich bleibt an seiner Position, damit das Vergrößern keine flackernden Wechsel auslöst. Auf Touch-Geräten bleibt die normale Darstellung; bei reduzierter Bewegung entfällt das Anheben und Vergrößern.
- Build und 509 interne Verweise sowie mobile Navigation und Layout erfolgreich geprüft. Alle drei Hover-Zustände, Rücksetzen beim Verlassen, reduzierte Bewegung und Touch-Darstellung im Browser kontrolliert.
- Aktueller Arbeitsbranch: `style/startseite-punkte-hover`, aufbauend auf `979b305`. Nächster Schritt: den Effekt mit Gabriel ansehen.

## Aktuelles Startbild

- Gabriel hat ausdrücklich ein neues Bild beauftragt. Das Motiv mit zentraler Technikwand wurde ersetzt.
- Neues Motiv mit eingebautem Imagegen: großzügiger Blick auf einen offenen Wohn- und Essbereich. Steckdosen und Wandtaster sitzen an der Seitenwand; Jalousien, eingeschaltete Leuchten und offene Küche mit Backofen sind in den Raum eingebunden.
- Datei: `public/assets/wohnraum-elektrotechnik-weit.jpg`, 1448 × 1086 Pixel. Vollständiges Foto im Seitenverhältnis 4:3 auf Desktop und Mobil. Preload, Alternativtext und Bildnachweise angepasst; Kennzeichnung als KI-Visualisierung bleibt erhalten. Originalpfad und vollständiger Prompt in [STARTBILD-WOHNRAUM.md](STARTBILD-WOHNRAUM.md).
- Build und 509 interne Verweise erfolgreich. Alle Seiten erreichbar sowie mobiles Layout und Navigation erfolgreich geprüft. Neues Bild und passender Preload auf Desktop und Mobil kontrolliert; Vorschauansichten aktualisiert.
- Mit `979b305` auf `feat/startbild-wohnraum-weit` gesichert, aufbauend auf `46427bb`. Von Gabriel anschließend ausdrücklich bestätigt.

## Vorherige Bildanpassung

- Gabriel gefiel die nahe Darstellung nicht; sein Wunsch war, etwas herauszuzoomen.
- Das vorhandene Foto wird jetzt vollständig im Seitenverhältnis 4:3 und mittig angezeigt. Der hohe Bildrahmen mit seitlichem Beschnitt entfällt. Mehr Wohnraum ist sichtbar, die Technik wirkt kleiner. Die Bilddatei wurde nicht verändert und kein neues Motiv generiert.
- Umsetzung nur in `public/assets/smart-demos.css`, Einzelheiten in [STARTBILD.md](STARTBILD.md). Build und 509 interne Verweise sowie mobile Navigation und Layout erfolgreich geprüft. Vollständiges Bildverhältnis auf Desktop und Mobil kontrolliert; Vorschauansichten aktualisiert.
- Mit `46427bb` auf `style/startbild-weiterer-ausschnitt` gesichert, aufbauend auf `92cd957`.

## Aktuelle Überarbeitung

- Gabriels Wunsch: Lichtstärke nur noch minimal anheben und das allgemeine Wohnraumfoto durch ein modernes Motiv mit erkennbarer Elektrotechnik ersetzen.
- Neues Startbild mit dem eingebauten Imagegen-Werkzeug erstellt: Schuko-Doppelsteckdose, vierteiliger Wandtaster und Bedienpanel stehen gut sichtbar im Mittelpunkt. Eingeschaltete Leuchten sowie Küche mit Backofen ergänzen die Wohnatmosphäre. Datei: `public/assets/zuhause-elektrotechnik.jpg`; Originalpfad und vollständiger Prompt in [STARTBILD.md](STARTBILD.md).
- Bild, Alternativtext, Preload und Bildnachweise angepasst; als KI-Visualisierung gekennzeichnet. Der bisherige Textkasten über dem Bild wurde entfernt, damit er keine Steckdosen verdeckt. Das alte Foto bleibt als ungenutzte Datei erhalten.
- Nur die Intensität der beiden Hintergrund-Lichtflächen noch leicht angehoben. Tempo, Bewegungsweg und Pausenfunktionen bleiben erhalten.
- Build und 509 interne Verweise erfolgreich. Vier passende Browserprüfungen bestanden: alle Seiten erreichbar, mobiles Layout und Navigation, Lichtspiel/Pause/reduzierte Bewegung sowie Darstellung ohne JavaScript. Desktop und Mobil visuell geprüft; alle drei elektrischen Bedienelemente bleiben im Bildausschnitt sichtbar.
- Mit `92cd957` auf `feat/startbild-elektrotechnik` gesichert, aufbauend auf `2b06c13`.

## Aktuelle Feinabstimmung

- Gabriels Wunsch: etwas mehr sichtbare Bewegung im Hintergrund. Das Startseiten-Lichtspiel hat jetzt deutlichere warme und salbeigrüne Lichtflächen, einen größeren Bewegungsweg sowie eine leichte Drehung und Größenänderung. Die Dauer je Richtung beträgt 16 und 22 Sekunden. Die Bewegung bleibt auf den Einstieg begrenzt.
- Pausentaste, automatische Pause außerhalb des sichtbaren Bereichs und bei verborgenem Tab sowie reduzierte Bewegung bleiben erhalten.
- Build und 509 interne Verweise sowie die beiden Lichtspiel-Browserprüfungen erfolgreich. Laufende Bewegung auf Desktop geprüft, Desktop und Mobil visuell kontrolliert; bei 320, 375 und 768 Pixeln kein horizontales Überlaufen. Startseiten-Vorschau aktualisiert.
- Mit `2b06c13` auf `style/lichtspiel-sichtbarer` gesichert, aufbauend auf `3cba83c`.

## Jalousien-Demo und erstes Lichtspiel

- Gabriels freigegebene Idee: unter der Lichtdemo drei Jalousien mit einer Handyansicht einzeln und gemeinsam bedienen; zusätzlich ein dezentes bewegtes Lichtspiel auf der Startseite.
- Umgesetzt: Wohnzimmer, Küche und Schlafzimmer mit je „Öffnen“, „Halb“ und „Schließen“ sowie zwei Gruppentasten. Lamellen, Tageslichteinfall, Raumhelligkeit und Beschriftungen wechseln zusammen. Die mobile Fensteransicht bleibt beim Bedienen sichtbar. Keine Geräteanbindung oder Speicherung.
- Startseite: zwei weiche Lichtflächen im Hintergrund des Einstiegs, langsam bewegt und pausierbar. Außerhalb des sichtbaren Bereichs und bei verborgenem Tab pausiert die Animation. Bei reduzierter Bewegung oder ohne JavaScript bleibt sie statisch.
- Aufbau und Verhalten: [SMART-HOME-DEMO.md](SMART-HOME-DEMO.md). Neue Dateien: `src/shading.mjs`, `public/assets/smart-demos.js`, `public/assets/smart-demos.css` und `tests/smart-demos.spec.mjs`.
- Build: 18 Seiten, 509 interne Verweise. Alle 15 Playwright-Prüfungen erfolgreich. Jalousien von 320 bis 1440 Pixeln ohne horizontales Überlaufen, Desktop und Mobil visuell geprüft. Neue Ansichten in `docs/vorschau/jalousien-*.png` und `startseite-lichtspiel-desktop.png`.
- Mit `3cba83c` auf `feat/jalousien-demo-lichtspiel` gesichert, aufbauend auf den ausgearbeiteten Leistungsseiten (`75dc264`).

## Leistungsseiten (vorherige Überarbeitung)

- Gabriels Auftrag: Auf allen sechs Leistungsseiten den vollständigen Namen hinter „Leistungen /“ anzeigen und die bisherigen drei Unterpunkte zu ausführlichen Abschnitten mit Beispielen und passenden Darstellungen ausbauen.
- Umgesetzt: verlinkter Navigationspfad, drei Sprunglinks je Seite, insgesamt 18 Themenabschnitte mit Erklärungen, konkreten Planungspunkten und Alltagsbeispielen sowie 18 eingebettete Vektorskizzen. Dazu gehören ein markierter Grundriss und eine beschriftete Verteilung. Die vorhandenen Technikbilder bleiben erhalten.
- Aufbau und Inhalte: [LEISTUNGEN.md](LEISTUNGEN.md). Einstieg in `src/service-page.mjs`, Texte in `src/service-details.mjs`, Skizzen in `src/service-illustrations.mjs`, Gestaltung in `public/assets/services.css`.
- Build: 18 Seiten, 507 interne Verweise. Alle elf Playwright-Prüfungen erfolgreich, einschließlich Orientierung und Sprungnavigation durch alle sechs Leistungsseiten ohne JavaScript. Alle Seiten bei 375 Pixeln ohne horizontales Überlaufen; Leistungsseiten und sämtliche Skizzen visuell geprüft. Neue Desktop- und Mobilansichten der Neubauseite liegen unter `docs/vorschau/leistungen-neubau-*.png`.
- Mit `75dc264` auf `feat/leistungen-ausfuehrlich` gesichert, aufbauend auf der Dämmerungskorrektur `9108999`.

## Vorherige Korrektur

- Gabriels Rückmeldung: Nur „Ankommen“ soll draußen hell sein; „Feierabend“ und „Unterwegs“ sollen Abenddämmerung zeigen.
- Beide Abendszenen zeigen jetzt einen blaugrauen Himmel mit rosigem Horizont, dunkler Landschaft und ausgeblendeter Sonne. „Ankommen“ behält Tageslicht und Sonne. Die manuelle Lichtwahl erhält die gewählte Tageszeit.
- Build und alle 465 internen Verweise sowie die erweiterte Smart-Home-Browserprüfung erfolgreich. Drei Szenen auf Desktop und die Abendansicht auf Mobil visuell geprüft; bei 375 Pixeln kein horizontales Überlaufen.
- Korrektur auf `fix/smart-home-abenddaemmerung`; bisheriger Abschlussstand bleibt auf `feat/smart-home-ruhige-lichtstimmungen` erhalten.

## Letzte Sitzung und abschließende Entscheidungen

- Inspirationsseite mit vier eigenen Bildmotiven, fünf Beraterfragen und bearbeitbarer Planerübergabe umgesetzt und geprüft.
- Smart-Home-Seite um zwei eigene Bilder, Funktionsübersicht, Bedienung, Nachrüstung/Neubau, KNX-Einordnung und fünf aufklappbare Antworten erweitert. Am Ende führt ein Button zur ausdrücklich als Vorschau gekennzeichneten Assistentenfunktion.
- Gabriels interaktive Lichtidee umgesetzt: illustrierter Wohnraum mit Pendel- und Stehleuchte. Lampen, Lichtkegel, Raumtönung und Lichtbeschreibung wechseln gemeinsam.
- Endgültige Auswahl nach Gabriels Feedback: **Warm, Gedimmt und Aus**. Gelb, Grün und Rot wurden zwischenzeitlich ausprobiert und wieder entfernt, weil die bunten Farben ihm zu unseriös wirken. Diese gestalterische Entscheidung beim Wiedereinstieg beibehalten.
- Ankommen: heller Raum mit Tageslicht, blauem Himmel und Sonne, passend zu „Tageslicht nutzen“; Licht warm. Feierabend: Abenddämmerung ohne Sonne, warm und gedimmt. Unterwegs: dieselbe Abenddämmerung mit ausgeschalteten Lampen.
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
- Alle 13 KI-Motive sind Visualisierungen; sie weisen weder Kundenprojekte noch konkrete Produktkompatibilität nach.

## Technischer Einstieg

Statisches HTML aus JavaScript-Vorlagen, CSS und ergänzende Browsermodule. Node.js dient für Build und Vorschau; Playwright ist eine Entwicklungsabhängigkeit.

- `src/smart-home.mjs`: erweiterte Smart-Home-Seite und Assistentenhinweis.
- `src/room.mjs`: interaktive Raumillustration und reduzierte Lichtauswahl; Szenensteuerung in `public/assets/app.js`, Gestaltung in `public/assets/styles.css`.
- `src/shading.mjs` und `public/assets/smart-demos.js` / `smart-demos.css`: Jalousien-Demo und Startseiten-Lichtspiel, beschrieben in [SMART-HOME-DEMO.md](SMART-HOME-DEMO.md).
- `src/inspiration.mjs`: Geschichten, fünf Fragen und Ergebnisrahmen.
- `src/planner.mjs`: gemeinsamer Planerabschnitt für Inspiration und `/anfrage/`.
- `public/assets/project-draft.js`: Fragen, Themenzuordnung, feste Ergebnisregeln, Entwurfsformat Version 1 und Validierung. Wünsche, mögliche Ansätze und offene Fragen bleiben getrennt.
- `public/assets/advisor.js`: Berater, Ergebnisse, Kopie und kontrollierte Übernahme.
- `public/assets/planner.js`: Planer, Bearbeitung, Zusammenfassung und Export.
- `public/assets/app.js`: übrige Websitefunktionen und Zurücksetzen beim Verlassen beziehungsweise Wiederherstellen einer Seite.
- `src/content.mjs`: Leistungsinhalte und Bilddefinitionen.
- `src/service-page.mjs`, `src/service-details.mjs`, `src/service-illustrations.mjs`: ausführliche Leistungsseiten und Vektorskizzen; Gestaltung in `public/assets/services.css`.

Fragen und Verhalten stehen in [INSPIRATIONSBERATER.md](INSPIRATIONSBERATER.md). Die vier neuen Bilder mit Dateipfaden und vollständigen Prompts sind in [INSPIRATION-BILDPROMPTS.md](INSPIRATION-BILDPROMPTS.md) dokumentiert. Die Originale bleiben im Imagegen-Ausgabeordner; die Website verwendet lokale JPEG-Dateien.

## Geprüft

- Build und Verweise: aktuell 18 Seiten, 509 interne Verweise.
- Alle 15 Playwright-Prüfungen bestanden: 14 Browserabläufe einschließlich Leistungsnavigation, Jalousien und Lichtspiel sowie eine Prüfung des gemeinsamen Entwurfsformats. Die Prüfung der Smart-Home-Szenen kontrolliert auch Tageslicht, Abenddämmerung und die ausgeblendete Sonne in beiden Abendszenen.
- Berater: Pflichtantworten, maximal drei Wünsche, ausschließliche Wahl „Noch offen“, Rücknavigation und passende Ergebnisanzahl.
- Übernahme: richtige Themen, bearbeitbare Angaben, alte und neue Entwürfe vergleichen, Behalten und Ersetzen sowie Erhalt des Planers beim Neustart des Beraters.
- Kein automatisches Vorauswählen von Photovoltaik allein aufgrund der gemeinsamen Antwort zu Verbrauch und Solarstrom. Bei offenen Wünschen bleiben Themen offen, bis der Besucher selbst auswählt.
- Bestehender Planer mit Validierung, sicherer Freitextdarstellung, Rücknavigation und Textdateiexport. Beraterkopie mit Fehlerfall und manueller Alternative.
- Keine Datenanfragen während der geprüften Eingaben, kein Browser-Speicher und keine Angaben in URL-Parametern. Rücksetzen nach Neuladen und nach Verlassen/Rückkehr geprüft.
- Alle Seiten bei 375 Pixeln Breite ohne horizontales Überlaufen. Geschichten und erklärender Hinweis bei deaktiviertem JavaScript erreichbar.
- Inspiration, Ergebnis und geöffneter Planer auf Desktop (1440 Pixel) und Mobil (375 Pixel) visuell geprüft. Aktuelle Ansichten liegen unter `docs/vorschau/`; auch Smart Home und die Lichtsimulation wurden auf Desktop und Mobil aufgenommen und geprüft.

## Nächster gemeinsamer Schritt

Beim Wiedereinstieg den Hover-Effekt der drei Startseitenpunkte mit Gabriel ansehen. Das neue Startbild mit großzügigem Raumblick ist ausdrücklich freigegeben; die Lichtstärke ist bereits leicht erhöht. Auch Jalousien-Demo und die sechs erweiterten Leistungsseiten können weiter verfeinert werden. Die reduzierte Lichtauswahl und die Abenddämmerung sind umgesetzt. Bei weiterer Smart-Home-Arbeit an `src/smart-home.mjs`, `src/room.mjs` und `src/shading.mjs` anknüpfen. Inspiration und Berater können bei Bedarf weiter verfeinert werden.

Gabriels ergänzende Idee ist festgehalten: Wiederkehrende Fragen aus dem späteren echten Chatbot sollen als „Top-Fragen“ mit kurzen Antworten beim Berater ergänzt werden. Fehlt für die Beratung regelmäßig eine Angabe, kann auch der Fragenablauf gezielt erweitert werden. Es werden dafür jetzt keine häufigen Kundenfragen behauptet. Die spätere Auswertung und Übernahme sind noch nicht implementiert.

Danach bleiben Firmenname, Einsatzgebiet, tatsächlicher Leistungsumfang, echte Profilinformationen und Kontaktangaben offen. Vor einer KI-Anbindung braucht es eine geprüfte Wissensgrundlage und eine gesonderte serverseitige Umsetzung. Der gemeinsame Projektentwurf ist dafür vorbereitet; ein konkreter KI-Anbieter ist noch nicht gewählt.

## Git und Vorschau

Privates Repository: https://github.com/Gabrielysf31/meine-website

Die erste Website-Umsetzung liegt auf `feat/erster-website-entwurf` bis Commit `b73bed2`. Die konkrete Konzeptausarbeitung wurde auf `docs/inspirationsberater-konzept` mit Commit `82b6863` gesichert. Inspiration und Berater wurden mit Commit `a33994a` auf `feat/inspiration-berater` gesichert. Darauf bauen Smart Home (`8ddc091`), Lichtsimulation (`a7aeeec`), Tageslicht (`e6a6a90`), die zwischenzeitliche rote Lichtfarbe (`630896b`) und die endgültige reduzierte Auswahl (`e4ad57b`) auf. Der Abschluss vom 29.10. liegt mit Commit `066b7fb` auf `feat/smart-home-ruhige-lichtstimmungen`. Die Abenddämmerung wurde mit `9108999` auf `fix/smart-home-abenddaemmerung` gesichert. Die ausgearbeiteten Leistungsseiten liegen mit `75dc264` auf `feat/leistungen-ausfuehrlich`. Jalousien-Demo und erstes Lichtspiel sind mit `3cba83c` auf `feat/jalousien-demo-lichtspiel` gesichert. Das verstärkte Lichtspiel ist mit `2b06c13` auf `style/lichtspiel-sichtbarer` gesichert. Das neue Startbild und die nochmals leicht angehobene Lichtstärke sind mit `92cd957` auf `feat/startbild-elektrotechnik` gesichert. Der weitere Bildausschnitt ist mit `46427bb` auf `style/startbild-weiterer-ausschnitt` gesichert. Das neue großzügige Raummotiv ist mit `979b305` auf `feat/startbild-wohnraum-weit` gesichert. Der aktuelle, vollständige Arbeitsstand mit Hover-Effekt für die drei Startseitenpunkte liegt auf `style/startseite-punkte-hover`. `main` enthält weiterhin die ursprüngliche Repository-Initialisierung; es wurde nichts in `main` integriert oder als Website veröffentlicht.

Die von Gabriel geöffnete lokale Vorschau unter `http://localhost:4173` wurde wiederverwendet und während der Umsetzung aktualisiert. Falls sie nicht läuft: `npm run dev`. Nach weiteren Änderungen `npm run build` ausführen und den Browser neu laden.

## Bisherige fachliche Orientierung

- [KNX Planning Guide: Anwendungen](https://planning.knx.org/submit/step7) für Beleuchtung und Beschattung.
- [KNX: Home Shading](https://www.knx.org/news/home-shading-benefits-jalousie) für Außenjalousien und Gebäudesteuerung.
- [VDE: Prüfung von Photovoltaik- und Speicheranlagen](https://www.vde-verlag.de/p/fachwissen/pruefung-von-photovoltaik-und-speicheranlagen/316493) zur Einordnung von Prüfung und Dokumentation.

Der Solarbereich beschreibt Anschluss, Inbetriebnahme, Prüfung sowie Übergabe und Abnahmevorbereitung als vorgesehene Themen. Eine pauschale Zusage zur Abnahme beliebiger Fremdanlagen wird daraus nicht abgeleitet.
