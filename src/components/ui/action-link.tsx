import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "text";
  fullWidth?: boolean;
};

/** Navigation with the portfolio's approved action styles. Not a form button. */
export function ActionLink({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: Props) {
  const classes = [
    variant === "text" ? "text-link" : "button",
    fullWidth ? "full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <Link {...props} className={classes} />;
}
