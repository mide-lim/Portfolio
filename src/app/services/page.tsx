import { ActionLink } from "@/components/ui/action-link";
import { services as copy } from "@/content/pages";
import { ArrowText } from "@/components/ui/arrow-text";
export const metadata = { title: "Services" };

export default function Page() {
  return (
    <section>
      <div className="page-hero">
        <span className="eyebrow">{copy.services}</span>
        <h1>
          {copy.da_ideia}
          <br />
          <em>{copy.a_implementacao}</em>
        </h1>
        <p className="intro">{copy.areas_em_que_meus_estudos_e}</p>
      </div>
      <div className="service-list">
        <article>
          <span>{copy.symbol}</span>
          <div>
            <h2>{copy.software_prototipos}</h2>
            <p>{copy.transformar_requisitos_em_uma_primeira_versao}</p>
            <div className="tags">
              <span>{copy.desenvolvimento}</span>
              <span>{copy.prototipagem}</span>
            </div>
          </div>
        </article>
        <article>
          <span>{copy.symbol}</span>
          <div>
            <h2>{copy.automacao_ia}</h2>
            <p>{copy.explorar_integracoes_para_processamento_de_dados}</p>
            <ActionLink variant="text" href="/portfolio/megabrain/">
              {copy.veja_o_mega_brain}
            </ActionLink>
          </div>
        </article>
        <article>
          <span>{copy.symbol}</span>
          <div>
            <h2>{copy.infraestrutura}</h2>
            <p>{copy.organizacao_de_servicos_em_containers_e}</p>
            <ActionLink variant="text" href="/portfolio/inception/">
              {copy.veja_o_inception}
            </ActionLink>
          </div>
        </article>
      </div>
      <div className="closing">
        <h2>
          {copy.conheca_meu_trabalho}
          <br />
          <em>{copy.mais_de_perto}</em>
        </h2>
        <a
          className="button"
          href="https://github.com/mide-lim"
          target="_blank"
          rel="noopener"
        >
          <ArrowText>{copy.meu_github}</ArrowText>
        </a>
      </div>
    </section>
  );
}
