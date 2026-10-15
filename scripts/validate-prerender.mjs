import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(projectRoot, "dist");
const siteUrl = "https://www.jjmotorsgarage.es";
const serverEntry = path.join(projectRoot, ".prerender", "entry-server.js");
const { PUBLIC_PATHS } = await import(pathToFileURL(serverEntry).href);

const expectedSchemas = new Map([
  ["/", ["AutoRepair", "Organization"]],
  ["/servicios", ["AutoRepair", "FAQPage"]],
  ["/contacto", ["AutoRepair"]],
  ["/ubicacion", ["AutoRepair"]],
  ["/sobre-nosotros", ["AutoRepair"]],
  ["/aviso-legal", ["AutoRepair"]],
  ["/privacidad", ["AutoRepair"]],
  ["/cookies", ["AutoRepair"]],
]);

const expectedMetadata = new Map([
  [
    "/",
    {
      title: "Taller Mecánico en Castellón | J&J Motors Garage",
      description:
        "Taller mecánico en Castellón especializado en mantenimiento, reparación, frenos, suspensión y diagnosis electrónica. Servicio profesional, rápido y transparente.",
    },
  ],
  [
    "/servicios",
    {
      title:
        "Servicios de Mecánica en Castellón | Frenos, Aceite, Neumáticos y Diagnosis",
      description:
        "Reparación de frenos, cambio de aceite, suspensión, neumáticos y diagnosis electrónica en Castellón. Mecánicos expertos, servicio rápido y transparente.",
    },
  ],
  [
    "/contacto",
    {
      title:
        "Contacto | Taller Mecánico en Castellón | WhatsApp, Mapa, Teléfono y Dirección",
      description:
        "Contacta con J&J Motors Garage en Castellón. Teléfono, WhatsApp, horario y dirección. Resolvemos cualquier duda sobre tu vehículo.",
    },
  ],
  [
    "/ubicacion",
    {
      title:
        "Taller Mecánico en Castellón | Ubicación y Cómo Llegar | J&J Motors Garage",
      description:
        "Visítanos en Av. de Europa 217, Castellón. Taller de fácil acceso con aparcamiento en la entrada. Cómo llegar, horario y contacto.",
    },
  ],
  [
    "/sobre-nosotros",
    {
      title:
        "Sobre Nosotros | Taller Mecánico de Confianza en Castellón | J&J Motors Garage",
      description:
        "Conócenos. Taller mecánico en Castellón con años de experiencia en mantenimiento, reparación y diagnosis electrónica. Honestidad, profesionalidad y pasión por el motor.",
    },
  ],
  [
    "/aviso-legal",
    {
      title: "Aviso Legal | J&J Motors Garage",
      description:
        "Aviso legal del sitio web de J&J Motors Garage, taller mecánico en Castellón.",
    },
  ],
  [
    "/privacidad",
    {
      title: "Política de Privacidad | J&J Motors Garage",
      description:
        "Política de privacidad de J&J Motors Garage según el RGPD y LOPDGDD.",
    },
  ],
  [
    "/cookies",
    {
      title: "Política de Cookies | J&J Motors Garage",
      description: "Política de cookies conforme a la normativa española y RGPD.",
    },
  ],
]);

function outputPathFor(route) {
  return route === "/"
    ? path.join(distDirectory, "index.html")
    : path.join(distDirectory, route.slice(1), "index.html");
}

function countMatches(html, expression) {
  return [...html.matchAll(expression)].length;
}

function extractSchemas(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    ([, json]) => JSON.parse(json),
  );
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const sitemap = await readFile(path.join(projectRoot, "public", "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
const expectedUrls = PUBLIC_PATHS.map((route) => `${siteUrl}${route}`);

assert.deepEqual(
  sitemapUrls.sort(),
  expectedUrls.sort(),
  "Every sitemap URL must correspond to one prerendered public route.",
);

for (const route of PUBLIC_PATHS) {
  const html = await readFile(outputPathFor(route), "utf8");
  const canonicalUrl = `${siteUrl}${route}`;
  const metadata = expectedMetadata.get(route);
  const schemas = extractSchemas(html);
  const schemaTypes = schemas.map((schema) => schema["@type"]);
  const localBusiness = schemas.find((schema) => schema["@type"] === "AutoRepair");
  const organization = schemas.find((schema) => schema["@type"] === "Organization");

  assert(!html.includes("<!--app-head-->"), `${route} still has a head outlet.`);
  assert(!html.includes("<!--app-html-->"), `${route} still has an app outlet.`);
  assert.match(html, /<html lang="es-ES">/, `${route} must declare Spanish (Spain).`);
  assert.match(html, /<h1[\s>]/, `${route} does not contain rendered page content.`);
  assert.equal(countMatches(html, /<title[\s>]/g), 1, `${route} must have one title.`);
  assert.match(
    html,
    new RegExp(`<title[^>]*>${escapeHtml(metadata.title)}</title>`),
    `${route} has an incorrect title.`,
  );
  assert.equal(
    countMatches(html, /<meta[^>]+name="description"/g),
    1,
    `${route} must have one meta description.`,
  );
  assert(
    html.includes(`content="${escapeHtml(metadata.description)}"`),
    `${route} has an incorrect meta description.`,
  );
  assert.equal(
    countMatches(html, /<link[^>]+rel="canonical"/g),
    1,
    `${route} must have one canonical URL.`,
  );
  assert(
    html.includes(`href="${canonicalUrl}"`),
    `${route} has an incorrect canonical URL.`,
  );
  assert(
    html.includes(`${siteUrl}/img/logo.jpg`),
    `${route} has an incorrect default Open Graph image URL.`,
  );
  assert.deepEqual(schemaTypes, expectedSchemas.get(route), `${route} has unexpected structured data.`);
  assert.equal(localBusiness["@id"], `${siteUrl}/#business`, `${route} has an incorrect business schema ID.`);
  assert.equal(localBusiness.url, siteUrl, `${route} has an incorrect business schema URL.`);
  assert.equal(localBusiness.image, `${siteUrl}/img/hero.jpg`, `${route} has an incorrect business image URL.`);
  assert.deepEqual(
    localBusiness.sameAs,
    ["https://maps.app.goo.gl/cobSHjEwXnWz5mtq8"],
    `${route} has an incorrect business Maps URL.`,
  );

  if (organization) {
    assert.equal(organization["@id"], `${siteUrl}/#organization`, "Homepage organization schema has an incorrect ID.");
    assert.equal(organization.url, siteUrl, "Homepage organization schema has an incorrect URL.");
    assert.equal(organization.logo, `${siteUrl}/img/logo.jpg`, "Homepage organization schema has an incorrect logo URL.");
  }
}

console.log(`Validated ${PUBLIC_PATHS.length} prerendered routes and sitemap coverage.`);
