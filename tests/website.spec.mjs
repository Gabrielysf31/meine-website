import { test, expect } from "@playwright/test";
import { pages } from "../src/pages.mjs";
import { readFile } from "node:fs/promises";

test("Alle Seiten sind erreichbar, haben eine Überschrift und laden ohne Browserfehler", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400 && !response.url().endsWith("/404.html"))
      errors.push(`${response.status()} ${response.url()}`);
  });
  for (const route of pages) {
    const response = await page.goto(route.path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    expect(response.status()).toBe(200);
  }
  expect(errors).toEqual([]);
});

test("Projektplaner validiert, behält Eingaben und exportiert ohne Versand", async ({
  page,
}) => {
  const requests = [];
  await page.goto("/anfrage/");
  page.on("request", (request) => requests.push(request));
  await page.getByRole("button", { name: "Weiter", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("Art von Zuhause");
  await page.getByRole("radio", { name: "Eigenheim" }).check();
  await page.getByRole("button", { name: "Weiter", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("mindestens ein Thema");
  await page.getByRole("checkbox", { name: "Smart Home & Vernetzung" }).check();
  await page.getByRole("button", { name: "Weiter", exact: true }).click();
  await page.getByLabel("Ort oder Postleitzahl").fill("Teststadt");
  await page
    .getByLabel("Beschreibe kurz deine Wünsche")
    .fill("Licht & Rollläden <script>alert(1)</script>");
  await page.getByRole("button", { name: "Zusammenfassung ansehen" }).click();
  await expect(page.locator("#project-summary")).toContainText("Teststadt");
  await expect(page.locator("#project-summary")).toContainText(
    "<script>alert(1)</script>",
  );
  await expect(page.locator("#project-summary script")).toHaveCount(0);
  await page.getByRole("button", { name: "Zurück" }).click();
  await expect(page.getByLabel("Ort oder Postleitzahl")).toHaveValue(
    "Teststadt",
  );
  await page.getByRole("button", { name: "Zusammenfassung ansehen" }).click();
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("button", { name: "Als Textdatei speichern" }).click();
  const download = await downloadEvent;
  expect(await readFile(await download.path(), "utf8")).toContain("Teststadt");
  expect(requests.filter((request) => request.method() !== "GET")).toHaveLength(
    0,
  );
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  expect(await page.evaluate(() => sessionStorage.length)).toBe(0);
  await page.reload();
  await expect(
    page.getByRole("radio", { name: "Eigenheim" }),
  ).not.toBeChecked();
});

test("Mobile Navigation, Dialog und Layout funktionieren auf kleinen Bildschirmen", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menü öffnen" });
  await menu.click();
  await expect(
    page.getByRole("navigation", { name: "Hauptnavigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Leistungen", exact: true })
    .click();
  await expect(page).toHaveURL(/\/leistungen\/$/);
  await page.getByRole("button", { name: /Dein Assistent/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("noch keine KI");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  for (const route of pages) {
    await page.goto(route.path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route.path,
    ).toBe(true);
  }
});

test("Wissenssuche zeigt Treffer und eine hilfreiche leere Ansicht", async ({
  page,
}) => {
  await page.goto("/wissen/");
  await page.getByRole("searchbox").fill("Renovierung");
  await expect(page.locator("[data-faq]:visible")).toHaveCount(1);
  await page.locator("[data-faq]:visible summary").click();
  await expect(page.locator("[data-faq]:visible .faq-answer")).toContainText(
    "Raumplanung",
  );
  await page.getByRole("searchbox").fill("xyzunbekannt");
  await expect(page.locator(".empty-search")).toBeVisible();
  await page.getByRole("searchbox").fill("");
  await expect(page.locator("[data-faq]:visible")).toHaveCount(6);
});

test("Smart-Home-Beispiele wechseln die Situation verständlich", async ({
  page,
}) => {
  await page.goto("/smart-home/");
  await page.getByRole("button", { name: "Feierabend", exact: true }).click();
  await expect(page.locator("[data-scene-title]")).toHaveText(
    "Zeit zum Abschalten.",
  );
  await expect(
    page.getByRole("button", { name: "Feierabend", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Unterwegs", exact: true }).click();
  await expect(page.locator("[data-scene-light]")).toHaveText(
    "Gewählte Lichter aus",
  );
});

test("Inhalte und Antworten bleiben auch ohne JavaScript erreichbar", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/wissen/");
  await page
    .getByText("Brauche ich für alles eine App?", { exact: true })
    .click();
  await expect(
    page.getByText("Eine App ist eine mögliche Ergänzung.", { exact: false }),
  ).toBeVisible();
  await page.goto("http://127.0.0.1:4173/anfrage/");
  await expect(
    page.getByText("Der interaktive Projektplaner benötigt JavaScript.", {
      exact: false,
    }),
  ).toBeVisible();
  await context.close();
});
