"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { ProjectCover } from "@/components/project-cover";
import { ProjectFilter } from "@/components/project-filter";
import { ActionLink } from "@/components/ui/action-link";
import { catalog, pageIntros } from "@/content/component-catalog";
import { home, services, about, blog } from "@/content/pages";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

import { resolveDesignSelection } from "@/lib/design-navigation";
import { Foundations } from "./foundations";
import { componentSpecs, componentGroups } from "@/content/design-standards";
import { ProjectGrid } from "@/components/project-grid";
import { HeroBottom } from "@/components/hero-bottom";
import { ArrowText } from "@/components/ui/arrow-text";

function Actions() {
  return (
    <div className="hero-actions">
      <ActionLink href="/#destaques">{home.explorar_projetos} ↗</ActionLink>
      <ActionLink variant="text" href="/about/">
        {home.conheca_minha_trajetoria} →
      </ActionLink>
    </div>
  );
}
function Sample({ id, context }: { id: string; context: string }) {
  switch (id) {
    case "perfil":
      return (
        <div className="ds-profile-holder">
          <Sidebar />
        </div>
      );
    case "menu":
      return (
        <nav aria-label="Amostra da navegação">
          <Link href="/" aria-current="page">
            Home
          </Link>
          {site.navigation.slice(1).map((x) => (
            <Link href={x.href} key={x.href}>
              {x.label}
            </Link>
          ))}
        </nav>
      );
    case "tema":
      return (
        <div className="ds-control-sample">
          <ThemeToggle />
          <p>Experimente os dois modos nesta página.</p>
        </div>
      );
    case "abertura":
      return (
        <div className="ds-home-sample">
          <span className="eyebrow">{home.prazer_michel_marques}</span>
          <h3 className="ds-display">
            {home.curiosidade}
            <br />
            {home.que_vira}
            <br />
            {home.construcao}
          </h3>
          <p className="intro">
            {home.da_seguranca_da_informacao_a_engenharia}
            <br />
            {home.hoje_explorando_novas_possibilidades_com_ia}
          </p>
          <Actions />
          <HeroBottom />
        </div>
      );
    case "titulo":
      return (
        <div className="section-heading">
          <div>
            <span className="eyebrow">{home.portfolio}</span>
            <h3 className="ds-display">
              {home.ideias_em}
              <br />
              {home.funcionamento}
            </h3>
          </div>
          <ActionLink variant="text" href="/portfolio/">
            {home.todos_os_projetos}
          </ActionLink>
        </div>
      );
    case "acoes":
      return <Actions />;
    case "projeto":
      return (
        <div className="ds-project-holder">
          <ProjectCard project={projects[0]} />
        </div>
      );
    case "capa":
      return (
        <div className="detail-cover">
          <ProjectCover project={projects[0]} />
        </div>
      );
    case "filtros":
      return <ProjectFilter />;
    case "trajetoria":
      return (
        <div>
          <span className="eyebrow">{home.about}</span>
          <h3 className="ds-display">
            {home.um_percurso}
            <br />
            {home.muitas_conexoes}
          </h3>
          <div className="about-split">
            <p className="large-copy">
              {home.entender_como_as_coisas_funcionam_me}
            </p>
            <div className="mini-timeline">
              <div>
                <small>{home.formacao_superior}</small>
                <h3>{home.seguranca_da_informacao}</h3>
              </div>
              <div>
                <small>{home.desde_2024}</small>
                <h3>{home["42_rio"]}</h3>
                <p>{home.aprendizado_entre_pares_e_projetos_em}</p>
              </div>
              <div>
                <small>{home.projetos_autorais}</small>
                <h3>{home.ia_aplicada}</h3>
                <p>{home.processamento_multimodal_e_organizacao_de_acervos}</p>
              </div>
            </div>
          </div>
          <ActionLink variant="text" href="/about/">
            {home.explore_minha_trajetoria}
          </ActionLink>
        </div>
      );
    case "blog":
      return (
        <Link className="article-preview" href="/blog/">
          <span className="article-mark" aria-hidden="true">
            {home.symbol_4}
          </span>
          <div>
            <small>{home.em_preparacao_engenharia_de_software}</small>
            <h3>{home.o_que_acontece_entre_digitar_um}</h3>
            <p>{home.uma_pauta_a_partir_da_experiencia}</p>
          </div>
          <span className="circle-arrow"><ArrowText>{"↗"}</ArrowText></span>
        </Link>
      );
    case "servico":
      return (
        <div className="service-list">
          <article>
            <span aria-hidden="true">↗</span>
            <div>
              <h3>{services.automacao_ia}</h3>
              <p>{services.explorar_integracoes_para_processamento_de_dados}</p>
              <ActionLink variant="text" href="/portfolio/megabrain/">
                {services.veja_o_mega_brain}
              </ActionLink>
            </div>
          </article>
        </div>
      );
    case "fechamento":
      return (
        <div>
          <span className="eyebrow">{home.vamos_construir}</span>
          <h3 className="ds-display">
            {home.uma_boa_ideia}
            <br />
            {home.merece}
            {home.ganhar_forma}
          </h3>
          <ActionLink href="/services/">
            {home.explore_as_possibilidades}
          </ActionLink>
        </div>
      );
    case "rodape":
      return <Footer />;

    case "destaques":
      return (
        <div>
          <span className="eyebrow">{home.portfolio}</span>
          <h3 className="ds-display">
            {home.ideias_em} {home.funcionamento}
          </h3>
          <ProjectGrid featured />
          <ActionLink variant="text" href="/portfolio/">
            {home.todos_os_projetos}
          </ActionLink>
        </div>
      );
    case "pagina-interna": {
      const intro = pageIntros[context] ?? pageIntros.about;
      return (
        <div>
          <span className="eyebrow">{intro.label}</span>
          <h3 className="ds-display">{intro.title}</h3>
          <p className="intro">{intro.intro}</p>
        </div>
      );
    }
    case "biografia":
      return (
        <div className="about-split">
          <h3>
            {about.michel} {about.marques}
          </h3>
          <div>
            <p className="large-copy">
              {about.minha_trajetoria_passa_por_compreender_sistemas}
            </p>
            <p>{about.sou_graduado_em_seguranca_da_informacao}</p>
            <p>{about.nos_projetos_autorais_investigo_como_a}</p>
          </div>
        </div>
      );
    case "formacao":
      return (
        <div className="timeline">
          {[
            [
              about.graduacao,
              about.seguranca_da_informacao,
              about.o_ponto_de_partida_da_minha,
            ],
            [
              about["2024_atual"],
              about["42_rio_engenharia_de_software"],
              about.common_core_em_andamento_com_87,
            ],
            [
              about.projetos_autorais,
              about.ia_organizacao_do_conhecimento,
              about.estudos_e_experimentos_com_analise_multimodal,
            ],
          ].map(([period, title, description]) => (
            <article key={period}>
              <span>{period}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      );
    case "competencias":
      return (
        <div className="skill-grid">
          {[
            [
              about.programacao_de_sistemas,
              about.minishell_processos_pipes_e_sinais,
              "minishell",
            ],
            [
              about.computacao_grafica,
              about.cub3d_raycasting_e_interacao,
              "cub3d",
            ],
            [
              about.concorrencia,
              about.philosophers_threads_e_mutexes,
              "philosophers",
            ],
            [
              about.infraestrutura,
              about.inception_containers_e_servicos,
              "inception",
            ],
          ].map(([title, copy, slug]) => (
            <Link key={slug} href={"/portfolio/" + slug + "/"}>
              <strong>{title}</strong>
              <span>{copy}</span>
            </Link>
          ))}
        </div>
      );
    case "pautas":
      return (
        <div className="editorial-list">
          <p className="editor-note">
            {blog.as_primeiras_publicacoes_estao_em_preparacao}
          </p>
          <article>
            <small>{blog.sistemas_pauta_proposta}</small>
            <h3 className="ds-display">
              {blog.do_comando} {blog.ao_processo}
            </h3>
            <p>{blog.parsing_redirecionamentos_e_execucao_a_partir}</p>
            <ActionLink variant="text" href="/portfolio/minishell/">
              {blog.conheca_o_projeto}
            </ActionLink>
          </article>
        </div>
      );
    case "estudo":
      return (
        <div className="ds-case-sample">
          <h3>Sobre o projeto</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].focus}</p>
          <ActionLink href={projects[0].repo!}>Explorar código ↗</ActionLink>
        </div>
      );

    default:
      return null;
  }
}
export function ComponentWorkshop() {
  const [active, setActive] = useState("abertura");
  const [group, setGroup] = useState("home");
  useEffect(() => {
    const sync = () => {
      if (location.hash === "#catalogo") return;
      const selected = resolveDesignSelection(
        location.hash,
        new URLSearchParams(location.search).get("view"),
        componentGroups,
        catalog.map((x) => x.id),
      );
      setActive(selected.active);
      setGroup(selected.group);
      if (catalog.some((x) => "#" + x.id === location.hash))
        requestAnimationFrame(() =>
          document
            .getElementById("ds-component-panel")
            ?.scrollIntoView({ block: "start" }),
        );
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);
  const currentGroup = componentGroups.find((x) => x.id === group)!;
  const visible =
    group === "all"
      ? catalog
      : currentGroup.items.map((id) => catalog.find((x) => x.id === id)!);
  const rawItem = catalog.find((x) => x.id === active)!;
  const intro = pageIntros[group] ?? pageIntros.about;
  const item =
    active === "pagina-interna"
      ? {
          ...rawItem,
          source:
            "src/app/" + (pageIntros[group] ? group : "about") + "/page.tsx",
          fields: [
            { label: "Título", value: intro.title },
            { label: "Introdução", value: intro.intro },
          ],
        }
      : rawItem;
  const spec = componentSpecs[active];
  function navigate(id: string, view = group) {
    setActive(id);
    setGroup(view);
    const url = new URL(location.href);
    url.hash = id;
    url.searchParams.set("view", view);
    history.pushState(history.state, "", url);
  }
  function selectGroup(id: string) {
    const next = componentGroups.find((x) => x.id === id)!;
    navigate(next.items[0] ?? catalog[0].id, id);
  }
  return (
    <article className="ds-workshop">
      <div className="ds-workshop-intro">
        <span className="eyebrow">MIDELIM · DESIGN SYSTEM · 03</span>
        <h1>
          Padrões primeiro.
          <br />
          <em>Componentes depois.</em>
        </h1>
        <p>
          Fontes, medidas, cores e movimento compartilhados. Depois, cada peça
          com sua anatomia e sua comunicação.
        </p>
        <div className="ds-ratio-banner">
          <div
            className="ds-ratio-strip"
            aria-label="Referência de proporção: 60% base, 30% secundária e 10% destaque"
          >
            <span>60</span>
            <span>30</span>
            <span>10</span>
          </div>
          <div>
            <strong>60% base · 30% secundária · 10% destaque</strong>
            <p>
              Referência de equilíbrio visual. O destaque fica nas ações e
              estados; foto e legibilidade têm prioridade sobre a proporção
              exata.
            </p>
          </div>
        </div>
      </div>
      <Foundations />
      <section
        className="ds-catalog-intro"
        id="catalogo"
        aria-labelledby="ds-catalog-title"
      >
        <span className="ds-kicker">02 · COMPONENTS & ÁTOMOS</span>
        <h2 id="ds-catalog-title">Revisar por navegação</h2>
        <p>Home: Abertura → About → Portfolio → Blog → Services (CTA).</p>
        <div
          className="ds-page-groups"
          role="group"
          aria-label="Filtrar componentes por página"
        >
          {componentGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={group === g.id}
              onClick={() => selectGroup(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <p className="ds-note">
          Peças globais ficam em “Globais”. As amostras mostram o padrão do site
          em escala de catálogo.
        </p>
      </section>
      <div className="ds-workbench">
        <div
          className="ds-picker"
          role="group"
          aria-label="Escolher componente"
        >
          <span className="ds-kicker">
            {currentGroup.label} · {visible.length} PEÇAS
          </span>
          {visible.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={entry.id === active}
              aria-controls="ds-component-panel"
              onClick={() => navigate(entry.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {entry.name}
            </button>
          ))}
        </div>
        <section
          className="ds-component-panel"
          id="ds-component-panel"
          aria-labelledby="ds-component-name"
        >
          <p className="sr-only" aria-live="polite">
            Componente selecionado: {item.name}
          </p>
          <div className="ds-panel-title">
            <div>
              <span className="ds-kicker">
                {item.kind} · {item.location}
              </span>
              <h2 id="ds-component-name">{item.name}</h2>
              <p>{item.purpose}</p>
            </div>
            <span className="ds-badge">Comunicação em revisão</span>
          </div>
          <div className="ds-canvas-caption">
            <span>AMOSTRA DO SITE · ESCALA DO CATÁLOGO</span>
            <span>Claro / escuro no topo ↗</span>
          </div>
          <div className={"ds-canvas ds-sample-" + active} key={active}>
            <Sample id={active} context={group} />
          </div>
          <div className="ds-component-contract">
            <h3>Átomos e composição desta peça</h3>
            <div className="ds-atom-list">
              {spec.atoms.map((atom, i) => (
                <span key={atom}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {atom}
                </span>
              ))}
            </div>
            <dl>
              <div>
                <dt>Fonts & typography</dt>
                <dd>{spec.type}</dd>
              </div>
              <div>
                <dt>Spacing & pixels</dt>
                <dd>{spec.geometry}</dd>
              </div>
              <div>
                <dt>Motion</dt>
                <dd>{spec.motion}</dd>
              </div>
            </dl>
            <p className="ds-note">
              Valores da página real. A amostra acima pode reduzir escala e
              colunas para caber no DS.
            </p>
          </div>
          <div className="ds-color-allocation">
            {item.colors.map((description, index) => (
              <div key={description}>
                <span className={"ds-swatch ds-swatch-" + index} />
                <strong>
                  {[60, 30, 10][index]}% ·{" "}
                  {["Base", "Secundária", "Destaque"][index]}
                </strong>
                <span className="ds-color-name">
                  <span className="ds-light-name">
                    {
                      [
                        "Cream · #F3EEE3",
                        "Ink Black · #111111",
                        "Burnt Orange · #D9541E",
                      ][index]
                    }
                  </span>
                  <span className="ds-dark-name">
                    {
                      [
                        "Charcoal · #1E1E1C",
                        "Sand · #D8CBB3",
                        "Electric Blue · #2F6BFF",
                      ][index]
                    }
                  </span>
                </span>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="ds-copy-review">
            <div>
              <h3>Comunicação atual</h3>
              <p className="ds-meta">
                Textos consultados do projeto, sem nova redação aplicada.
              </p>
              <dl>
                {item.fields.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3>O que vamos ajustar</h3>
              <ol>
                {item.review.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
              <p className="ds-review-note">
                Referência para nossa conversa: <strong>{item.name}</strong>. As
                decisões serão registradas no código conforme revisarmos.
              </p>
            </div>
          </div>
          <details className="ds-source">
            <summary>Arquivos deste componente</summary>
            <p>
              <a
                href={
                  "https://github.com/mide-lim/Portfolio/blob/main/" +
                  item.source
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual e estrutura ↗
              </a>
              <code>{item.source}</code>
            </p>
            <p>
              <a
                href={
                  "https://github.com/mide-lim/Portfolio/blob/main/" +
                  item.contentSource
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Textos e dados ↗
              </a>
              <code>{item.contentSource}</code>
            </p>
          </details>
        </section>
      </div>
      <div className="ds-workshop-end">
        <a
          href="https://github.com/mide-lim/Portfolio/blob/main/DESIGN.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação do sistema ↗
        </a>
        <Link href="/">Voltar ao portfólio →</Link>
      </div>
    </article>
  );
}
