import { readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

const output = path.resolve("out");
const routes = [
  "/",
  "/about/",
  "/resume/",
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
  if (route !== "/design-system/")
    assert.match(html, /michel-marques.webp/, "Portrait missing on " + route);
  else {
    assert.doesNotMatch(
      html,
      /aria-label="Perfil de Michel Marques"/,
      "DS outer profile should not render",
    );
    assert.match(html, /Voltar ao portfólio/, "DS back link missing");
  }
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
const home = await readFile(path.join(output, "index.html"), "utf8");
const navigation = home.match(/<nav aria-label="Navegação principal">([\s\S]*?)<\/nav>/)?.[1];
assert.ok(navigation, "Main navigation missing");
let previousNav = -1;
for (const href of ["/", "/about/", "/resume/", "/portfolio/", "/blog/", "/services/"]) {
  const index = navigation.indexOf('href="' + href + '"');
  assert.ok(index > previousNav, "Navigation missing or out of order: " + href);
  previousNav = index;
}
const resume = await readFile(path.join(output, "resume", "index.html"), "utf8");
for (const content of ["Faculdade Souza Marques", "800 chamados", "UniCarioca", "Minishell", "MongoDB", "Inglês proficiente"]) {
  assert.ok(resume.includes(content), "Resume content missing: " + content);
}
let previous = -1;
for (const id of [
  "abertura",
  "trajetoria",
  "destaques",
  "caderno",
  "colaboracao",
]) {
  const index = home.indexOf('id="' + id + '"');
  assert.ok(index > previous, "Home section missing or out of order: " + id);
  previous = index;
}
console.log(
  routes.length +
    " routes checked: page content, portrait, links, anchors, local assets and Home section order.",
);
