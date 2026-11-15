import Link from "next/link";
import { ArrowText } from "@/components/ui/arrow-text";
import { home } from "@/content/pages";

export function HeroBottom() {
  return (
    <div className="hero-bottom hero-explore">
      <div className="hero-explore-areas">
        <span>Áreas de interesse</span>
        <strong>{home.c_c_software_ia}</strong>
      </div>
      <Link href="/#trajetoria" className="hero-explore-link" aria-label="Rolar até a trajetória">
        <span>{home.role_para_explorar}</span>
        <span className="hero-explore-icon"><ArrowText>{home.symbol_3}</ArrowText></span>
      </Link>
    </div>
  );
}
