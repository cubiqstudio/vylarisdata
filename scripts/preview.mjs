// Kleiner statischer Server für den fertigen Export (out/): npm run build && npm run preview
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml",
};

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  let p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, p);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
  } catch {
    file = extname(file) ? file : join(root, p, "index.html");
  }
  try {
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    const nf = await readFile(join(root, "404.html")).catch(() => Buffer.from("404"));
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(nf);
  }
}).listen(port, () => console.log(`Vorschau: http://localhost:${port}`));
