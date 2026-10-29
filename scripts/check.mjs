import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { pages } from "../src/pages.mjs";
import { build, output } from "./build.mjs";

await build();
const pagePaths = new Set(pages.map((page) => page.path));
let links = 0;
for (const page of pages) {
  const filename = page.path.endsWith(".html")
    ? page.path.slice(1)
    : path.join(page.path.slice(1), "index.html");
  const html = await readFile(path.join(output, filename), "utf8");
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    `${page.path}: genau eine Hauptüberschrift`,
  );
  assert.ok(html.includes('lang="de"'), `${page.path}: Sprache fehlt`);
  assert.ok(
    html.includes("noindex, nofollow"),
    `${page.path}: Entwurfskennzeichnung fehlt`,
  );
  for (const [, attr, url] of html.matchAll(/\b(href|src)="([^"#]+)"/g)) {
    if (!url.startsWith("/")) continue;
    links++;
    if (attr === "href" && pagePaths.has(url)) continue;
    assert.ok(
      (await stat(path.join(output, url))).isFile(),
      `${page.path}: Ziel fehlt: ${url}`,
    );
  }
}
console.log(`${pages.length} Seiten und ${links} interne Verweise geprüft.`);
