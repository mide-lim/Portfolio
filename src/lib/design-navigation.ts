type Group = { id: string; items: string[] };
export function resolveDesignSelection(
  hash: string,
  view: string | null,
  groups: Group[],
  ids: string[],
) {
  const candidate = hash.replace(/^#/, "");
  const active = ids.includes(candidate) ? candidate : "abertura";
  const requested = groups.find(
    (g) => g.id === view && (g.id === "all" || g.items.includes(active)),
  );
  const inferred = groups.find(
    (g) => g.id !== "all" && g.items.includes(active),
  );
  return { active, group: (requested ?? inferred ?? groups[0]).id };
}
