import Link from "next/link";
import { home as copy } from "@/content/pages";
import { ProjectGrid } from "@/components/project-grid";

export default function Page() {
  return (
    <section>
      <div className="hero">
        <span className="eyebrow">
          <i></i>
          {copy.prazer_michel_marques}
        </span>
        <h1>
          {copy.curiosidade}
          <br />
          {copy.que_vira}
          <br />
          <em>{copy.construcao}</em>
        </h1>
        <p className="intro">
          {copy.da_seguranca_da_informacao_a_engenharia}
          <br />
          {copy.hoje_explorando_novas_possibilidades_com_ia}
        </p>
        <div className="hero-actions">
          <Link className="button" href="/#destaques">
            {copy.explorar_projetos}
            <span>{copy.symbol}</span>
          </Link>
          <Link className="text-link" href="/about/">
            {copy.conheca_minha_trajetoria}
            <span>{copy.symbol_2}</span>
          </Link>
        </div>
        <div className="hero-bottom">
          <span>{copy.c_c_software_ia}</span>
          <Link href="/#destaques" aria-label="Rolar para os projetos">
            {copy.role_para_explorar}
            <b>{copy.symbol_3}</b>
          </Link>
        </div>
      </div>
      <section className="section" id="destaques">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{copy.portfolio}</span>
            <h2>
              {copy.ideias_em}
              <br />
              <em>{copy.funcionamento}</em>
            </h2>
          </div>
          <Link className="text-link" href="/portfolio/">
            {copy.todos_os_projetos}
          </Link>
        </div>
        <ProjectGrid featured />
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{copy.about}</span>
            <h2>
              {copy.um_percurso}
              <br />
              <em>{copy.muitas_conexoes}</em>
            </h2>
          </div>
        </div>
        <div className="about-split">
          <p className="large-copy">
            {copy.entender_como_as_coisas_funcionam_me}
          </p>
          <div className="mini-timeline">
            <div>
              <small>{copy.formacao_superior}</small>
              <h3>{copy.seguranca_da_informacao}</h3>
            </div>
            <div>
              <small>{copy.desde_2024}</small>
              <h3>{copy["42_rio"]}</h3>
              <p>{copy.aprendizado_entre_pares_e_projetos_em}</p>
            </div>
            <div>
              <small>{copy.projetos_autorais}</small>
              <h3>{copy.ia_aplicada}</h3>
              <p>{copy.processamento_multimodal_e_organizacao_de_acervos}</p>
            </div>
          </div>
        </div>
        <Link className="text-link" href="/about/">
          {copy.explore_minha_trajetoria}
        </Link>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{copy.blog}</span>
            <h2>
              {copy.aprender}
              <br />
              <em>{copy.construir_registrar}</em>
            </h2>
          </div>
          <Link className="text-link" href="/blog/">
            {copy.abrir_caderno}
          </Link>
        </div>
        <Link className="article-preview" href="/blog/">
          <span className="article-mark">{copy.symbol_4}</span>
          <div>
            <small>{copy.em_preparacao_engenharia_de_software}</small>
            <h3>{copy.o_que_acontece_entre_digitar_um}</h3>
            <p>{copy.uma_pauta_a_partir_da_experiencia}</p>
          </div>
          <span className="circle-arrow">{copy.symbol}</span>
        </Link>
      </section>
      <div className="closing">
        <span className="eyebrow">{copy.vamos_construir}</span>
        <h2>
          {copy.uma_boa_ideia}
          <br />
          {copy.merece}
          <em>{copy.ganhar_forma}</em>
        </h2>
        <Link className="button" href="/services/">
          {copy.explore_as_possibilidades}
        </Link>
      </div>
    </section>
  );
}
