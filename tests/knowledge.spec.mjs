import { test, expect } from '@playwright/test';

test('Wissen erschließt den ganzen Katalog über Suche, Filter und verwandte Fragen', async ({ page }) => {
  await page.goto('/wissen/');
  await expect(page.locator('[data-faq]:visible')).toHaveCount(8);
  await expect(page.locator('[data-faq]')).toHaveCount(36);
  // Mehrere Wörter werden unabhängig von der Wortreihenfolge gesucht.
  await page.getByRole('searchbox').fill('dimmen LED');
  await expect(page.locator('#frage-dimmen')).toBeVisible();
  await expect(page.locator('[data-show-all]')).toBeHidden();
  await page.getByRole('searchbox').fill('Rolladen');
  await expect(page.locator('#frage-jalousie')).toBeVisible();
  await page.getByRole('searchbox').fill('Stromausfall');
  await expect(page.locator('#frage-notstrom')).toBeVisible();
  await page.getByRole('searchbox').fill('');
  await page.getByRole('button', { name: /^Licht\s+6$/ }).click();
  await expect(page.locator('[data-faq]:visible')).toHaveCount(6);
  await page.getByRole('searchbox').fill('unbekanntxyz');
  await expect(page.locator('.empty-search')).toBeVisible();
  await page.getByRole('button', { name: 'Alle Fragen wieder anzeigen' }).click();
  await expect(page.locator('[data-faq]:visible')).toHaveCount(8);
  await page.locator('[data-show-all]').click();
  await expect(page.locator('[data-faq]:visible')).toHaveCount(36);
  await expect(page.locator('[data-faq]').nth(8).locator('summary')).toBeFocused();
  await page.getByRole('button', {name:'Weniger Fragen anzeigen'}).click();
  await expect(page.locator('[data-faq]:visible')).toHaveCount(8);
  await page.goto('/wissen/');
  await page.locator('#frage-einstieg-1 summary').click();
  const related = page.locator('#frage-einstieg-1 [data-related]').first();
  const id = await related.getAttribute('data-related');
  await related.click();
  await expect(page.locator(`#${id}`)).toHaveAttribute('open', '');
  await expect(page.locator(`#${id} summary`)).toBeFocused();
  await page.reload();
  await expect(page.locator(`#${id}`)).toHaveAttribute('open', '');
  // Die neuen Blöcke laufen auch auf schmalen Geräten nicht über.
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({width, height:900});
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('Wissen hält ohne JavaScript alle Antworten und Anschlussfragen erreichbar', async ({ browser }) => {
  const context = await browser.newContext({javaScriptEnabled:false});
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/wissen/');
  await expect(page.locator('[data-faq]:visible')).toHaveCount(36);
  await expect(page.locator('[data-show-all]')).toBeHidden();
  await page.locator('#frage-notstrom summary').click();
  await expect(page.locator('#frage-notstrom .faq-answer')).toContainText('Nein.');
  await context.close();
});
