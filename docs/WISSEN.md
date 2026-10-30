# Wissen und Fragenkatalog

Stand: 30.10.2026 · lokal umgesetzt

## Aufbau

36 redaktionelle Fragen in sieben Themen: Planung (8), Smart Home (8), Projektanfrage (3), Licht (6), Beschattung (4), Solar & Energie (4) und Laden (3). Keine behaupteten Kundenstatistiken oder angeblichen „häufigsten“ Suchanfragen.

Oben stehen Suche, Beispielbegriffe und eine kurze Einführung. Der Katalog zeigt zunächst acht Fragen. „Alle 36 Fragen anzeigen“ öffnet den vollständigen Katalog; „Weniger Fragen anzeigen“ reduziert ihn wieder. Ein Themenfilter zeigt alle Fragen des gewählten Themas. Jede geöffnete Antwort bietet zwei weitere Fragen desselben Themenbereichs an. Verlinkte Anschlussfragen und die Erklärungen des Technik-ABCs werden direkt eingeblendet, geöffnet und fokussiert; Filter und Suche werden dabei zurückgesetzt.

Darunter: vier Begriffskarten (Szene, Kelvin, Lastmanagement, Ersatzstrom), zwei Einstiege zu Inspiration und Planer sowie eine kurze redaktionelle Einordnung. Helle Karten, Salbeigrün und ein weicher Hintergrund-Lichtschein machen die Seite voller. Der Schein blendet sich einmal in drei Sekunden ein; keine dauerhafte Animation. Bei reduzierter Bewegung bleibt er statisch.

## Suche und Zugänglichkeit

Die Suche durchsucht alle Fragen, Antworten, Kategorien und zusätzliche verwandte Begriffe, unabhängig vom anfänglichen Ausklappen. Mehrere Wörter müssen vorkommen, die Wortreihenfolge ist egal. Groß-/Kleinschreibung, Umlaute und übliche Umschreibungen werden vereinheitlicht. Keine KI, keine unscharfe Tippfehlerkorrektur; die Begriffe werden lokal abgeglichen. Verwandte Links und Quellen zählen nicht zum Suchtext.

Die Suche wird mit dem Thema kombiniert; bei keinem Treffer gibt es eine Erklärung und eine Rücksetztaste. Trefferzahl wird als Status ausgegeben, Themenfilter haben sichtbare und zugängliche Auswahlzustände. Native Details/Summary-Elemente erhalten die Tastaturbedienung. Ohne JavaScript bleiben alle 36 Fragen direkt zugänglich; interaktive Filter und Beispielbegriffe bleiben ausgeblendet. Keine Eingaben werden versendet oder gespeichert. Fragmentlinks enthalten nur feste Fragekennungen.

## Dateien

- `src/content.mjs`: bisherige sechs Fragen, ergänzt um die neuen Fragen.
- `src/knowledge-data.mjs`: 30 neue Fragen, Suchbegriffe und externe Vertiefungen.
- `src/knowledge.mjs`: vollständiger Seitenaufbau und Anschlussfragen.
- `public/assets/knowledge.js` und `knowledge.css`: lokale Suche, Filter, Darstellung.
- `src/components.mjs`: CSS und Modul nur auf `/wissen/` eingebunden. Die alte Suchfunktion wurde aus `app.js` entfernt.
- `tests/knowledge.spec.mjs`: Suche über den gesamten Katalog, Wortreihenfolge, Filter, Ausklappen, Anschlussfragen, Direktlinks, Breiten und Nutzung ohne JavaScript. Vorhandene Suchprüfung auf acht Einstiegsfragen angepasst; No-JS-Prüfung öffnet gezielt die Frage statt gleichlautender Anschlusslinks.

## Fachliche Quellen

Geprüft am 30.10.2026. Orientierungstexte sind eigenständig formuliert. Keine Installationsanleitungen, pauschalen Kompatibilitätszusagen oder Kostenversprechen. Modellabhängige Möglichkeiten bleiben entsprechend eingeordnet.

- [KNX: Technik und Anwendungen](https://www.knx.org/knx-technology): Vernetzung, Standards, verschiedene Übertragungswege.
- [KNX: Betrieb ohne WLAN](https://knx.org/news/can-smart-homes-work-without-wi-fi-knx-shows-how): Unterschied zwischen lokaler Funktion und Internetabhängigkeit.
- [licht.de: Licht für Wohnräume](https://www.licht.de/fileadmin/Publikationen_Downloads/licht-wissen/1912_lw14_Licht_fuer_Wohnraeume_WEB.pdf): Lichtbereiche, Lichtfarbe, Arbeitsflächen und LED-Dimmung.
- [SMA: Solaranlage bei Stromausfall](https://www.sma.de/solaranlage-bei-stromausfall): Not-/Ersatzstrom erfordert passende Ausstattung, kein Automatismus bei PV und Speicher.
- [Bundesnetzagentur: Ladeeinrichtungen](https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Netzanschluss/FAQLadeeinrichtungen/Ladeeinrichtung_table.html): Meldung beim Netzbetreiber und leistungsabhängige Zustimmung. Bewusst keine pauschale Leistungsgrenze oder allgemeine Anschlusszusage.

Die passenden Vertiefungen stehen direkt an den jeweiligen Antworten und öffnen in einem weiteren Tab. Die Seite lädt selbst keine externen Inhalte.
