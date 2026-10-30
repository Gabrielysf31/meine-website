import { initProjectPlanner } from "./planner.js";
import { initAdvisor } from "./advisor.js";
import { initShadingDemo, initHeroAmbience } from "./smart-demos.js";

document.documentElement.classList.add("js");
initShadingDemo(document.querySelector("[data-shading-demo]"));
initHeroAmbience(document.querySelector("[data-hero-ambience]"));

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
document.querySelectorAll(".assistant-trigger, [data-open-assistant]").forEach((trigger) => trigger.addEventListener("click", () => {
  closeMenu();
  assistant.showModal();
}));
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

const sceneData = document.querySelector("#scene-data");
if (sceneData) {
  const scenes = JSON.parse(sceneData.textContent);
  const room = document.querySelector(".light-room");
  const mobileRoom = window.matchMedia("(max-width: 680px)");
  function positionRoom() {
    if (mobileRoom.matches) document.querySelector(".light-controls").before(room);
    else document.querySelector(".scene-intro small").before(room);
  }
  positionRoom();
  mobileRoom.addEventListener("change", positionRoom);
  const lightLabels = { warm: "Einladend & warm", dim: "Warm & gedimmt", off: "Gewählte Lichter aus" };
  function setLight(mode) {
    room.dataset.light = mode;
    room.setAttribute("aria-label", "Wohnraum mit zwei Lampen " + (room.dataset.time === "day" ? "bei Tageslicht" : "in der Abenddämmerung") + ": " + lightLabels[mode]);
    document.querySelector("[data-scene-light]").textContent = lightLabels[mode];
    document.querySelectorAll("[data-light-choice]").forEach((choice) => choice.setAttribute("aria-pressed", String(choice.dataset.lightChoice === mode)));
  }
  document.querySelectorAll("[data-light-choice]").forEach((choice) => choice.addEventListener("click", () => setLight(choice.dataset.lightChoice)));
  for (const button of document.querySelectorAll("[data-scene]")) {
    button.addEventListener("click", () => {
      const scene = scenes[button.dataset.scene];
      room.dataset.time = button.dataset.scene === "ankommen" ? "day" : "dusk";
      setLight({ ankommen: "warm", feierabend: "dim", unterwegs: "off" }[button.dataset.scene]);
      for (const tab of document.querySelectorAll("[data-scene]"))
        tab.setAttribute("aria-pressed", String(tab === button));
      for (const key of ["title", "text", "light", "blinds", "heating"])
        document.querySelector(`[data-scene-${key}]`).textContent = scene[key];
    });
  }
}

const planner = initProjectPlanner(document.querySelector("#project-form"));
const advisor = initAdvisor(planner);
window.addEventListener("pagehide", () => {
  planner?.reset();
  advisor?.reset();
});
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    planner?.reset();
    advisor?.reset();
  }
});
