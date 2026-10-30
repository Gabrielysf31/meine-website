// Ergänzungen zu den drei Themen jeder Leistungsseite; Reihenfolge wie in content.mjs.
export const serviceDetails = {
  neubau: [
    {
      id: "grundriss", visual: "floorplan", caption: "Beispielgrundriss mit Licht, Steckdosen, Tastern und Netzwerk",
      body: "Die Planung beginnt bei deinem Alltag: Wo steht das Sofa, an welcher Wand die Küche und wo möchtest du arbeiten? Im Grundriss werden daraus konkrete Positionen für Anschlüsse und Bedienelemente. So lassen sich Möbel, Laufwege und Technik gemeinsam betrachten, bevor die Wände fertig sind.",
      points: ["Steckdosen dort vorsehen, wo Geräte tatsächlich genutzt werden.", "Lichtauslässe und Taster an Raumnutzung und Laufwege anpassen.", "Netzwerk und Anschlüsse für Arbeitsplatz, Medien und Außenbereich eintragen."],
      example: "Am Arbeitsplatz sind Strom und Netzwerk eingezeichnet. Der Taster liegt am Zugang zum Wohnraum; das Licht orientiert sich an Sitz- und Essbereich.",
    },
    {
      id: "verteilung", visual: "cabinet", caption: "Schematische Verteilung mit beschrifteten Bereichen und Reserve",
      body: "Hinter den sichtbaren Steckdosen steht eine geordnete Installation. Leitungswege, die Aufteilung der Stromkreise und der Platz in der Verteilung werden zusammen geplant. Dabei zählen nicht nur die heutigen Geräte: Auch Zugänglichkeit, verständliche Beschriftungen und Platz für vereinbarte Erweiterungen gehören dazu.",
      points: ["Leitungswege mit Bauablauf und anderen Gewerken abstimmen.", "Stromkreise und passende Schutzfunktionen fachlich auslegen lassen.", "Verteilung übersichtlich beschriften und die Installation dokumentieren."],
      example: "Die Darstellung trennt beispielhaft Wohnen, Küche und weitere Technik. Die tatsächliche Aufteilung und Auswahl der Geräte entstehen erst aus der konkreten Planung.",
    },
    {
      id: "vorbereitung", visual: "future", caption: "Heute vorbereiten: Beschattung, Vernetzung, Solarstrom und Laden",
      body: "Nicht jede Idee muss sofort umgesetzt werden. Beim Neubau lohnt sich aber der Blick auf Funktionen, die später interessant werden könnten. Geeignete Leitungswege, Platzreserven und abgestimmte Anschlusspunkte können in der Planung berücksichtigt werden, solange die baulichen Möglichkeiten noch offen sind.",
      points: ["Gewünschte Beschattung und eine mögliche spätere Vernetzung besprechen.", "Wege zwischen Dach, Technikraum und Stellplatz mitdenken.", "Festhalten, was sofort entsteht und was zunächst nur vorbereitet wird."],
      example: "Eine Wallbox ist noch kein Thema? Der mögliche Stellplatz und der Weg zur Verteilung können trotzdem bereits in den Plan aufgenommen werden.",
    },
  ],
  modernisieren: [
    {
      id: "anschluesse", visual: "kitchen", caption: "Raumplanung mit markierten Anschlüssen für Küche und Arbeitsplatz",
      body: "Eine neue Küche oder ein zusätzlicher Arbeitsplatz verändert auch die Anforderungen an die Elektrik. Deshalb beginnt die Abstimmung mit Möbeln, Geräten und deinen Gewohnheiten. Vorhandene Anschlüsse werden mit dem neuen Raumplan verglichen; nötige Anpassungen werden früh sichtbar.",
      points: ["Küchen- und Geräteplanung vor Beginn der Arbeiten zusammentragen.", "Steckdosen, Licht und Datenanschlüsse an die neue Nutzung anpassen.", "Positionen so abstimmen, dass Möbel keine wichtigen Anschlüsse verdecken."],
      example: "Der Esstisch zieht um und eine Arbeitsecke kommt hinzu. Im Plan werden beide Bereiche getrennt betrachtet, statt nur vorhandene Steckdosen zu übernehmen.",
    },
    {
      id: "veraenderung", visual: "stages", caption: "Beispiel für eine Modernisierung in abgestimmten Etappen",
      body: "Wenn Wände oder Böden ohnehin bearbeitet werden, können auch spätere Wünsche besprochen werden. Das bedeutet nicht, alles auf einmal zu erneuern. Ein abgestimmter Ablauf zeigt, welche Arbeiten zusammengehören und welche Ergänzungen sich für einen späteren Schritt vorbereiten lassen.",
      points: ["Sofort benötigte Funktionen und spätere Wünsche unterscheiden.", "Elektroarbeiten mit Küche, Malerarbeiten und Bodenaufbau abstimmen.", "Mögliche Reserven für Licht, Netzwerk oder Beschattung festhalten."],
      example: "Zuerst werden Küche und Wohnraum modernisiert. Eine spätere Erweiterung im Arbeitszimmer wird als eigener Schritt mit passenden Übergängen berücksichtigt.",
    },
    {
      id: "bestand", visual: "inspection", caption: "Bestandsaufnahme: Anschlüsse, Verteilung und Unterlagen zusammen ansehen",
      body: "Was sich weiterverwenden oder ergänzen lässt, entscheidet sich am Gebäude. Dazu werden vorhandene Anschlüsse, Leitungswege, Verteilung und Unterlagen betrachtet. Fotos helfen bei der Vorbereitung; die fachliche Beurteilung vor Ort und erforderliche Prüfungen ersetzen sie nicht.",
      points: ["Vorhandene Pläne, Beschriftungen und frühere Änderungen zusammentragen.", "Den Zustand und die Möglichkeiten der bestehenden Anlage klären.", "Bauliche Eingriffe und offene Punkte vor der Umsetzung besprechen."],
      example: "Ein neuer Dimmer ist gewünscht. Vorher ist zu klären, ob Leuchten, vorhandene Leitungen und die geplante Bedienung dazu passen.",
    },
  ],
  licht: [
    {
      id: "lichtbereiche", visual: "lighting", caption: "Drei Lichtbereiche für Arbeiten, Essen und Entspannen",
      body: "Ein Raum hat oft mehrere Aufgaben. Licht über der Arbeitsfläche erfüllt einen anderen Zweck als die Leuchte am Esstisch oder das Licht neben dem Lesesessel. Ein Lichtkonzept ordnet diese Bereiche und betrachtet Helligkeit, Lichtwirkung und die Position der Leuchten gemeinsam.",
      points: ["Raumnutzung und gewünschte Lichtstimmung je Bereich sammeln.", "Grundbeleuchtung, gezieltes Arbeitslicht und Akzente abstimmen.", "Möbel, Oberflächen und mögliche Blendung mit berücksichtigen."],
      example: "Im offenen Wohnbereich lässt sich die Arbeitsfläche hell beleuchten, während am Esstisch und beim Sofa eine ruhigere Stimmung entsteht.",
    },
    {
      id: "lichtbedienung", visual: "controls", caption: "Bedienidee: klare Zuordnung von Lichtgruppen und Szenen",
      body: "Gutes Licht soll sich im Alltag einfach einstellen lassen. Gemeinsam wird festgelegt, welche Lichtgruppen einzeln bedient werden und wo eine gemeinsame Szene sinnvoll sein könnte. Für das Dimmen müssen Leuchten, Leuchtmittel und Steuerung zusammenpassen; das wird vor der Auswahl geklärt.",
      points: ["Schalten und Dimmen an gut erreichbaren Stellen vorsehen.", "Tasterfunktionen verständlich zuordnen und beschriften.", "Bei Bedarf mehrere Lichtgruppen zu einer Szene zusammenfassen."],
      example: "Ein Taster am Wohnraumeingang ruft die gewünschte Grundbeleuchtung auf. Am Sitzplatz bleibt eine eigene Bedienung für das Leselicht möglich.",
    },
    {
      id: "aussenlicht", visual: "outdoor", caption: "Licht entlang von Eingang, Weg und Terrasse planen",
      body: "Der Weg zur Haustür, die Garderobe und die Terrasse haben unterschiedliche Anforderungen. Außenlicht soll Orientierung geben und dort wirken, wo es gebraucht wird. Bei der Planung gehören die Umgebung, passende Leuchten und eine verständliche Bedienung zusammen.",
      points: ["Eingang, Stufen und Laufwege als zusammenhängenden Weg betrachten.", "Leuchten und ihre Eignung für den jeweiligen Einbauort abstimmen.", "Zeitsteuerung oder Bewegungserfassung bei Bedarf ergänzen."],
      example: "Am Eingang unterstützt gezieltes Licht die Orientierung. Die Terrasse erhält eine separat bedienbare Beleuchtung für den Aufenthalt am Abend.",
    },
  ],
  "smart-home": [
    {
      id: "szenen", visual: "scene", caption: "Eine Szene verbindet passende Einstellungen für Licht und Beschattung",
      body: "Eine Szene fasst mehrere gewünschte Einstellungen zusammen. Beim Feierabend können beispielsweise bestimmte Lichtgruppen gedimmt und Jalousien in eine passende Position gebracht werden. KNX ist eine mögliche Grundlage, um solche Gebäudefunktionen miteinander zu verbinden. Welche Funktionen zusammengehören, bestimmen deine Alltagssituationen.",
      points: ["Konkrete Abläufe wie Ankommen, Lesen oder Feierabend beschreiben.", "Beteiligte Lichtgruppen und weitere Funktionen gezielt auswählen.", "Festlegen, wie die Szene aufgerufen und einzeln übersteuert wird."],
      example: "Die Szene „Feierabend“ verbindet warmes Licht mit einer abgestimmten Beschattung. Die Lichtstimmung kannst du auf der Smart-Home-Seite bereits ausprobieren.",
    },
    {
      id: "beschattung", visual: "shading", caption: "Beschattung für unterschiedliche Räume und Tageszeiten abstimmen",
      body: "Jalousien und Rollläden können einzeln, gemeinsam oder nach abgestimmten Abläufen bedient werden. Dafür werden vorhandene Antriebe, die gewünschte Nutzung und geeignete Sensorik betrachtet. Ein Fernzugriff per App braucht eine passende technische Einbindung und klar geregelte Zugriffsrechte.",
      points: ["Bedienung nach Raum, Fassade und Nutzung ordnen.", "Zeitpläne, Tageslicht und erforderliche Schutzfunktionen abstimmen.", "Fernzugriff und Internetabhängigkeiten vor der Auswahl klären."],
      example: "Im Schlafzimmer beginnt der Tag anders als im Wohnraum. Deshalb können unterschiedliche Zeiten und eine direkte Bedienung am Taster vorgesehen werden.",
    },
    {
      id: "bedienkonzept", visual: "interfaces", caption: "Taster, App und Automatik mit klaren Aufgaben",
      body: "Ein vernetztes Zuhause soll für alle im Haushalt verständlich bleiben. Taster können die alltäglichen Funktionen zugänglich machen; eine App kann Einstellungen und Überblick ergänzen. Automatische Abläufe werden so besprochen, dass klar bleibt, wann sie aktiv sind und wie du selbst eingreifen kannst.",
      points: ["Häufige Funktionen direkt und nachvollziehbar erreichbar machen.", "Gewünschte App-Funktionen und Berechtigungen festhalten.", "Bedienung, Einstellungen und Unterlagen bei der Übergabe erklären."],
      example: "Gäste bedienen das Licht am Taster. Du ergänzt bei Bedarf einen Zeitplan in der App; wichtige Grundfunktionen werden mit ihren Abhängigkeiten besprochen.",
    },
  ],
  photovoltaik: [
    {
      id: "pv-anschluss", visual: "solar", caption: "Überblick: Module, Wechselrichter und Einbindung ins Gebäude",
      body: "Die Module auf dem Dach sind ein Teil der Anlage. Für die elektrische Einbindung werden Wechselrichter, Leitungswege, Zählerplatz und vorhandene Gebäudetechnik zusammen betrachtet. Dazu gehört die Abstimmung mit dem Montagebetrieb und dem Netzbetreiber sowie die Frage, ob Speicher oder Laden zu Hause einbezogen werden sollen.",
      points: ["Vorhandene Planung und Zuständigkeiten der Beteiligten klären.", "Aufstellort, Leitungswege und Zählerplatz am Gebäude prüfen.", "Gewünschte Schnittstellen zu Speicher und Wallbox besprechen."],
      example: "Die Dachmontage ist bereits geplant. Vor dem elektrischen Anschluss werden die Unterlagen und die Übergänge zwischen Montagebetrieb, Elektroinstallation und Netzanschluss abgestimmt.",
    },
    {
      id: "pv-pruefung", visual: "testing", caption: "Prüfung und Inbetriebnahme mit dokumentierten Ergebnissen",
      body: "Vor der Übergabe müssen die ausgeführten elektrischen Arbeiten und die vereinbarten Funktionen fachlich geprüft werden. Dazu gehören je nach Anlage Besichtigung, Messungen und Funktionsprüfungen. Ergebnisse und offene Punkte werden dokumentiert; der genaue Umfang richtet sich nach dem Projekt und den beteiligten Anlagenteilen.",
      points: ["Anlagenunterlagen und ausgeführte Installation abgleichen.", "Erforderliche Prüfungen und Inbetriebnahmeschritte abstimmen.", "Ergebnisse nachvollziehbar festhalten und offene Punkte klären."],
      example: "Die Dokumentation zeigt, was geprüft wurde und welche Schritte noch offen sind. Eine laufende Ertragsanzeige allein ersetzt keine elektrische Prüfung.",
    },
    {
      id: "pv-uebergabe", visual: "documents", caption: "Unterlagen für Übergabe, Bedienung und spätere Rückfragen",
      body: "Eine verständliche Übergabe macht die Anlage auch nach dem Einschalten nachvollziehbar. Pläne, vereinbarte Prüfunterlagen und Informationen zur Bedienung werden zusammengeführt. Wer welche Dokumente liefert und welche Abnahmeschritte vorgesehen sind, wird mit den Beteiligten geklärt.",
      points: ["Anlagenübersicht, Beschriftungen und verfügbare Unterlagen ordnen.", "Vereinbarte Funktionen und den Zugang zu Anzeigen erklären.", "Zuständigkeiten und noch ausstehende Schritte festhalten."],
      example: "Für eine spätere Rückfrage sind die Komponenten und Unterlagen auffindbar. Bei bereits montierten Fremdanlagen wird zuerst geklärt, welche Arbeiten und Nachweise übernommen werden können.",
    },
  ],
  energie: [
    {
      id: "verbrauch", visual: "consumption", caption: "Beispielansicht für Verbrauchsbereiche, ohne reale Messwerte",
      body: "Ein besserer Überblick beginnt mit der Frage, was du überhaupt wissen möchtest: den Verbrauch des ganzen Hauses, einzelner Bereiche oder den Anteil des selbst genutzten Solarstroms? Davon hängt ab, welche Messung und Darstellung sinnvoll sein könnte. Vorhandene Geräte und ihre Schnittstellen werden dabei berücksichtigt.",
      points: ["Die gewünschten Informationen und ihre Nutzung im Alltag festlegen.", "Vorhandene Messmöglichkeiten und verfügbare Schnittstellen prüfen.", "Eine verständliche Darstellung ohne unnötige Detailfülle planen."],
      example: "Du möchtest Haushaltsverbrauch und Laden getrennt betrachten. Erst danach wird geklärt, wie beide Bereiche erfasst und gemeinsam dargestellt werden können.",
    },
    {
      id: "wallbox", visual: "charging", caption: "Ladeplatz mit Wallbox und geplantem Weg zur Gebäudeverteilung",
      body: "Für das Laden zu Hause zählen mehr als der Standort der Wallbox. Stellplatz, Fahrzeugnutzung, Leitungsweg und vorhandene elektrische Anlage müssen zusammenpassen. Auch die verfügbare Anschlussleistung, nötige Abstimmungen und die Möglichkeit einer späteren Erweiterung gehören in die fachliche Planung.",
      points: ["Stellplatz, Kabelführung und bequeme Bedienung abstimmen.", "Gebäudeanschluss, Leitungsweg und passende Schutzfunktionen prüfen lassen.", "Gewünschte Einbindung von Solarstrom und weiteren Ladepunkten besprechen."],
      example: "Das Auto steht regelmäßig im Carport. Der Weg von der Verteilung zum Ladeplatz und die Position der Wallbox werden zusammen mit deinen üblichen Standzeiten betrachtet.",
    },
    {
      id: "energiesystem", visual: "energy-flow", caption: "Mögliches Zusammenspiel von Solarstrom, Haushalt, Speicher und Laden",
      body: "Photovoltaik, Speicher und Wallbox können gemeinsam betrachtet werden, wenn Geräte und Schnittstellen dafür geeignet sind. Ein abgestimmtes Konzept beschreibt, welche Verbraucher wann berücksichtigt werden sollen und was bei wenig Solarstrom passiert. Ob und wie eine Steuerung möglich ist, wird anhand der konkreten Technik geklärt.",
      points: ["Vorhandene und geplante Geräte mit ihren Schnittstellen erfassen.", "Prioritäten zwischen Haushalt, Speicher und Laden besprechen.", "Abhängigkeiten, Bedienung und Erweiterungswünsche dokumentieren."],
      example: "Du möchtest Solarstrom beim Laden berücksichtigen. Dafür werden Fahrzeugbedarf, verfügbare Erzeugung und passende Steuerungsmöglichkeiten gemeinsam geprüft.",
    },
  ],
};
