"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => {
    const system = matchMedia("(prefers-color-scheme: dark)");
    const read = () =>
      setTheme(
        document.documentElement.dataset.theme === "dark" ? "dark" : "light",
      );
    read();
    window.addEventListener("midelim-theme-change", read);
    const onSystem = (event: MediaQueryListEvent) => {
      if (document.documentElement.dataset.themePreference !== "manual")
        apply(event.matches ? "dark" : "light");
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === "midelim-theme") {
        const valid = event.newValue === "dark" || event.newValue === "light";
        document.documentElement.dataset.themePreference = valid
          ? "manual"
          : "system";
        apply(
          valid ? (event.newValue as Theme) : system.matches ? "dark" : "light",
        );
      }
    };
    system.addEventListener("change", onSystem);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("midelim-theme-change", read);
      system.removeEventListener("change", onSystem);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  function apply(value: Theme) {
    document.documentElement.dataset.theme = value;
    document.documentElement.dataset.palette =
      value === "light" ? "cream" : "charcoal";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", value === "light" ? "#F3EEE3" : "#1E1E1C");
    setTheme(value);
  }
  const label = theme === "light" ? "Ativar modo escuro" : "Ativar modo claro";
  return (
    <button
      id="theme-toggle"
      type="button"
      className="theme-toggle"
      title={label}
      aria-label={label}
      onClick={() => {
        const next =
          document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.themePreference = "manual";
        apply(next);
        try {
          localStorage.setItem("midelim-theme", next);
        } catch {}
      }}
    >
      <span className="theme-icon" aria-hidden="true">
        {theme === "light" ? "☀" : "◐"}
      </span>
      <span className="theme-name" aria-hidden="true">
        {theme ? (theme === "light" ? "Claro" : "Escuro") : "Tema"}
      </span>
    </button>
  );
}
