const positions = {
  open: { label: "Offen", description: "Jalousie offen, viel Tageslicht." },
  half: { label: "Halb geschlossen", description: "Jalousie halb geschlossen, gedämpftes Tageslicht." },
  closed: { label: "Geschlossen", description: "Jalousie geschlossen, wenig Tageslicht." },
};

export function initShadingDemo(root) {
  if (!root) return;
  const rooms = [...root.querySelectorAll("[data-shade-room]")];
  const controls = [...root.querySelectorAll("[data-shade-control]")];

  function setPosition(room, position) {
    const control = controls.find(item => item.dataset.shadeControl === room.dataset.shadeRoom);
    const name = control.querySelector("legend").textContent;
    room.dataset.position = position;
    room.setAttribute("aria-label", `${name}: ${positions[position].description}`);
    room.querySelector("[data-shade-label]").textContent = positions[position].label;
    control.querySelector("[data-shade-state]").textContent = positions[position].label;
    for (const button of control.querySelectorAll("[data-shade-choice]")) {
      button.setAttribute("aria-pressed", String(button.dataset.shadeChoice === position));
    }
  }

  function updateSummary() {
    const all = rooms.every(room => room.dataset.position === rooms[0].dataset.position);
    const state = rooms[0].dataset.position;
    root.querySelector("[data-shade-status]").textContent = all
      ? `Alle drei Jalousien sind ${positions[state].label.toLocaleLowerCase("de")}.`
      : controls.map((control, i) => `${control.querySelector("legend").textContent}: ${positions[rooms[i].dataset.position].label.toLocaleLowerCase("de")}`).join(". ") + ".";
    for (const button of root.querySelectorAll("[data-shade-all]")) {
      button.setAttribute("aria-pressed", String(all && state === button.dataset.shadeAll));
    }
  }

  root.addEventListener("click", event => {
    const button = event.target.closest("[data-shade-choice], [data-shade-all]");
    if (!button) return;
    if (button.hasAttribute("data-shade-all")) {
      for (const room of rooms) setPosition(room, button.dataset.shadeAll);
    } else {
      const control = button.closest("[data-shade-control]");
      const room = rooms.find(item => item.dataset.shadeRoom === control.dataset.shadeControl);
      setPosition(room, button.dataset.shadeChoice);
    }
    updateSummary();
  });
}

export function initHeroAmbience(root) {
  if (!root) return;
  const button = root.querySelector("[data-ambience-toggle]");
  button.addEventListener("click", () => {
    const paused = root.dataset.ambiencePaused !== "true";
    root.dataset.ambiencePaused = String(paused);
    button.setAttribute("aria-pressed", String(paused));
    button.querySelector("[data-ambience-label]").textContent = paused ? "Lichtspiel fortsetzen" : "Lichtspiel pausieren";
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.ambienceVisible = String(entry.isIntersecting);
    });
    observer.observe(root);
  }
  function updateVisibility() {
    root.dataset.pageHidden = String(document.hidden);
  }
  updateVisibility();
  document.addEventListener("visibilitychange", updateVisibility);
}
