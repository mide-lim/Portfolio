import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Sidebar() {
  return (
    <aside className="profile" aria-label="Perfil de Michel Marques">
      <Link className="identity" href="/">
        <span className="symbol">
          m<span>.</span>
        </span>
        <span>
          Michel
          <br />
          Marques
        </span>
      </Link>
      <div className="portrait">
        <Image
          src="/images/michel-marques.webp"
          alt="Retrato de Michel Marques"
          width={640}
          height={801}
          priority
          sizes="(max-width: 800px) 58px, 232px"
        />
      </div>
      <div className="profile-info">
        <span className="label">MINHAS FRENTES</span>
        <p>
          {site.fronts[0]}
          <br />
          {site.fronts[1]}
        </p>
        <span className="label">BASEADO EM</span>
        <p>{site.location}</p>
      </div>
      <div className="social">
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <Link href="/about/">Trajetória ↗</Link>
      </div>
      <Link className="button full" href="/portfolio/">
        {site.projectAction} <span>↗</span>
      </Link>
    </aside>
  );
}
