import Link from "next/link";
import { blog as copy } from "@/content/pages";
export const metadata = { title: "Blog" };

export default function Page() {
  return (
    <section>
      <div className="page-hero">
        <span className="eyebrow">{copy.blog}</span>
        <h1>
          {copy.um_caderno}
          <br />
          <em>{copy.em_construcao}</em>
        </h1>
        <p className="intro">
          {copy.espaco_para_compartilhar_decisoes_descobertas_e}
        </p>
      </div>
      <p className="editor-note">
        {copy.as_primeiras_publicacoes_estao_em_preparacao}
      </p>
      <div className="editorial-list">
        <article>
          <small>{copy.sistemas_pauta_proposta}</small>
          <h2>
            {copy.do_comando}
            <br />
            {copy.ao_processo}
          </h2>
          <p>{copy.parsing_redirecionamentos_e_execucao_a_partir}</p>
          <Link href="/portfolio/minishell/" className="text-link">
            {copy.conheca_o_projeto}
          </Link>
        </article>
        <article>
          <small>{copy.computacao_grafica_pauta_proposta}</small>
          <h2>
            {copy.um_mundo_3d}
            <br />
            {copy.feito_de_raios}
          </h2>
          <p>{copy.como_o_raycasting_transforma_um_mapa}</p>
          <Link href="/portfolio/cub3d/" className="text-link">
            {copy.conheca_o_projeto}
          </Link>
        </article>
        <article>
          <small>{copy.ia_aplicada_pauta_proposta}</small>
          <h2>
            {copy.de_videos_salvos}
            <br />
            {copy.a_um_acervo}
          </h2>
          <p>{copy.os_desafios_de_processar_conteudo_multimodal}</p>
          <Link href="/portfolio/megabrain/" className="text-link">
            {copy.conheca_o_projeto}
          </Link>
        </article>
      </div>
    </section>
  );
}
