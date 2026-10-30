import { test, expect } from "@playwright/test";

for (const [device, width] of [["Desktop", 1440], ["Mobil", 375]]) {
  test(`Jalousien reagieren einzeln und gemeinsam auf ${device}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/smart-home/");
    const requests = [];
    page.on("request", request => requests.push(request.resourceType()));
    const demo = page.locator("#jalousien");
    const living = demo.getByRole("group", { name: "Wohnzimmer", exact: true });
    const kitchen = demo.getByRole("group", { name: "Küche", exact: true });
    const bedroom = demo.getByRole("group", { name: "Schlafzimmer", exact: true });
    const windows = demo.locator("[data-shade-room]");

    await living.getByRole("button", { name: "Schließen", exact: true }).click();
    await expect(demo.locator("#shade-wohnen")).toHaveAccessibleName(/Jalousie geschlossen, wenig Tageslicht/);
    await expect(demo.locator("#shade-wohnen .shade-slats")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
    await expect(demo.locator("#shade-wohnen .shade-daylight")).toHaveCSS("opacity", "0.035");
    await expect(kitchen.getByRole("button", { name: "Öffnen", exact: true })).toHaveAttribute("aria-pressed", "true");
    await expect(bedroom.getByRole("button", { name: "Öffnen", exact: true })).toHaveAttribute("aria-pressed", "true");

    await kitchen.getByRole("button", { name: "Halb", exact: true }).click();
    await expect(demo.locator("#shade-kueche")).toHaveAccessibleName(/halb geschlossen/);
    await expect(demo.locator("#shade-kueche .shade-daylight")).toHaveCSS("opacity", "0.24");
    await expect(demo.getByRole("status")).toHaveText("Wohnzimmer: geschlossen. Küche: halb geschlossen. Schlafzimmer: offen.");

    await demo.getByRole("button", { name: "Alle schließen", exact: true }).click();
    await expect(demo.getByRole("status")).toHaveText("Alle drei Jalousien sind geschlossen.");
    for (const room of await windows.all()) await expect(room).toHaveAttribute("data-position", "closed");
    await expect(kitchen.getByRole("button", { name: "Schließen", exact: true })).toHaveAttribute("aria-pressed", "true");

    const openBedroom = bedroom.getByRole("button", { name: "Öffnen", exact: true });
    await openBedroom.focus();
    await page.keyboard.press("Space");
    await expect(demo.locator("#shade-schlafen")).toHaveAttribute("data-position", "open");
    if (device === "Mobil") await expect(demo.locator("#shade-schlafen .shade-window")).toBeInViewport();
    await expect(demo.locator("#shade-wohnen")).toHaveAttribute("data-position", "closed");
    await expect(demo.getByRole("button", { name: "Alle schließen", exact: true })).toHaveAttribute("aria-pressed", "false");

    await demo.getByRole("button", { name: "Alle öffnen", exact: true }).click();
    await expect(demo.getByRole("status")).toHaveText("Alle drei Jalousien sind offen.");
    for (const room of await windows.all()) await expect(room).toHaveAttribute("data-position", "open");
    expect(requests.filter(type => ["fetch", "xhr", "websocket"].includes(type))).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.reload();
    await expect(demo.getByRole("status")).toHaveText("Alle drei Jalousien sind offen.");
  });
}

test("Das Lichtspiel lässt sich pausieren und respektiert reduzierte Bewegung", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const hero = page.locator("[data-hero-ambience]");
  const state = () => page.locator(".hero-glow").evaluate(element => {
    const style = getComputedStyle(element, "::before");
    return { animation: style.animationName, state: style.animationPlayState };
  });
  await expect.poll(state).toEqual({ animation: "hero-light-drift", state: "running" });
  await page.getByRole("button", { name: "Lichtspiel pausieren" }).click();
  await expect.poll(state).toEqual({ animation: "hero-light-drift", state: "paused" });
  await page.getByRole("button", { name: "Lichtspiel fortsetzen" }).click();
  await expect.poll(state).toEqual({ animation: "hero-light-drift", state: "running" });
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect(hero).toHaveAttribute("data-ambience-visible", "false");
  await expect.poll(state).toEqual({ animation: "hero-light-drift", state: "paused" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(async () => (await state()).animation).toBe("none");
  await expect(page.locator("[data-ambience-toggle]")).toBeHidden();
  await page.goto("/smart-home/");
  await expect(page.locator(".shade-slats").first()).toHaveCSS("transition-duration", "0s");
  await page.getByRole("button", { name: "Alle schließen", exact: true }).click();
  await expect(page.locator("#shade-wohnen .shade-slats")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
});

test("Lichtspiel und Jalousien bleiben ohne JavaScript verständlich", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4173/");
    await expect(page.locator("[data-ambience-toggle]")).toBeHidden();
    expect(await page.locator(".hero-glow").evaluate(element => getComputedStyle(element, "::before").animationName)).toBe("none");
    await page.goto("http://127.0.0.1:4173/smart-home/");
    await expect(page.locator(".shading-phone")).toBeHidden();
    await expect(page.getByText("Zum Ausprobieren der Jalousien benötigst du JavaScript.", { exact: false })).toBeVisible();
    await expect(page.locator("#jalousien").getByRole("img", { name: /Jalousie offen/ })).toHaveCount(3);
  } finally {
    await context.close();
  }
});
