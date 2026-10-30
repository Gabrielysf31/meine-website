import { test, expect } from '@playwright/test';

test('Galerien wechseln mit Text, laufen in beide Richtungen im Kreis und bleiben unabhängig', async ({ page }) => {
  await page.goto('/inspiration/');
  const galleries = page.locator('[data-gallery]');
  await expect(galleries).toHaveCount(4);
  for (const gallery of await galleries.all()) {
    const status = gallery.getByRole('status');
    const count = await gallery.locator('[data-gallery-dot]').count();
    await expect(status).toHaveText(`1 / ${count}`);
    await gallery.getByRole('button', { name: 'Vorheriges Bild', exact: true }).click();
    await expect(status).toHaveText(`${count} / ${count}`);
    await gallery.getByRole('button', { name: 'Nächstes Bild', exact: true }).click();
    await expect(status).toHaveText(`1 / ${count}`);
    await gallery.getByRole('button', { name: /^Bild 2:/ }).click();
    await expect(status).toHaveText(`2 / ${count}`);
    const active = gallery.locator('.gallery-slide[aria-hidden="false"]');
    await expect(active.locator('h3')).not.toBeEmpty();
    await expect(active.locator('figcaption p')).not.toBeEmpty();
    await expect(active.locator('img')).toBeVisible();
    await expect.poll(() => active.locator('img').evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  const first = galleries.first();
  await first.locator('.gallery-track').focus();
  await page.keyboard.press('End');
  await expect(first.getByRole('status')).toHaveText('3 / 3');
  await page.keyboard.press('ArrowRight');
  await expect(first.getByRole('status')).toHaveText('1 / 3');
  await page.keyboard.press('ArrowLeft');
  await expect(first.getByRole('status')).toHaveText('3 / 3');
  await expect(galleries.nth(1).getByRole('status')).toHaveText('2 / 3');
});

test('Seitliches Scrollen, Größenwechsel und reduzierte Bewegung erhalten das passende Bild', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/inspiration/');
  const gallery = page.locator('[data-gallery]').first();
  const track = gallery.locator('.gallery-track');
  // Native scrolling is the same path used by a touch swipe or trackpad.
  await track.evaluate(el => el.scrollBy({ left: el.clientWidth, behavior: 'instant' }));
  await expect(gallery.getByRole('status')).toHaveText('2 / 3');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect.poll(() => track.evaluate(el => Math.round(el.scrollLeft / el.clientWidth))).toBe(2);
  await gallery.getByRole('button', { name: 'Nächstes Bild', exact: true }).click();
  await expect(gallery.getByRole('status')).toHaveText('3 / 3');
  await track.evaluate(el => el.scrollBy({ left: el.clientWidth, behavior: 'instant' }));
  await expect(gallery.getByRole('status')).toHaveText('1 / 3');
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('Ohne JavaScript bleiben alle dreizehn Motive mit Erklärungen seitlich erreichbar', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto('/inspiration/');
  await expect(page.locator('.gallery-slide')).toHaveCount(13);
  await expect(page.locator('.gallery-controls:visible')).toHaveCount(0);
  const track = page.locator('.gallery-track').first();
  await track.scrollIntoViewIfNeeded();
  await track.hover();
  await page.mouse.wheel(800, 0);
  await expect.poll(() => track.evaluate(el => Math.round(el.scrollLeft / el.clientWidth))).toBe(2);
  await expect(track.locator('figure').last().locator('h3')).toBeInViewport();
  await context.close();
});
