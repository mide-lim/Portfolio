"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav aria-label="Navegação principal">
        {site.navigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.slice(0, -1));
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </header>
  );
}
