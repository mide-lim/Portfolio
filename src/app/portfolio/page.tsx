import Link from "next/link";
import { portfolio as copy } from "@/content/pages";
import { ProjectFilter } from "@/components/project-filter";
export const metadata = { title: "Portfolio" };

export default function Page() {
  return (
    <section>
      <div className="page-hero">
        <span className="eyebrow">{copy.portfolio}</span>
        <h1>
          {copy.construir_e}
          <br />
          <em>{copy.aprender}</em>
        </h1>
        <p className="intro">{copy.projetos_autorais_e_trabalhos_da_42}</p>
      </div>
      <ProjectFilter />
    </section>
  );
}
