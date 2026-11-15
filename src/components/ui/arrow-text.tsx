import type { ReactNode } from "react";

const directions: Record<string, string> = {
  "↗": "northeast", "→": "east", "←": "west", "↑": "north", "↓": "south",
};

/** Render directional glyphs as decorative, animatable parts of a link. */
export function ArrowText({ children }: { children: string }): ReactNode {
  return children.split(/([↗→←↑↓])/).map((part, index) =>
    directions[part] ? (
      <span className={"direction-arrow direction-arrow--" + directions[part]} aria-hidden="true" key={index}>{part}</span>
    ) : part,
  );
}
