import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(projectRoot, "dist");
const serverEntry = path.join(projectRoot, ".prerender", "entry-server.js");
const headOutlet = "<!--app-head-->";
const appOutlet = "<!--app-html-->";
const defaultTitle = "<title>J&J Motors Garage</title>";

const template = await readFile(path.join(distDirectory, "index.html"), "utf8");

if (
  !template.includes(headOutlet) ||
  !template.includes(appOutlet) ||
  !template.includes(defaultTitle)
) {
  throw new Error("The prerender outlets are missing from the built HTML template.");
}

const { PUBLIC_PATHS, render } = await import(pathToFileURL(serverEntry).href);

if (!Array.isArray(PUBLIC_PATHS) || PUBLIC_PATHS.length === 0) {
  throw new Error("No public routes were provided to the prerenderer.");
}

for (const route of PUBLIC_PATHS) {
  const { appHtml, headHtml } = render(route);
  const html = template
    .replace(defaultTitle, "")
    .replace(headOutlet, headHtml)
    .replace(appOutlet, appHtml);
  const outputPath =
    route === "/"
      ? path.join(distDirectory, "index.html")
      : path.join(distDirectory, route.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Prerendered ${route}`);
}
