import { questions, answerLabel, createDraft, validateDraft, plannerWishes, draftSummary } from "./project-draft.js";

export function initAdvisor(planner) {
  const form = document.querySelector("#advisor-form");
  if (!form || !planner) return null;
  const get = (id) => document.getElementById(id);
  const panels = [...form.querySelectorAll("[data-advisor-step]")];
  const error = get("advisor-error");
  const result = get("advisor-result");
  const plannerWrapper = get("advisor-planner");
  const review = get("advisor-replacement");
  let step = 0;
  let draft = null;
  let pending = null;
  form.autocomplete = "off";
  form.reset();
  document.querySelector("[data-advisor-fallback]").hidden = true;
  form.hidden = false;

  function showStep(target, focus = true) {
    step = target;
    form.hidden = false;
    result.hidden = true;
    review.hidden = true;
    pending = null;
    error.hidden = true;
    get("advisor-selection-status").textContent = "";
    panels.forEach((panel, i) => { panel.hidden = i !== step; });
    form.querySelectorAll("[data-advisor-dot]").forEach((dot, i) => dot.classList.toggle("is-current", i <= step));
    get("advisor-progress").textContent = `FRAGE 0${step + 1} VON 05`;
    get("advisor-back").hidden = step === 0;
    get("advisor-next").firstChild.textContent = step === 4 ? "Meine Ansätze ansehen" : "Weiter";
    if (focus) panels[step].querySelector("h3").focus();
  }

  function showError(message) {
    error.textContent = message;
    error.hidden = false;
  }

  form.addEventListener("change", (event) => {
    error.hidden = true;
    const input = event.target;
    if (input.name !== "goals") return;
    const selected = [...form.querySelectorAll('[name="goals"]:checked')];
    const status = get("advisor-selection-status");
    status.textContent = "";
    if (input.checked && input.value === "open") {
      selected.forEach((other) => { other.checked = other === input; });
      status.textContent = "Die konkreten Wünsche wurden abgewählt.";
    } else if (input.checked) {
      form.querySelector('[name="goals"][value="open"]').checked = false;
      if (selected.filter((item) => item.value !== "open").length > 3) {
        input.checked = false;
        status.textContent = "Du kannst bis zu drei Wünsche auswählen. Wähle zuerst einen anderen Wunsch ab.";
      }
    }
  });

  const textElement = (tag, text, className = "") => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  };

  function renderResult() {
    const data = new FormData(form);
    const answers = Object.fromEntries(questions.map((q) => [q.key, q.multiple ? data.getAll(q.key) : data.get(q.key)]));
    draft = createDraft(answers);
    get("advisor-answers").replaceChildren(...questions.map((q) => {
      const row = document.createElement("div");
      const values = q.multiple ? answers[q.key] : [answers[q.key]];
      row.append(textElement("dt", q.title), textElement("dd", values.map((v) => answerLabel(q.key, v)).join(", ")));
      return row;
    }));
    get("advisor-context").textContent = answers.goals.includes("open") ? "Zwei Anregungen zum Entdecken. Daraus wurden noch keine zusätzlichen Themen für dich ausgewählt." : "Aus deinen Wünschen ergeben sich diese möglichen nächsten Schritte:";
    get("advisor-ideas").replaceChildren(...draft.approaches.map((idea, i) => {
      const article = document.createElement("article");
      article.className = "advisor-idea";
      article.append(textElement("span", `ANSATZ 0${i + 1}`, "step-label"), textElement("h4", idea.title), textElement("p", idea.reason), textElement("p", idea.next, "idea-next"));
      return article;
    }));
    get("advisor-open-questions").replaceChildren(...draft.openQuestions.map((q) => textElement("li", q)));
    result.querySelector("details").open = false;
    get("advisor-copy-status").textContent = "";
    get("advisor-copy-text").hidden = true;
    form.hidden = true;
    result.hidden = false;
    get("advisor-result-title").focus();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = questions[step];
    const values = new FormData(form).getAll(question.key);
    if (!values.length) {
      showError(question.multiple ? "Bitte wähle mindestens einen Wunsch oder „Noch offen“." : "Bitte wähle eine Antwort aus.");
      panels[step].querySelector("input").focus();
      return;
    }
    if (step < 4) showStep(step + 1);
    else {
      try { renderResult(); } catch (err) { showError(err.message); }
    }
  });
  get("advisor-back").addEventListener("click", () => showStep(Math.max(0, step - 1)));
  get("advisor-edit").addEventListener("click", () => showStep(0));
  get("advisor-restart").addEventListener("click", () => {
    form.reset();
    draft = null;
    get("advisor-copy-text").value = "";
    showStep(0);
  });

  get("advisor-copy").addEventListener("click", async () => {
    if (!draft) return;
    const text = draftSummary(draft);
    try {
      await navigator.clipboard.writeText(text);
      get("advisor-copy-status").textContent = "Deine Zusammenfassung wurde kopiert.";
      get("advisor-copy-text").hidden = true;
    } catch {
      const fallback = get("advisor-copy-text");
      fallback.value = text;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      get("advisor-copy-status").textContent = "Automatisches Kopieren ist hier nicht verfügbar. Kopiere den markierten Text selbst oder speichere ihn im Planer als Datei.";
    }
  });

  function apply(value) {
    // Check everything before changing an existing planner.
    const checked = validateDraft(value);
    plannerWishes(checked);
    plannerWrapper.hidden = false;
    review.hidden = true;
    pending = null;
    planner.applyDraft(checked);
  }
  get("advisor-transfer").addEventListener("click", () => {
    if (!draft) return;
    try {
      const checked = validateDraft(draft);
      plannerWishes(checked);
      if (planner.hasDraft) {
        pending = checked;
        get("replacement-current").textContent = planner.snapshot();
        get("replacement-new").textContent = draftSummary(checked);
        review.hidden = false;
        get("replacement-title").focus();
      } else apply(checked);
    } catch (err) { get("advisor-copy-status").textContent = err.message; }
  });
  get("replacement-keep").addEventListener("click", () => {
    pending = null;
    review.hidden = true;
    plannerWrapper.querySelector('[data-step]:not([hidden]) h2').focus();
  });
  get("replacement-confirm").addEventListener("click", () => {
    if (pending) apply(pending);
  });

  return { reset() {
    form.reset();
    draft = null;
    pending = null;
    get("advisor-answers").replaceChildren();
    get("advisor-ideas").replaceChildren();
    get("advisor-open-questions").replaceChildren();
    get("advisor-copy-text").value = "";
    get("replacement-current").textContent = "";
    get("replacement-new").textContent = "";
    plannerWrapper.hidden = true;
    showStep(0, false);
  } };
}
