import Link from "next/link";
import type { ComponentProps } from "react";
import { Children, isValidElement, cloneElement, type ReactNode, type ReactElement } from "react";
import { ArrowText } from "./arrow-text";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "text";
  fullWidth?: boolean;
};

/** Navigation with the portfolio's approved action styles. Not a form button. */
export function ActionLink({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: Props) {
  const classes = [
    variant === "text" ? "text-link" : "button",
    fullWidth ? "full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  function animateArrows(node: ReactNode): ReactNode {
    return Children.map(node, child => {
      if (typeof child === "string") return <ArrowText>{child}</ArrowText>;
      if (isValidElement<{ children?: ReactNode }>(child) && child.props.children)
        return cloneElement(child as ReactElement<{ children?: ReactNode }>, {}, animateArrows(child.props.children));
      return child;
    });
  }
  return <Link {...props} className={classes}>{animateArrows(children)}</Link>;
}
