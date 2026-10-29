document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

function closeMenu() {
  navigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Menü öffnen");
}
menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Menü schließen" : "Menü öffnen",
  );
  navigation.classList.toggle("is-open", isOpen);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
window.addEventListener(
  "scroll",
  () =>
    document
      .querySelector(".site-header")
      ?.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true },
);

const assistant = document.querySelector("#assistant-dialog");
document.querySelector(".assistant-trigger")?.addEventListener("click", () => {
  closeMenu();
  assistant.showModal();
});
document
  .querySelector("[data-close-dialog]")
  ?.addEventListener("click", () => assistant.close());
assistant?.addEventListener("click", (event) => {
  if (event.target === assistant) {
    const rect = assistant.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      assistant.close();
  }
});

const faqSearch = document.querySelector("#faq-search");
faqSearch?.addEventListener("input", () => {
  const normalize = (text) =>
    text
      .toLocaleLowerCase("de")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/ß/g, "ss");
  const query = normalize(faqSearch.value.trim());
  const entries = [...document.querySelectorAll("[data-faq]")];
  let count = 0;
  for (const entry of entries) {
    const matches = normalize(
      entry.textContent + " " + entry.dataset.keywords,
    ).includes(query);
    entry.hidden = !matches;
    if (matches) count++;
  }
  document.querySelector("#faq-status").textContent = query
    ? `${count} ${count === 1 ? "Antwort" : "Antworten"} gefunden`
    : "";
  document.querySelector(".empty-search").hidden = count > 0;
});

const sceneData = document.querySelector("#scene-data");
if (sceneData) {
  const scenes = JSON.parse(sceneData.textContent);
  for (const button of document.querySelectorAll("[data-scene]")) {
    button.addEventListener("click", () => {
      const scene = scenes[button.dataset.scene];
      for (const tab of document.querySelectorAll("[data-scene]"))
        tab.setAttribute("aria-pressed", String(tab === button));
      for (const key of ["title", "text", "light", "blinds", "heating"])
        document.querySelector(`[data-scene-${key}]`).textContent = scene[key];
    });
  }
}

const projectForm = document.querySelector("#project-form");
if (projectForm) {
  document.querySelector("[data-planner-fallback]").hidden = true;
  projectForm.hidden = false;
  let step = 0;
  let summaryText = "";
  const stepPanels = [...projectForm.querySelectorAll("[data-step]")];
  const nextButton = document.querySelector("#next-step");
  const previousButton = document.querySelector("#previous-step");
  const error = document.querySelector("#form-error");

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
    const summary = document.querySelector("#project-summary");
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
    document.querySelector("#copy-status").textContent = "";
  }

  function showStep(target) {
    step = target;
    error.hidden = true;
    stepPanels.forEach((panel, index) => {
      panel.hidden = index !== step;
    });
    document.querySelectorAll("[data-progress]").forEach((item, index) => {
      if (index === step) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    document.querySelector("[data-step-label]").textContent =
      `SCHRITT 0${step + 1} VON 03`;
    previousButton.hidden = step === 0;
    nextButton.hidden = step === 2;
    nextButton.firstChild.textContent =
      step === 1 ? "Zusammenfassung ansehen" : "Weiter";
    if (step === 2) buildSummary();
    stepPanels[step].querySelector("h2").focus();
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
  document
    .querySelector("#copy-summary")
    .addEventListener("click", async () => {
      const status = document.querySelector("#copy-status");
      try {
        await navigator.clipboard.writeText(summaryText);
        status.textContent = "Deine Zusammenfassung wurde kopiert.";
      } catch {
        status.textContent =
          "Kopieren ist hier nicht verfügbar. Du kannst die Zusammenfassung als Textdatei speichern.";
      }
    });
  document.querySelector("#download-summary").addEventListener("click", () => {
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
}
