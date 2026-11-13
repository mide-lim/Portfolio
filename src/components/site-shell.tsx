"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.replace(/\/$/, "") === "/design-system") {
    return (
      <div className="ds-shell">
        <header className="ds-shell-header">
          <Link href="/" className="ds-back-link">
            ← Voltar ao portfólio
          </Link>
          <ThemeToggle />
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </div>
    );
  }
  return (
    <div className="shell">
      <Sidebar />
      <div className="workspace">
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
