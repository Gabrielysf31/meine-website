// Shared, provider-independent input and draft format for the advisor and a future assistant.
export const topics = {
  new: "Neubau & Elektroinstallation",
  renovation: "Renovieren & modernisieren",
  light: "Licht & Wohnkomfort",
  smart: "Smart Home & Vernetzung",
  solar: "Photovoltaik & Solartechnik",
  energy: "Energie & Laden",
};

// Optional planner context; older advisor drafts remain valid without it.
export const planningStages = [
  ["exploring", "Ich sammle Ideen", "Ich möchte Möglichkeiten kennenlernen"],
  ["wishes", "Meine Wünsche sind konkreter", "Ich weiß ungefähr, was sich ändern soll"],
  ["plans", "Es gibt schon Pläne", "Zum Beispiel einen Grundriss oder ein Raumkonzept"],
  ["open", "Noch offen", "Das klärt sich im nächsten Schritt"],
];
export const planningPriorities = [
  ["simple", "Einfach bedienen", "Im Alltag verständlich und unkompliziert"],
  ["expandable", "Später erweitern können", "Jetzt beginnen und weitere Ideen vorbereiten"],
  ["connected", "Funktionen gemeinsam denken", "Licht, Beschattung und Energie aufeinander abstimmen"],
];

export const questions = [
  { key: "building", title: "Wie wohnst du oder möchtest du wohnen?", options: [["Wohnung", "Wohnung"], ["Eigenheim", "Eigenheim"], ["Noch offen", "Noch offen"]] },
  { key: "project", title: "Was hast du vor?", options: [["new", "Neu bauen"], ["renovation", "Renovieren oder umfassend modernisieren"], ["extend", "Einzelne Funktionen ergänzen"], ["explore", "Erst einmal Ideen sammeln"]] },
  { key: "goals", title: "Was würde deinen Alltag verbessern?", multiple: true, options: [["light", "Passendes Licht"], ["smart", "Weniger Handgriffe bei Licht und Beschattung"], ["energy", "Verbrauch und eigenen Solarstrom besser überblicken"], ["charging", "Zu Hause laden"], ["open", "Noch offen"]] },
  { key: "controls", title: "Wie möchtest du die Technik bedienen?", options: [["switch", "Vor allem mit Tastern"], ["app", "Taster und App"], ["auto", "Taster und passende automatische Abläufe"], ["open", "Noch offen"]] },
  { key: "priority", title: "Was ist dir besonders wichtig?", options: [["small", "Einfach anfangen"], ["together", "Mehrere Funktionen gemeinsam planen"], ["future", "Für spätere Erweiterungen vorbereiten"], ["open", "Noch offen"]] },
];

const ideas = {
  light: { title: "Licht für deinen Alltag planen", reason: "Du wünschst dir passendes Licht. Unterschiedliche Lichtgruppen können sich an der Nutzung deiner Räume orientieren.", next: "Sammle Situationen, in denen dir gutes Licht fehlt.", open: "Welche Räume, Leuchten und Möglichkeiten zum Dimmen sind vorhanden?", topic: topics.light },
  smart: { title: "Wiederkehrende Handgriffe zusammenfassen", reason: "Du möchtest Licht und Beschattung einfacher bedienen. Gemeinsame Szenen könnten wiederkehrende Handgriffe bündeln.", next: "Notiere einen Ablauf, den du gern vereinfachen möchtest.", open: "Welche Antriebe, Leitungen und Steuerungsmöglichkeiten sind vorhanden?", topic: topics.smart },
  energy: { title: "Energie im Zuhause besser überblicken", reason: "Du möchtest Verbrauch und eigenen Solarstrom besser überblicken. Ein gemeinsamer Blick auf die Energieflüsse ist ein möglicher Einstieg.", next: "Sammle, welche Verbrauchsinformationen dich interessieren.", open: "Ist eine Photovoltaikanlage vorhanden, geplant oder bisher nur eine Idee?", topic: topics.energy },
  charging: { title: "Laden am eigenen Stellplatz vorbereiten", reason: "Du möchtest zu Hause laden. Stellplatz und vorhandene Elektrik gehören dabei zusammen.", next: "Beschreibe deinen Stellplatz und wie du dein Auto im Alltag nutzt.", open: "Welche Zuständigkeiten und elektrischen Voraussetzungen gibt es am Stellplatz?", topic: topics.energy },
};
const exploration = [
  { title: "Einen Raum genauer ansehen", reason: "Du sammelst noch Ideen. Ein einzelner Raum kann helfen, konkrete Wünsche zu entdecken.", next: "Überlege, was dort heute gut funktioniert und was dir fehlt.", open: "Welchen Raum möchtest du zuerst betrachten?" },
  { title: "Wiederkehrende Handgriffe sammeln", reason: "Deine Wünsche sind noch offen. Ein Blick auf deinen Tagesablauf kann erste Anregungen geben.", next: "Notiere zwei Situationen, die du gern einfacher gestalten würdest.", open: "Was soll sich in diesen Situationen verändern?" },
];

export const answerLabel = (key, value) => questions.find((q) => q.key === key)?.options.find(([id]) => id === value)?.[1] ?? "Noch offen";

export function createDraft(answers) {
  for (const question of questions) {
    const values = question.multiple ? answers[question.key] : [answers[question.key]];
    if (!Array.isArray(values) || !values.length || values.length > (question.multiple ? 3 : 1) || new Set(values).size !== values.length || values.some((v) => !question.options.some(([id]) => id === v))) throw new Error("Bitte beantworte alle fünf Fragen.");
    if (question.multiple && values.includes("open") && values.length > 1) throw new Error("Wähle konkrete Wünsche oder „Noch offen“.");
  }
  const goals = questions[2].options.map(([id]) => id).filter((id) => answers.goals.includes(id) && id !== "open");
  const approaches = goals.length ? goals.map((id) => ({ ...ideas[id] })) : exploration.map((idea) => ({ ...idea }));
  const selectedTopics = [...new Set([topics[answers.project], ...approaches.map((idea) => idea.topic)].filter(Boolean))];
  const openQuestions = approaches.map((idea) => idea.open);
  if (answers.building === "Wohnung") openQuestions.push("Welche Zustimmung und Zuständigkeiten sind für Änderungen in der Wohnung zu klären?");
  if (answers.project === "extend") openQuestions.push("Welche Ergänzungen lässt die vorhandene Installation zu?");
  if (answers.controls === "app") openQuestions.push("Welche Bedienung per App und welcher Zugriff werden tatsächlich gewünscht?");
  if (answers.controls === "auto") openQuestions.push("Welche Abläufe sollen automatisch erfolgen und wie möchtest du eingreifen können?");
  const priorityNote = { small: "Als Einstieg könnte ein erster Raum oder eine einzelne Funktion dienen.", together: "Betrachte die gewünschten Funktionen und ihre Bedienung gemeinsam.", future: "Halte fest, welche Funktionen jetzt gebraucht und welche später ergänzt werden sollen.", open: "Welche Priorität möchtest du bei der weiteren Planung setzen?" }[answers.priority];
  approaches.forEach((idea) => { idea.next += " " + priorityNote; });
  return validateDraft({ version: 1, source: "advisor", building: answers.building, topics: selectedTopics, timeline: "", location: "", wishes: goals.map((id) => answerLabel("goals", id)), answers: { ...answers, goals: [...answers.goals] }, approaches, openQuestions });
}

export function validateDraft(value) {
  const bounded = (s, max) => typeof s === "string" && s.length <= max;
  const list = (v, max, length) => Array.isArray(v) && v.length <= max && v.every((s) => bounded(s, length));
  if (!value || value.version !== 1 || !["advisor", "assistant"].includes(value.source) || !["Wohnung", "Eigenheim", "Noch offen"].includes(value.building) || !list(value.topics, 6, 100) || value.topics.some((topic) => !Object.values(topics).includes(topic)) || new Set(value.topics).size !== value.topics.length || !bounded(value.location, 100) || !["", "Ich möchte mich erst orientieren", "In den nächsten 3 Monaten", "In 3 bis 6 Monaten", "Später / noch offen"].includes(value.timeline) || !list(value.wishes, 10, 200) || !list(value.openQuestions, 10, 300) || !Array.isArray(value.approaches) || value.approaches.length > 3 || value.approaches.some((idea) => !idea || !["title", "reason", "next", "open"].every((key) => bounded(idea[key], 500)))) throw new Error("Dieser Projektentwurf kann nicht übernommen werden.");
  if (value.source === "advisor") {
    if (!value.answers || !questions.every((q) => q.multiple ? Array.isArray(value.answers[q.key]) && value.answers[q.key].length > 0 && value.answers[q.key].length <= 3 && value.answers[q.key].every((v) => q.options.some(([id]) => id === v)) : q.options.some(([id]) => id === value.answers[q.key]))) throw new Error("Die Antworten sind nicht vollständig.");
  }
  if (value.planningStage !== undefined && value.planningStage !== "" && !planningStages.some(([id]) => id === value.planningStage)) throw new Error("Der Planungsstand ist nicht bekannt.");
  if (value.priorities !== undefined && (!Array.isArray(value.priorities) || value.priorities.length > planningPriorities.length || new Set(value.priorities).size !== value.priorities.length || value.priorities.some(id => !planningPriorities.some(([allowed]) => id === allowed)))) throw new Error("Diese Prioritäten können nicht übernommen werden.");
  return structuredClone(value);
}

export function plannerWishes(draft) {
  const selected = draft.wishes.length ? draft.wishes.join(", ") : "Wünsche noch offen; zunächst Ideen sammeln.";
  const context = draft.source === "advisor" ? "\nVorhaben: " + answerLabel("project", draft.answers.project) + "\nBedienung: " + answerLabel("controls", draft.answers.controls) + "\nPriorität: " + answerLabel("priority", draft.answers.priority) : "";
  const text = `Deine Auswahl\n${selected}${context}\n\nMögliche Ansätze\n${draft.approaches.map((idea) => "• " + idea.title).join("\n")}\n\nNoch zu klären\n${draft.openQuestions.map((q) => "• " + q).join("\n")}`;
  if (text.length > 2000) throw new Error("Bitte kürze den Entwurf vor der Übernahme auf höchstens 2.000 Zeichen.");
  return text;
}

export function draftSummary(draft) {
  return `MEINE PROJEKTIDEE\n\nDein Zuhause\n${draft.building}\n\n${plannerWishes(draft)}\n\nPrivater Website-Entwurf. Nicht versendet; kein Auftrag.\n`;
}
