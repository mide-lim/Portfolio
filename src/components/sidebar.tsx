import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { ProfileAction } from "./profile-action";
import { SocialIcon } from "./social-icon";

export function Sidebar() {
  return (
    <aside className="profile" aria-label="Perfil de Michel Marques">
      <Link className="identity" href="/" aria-label="Michel Marques, início">
        <svg
          className="brand-mark"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 22 14 13M5 22l9 9M59 22l-9-9m9 9-9 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 48V23l14 15 14-15v25"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="53" cy="48" r="3.2" fill="var(--primary)" />
        </svg>
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
      <div className="social" aria-label="Redes e contato">
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Michel Marques"
        >
          <SocialIcon name="linkedin" />
          <span>LinkedIn</span>
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Michel Marques"
        >
          <SocialIcon name="github" />
          <span>GitHub</span>
        </a>
        <a
          href={"mailto:" + site.email}
          aria-label="Enviar e-mail para Michel Marques"
        >
          <SocialIcon name="gmail" />
          <span>Gmail</span>
        </a>
        <span
          className="social-pending"
          title="Discord aguardando endereço"
          aria-label="Discord, endereço pendente"
        >
          <SocialIcon name="discord" />
          <span>Discord</span>
        </span>
      </div>
      <ProfileAction />
    </aside>
  );
}
