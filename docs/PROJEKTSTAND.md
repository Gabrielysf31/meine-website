# Projektstand

Stand: 29.10.2026

## Vereinbarte Richtung

Gabriel plant einen möglichen späteren Betrieb für Elektrotechnik und intelligente Gebäude. Primäre Zielgruppe sind Privatkunden mit Wohnungen und Eigenheimen; Gewerbe ist eine mögliche spätere Erweiterung.

Die Website soll modern, schlicht und mehrseitig sein. Kurze Texte, verständliche Sprache und leicht erreichbare Details haben Vorrang. Später sind ein KI-Assistent und Agentenfunktionen vorgesehen.

Ein Meisterabschluss ist bisher eine Zukunftsüberlegung. Keine abgeschlossene Qualifikation, realisierte Kundenprojekte, Kontaktdaten oder betrieblichen Angaben erfinden.

## Umgesetzt

- Lokaler statischer Entwurf mit 17 Inhaltsseiten und einer Fehlerseite.
- Helle Flächen, Petrol, zurückhaltende Akzente und lokale Wohnraumbilder, ergänzt um sechs gekennzeichnete KI-Visualisierungen mit sichtbarer Elektrotechnik.
- Sechs Leistungsbereiche: Neubau, Modernisierung, Licht, Smart Home, Photovoltaik sowie Energie und Laden. Alle haben eine eigene bebilderte Unterseite und sind im Projektplaner auswählbar.
- Jeder Leistungsbereich hat ein eigenes Bildmotiv. Modernisierung zeigt einen erneuerten Altbauwohnraum; Energie und Laden zeigt eine Wallbox am privaten Carport mit angeschlossenem Elektroauto. Neubau und Photovoltaik behalten die zuvor abgestimmten Motive.
- Inspiration zeigt Beleuchtung am Abend, Außenjalousien mit Fernsteuerung, Neubauinstallation und Photovoltaik mit Wallbox.
- Die großen wiederholten Abschlussblöcke mit Projektaufruf wurden entfernt. Der Einstieg bleibt oben rechts und im Startseiten-Hero; die Kontaktseite behält ihren direkten Planerzugang.
- Auf Mobilgeräten ist der Assistenteneinstieg auf ein kleines, zugänglich beschriftetes Symbol reduziert, damit er weniger Inhalt verdeckt.
- Zentrale Inhalte, gemeinsame Navigation und wiederverwendbarer Seitenrahmen.
- Mobile Navigation mit Tastaturbedienung, aufklappbare Antworten und Suche mit zusätzlichen Suchbegriffen.
- Interaktive Smart-Home-Beispiele ohne Geräteanbindung.
- Projektplaner mit Validierung, Bearbeitung, Textkopie und Dateiexport.
- Assistenten-Dialog mit ehrlicher Vorschau und Links zu bestehenden Funktionen.
- Inhalte ohne JavaScript erreichbar; im Planer erscheint dann ein erklärender Hinweis.
- Keine KI-Anfragen, keine Formularübermittlung, kein Browser-Speicher und keine externen Dienste im Seitenbetrieb.

## Technische Entscheidung

Statisches HTML aus gemeinsamen JavaScript-Vorlagen, CSS und ergänzendes Browser-JavaScript. Node.js wird für Build und lokale Vorschau verwendet. Für den Entwurf sind weder Datenbank noch Framework oder kostenpflichtiger Dienst erforderlich. Playwright ist ausschließlich eine Entwicklungsabhängigkeit für Browserprüfungen.

## Geprüft

- Build und interne Verweise: 18 Seiten, 468 interne Verweise.
- Sechs Browserprüfungen in Google Chrome bestanden.
- Formular: notwendige Auswahl, Rücknavigation, sichere Darstellung von Freitext, Dateiexport und Zurücksetzen beim Neuladen. Neubau und Photovoltaik erscheinen korrekt in der Zusammenfassung.
- Mobile Navigation und alle Seiten bei 375 Pixeln Breite ohne horizontales Überlaufen.
- Startseite, Inspiration und ergänzende Leistungsansichten auf Desktop beziehungsweise Mobil visuell geprüft; Ansichten liegen unter `docs/vorschau/`.
- Die neuen Motive für Modernisierung und Energie sind in Übersicht und Unterseiten geladen und geprüft. Die Leistungsübersicht wurde zusätzlich bei 390 Pixeln Breite kontrolliert; der Ausschnitt des Wallboxbilds hält das Gerät im Blick.

## Inhaltliche Orientierung für diese Überarbeitung

- [KNX Planning Guide: Anwendungen](https://planning.knx.org/submit/step7) als Grundlage für die kurzen Hinweise zu Beleuchtung und Beschattung.
- [KNX: Home Shading](https://www.knx.org/news/home-shading-benefits-jalousie) für den Zusammenhang zwischen Außenjalousien und Gebäudesteuerung.
- [VDE: Prüfung von Photovoltaik- und Speicheranlagen](https://www.vde-verlag.de/p/fachwissen/pruefung-von-photovoltaik-und-speicheranlagen/316493) zur Einordnung von Prüfung und Dokumentation.

Der Solarbereich beschreibt Anschluss, Inbetriebnahme, Prüfung sowie Übergabe und Abnahmevorbereitung als vorgesehene Themen. Eine pauschale Zusage, beliebige Fremdanlagen abzunehmen, wird daraus nicht abgeleitet. Die Bilder dienen als Visualisierungen und weisen keine konkrete KNX-Produktkompatibilität nach.

## Noch offen

1. Gabriels Rückmeldung zu Gestaltung, Wortwahl und Seitenaufteilung.
2. Firmenname, Einsatzgebiet und tatsächlicher späterer Leistungsumfang.
3. Eigene Bilder, Profilinformationen und später echte Referenzen.
4. Vor einem Betriebsstart: konkrete Kontaktmöglichkeiten, vollständige betriebliche und rechtliche Angaben.
5. Später: geprüfte Wissensgrundlage, serverseitige KI-Anbindung und tatsächlicher Anfrageversand.

## Git und Freigabegrenzen

Privates Repository: https://github.com/Gabrielysf31/meine-website

Der erste Entwurf wird auf `feat/erster-website-entwurf` gesichert. Keine Website-Veröffentlichung und keine kostenpflichtigen Dienste beauftragt. Innerhalb der lokalen Umsetzung routinemäßig selbstständig arbeiten.

## Nächster gemeinsamer Schritt

Den lokalen Entwurf ansehen und anhand von Gabriels Rückmeldung verfeinern. Eine Auswahl des KI-Anbieters ist für diese Gestaltungsrunde noch nicht notwendig.
