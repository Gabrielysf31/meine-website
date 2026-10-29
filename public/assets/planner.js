import { validateDraft, plannerWishes } from "./project-draft.js";

export function initProjectPlanner(projectForm) {
  if (!projectForm) return null;
  const root = projectForm.closest(".planner-layout");
  projectForm.autocomplete = "off";
  projectForm.reset();
  let hasDraft = false;
  projectForm.addEventListener("input", () => { hasDraft = true; });
  projectForm.addEventListener("change", () => { hasDraft = true; });

  root.querySelector("[data-planner-fallback]").hidden = true;
  projectForm.hidden = false;
  let step = 0;
  let summaryText = "";
  const stepPanels = [...projectForm.querySelectorAll("[data-step]")];
  const nextButton = root.querySelector("#next-step");
  const previousButton = root.querySelector("#previous-step");
  const error = root.querySelector("#form-error");

  function buildSummary() {
    const data = new FormData(projectForm);
    const rows = [
      ["Dein Zuhause", data.get("building")],
      ["Deine Themen", data.getAll("topics").join(", ")],
      ["Zeitraum", data.get("timeline")],
      ["Ort / Postleitzahl", data.get("location").trim() || "Noch offen"],
      [
        "Deine Wünsche",
        data.get("wishes").trim() || "Noch keine weiteren Angaben",
      ],
    ];
    const summary = root.querySelector("#project-summary");
    summary.replaceChildren();
    for (const [label, value] of rows) {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const definition = document.createElement("dd");
      term.textContent = label;
      definition.textContent = value;
      row.append(term, definition);
      summary.append(row);
    }
    summaryText =
      "MEINE PROJEKTIDEE\n\n" +
      rows.map(([label, value]) => `${label}\n${value}`).join("\n\n") +
      "\n\nPrivater Website-Entwurf. Nicht versendet; kein Auftrag.\n";
    root.querySelector("#copy-status").textContent = "";
  }

  function showStep(target, focus = true) {
    step = target;
    error.hidden = true;
    stepPanels.forEach((panel, index) => {
      panel.hidden = index !== step;
    });
    root.querySelectorAll("[data-progress]").forEach((item, index) => {
      if (index === step) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    root.querySelector("[data-step-label]").textContent =
      `SCHRITT 0${step + 1} VON 03`;
    previousButton.hidden = step === 0;
    nextButton.hidden = step === 2;
    nextButton.firstChild.textContent =
      step === 1 ? "Zusammenfassung ansehen" : "Weiter";
    if (step === 2) buildSummary();
    if (focus) stepPanels[step].querySelector("h2").focus();
  }

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (step === 0) {
      const building = projectForm.querySelector('[name="building"]:checked');
      const topics = projectForm.querySelector('[name="topics"]:checked');
      if (!building || !topics) {
        error.textContent = !building
          ? "Bitte wähle zuerst aus, um welche Art von Zuhause es geht."
          : "Bitte wähle mindestens ein Thema für dein Vorhaben aus.";
        error.hidden = false;
        const firstField = projectForm.querySelector(
          !building ? '[name="building"]' : '[name="topics"]',
        );
        firstField.focus();
        return;
      }
    }
    if (step < 2) showStep(step + 1);
  });
  previousButton.addEventListener("click", () =>
    showStep(Math.max(0, step - 1)),
  );
  root
    .querySelector("#copy-summary")
    .addEventListener("click", async () => {
      const status = root.querySelector("#copy-status");
      try {
        await navigator.clipboard.writeText(summaryText);
        status.textContent = "Deine Zusammenfassung wurde kopiert.";
      } catch {
        status.textContent =
          "Kopieren ist hier nicht verfügbar. Du kannst die Zusammenfassung als Textdatei speichern.";
      }
    });
  root.querySelector("#download-summary").addEventListener("click", () => {
    const url = URL.createObjectURL(
      new Blob([summaryText], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "meine-projektidee.txt";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  function snapshot() {
    const data = new FormData(projectForm);
    return ["Dein Zuhause: " + (data.get("building") || "Noch offen"), "Deine Themen: " + (data.getAll("topics").join(", ") || "Noch offen"), "Zeitraum: " + data.get("timeline"), "Ort: " + (data.get("location") || "Noch offen"), "Deine Wünsche:\n" + (data.get("wishes") || "Noch offen")].join("\n\n");
  }
  function reset() {
    projectForm.reset();
    hasDraft = false;
    summaryText = "";
    root.querySelector("#project-summary").replaceChildren();
    root.querySelector("#copy-status").textContent = "";
    showStep(0, false);
  }
  function applyDraft(value) {
    const draft = validateDraft(value);
    const wishes = plannerWishes(draft);
    reset();
    for (const input of projectForm.querySelectorAll('[name="building"]')) input.checked = input.value === draft.building;
    for (const input of projectForm.querySelectorAll('[name="topics"]')) input.checked = draft.topics.includes(input.value);
    projectForm.elements.namedItem("timeline").value = draft.timeline || "Ich möchte mich erst orientieren";
    projectForm.elements.namedItem("location").value = draft.location;
    projectForm.elements.namedItem("wishes").value = wishes;
    hasDraft = true;
    showStep(0);
  }
  return { applyDraft, snapshot, reset, get hasDraft() { return hasDraft; } };
}
