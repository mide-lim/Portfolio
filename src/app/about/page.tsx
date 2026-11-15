import Link from "next/link";
import { ArrowText } from "@/components/ui/arrow-text";
import { about as copy } from "@/content/pages";
export const metadata = { title: "About" };

export default function Page() {
  return (
    <section>
      <div className="page-hero">
        <span className="eyebrow">{copy.about}</span>
        <h1>
          {copy.o_percurso}
          <br />
          {copy.por_tras}
          <br />
          <em>{copy.do_codigo}</em>
        </h1>
        <p className="intro">
          {copy.seguranca_da_informacao_formacao_pratica_na}
        </p>
      </div>
      <div className="section about-split">
        <h2>
          {copy.michel}
          <br />
          <em>{copy.marques}</em>
        </h2>
        <div>
          <p className="large-copy">
            {copy.minha_trajetoria_passa_por_compreender_sistemas}
          </p>
          <p>{copy.sou_graduado_em_seguranca_da_informacao}</p>
          <p>{copy.nos_projetos_autorais_investigo_como_a}</p>
        </div>
      </div>
      <div className="section">
        <span className="eyebrow">{copy.formacao_pratica}</span>
        <h2>
          {copy.uma_trajetoria}
          <br />
          <em>{copy.em_desenvolvimento}</em>
        </h2>
        <div className="timeline">
          <article>
            <span>{copy.graduacao}</span>
            <div>
              <h3>{copy.seguranca_da_informacao}</h3>
              <p>{copy.o_ponto_de_partida_da_minha}</p>
            </div>
          </article>
          <article>
            <span>{copy["2024_atual"]}</span>
            <div>
              <h3>{copy["42_rio_engenharia_de_software"]}</h3>
              <p>{copy.common_core_em_andamento_com_87}</p>
              <div className="tags">
                <span>{copy.c}</span>
                <span>{copy.c_2}</span>
                <span>{copy.unix}</span>
                <span>{copy.docker}</span>
              </div>
            </div>
          </article>
          <article>
            <span>{copy.projetos_autorais}</span>
            <div>
              <h3>{copy.ia_organizacao_do_conhecimento}</h3>
              <p>{copy.estudos_e_experimentos_com_analise_multimodal}</p>
            </div>
          </article>
        </div>
      </div>
      <div className="section">
        <span className="eyebrow">{copy.competencias_em_contexto}</span>
        <h2>
          {copy.aprendizado}
          <br />
          <em>{copy.que_aparece_nos_projetos}</em>
        </h2>
        <div className="skill-grid">
          <Link href="/portfolio/minishell/">
            <strong>{copy.programacao_de_sistemas}</strong>
            <span><ArrowText>{copy.minishell_processos_pipes_e_sinais}</ArrowText></span>
          </Link>
          <Link href="/portfolio/cub3d/">
            <strong>{copy.computacao_grafica}</strong>
            <span><ArrowText>{copy.cub3d_raycasting_e_interacao}</ArrowText></span>
          </Link>
          <Link href="/portfolio/philosophers/">
            <strong>{copy.concorrencia}</strong>
            <span><ArrowText>{copy.philosophers_threads_e_mutexes}</ArrowText></span>
          </Link>
          <Link href="/portfolio/inception/">
            <strong>{copy.infraestrutura}</strong>
            <span><ArrowText>{copy.inception_containers_e_servicos}</ArrowText></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
