# Freier Zuhause-Assistent

Stand: 30.10.2026 · Konzept, noch keine aktive KI-Anbindung

Gabriel möchte einen freien Chat: eigene Fragen stellen, individuell antworten, gezielte Rückfragen erhalten und das Gespräch anschließend als bearbeitbaren Projektentwurf übernehmen. Eine kostenpflichtige OpenAI-Anbindung ist nicht gewünscht. Dauerhafte Kundenprojekte wurden noch nicht beauftragt; die bisherige gemeinsame Grundlage bleibt der Projektplaner.

## Empfehlung für den kostenlosen Einstieg

GroqCloud im Free Plan ist die derzeitige Empfehlung für Entwicklung und begrenzte Tests. Das ist eine Empfehlung, noch keine Anbieterfreigabe oder eingerichtete Anbindung. Die Antwortqualität für deutschsprachige Elektrotechnik-Orientierung muss mit Beispielen geprüft werden. Kostenlose Kontingente sind keine Zusage für einen unbegrenzten späteren Produktivbetrieb.

- [Offizielle Limits](https://console.groq.com/docs/rate-limits): Begrenzungen nach Modell, Anfragen und Tokens; tatsächliche Kontingente im Konto prüfen.
- [Strukturierte Ausgaben](https://console.groq.com/docs/structured-outputs): JSON-Schema auf unterstützten Modellen für die Projektübergabe. Zusätzlich weiterhin lokal validieren.
- [Tarife](https://console.groq.com/docs/billing-faqs): Der Wechsel in den kostenpflichtigen Developer-Tarif ist ein eigener Schritt. Kein kostenpflichtiger Ersatzanbieter bei ausgeschöpftem Gratis-Kontingent.
- [Datenverarbeitung](https://console.groq.com/docs/your-data): Für spätere echte Besucherdaten gesondert prüfen. Ein Free Plan ersetzt diese Prüfung nicht.

Als lokale Alternative kann Ollama auf dem eigenen Rechner laufen. [Ollama dokumentiert den lokalen Betrieb](https://docs.ollama.com/faq): lokale Gesprächsinhalte werden dabei nicht an Ollama gesendet. Das vermeidet eine Cloud-Inferenzgebühr, benötigt aber Rechnerleistung, Strom und einen laufenden Rechner; die Veröffentlichung als ständig erreichbarer Website-Chat ist ein gesondertes Hosting-Thema. Es wurde nichts installiert oder heruntergeladen.

Gemini wurde als Alternative geprüft. Seine [aktuellen Bedingungen](https://ai.google.dev/gemini-api/terms) verlangen beim Bereitstellen von API-Clients für Nutzer im EWR, der Schweiz und dem Vereinigten Königreich Paid Services. Daher keine Empfehlung für den geplanten kostenlosen Website-Chat in Deutschland allein auf Basis des beworbenen Free Tier.

## Geplanter Ablauf

1. Freitextgespräch, Antworten und gezielte Rückfragen zu den ausdrücklich genannten Wünschen. Die bestehenden Website-Inhalte als Grundlage verwenden. Keine erfundenen betrieblichen Angaben, Kosten, Qualifikationen oder Produktzusagen.
2. Wünsche, mögliche Ansätze und offene Fragen getrennt zusammenfassen. Unbekannte Gebäudeart, Ort, Zeitraum und technische Voraussetzungen offen lassen. Besucher kann weiterreden und korrigieren.
3. Den strukturierten Entwurf über `validateDraft` prüfen. Die Zusammenfassung vor der Übernahme sichtbar anzeigen, vor dem Ersetzen vorhandener Angaben vergleichen.
4. Gewünschte Übernahme füllt den bestehenden Planer. Der Wunschtext steht dann oben. Unbeantwortete Planerfelder bleiben offen und alle Angaben bearbeitbar.

Für eine spätere Umsetzung: serverseitiger API-Zugang mit lokal hinterlegtem Schlüssel, Begrenzung von Eingabelängen, Gesprächsumfang und Anfragen; verständliche Meldung bei Zeitüberschreitung oder ausgeschöpftem Gratis-Kontingent. Schlüssel nie in Browserdateien ausliefern. Kein stiller Tarifwechsel, keine ungefragte dauerhafte Speicherung. Tatsächliche Datenübertragung und Verlassen-/Neuladen-Verhalten vor Aktivierung sichtbar erklären.

## Bereits vorbereiteter Planer

`public/assets/project-draft.js` akzeptiert weiterhin Formatversion 1 mit `source: assistant`. Optional sind jetzt `planningStage` und `priorities` möglich. Erlaubte Werte kommen aus denselben Definitionen wie die Planerfragen; unbekannte Werte werden abgewiesen. `applyDraft` übernimmt sie nur, wenn sie ausdrücklich im Entwurf stehen. Die derzeit aktive Berater-Übergabe wurde weiter geprüft; sie erzeugt noch keine freien KI-Antworten.
