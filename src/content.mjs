export const site = {
  name: "Gabriel",
  descriptor: "Elektrotechnik & Smart Home",
  preview: "Privater Entwurf · Name und Leistungen in Planung",
};

export const visuals = {
  installation: {
    src: "/assets/neubau-elektrik.jpg",
    alt: "Elektroinstallation im Rohbau mit Leitungswegen und vorbereiteten Gerätedosen",
    caption: "Elektroinstallation im Wohnhaus · KI-Visualisierung",
    width: 1536,
    height: 1024,
  },
  modernization: {
    src: "/assets/modernisierung-bestand.jpg",
    alt: "Modernisierter Altbauwohnraum mit erhaltenem Parkett, neuen Wandbedienelementen und eingeschalteter Beleuchtung",
    caption: "Elektromodernisierung im Bestand · KI-Visualisierung",
    width: 1536,
    height: 1024,
  },
  lighting: {
    src: "/assets/licht-am-abend.jpg",
    alt: "Wohnraum am Abend mit eingeschalteter Pendelleuchte, Deckenlicht und indirekter LED-Beleuchtung",
    caption: "Beleuchtung & Bedienung · KI-Visualisierung",
    width: 1536,
    height: 1024,
  },
  shading: {
    src: "/assets/smarte-beschattung.jpg",
    alt: "Außenjalousien an einem Eigenheim und ein Smartphone als Beispiel für die Fernsteuerung",
    caption: "Vernetzte Außenjalousien · KI-Visualisierung",
    width: 1536,
    height: 1024,
  },
  solar: {
    src: "/assets/photovoltaik-eigenheim.jpg",
    alt: "Eigenheim mit Photovoltaikmodulen auf dem Dach und einer Wallbox an der Hauswand",
    caption: "Photovoltaik & Laden zu Hause · KI-Visualisierung",
    width: 1536,
    height: 1024,
  },
  energy: {
    src: "/assets/energie-wallbox.jpg",
    alt: "Wallbox am privaten Carport mit angeschlossenem Elektroauto",
    caption: "Laden am eigenen Zuhause · KI-Visualisierung",
    position: "center 20%",
    width: 1536,
    height: 1024,
  },
};

export const services = [
  {
    slug: "neubau",
    icon: "home",
    number: "01",
    visual: "installation",
    label: "Neubau & Elektroinstallation",
    short: "Dein neues Zuhause. Von Anfang an durchdacht.",
    description:
      "Vom Grundriss bis zur fertigen Installation: Anschlüsse, Beleuchtung und Gebäudetechnik gehören beim Neubau zusammen.",
    intro: "Ein neues Zuhause. Elektrik von Anfang an mitgedacht.",
    details: [
      [
        "Elektroplanung nach Grundriss",
        "Steckdosen, Schalter, Lichtauslässe und Netzwerkanschlüsse passend zur Nutzung jedes Raums planen.",
      ],
      [
        "Leitungen & Verteilung",
        "Leitungswege, Stromkreise und die elektrische Verteilung als zusammenhängende Installation betrachten.",
      ],
      [
        "Für später vorbereiten",
        "Smart Home, Beschattung, Photovoltaik und Wallbox früh berücksichtigen – auch wenn einzelne Funktionen erst später hinzukommen.",
      ],
    ],
    prepare:
      "Grundrisse, der geplante Bauablauf und deine Wünsche für Küche, Wohnräume, Außenbereich und Haustechnik helfen beim Einstieg.",
  },
  {
    slug: "modernisieren",
    icon: "bolt",
    number: "02",
    visual: "modernization",
    label: "Renovieren & modernisieren",
    short: "Ein guter Anfang für neue Wohnideen.",
    description:
      "Neue Küche, andere Raumaufteilung oder ein ganzes Haus: Die Elektrik gehört von Anfang an mitgedacht.",
    intro: "Neue Ideen fürs Wohnen. Eine gute Basis für die Technik.",
    details: [
      [
        "Anschlüsse mitdenken",
        "Wo sollen Küche, Arbeitsplatz und Möbel stehen? Daraus entsteht die Grundlage für passende Steckdosen und Anschlüsse.",
      ],
      [
        "Raum für Veränderungen",
        "Eine Renovierung ist der richtige Moment, auch spätere Wünsche in der Planung zu berücksichtigen.",
      ],
      [
        "Bestand gemeinsam ansehen",
        "Was vorhanden ist und was sich verändern lässt, wird am konkreten Gebäude geklärt.",
      ],
    ],
    prepare:
      "Hilfreich sind ein Grundriss, deine Raumideen und ein paar Bilder vom aktuellen Zustand.",
  },
  {
    slug: "licht",
    icon: "sun",
    number: "03",
    visual: "lighting",
    label: "Licht & Wohnkomfort",
    short: "Das richtige Licht. Im richtigen Moment.",
    description:
      "Helles Licht zum Arbeiten, warme Stimmung am Abend und eine Bedienung, die sich selbstverständlich anfühlt.",
    intro: "Licht, das zu deinem Alltag passt.",
    details: [
      [
        "Räume statt Leuchten planen",
        "Kochen, Lesen oder Entspannen: Der Alltag bestimmt, wo und wie Licht gebraucht wird.",
      ],
      [
        "Einfach bedienen",
        "Schalter, Dimmer und Lichtszenen so zusammenstellen, dass alle im Haushalt damit zurechtkommen – auf Wunsch mit einer vernetzten Steuerung.",
      ],
      [
        "Drinnen und draußen",
        "Auch Flur, Eingang und Terrasse gehören zu einem stimmigen Lichtkonzept.",
      ],
    ],
    prepare:
      "Überlege, wie du die Räume nutzt und an welchen Stellen dir bisher gutes Licht fehlt.",
  },
  {
    slug: "smart-home",
    icon: "home",
    number: "04",
    visual: "shading",
    label: "Smart Home & Vernetzung",
    short: "Ein Zuhause, das mitdenkt.",
    description:
      "Beleuchtung, Außenjalousien und Raumkomfort verbinden – zum Beispiel über KNX. Mit Funktionen, die dir im Alltag wirklich helfen.",
    intro: "Weniger einzelne Handgriffe. Mehr Zuhause.",
    details: [
      [
        "Lichtszenen & KNX",
        "Mehrere Leuchten gemeinsam dimmen oder schalten: Ein vernetztes System wie KNX kann Beleuchtung und weitere Gebäudefunktionen zusammenführen.",
      ],
      [
        "Jalousien & Fernsteuerung",
        "Außenjalousien passend zur Situation steuern: über Taster, geplante Abläufe oder eine dafür eingerichtete Fernbedienung per App.",
      ],
      [
        "Bedienung, die zu dir passt",
        "Taster, App und Automatik zusammen denken. Welche Funktionen und welcher Fernzugriff möglich sind, hängt vom gewählten System ab.",
      ],
    ],
    prepare:
      "Notiere zwei oder drei Situationen, in denen dein Zuhause dir heute noch zu viel Arbeit macht.",
  },
  {
    slug: "photovoltaik",
    icon: "solar",
    number: "05",
    visual: "solar",
    label: "Photovoltaik & Solartechnik",
    short: "Solarstrom sinnvoll ins Zuhause einbinden.",
    description:
      "Der elektrische Teil deiner Photovoltaikanlage: Anschluss, Inbetriebnahme, Prüfung und Dokumentation als vorgesehener Leistungsbereich.",
    intro: "Solarstrom vom Dach. Elektrisch gut eingebunden.",
    details: [
      [
        "Elektrischer Anschluss",
        "Wechselrichter, Leitungsführung und Zählerplatz im Zusammenhang betrachten. Die Schnittstellen zu Montagebetrieb und Netzbetreiber gehören zur Abstimmung.",
      ],
      [
        "Inbetriebnahme & Prüfung",
        "Die elektrische Anlage vor der Übergabe prüfen, Messungen dokumentieren und die Inbetriebnahme vorbereiten. Der genaue Umfang wird am Projekt geklärt.",
      ],
      [
        "Übergabe & Abnahmevorbereitung",
        "Prüfergebnisse und Anlagenunterlagen für Übergabe und Abnahme zusammenstellen. Offene Punkte mit den Beteiligten klären und die vereinbarten Funktionen erklären.",
      ],
    ],
    prepare:
      "Hilfreich sind Angaben zum Dach und Zählerplatz sowie vorhandene Pläne oder Angebote. Sag auch dazu, ob bereits Module montiert sind und ob Speicher oder Wallbox vorgesehen sind.",
  },
  {
    slug: "energie",
    icon: "leaf",
    number: "06",
    visual: "energy",
    label: "Energie & Laden",
    short: "Heute wohnen. Morgen weiterdenken.",
    description:
      "Wallbox, Energieverbrauch und das Zusammenspiel mit Photovoltaik oder Speicher früh in die Gebäudeplanung einbeziehen.",
    intro: "Neue Möglichkeiten beginnen mit guter Vorbereitung.",
    details: [
      [
        "Verbrauch verstehen",
        "Welche Informationen über deinen Energieverbrauch wären im Alltag hilfreich? Das ist ein möglicher Ausgangspunkt für die Planung.",
      ],
      [
        "Laden zu Hause vorbereiten",
        "Stellplatz, Nutzungsverhalten und Gebäudesituation liefern wichtige Angaben für ein späteres Fachgespräch.",
      ],
      [
        "Gemeinsam denken",
        "Energie, Gebäude und Komfort gehören zusammen. Welche Leistungen später angeboten werden, ist noch offen.",
      ],
    ],
    prepare:
      "Für eine erste Ideensammlung reichen Angaben zum Gebäude und zu deinem gewünschten Vorhaben.",
  },
];

export const faqs = [
  {
    category: "Planung",
    keywords: "Renovierung renovieren Sanierung sanieren Umbau modernisieren",
    question: "Ich renoviere. Wann sollte ich an die Elektrik denken?",
    answer:
      "Am besten schon bei der Raumplanung. Die spätere Nutzung der Räume, Möbel und Geräte hilft dabei, Anschlüsse und Beleuchtung passend mitzudenken. Ein Grundriss und deine Wünsche sind ein guter Einstieg.",
  },
  {
    category: "Smart Home",
    question: "Kann ich mein Zuhause schrittweise smarter machen?",
    answer:
      "Das lässt sich als Ziel einplanen. Welche Schritte sinnvoll sind, hängt vom Gebäude und den vorhandenen Systemen ab. Starte mit einem konkreten Wunsch, zum Beispiel einer einfacheren Lichtbedienung.",
  },
  {
    category: "Smart Home",
    question: "Brauche ich für alles eine App?",
    answer:
      "Eine App ist eine mögliche Ergänzung. Bei der Planung sollten auch Schalter und andere vertraute Bedienelemente berücksichtigt werden. Wie das umgesetzt werden kann, hängt vom gewählten System ab.",
  },
  {
    category: "Projektanfrage",
    question: "Was sollte ich für ein erstes Gespräch vorbereiten?",
    answer:
      "Beschreibe kurz dein Vorhaben, die Art des Gebäudes und deinen gewünschten Zeitraum. Wenn vorhanden, sind Grundrisse und Bilder hilfreich. Für den Einstieg musst du keine technischen Fachbegriffe kennen.",
  },
  {
    category: "Planung",
    question: "Kann ich hier bereits ein verbindliches Angebot erhalten?",
    answer:
      "Diese Website ist ein privater Zukunftsentwurf. Es werden aktuell keine Aufträge angenommen und keine Angebote erstellt. Der Projektplaner dient dazu, den späteren Anfrageablauf auszuprobieren.",
  },
  {
    category: "Projektanfrage",
    question: "Werden meine Angaben im Projektplaner verschickt?",
    answer:
      "Nein. Deine Angaben bleiben während der Nutzung im geöffneten Browserfenster. Du kannst die Zusammenfassung selbst kopieren oder als Textdatei herunterladen. Beim Neuladen werden die Eingaben zurückgesetzt.",
  },
];

export const scenes = {
  ankommen: {
    title: "Willkommen zu Hause.",
    text: "Ein angenehmer Empfang, ohne erst alles einzeln einzuschalten.",
    light: "Einladend & warm",
    blinds: "Tageslicht nutzen",
    heating: "Angenehm ankommen",
  },
  feierabend: {
    title: "Zeit zum Abschalten.",
    text: "Mit einem gemeinsamen Ablauf wird aus dem Wohnraum dein Feierabendplatz.",
    light: "Warm & gedimmt",
    blinds: "Privatsphäre am Abend",
    heating: "Gemütlich wohnen",
  },
  unterwegs: {
    title: "Mit einem guten Gefühl los.",
    text: "Ein geplanter Ablauf fasst die gewünschten Einstellungen beim Verlassen zusammen.",
    light: "Gewählte Lichter aus",
    blinds: "Nach deinem Zeitplan",
    heating: "Bedarfsgerecht planen",
  },
};
