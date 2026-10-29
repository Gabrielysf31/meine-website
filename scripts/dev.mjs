import { createServer } from "node:http";
import { stat, readFile } from "node:fs/promises";
import path from "node:path";
import { build, output } from "./build.mjs";

await build();
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".txt": "text/plain; charset=utf-8",
};
const server = createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" });
      return response.end();
    }
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let target = path.resolve(output, "." + pathname);
    if (target !== output && !target.startsWith(output + path.sep)) {
      response.writeHead(403);
      return response.end("Kein Zugriff");
    }
    let status = 200;
    try {
      const entry = await stat(target);
      if (entry.isDirectory()) {
        if (!pathname.endsWith("/")) {
          const url = new URL(request.url, "http://localhost");
          response.writeHead(308, {
            Location: url.pathname + "/" + url.search,
          });
          return response.end();
        }
        target = path.join(target, "index.html");
      }
      await stat(target);
    } catch {
      status = 404;
      target = path.join(output, "404.html");
    }
    const body = await readFile(target);
    response.writeHead(status, {
      "Content-Type": mime[path.extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(400);
    response.end("Ungültige Anfrage");
  }
});
server.on("error", (error) => {
  console.error(`Vorschau konnte nicht starten: ${error.message}`);
  process.exit(1);
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Lokale Vorschau: http://localhost:${port}`),
);
