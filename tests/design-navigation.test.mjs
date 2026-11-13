import test from "node:test";
import assert from "node:assert/strict";
import { resolveDesignSelection } from "../src/lib/design-navigation.ts";
const groups = [
  { id: "all", items: [] },
  { id: "global", items: ["perfil"] },
  { id: "home", items: ["abertura", "trajetoria"] },
  { id: "about", items: ["pagina-interna"] },
  { id: "blog", items: ["pagina-interna"] },
];
const ids = ["perfil", "abertura", "trajetoria", "pagina-interna"];
test("DS opens Home by default and ignores invalid hashes", () => {
  assert.deepEqual(resolveDesignSelection("", null, groups, ids), {
    active: "abertura",
    group: "home",
  });
  assert.deepEqual(resolveDesignSelection("#missing", "unknown", groups, ids), {
    active: "abertura",
    group: "home",
  });
});
test("legacy component links infer a visible page group", () => {
  assert.deepEqual(resolveDesignSelection("#perfil", null, groups, ids), {
    active: "perfil",
    group: "global",
  });
});
test("page context is retained for a component shared between pages", () => {
  assert.deepEqual(
    resolveDesignSelection("#pagina-interna", "blog", groups, ids),
    { active: "pagina-interna", group: "blog" },
  );
});
test("incompatible page filters cannot hide the selected component", () => {
  assert.deepEqual(resolveDesignSelection("#perfil", "home", groups, ids), {
    active: "perfil",
    group: "global",
  });
  assert.deepEqual(resolveDesignSelection("#perfil", "all", groups, ids), {
    active: "perfil",
    group: "all",
  });
});
