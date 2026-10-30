import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { validateDraft, topics } from '../public/assets/project-draft.js';

test('Wünsche wechseln mit Inhalt nach oben, ohne beim Schreiben zu springen', async ({ page }) => {
  await page.goto('/anfrage/');
  const wishes = page.getByLabel('Beschreibe kurz deine Wünsche');
  const isBeforeTopics = () => page.locator('[data-wishes-block]').evaluate(el => {
    const topics = document.querySelector('[name="topics"]').closest('fieldset');
    return Boolean(el.compareDocumentPosition(topics) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(await isBeforeTopics()).toBe(false);
  await wishes.fill('Warmes Licht für den Esstisch.');
  expect(await isBeforeTopics()).toBe(false);
  await expect(wishes).toBeFocused();
  await page.locator('#step-one-title').focus();
  expect(await isBeforeTopics()).toBe(true);
  await expect(page.locator('[data-planner-preview="wishes"]')).toHaveText('Warmes Licht für den Esstisch.');
  await wishes.fill('   ');
  expect(await isBeforeTopics()).toBe(true);
  await page.locator('#step-one-title').focus();
  expect(await isBeforeTopics()).toBe(false);
  await expect(page.locator('[data-planner-preview="wishes"]')).toHaveText('Was möchtest du zu Hause verändern?');
});

test('Planungsstand und Prioritäten bleiben bearbeitbar und stehen im Export', async ({ page }) => {
  await page.goto('/anfrage/');
  await page.getByRole('radio', { name: 'Eigenheim', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Licht & Wohnkomfort', exact: true }).check();
  await expect(page.locator('[data-planner-preview="building"]')).toHaveText('Eigenheim');
  await expect(page.locator('[data-planner-preview="topics"]')).toHaveText('Licht & Wohnkomfort');
  await page.getByRole('button', { name: 'Weiter', exact: true }).click();
  await page.getByRole('radio', { name: 'Es gibt schon Pläne', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Einfach bedienen', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Später erweitern können', exact: true }).check();
  await page.getByRole('button', { name: 'Zusammenfassung ansehen' }).click();
  await expect(page.locator('#project-summary')).toContainText('Es gibt schon Pläne');
  await expect(page.locator('#project-summary')).toContainText('Einfach bedienen, Später erweitern können');
  const downloading = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Als Textdatei speichern' }).click();
  const download = await downloading;
  const text = await readFile(await download.path(), 'utf8');
  expect(text).toContain('Stand deiner Idee\nEs gibt schon Pläne');
  expect(text).toContain('Das ist dir wichtig\nEinfach bedienen, Später erweitern können');
  await page.getByRole('button', { name: 'Zurück', exact: true }).click();
  await expect(page.getByRole('radio', { name: 'Es gibt schon Pläne', exact: true })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Später erweitern können', exact: true }).uncheck();
  await page.getByRole('button', { name: 'Zusammenfassung ansehen' }).click();
  await expect(page.locator('#project-summary')).not.toContainText('Später erweitern können');
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('Gemeinsames Entwurfsformat akzeptiert optionale Chatangaben und lehnt unbekannte Werte ab', () => {
  const draft = { version: 1, source: 'assistant', building: 'Eigenheim', topics: [topics.light], timeline: '', location: '', wishes: ['Gemütliches Licht'], approaches: [], openQuestions: [] };
  expect(validateDraft(draft)).toEqual(draft);
  const extended = { ...draft, planningStage: 'plans', priorities: ['simple', 'expandable'] };
  expect(validateDraft(extended)).toEqual(extended);
  expect(() => validateDraft({ ...extended, planningStage: {} })).toThrow();
  expect(() => validateDraft({ ...extended, priorities: ['erfunden'] })).toThrow();
  expect(() => validateDraft({ ...extended, priorities: ['simple', 'simple'] })).toThrow();
});
