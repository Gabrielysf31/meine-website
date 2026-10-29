import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pages } from "../src/pages.mjs";
import { layout } from "../src/components.mjs";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const output = path.join(root, "dist");

export async function build() {
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(path.join(root, "public"), output, { recursive: true });
  for (const page of pages) {
    const filename = page.path.endsWith(".html")
      ? page.path.slice(1)
      : path.join(page.path.slice(1), "index.html");
    const target = path.join(output, filename);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, layout(page));
  }
  await writeFile(
    path.join(output, "robots.txt"),
    "User-agent: *\nDisallow: /\n",
  );
  console.log(`${pages.length} Seiten erstellt → dist/`);
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await build();
