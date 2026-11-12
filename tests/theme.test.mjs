import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFileSync } from "node:fs";
const source = readFileSync(
  new URL("../src/lib/theme-script.ts", import.meta.url),
  "utf8",
);
const script = source.slice(source.indexOf("`") + 1, source.lastIndexOf("`"));

function boot({
  url = "https://example.com/",
  dark = false,
  saved = {},
  blocked = false,
} = {}) {
  const storage = new Map(Object.entries(saved));
  const root = { dataset: {} };
  let current = url;
  let color;
  const context = {
    document: {
      documentElement: root,
      querySelector: () => ({
        setAttribute: (_, value) => {
          color = value;
        },
      }),
    },
    location: { href: url },
    URL,
    history: {
      state: { existing: true },
      replaceState: (state, _, value) => {
        assert.deepEqual(state, { existing: true });
        current = String(value);
      },
    },
    matchMedia: () => ({ matches: dark }),
    localStorage: {
      getItem: (key) => {
        if (blocked) throw Error("blocked");
        return storage.get(key) ?? null;
      },
      setItem: (key, value) => {
        if (blocked) throw Error("blocked");
        storage.set(key, value);
      },
      removeItem: (key) => storage.delete(key),
    },
  };
  vm.runInNewContext(script, context);
  return { ...root.dataset, current, color, storage };
}
test("follows the system on the first visit", () => {
  assert.equal(boot({ dark: true }).theme, "dark");
  assert.equal(boot().theme, "light");
  assert.equal(boot().themePreference, "system");
});
test("remembers a manual choice over system preference", () => {
  const state = boot({ dark: true, saved: { "midelim-theme": "light" } });
  assert.equal(state.theme, "light");
  assert.equal(state.themePreference, "manual");
});
test("legacy palette links keep the route and unrelated query", () => {
  const state = boot({
    url: "https://example.com/?palette=cream&from=test#project-cub3d",
    dark: true,
  });
  assert.equal(state.theme, "light");
  assert.equal(state.current, "https://example.com/?from=test#project-cub3d");
  assert.equal(state.storage.get("midelim-theme"), "light");
});
test("migrates the earlier stored palette", () => {
  const state = boot({ saved: { "midelim-palette": "charcoal" } });
  assert.equal(state.theme, "dark");
  assert.equal(state.storage.get("midelim-theme"), "dark");
  assert.equal(state.storage.has("midelim-palette"), false);
});
test("works when browser storage is unavailable", () => {
  assert.equal(boot({ blocked: true, dark: true }).theme, "dark");
  assert.equal(
    boot({ blocked: true, url: "https://example.com/?theme=light" }).theme,
    "light",
  );
});
test("ignores invalid preferences", () => {
  assert.equal(
    boot({ saved: { "midelim-theme": "invalid" }, dark: true }).theme,
    "dark",
  );
});
