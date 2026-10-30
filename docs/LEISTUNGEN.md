# Ausführliche Leistungsseiten

Stand: 30.10.2026 · lokal umgesetzt

Gabriels Auftrag: Auf jeder Leistungsseite oben links den vollständigen Namen hinter „Leistungen /“ anzeigen. Die bisherigen drei kurzen Unterpunkte als eigene Überschriften übernehmen und mit Erklärungen, Beispielen und passenden Darstellungen ausführen. Ein Grundriss soll geplante Anschlüsse zeigen, eine Darstellung der Verteilung das Thema Leitungen und Verteilung erklären. Alle sechs Leistungsbereiche sind ausgearbeitet.

## Aufbau

- Verlinkter Navigationspfad zur Leistungsübersicht mit ausgeschriebenem aktuellen Leistungsnamen.
- Bestehender Einstieg und vorhandenes Technikmotiv.
- Drei Sprunglinks zu den Themen der jeweiligen Seite.
- Pro Thema: Überschrift, kurze Einführung, ausführliche Erklärung, drei konkrete Planungspunkte, passende Vektorskizze und ein Beispiel aus dem Alltag.
- Auf Desktop wechseln Text und Skizze die Seiten. Auf Mobil stehen sie in Lesereihenfolge untereinander.
- Vorbereitungshinweis und Links zu den anderen Leistungsbereichen, ohne großen zusätzlichen Projektaufruf.
- Alle Inhalte und Sprunglinks funktionieren ohne JavaScript. Die eigenständige Smart-Home-Seite mit interaktiven Lichtstimmungen bleibt erhalten und ist von der zugehörigen Leistungsseite aus erreichbar.

## Inhalte und Darstellungen

| Seite | Themen und passende Skizzen |
| --- | --- |
| Neubau & Elektroinstallation | Elektroplanung nach Grundriss: Räume mit markierten Steckdosen, Lichtauslässen, Taster und Netzwerk. Leitungen & Verteilung: beschrifteter Verteilerschrank mit Reserve. Für später vorbereiten: Beschattung, Solarstrom, Wallbox und Vernetzung. |
| Renovieren & modernisieren | Anschlüsse mitdenken: Raum- und Küchenplanung. Raum für Veränderungen: Modernisierung in Etappen. Bestand gemeinsam ansehen: vorhandene Anlage und offene Prüfpunkte. |
| Licht & Wohnkomfort | Räume statt Leuchten planen: drei Lichtbereiche. Einfach bedienen: zugeordnete Lichtgruppen und Szenen. Drinnen und draußen: Eingang, Weg und Terrasse. |
| Smart Home & Vernetzung | Lichtszenen & KNX: gemeinsame Abendszene. Jalousien & Fernsteuerung: Beschattung nach Tageszeit. Bedienung, die zu dir passt: Taster, App und Automatik. |
| Photovoltaik & Solartechnik | Elektrischer Anschluss: Überblick über Module, Wechselrichter und Zählerplatz. Inbetriebnahme & Prüfung: Prüfgerät und Protokoll. Übergabe & Abnahmevorbereitung: geordnete Anlagenunterlagen. |
| Energie & Laden | Verbrauch verstehen: ausdrücklich illustrative Verbrauchsansicht. Laden zu Hause vorbereiten: Gebäude, Leitungsweg und Ladeplatz. Gemeinsam denken: Solarstrom, Haushalt, Speicher und Laden. |

Die 18 eingebetteten SVG-Darstellungen wurden im Projekt gezeichnet. Neubau und Modernisierung verwenden denselben Beispielgrundriss mit unterschiedlicher Einordnung. Keine neuen Rasterbilder, Bildgenerierung oder extern geladenen Inhalte. Die Skizzen sind als illustrative Planungsbeispiele gekennzeichnet, ohne Verdrahtungsanleitungen, konkrete Geräteauslegung, reale Messwerte oder behauptete Kundenprojekte.

## Dateien

- `src/content.mjs`: bestehende Leistungsnamen, Einleitungen und drei Themenüberschriften.
- `src/service-details.mjs`: ausführliche Texte, Planungspunkte, Alltagsbeispiele und Zuordnung der Skizzen.
- `src/service-illustrations.mjs`: Vektorskizzen und Bildbeschriftungen.
- `src/service-page.mjs`: gemeinsamer Seitenaufbau.
- `public/assets/services.css`: Gestaltung der Leistungsseiten; wird nur auf diesen sechs Seiten geladen.
- `tests/website.spec.mjs`: unter anderem Navigation durch alle Leistungsseiten und Sprungziele ohne JavaScript.

## Fachliche Orientierung

Die Texte erklären Planungsfragen für Privatkunden. Konkrete Auslegung, Anschlussbedingungen und Zuständigkeiten werden erst am tatsächlichen Projekt geklärt. Keine neuen Kosten-, Einsparungs- oder Kompatibilitätszusagen und keine pauschale Zusage zur Abnahme von Fremdanlagen.

- [KNX für Gebäudeeigentümer](https://www.knx.org/explore-knx/knx-home-building-owners): Verbindung von Licht, Beschattung und weiteren Gebäudefunktionen.
- [DKE: Technischer Leitfaden Ladeinfrastruktur](https://www.dke.de/de/arbeitsfelder/mobility/technischer-leitfaden-ladeinfrastruktur-elektromobilitaet): gemeinsame Betrachtung von Planung, Gebäude und Ladeeinrichtung.
- Ergänzend bleiben die bisherigen fachlichen Quellen in `PROJEKTSTAND.md` maßgeblich für die dort beschriebenen Themen.

## Prüfung und Vorschau

Build: 18 Seiten und 507 interne Verweise. Elf Playwright-Prüfungen bestanden. Alle Seiten bei 375 Pixeln ohne horizontales Überlaufen. Alle sechs Leistungsseiten auf Desktop und die Neubauseite zusätzlich auf Mobil visuell geprüft; alle 18 SVG-Darstellungen auf abgeschnittene Texte und in einer gemeinsamen Übersicht kontrolliert.

[Desktop](vorschau/leistungen-neubau-desktop.png) · [Mobil](vorschau/leistungen-neubau-mobil.png)
