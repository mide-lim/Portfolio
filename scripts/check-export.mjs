import { readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

const output = path.resolve("out");
const routes = [
  "/",
  "/about/",
  "/portfolio/",
  "/blog/",
  "/services/",
  "/design-system/",
  ...[
    "megabrain",
    "cub3d",
    "minishell",
    "webserv",
    "philosophers",
    "inception",
  ].map((slug) => "/portfolio/" + slug + "/"),
];
for (const route of routes) {
  const html = await readFile(path.join(output, route, "index.html"), "utf8");
  assert.match(html, /<h1[ >]/, "Heading missing on " + route);
  assert.match(html, /michel-marques.webp/, "Portrait missing on " + route);
  assert.doesNotMatch(
    html,
    /data-page=.*?hidden/,
    "Hidden legacy page on " + route,
  );
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const url = new URL(
      match[1].replaceAll("&amp;", "&"),
      "https://example.com",
    );
    const local = path.join(output, decodeURIComponent(url.pathname));
    await access(
      url.pathname.endsWith("/") ? path.join(local, "index.html") : local,
    );
    if (url.hash) {
      const destination = await readFile(
        path.join(output, url.pathname, "index.html"),
        "utf8",
      );
      assert.ok(
        destination.includes('id="' + url.hash.slice(1) + '"'),
        "Broken anchor: " + match[1],
      );
    }
  }
}
console.log(
  routes.length +
    " routes checked: page content, portrait, links, anchors and local assets.",
);
