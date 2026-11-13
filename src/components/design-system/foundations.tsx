"use client";
import { useState } from "react";
import {
  foundationTabs,
  typography,
  gridRules,
  motionRules,
} from "@/content/design-standards";

function Table({ heads, rows }: { heads: string[]; rows: string[][] }) {
  return (
    <div className="ds-spec-table">
      <table>
        <thead>
          <tr>
            {heads.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((v, j) => (
                <td key={j}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function Foundations() {
  const [tab, setTab] = useState("fonts");
  const [motion, setMotion] = useState(false);
  const [grid, setGrid] = useState("desktop");
  return (
    <section className="ds-foundations" aria-labelledby="ds-foundations-title">
      <div className="ds-panel-title">
        <div>
          <span className="ds-kicker">01 · PADRÕES COMPARTILHADOS</span>
          <h2 id="ds-foundations-title">Fundamentos do site</h2>
          <p>
            As regras comuns vêm primeiro. As exceções ficam na ficha de cada
            componente.
          </p>
        </div>
        <a className="text-link" href="#catalogo">
          Ir aos componentes ↓
        </a>
      </div>
      <div
        className="ds-foundation-tabs"
        role="group"
        aria-label="Escolher fundamento"
      >
        {foundationTabs.map((x) => (
          <button
            key={x.id}
            type="button"
            aria-pressed={tab === x.id}
            aria-controls="ds-foundation-content"
            onClick={() => setTab(x.id)}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className="ds-foundation-content" id="ds-foundation-content">
        {tab === "fonts" && (
          <>
            <h3>Fonts · Typography tokens · Text · Headings</h3>
            <div className="ds-font-pair">
              <div>
                <span className="ds-kicker">TÍTULOS · --font-heading</span>
                <strong className="ds-font-heading">Space Grotesk</strong>
                <p>Aa Bb Cc · 0123456789</p>
                <small>Pesos carregados: 400, 500, 600 e 700.</small>
              </div>
              <div>
                <span className="ds-kicker">TEXTOS · --font-body</span>
                <strong className="ds-font-body">DM Sans</strong>
                <p>Minha trajetória, meus projetos.</p>
                <small>Pesos carregados: 400, 500, 600 e 700.</small>
              </div>
            </div>
            <p>
              Fontes servidas pelo Google Fonts, com fallback sans-serif e
              display swap. Títulos usam tracking −0,055em; o corpo mantém
              espaçamento normal.
            </p>
            <Table
              heads={[
                "Papel",
                "Token",
                "Fonte",
                "Peso",
                "Tamanho / viewport",
                "Entrelinha",
              ]}
              rows={typography}
            />
            <p className="ds-note">
              Um H1 por página; H2 para seções, H3 para itens. A hierarquia do
              catálogo usa títulos menores para caber nas amostras; a tabela
              registra o site.
            </p>
          </>
        )}
        {tab === "spacing" && (
          <>
            <h3>Spacing · dimensões · bordas</h3>
            <p>
              Escala compartilhada para novas peças. Medidas específicas já
              existentes aparecem na ficha do componente.
            </p>
            <div className="ds-space-rulers">
              {[4, 8, 12, 16, 24, 32, 48, 64].map((n) => (
                <div key={n}>
                  <code>--space-{n / 4}</code>
                  <i style={{ width: n * 2 }} />
                  <span>{n} px</span>
                </div>
              ))}
            </div>
            <div className="ds-box-model">
              <span>Padding da amostra · 24 px</span>
              <div>
                <span>Conteúdo</span>
                <span>Gap · 16 px</span>
                <span>Conteúdo</span>
              </div>
            </div>
            <Table
              heads={["Regra", "Valor atual", "Aplicação"]}
              rows={[
                ["Seção", "88 px vertical / ≤800: 60 px", "--section-padding"],
                [
                  "Grade de projetos",
                  "38 px entre linhas / 24 px entre colunas",
                  "--project-grid-gap",
                ],
                [
                  "Ação principal",
                  "15 × 24 px de padding; raio 30 px",
                  "--action-padding / --radius-action",
                ],
                [
                  "Raios",
                  "Perfil 30 · foto 18 · card 23 px",
                  "--radius-profile / image / project",
                ],
                [
                  "Borda e foco",
                  "1 px / 2 px; foco afastado 5 px (tema: 4)",
                  "--border-width / --focus-width / --focus-offset",
                ],
                [
                  "Exceções existentes",
                  "25, 26, 30, 35 e 38 px em peças específicas",
                  "Registradas por componente; não arredondadas automaticamente",
                ],
              ]}
            />
          </>
        )}
        {tab === "grid" && (
          <>
            <h3>Grid guidance · estrutura responsiva</h3>
            <p>
              Largura máxima de 1660 px. Perfil lateral + conteúdo no desktop;
              perfil compacto acima do conteúdo no celular.
            </p>
            <div
              className="ds-mini-controls"
              role="group"
              aria-label="Esquema de grid"
            >
              {["desktop", "mobile"].map((x) => (
                <button
                  key={x}
                  type="button"
                  aria-pressed={grid === x}
                  onClick={() => setGrid(x)}
                >
                  {x === "desktop" ? "Desktop" : "Celular"}
                </button>
              ))}
            </div>
            <div
              className={
                "ds-grid-diagram " + (grid === "mobile" ? "is-mobile" : "")
              }
              aria-label={"Esquema " + grid}
            >
              <div className="ds-wire-profile">Perfil</div>
              <div className="ds-wire-main">
                <div>Menu</div>
                <div>Abertura</div>
                <div>About</div>
                <div className="ds-wire-projects">
                  <span>Projeto</span>
                  <span>Projeto</span>
                </div>
                <div>Blog</div>
                <div>Services · CTA</div>
              </div>
            </div>
            <Table
              heads={["Viewport", "Colunas", "Margem externa", "Gap principal"]}
              rows={gridRules}
            />
            <p className="ds-note">
              Projetos: duas colunas acima de 520 px; uma até 520 px. O esquema
              é proporcional, não uma captura. O DS reorganiza sua própria
              navegação até 1100 px.
            </p>
          </>
        )}
        {tab === "stickers" && (
          <>
            <h3>Stickers · etiquetas e marcadores</h3>
            <div className="ds-sticker-sheet">
              <div>
                <span className="eyebrow">PORTFOLIO</span>
                <p>
                  Identificador · 11 px / 600
                  <br />
                  Tracking 2 px
                </p>
              </div>
              <div>
                <div className="tags">
                  <span>C++</span>
                  <span>Docker</span>
                </div>
                <p>
                  Tag · 11 px
                  <br />
                  Padding 5 × 12 · raio 25
                </p>
              </div>
              <div>
                <span className="ds-badge">Comunicação em revisão</span>
                <p>
                  Status do DS · 10 px
                  <br />
                  Padding 5 × 10 · raio 30
                </p>
              </div>
              <div>
                <span className="ds-sticker-arrow" aria-hidden="true">
                  ↗
                </span>
                <p>
                  Seta de navegação · 42 × 42 px
                  <br />
                  Usada dentro de um link
                </p>
              </div>
            </div>
            <p>
              Neutros para categoria, tecnologia e status editorial. O destaque
              fica na ação. Sempre escrever o estado; cor sozinha não transmite
              “Em preparação” ou “Em revisão”.
            </p>
            <p className="ds-note">
              Essas peças são feitas em CSS e texto. Não há biblioteca de
              stickers instalada.
            </p>
          </>
        )}
        {tab === "colors" && (
          <>
            <h3>Colors · 60 / 30 / 10</h3>
            <div className="ds-theme-pair">
              {(["light", "dark"] as const).map((mode) => (
                <div
                  key={mode}
                  data-design-theme={mode}
                  className="ds-palette-card"
                >
                  <strong>{mode === "light" ? "Claro" : "Escuro"}</strong>
                  <div className="ds-ratio-strip">
                    <span>60</span>
                    <span>30</span>
                    <span>10</span>
                  </div>
                  <p>
                    {mode === "light"
                      ? "Cream #F3EEE3 · Ink Black #111111 · Burnt Orange #D9541E"
                      : "Charcoal #1E1E1C · Sand #D8CBB3 · Electric Blue #2F6BFF"}
                  </p>
                  <span className="ds-color-button">Ação principal ↗</span>
                </div>
              ))}
            </div>
            <Table
              heads={["Função", "Claro", "Escuro"]}
              rows={[
                ["--background", "#F3EEE3", "#1E1E1C"],
                ["--surface", "#EBE5D8", "#242420"],
                ["--foreground", "#111111", "#D8CBB3"],
                ["--primary", "#D9541E", "#2F6BFF"],
                ["--primary-foreground", "#111111", "#FFFFFF"],
                ["--portrait-background", "#D8CBB3", "#D8CBB3"],
              ]}
            />
            <p>
              Base dominante, conteúdo secundário e destaque concentrado em
              ações. Fotos mantêm suas cores. A proporção é uma referência de
              composição, não uma contagem de pixels.
            </p>
          </>
        )}
        {tab === "motion" && (
          <>
            <h3>Motion · ferramentas e regras</h3>
            <p>
              CSS transitions, IntersectionObserver, requestAnimationFrame e
              rolagem nativa. GSAP, Lenis, Framer Motion e parallax não estão
              implementados.
            </p>
            <Table
              heads={[
                "Aplicação",
                "Ferramenta",
                "Duração",
                "Comportamento",
                "Origem",
              ]}
              rows={motionRules}
            />
            <div className="ds-motion-stage">
              <div className={"ds-motion-tile " + (motion ? "is-shifted" : "")}>
                24 px · 650 ms · ease
              </div>
            </div>
            <button
              className="ds-utility-button"
              type="button"
              aria-pressed={motion}
              onClick={() => setMotion(!motion)}
            >
              {motion ? "Voltar à origem" : "Testar deslocamento"}
            </button>
            <p className="ds-note">
              Amostra controlada do deslocamento, sem esconder conteúdo.
              Movimento reduzido remove transições e deslocamentos; rolagem
              volta a auto. Nunca depender de animação para ler ou navegar.
            </p>
          </>
        )}
        {tab === "communication" && (
          <>
            <h3>Comunicação · um contrato para cada peça</h3>
            <Table
              heads={["Campo", "Padrão de comunicação"]}
              rows={[
                [
                  "Identificação",
                  "Nome curto do assunto: About, Portfolio ou uma categoria factual.",
                ],
                [
                  "Título",
                  "Uma ideia principal. Explicar o conteúdo que vem em seguida.",
                ],
                [
                  "Texto",
                  "Primeira pessoa ao falar da trajetória. Fatos, escolhas e experiências concretas.",
                ],
                [
                  "Ação",
                  "Verbo + destino claro. Uma ação principal por conjunto.",
                ],
                [
                  "Estado",
                  "Dizer “Pauta proposta”, “Em preparação” ou “Em revisão” quando aplicável.",
                ],
                [
                  "Projeto",
                  "Problema → contexto → minha participação → decisões → resultado → evidência.",
                ],
                [
                  "Revisão",
                  "Separar texto atual, proposta e texto aprovado. Não inventar métricas nem contribuições.",
                ],
              ]}
            />
            <p className="ds-note">
              Formato das fichas: objetivo → amostra → átomos → tipografia e
              medidas → movimento → cores → comunicação → arquivos. A revisão da
              redação pública continua por componente.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
