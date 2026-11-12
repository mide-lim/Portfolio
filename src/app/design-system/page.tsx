import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TokenExplorer } from "@/components/design-system/token-explorer";
import { ComponentStates } from "@/components/design-system/component-states";
import { ProjectCard } from "@/components/project-card";
import { ActionLink } from "@/components/ui/action-link";
import { projects } from "@/content/projects";
import {
  guideSections,
  glossary,
  decisions,
  documentation,
  references,
} from "@/content/design-system";
import "./guide.css";

export const metadata: Metadata = {
  title: "Guia visual do design system",
  description:
    "Um guia de trabalho do portfólio: nomes, exemplos visuais, componentes e decisões.",
  robots: { index: false, follow: false },
};

function Heading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ds-heading">
      <span className="ds-number">{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <article className="ds-guide">
      <div className="ds-hero">
        <span className="eyebrow">MIDELIM · CADERNO DE DESIGN · V0.1</span>
        <h1>
          Um nome.
          <br />
          Um exemplo.
          <br />
          <em>Uma decisão.</em>
        </h1>
        <p className="ds-lead">
          Este é o mapa visual do nosso portfólio. Aqui, cada termo vem
          acompanhado de uma explicação e de algo que você pode ver ou
          experimentar.
        </p>
        <div className="ds-status-row">
          <span>Baseada no site atual</span>
          <span>Em construção conjunta</span>
          <span>12 nov. 2026</span>
        </div>
        <div className="ds-intro-note">
          <strong>Comece por “O que são tokens”.</strong>
          <p>
            Troque o tema da amostra e veja o mesmo botão mudar de cor. Depois,
            percorra os componentes e os pontos que ainda vamos decidir.
          </p>
        </div>
      </div>
      <div
        className="ds-index"
        role="navigation"
        aria-label="Índice do guia visual"
      >
        {guideSections.map((item, index) => (
          <a key={item.id} href={"#" + item.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </div>

      <section className="ds-section" id="mapa">
        <Heading number="01" title="O mapa do sistema">
          Design system é o conjunto de decisões, peças reutilizáveis e exemplos
          que mantém o site coeso.
        </Heading>
        <div className="ds-glossary">
          {glossary.map((term) => (
            <a
              href={"#" + term.target}
              className="ds-glossary-item"
              key={term.name}
            >
              <h3>
                {term.name} <span aria-hidden="true">↗</span>
              </h3>
              <p>{term.plain}</p>
              <small>{term.example}</small>
            </a>
          ))}
        </div>
        <p className="ds-note">
          As amostras deste guia são elementos renderizados do próprio projeto.
          Não são capturas de tela nem propostas de um novo visual.
        </p>
      </section>

      <section className="ds-section" id="tokens">
        <Heading number="02" title="Token: uma decisão com nome">
          Em vez de escolher uma cor novamente a cada botão, damos um nome à
          função que aquela cor cumpre.
        </Heading>
        <TokenExplorer />
        <div className="ds-two-col ds-explanation">
          <div>
            <h3>Valor é a escolha concreta.</h3>
            <p>
              Por exemplo, <code>#2F6BFF</code> é o valor de Electric Blue. Esse
              valor pode ser guardado como uma cor da paleta.
            </p>
          </div>
          <div>
            <h3>Nome é a função no projeto.</h3>
            <p>
              <code>primary</code> significa “ação principal”. Ele aponta para
              Electric Blue no escuro e Burnt Orange no claro.
            </p>
          </div>
        </div>
        <div className="ds-code-example">
          <span className="ds-step">NO CÓDIGO</span>
          <code>background: var(--primary);</code>
          <p>
            Leia como: “use a cor que o sistema definiu para a ação principal”.
            Tokens também podem representar fontes, espaço, curvas e duração de
            movimentos.
          </p>
        </div>
      </section>

      <section className="ds-section" id="temas">
        <Heading number="03" title="A mesma identidade, dois temas">
          As paletas já foram aprovadas. A foto mantém o fundo Sand em ambos os
          modos.
        </Heading>
        <div className="ds-two-col">
          {(["light", "dark"] as const).map((mode) => (
            <figure
              className="ds-theme-preview"
              data-design-theme={mode}
              key={mode}
            >
              <figcaption>
                <strong>
                  {mode === "light"
                    ? "Claro · Cream / Ink / Orange"
                    : "Escuro · Charcoal / Sand / Blue"}
                </strong>
                <span>Exemplo de composição com a foto atual</span>
              </figcaption>
              <div className="ds-profile-sample">
                <div className="ds-portrait">
                  <Image
                    src="/images/michel-marques.webp"
                    width={640}
                    height={801}
                    alt={
                      "Retrato de Michel sobre Sand no tema " +
                      (mode === "light" ? "claro" : "escuro")
                    }
                    sizes="(max-width: 520px) 70vw, 220px"
                  />
                </div>
                <h3>Michel Marques</h3>
                <p>Rio de Janeiro, Brasil</p>
                <ActionLink href="/portfolio/">Explorar projetos ↗</ActionLink>
              </div>
              <div className="ds-palette-strip" aria-hidden="true">
                <i style={{ background: "var(--background)" }} />
                <i style={{ background: "var(--foreground)" }} />
                <i style={{ background: "var(--primary)" }} />
              </div>
            </figure>
          ))}
        </div>
        <div className="ds-explanation">
          <h3>Por que o texto do botão muda?</h3>
          <p>
            O botão azul usa texto branco; o laranja usa Ink Black. O contraste
            depende da combinação entre fundo e texto, não apenas de uma cor
            isolada.
          </p>
          <p>
            Os tons de superfície e borda são variações neutras já presentes no
            site. Azul e laranja ficam reservados às ações principais. A
            fotografia mantém suas cores naturais.
          </p>
        </div>
      </section>

      <section className="ds-section" id="tipografia">
        <Heading number="04" title="Tipografia: a voz visual">
          A fonte, o tamanho e o peso ajudam a distinguir um título, uma
          explicação e uma informação de apoio.
        </Heading>
        <div className="ds-two-col">
          <figure className="ds-specimen">
            <figcaption>SPACE GROTESK · TÍTULOS</figcaption>
            <span className="ds-type-heading">
              Aa
              <br />
              Trajetória.
            </span>
            <p>Títulos e identidade. É a fonte das frases grandes da Home.</p>
            <code>--font-heading</code>
          </figure>
          <figure className="ds-specimen">
            <figcaption>DM SANS · LEITURA</figcaption>
            <span className="ds-type-body">
              Aa
              <br />
              Uma ideia começa
              <br />
              com uma pergunta.
            </span>
            <p>Parágrafos, navegação e informações de apoio.</p>
            <code>--font-body</code>
          </figure>
        </div>
        <div className="ds-type-ladder">
          <div>
            <span>H1 · TÍTULO DA PÁGINA</span>
            <strong className="ds-type-h1">Curiosidade</strong>
          </div>
          <div>
            <span>H2 · TÍTULO DA SEÇÃO</span>
            <strong className="ds-type-h2">Projetos em destaque</strong>
          </div>
          <div>
            <span>H3 · TÍTULO DO CARD</span>
            <strong className="ds-type-h3">MEGA-BRAIN</strong>
          </div>
          <div>
            <span>TEXTO · EXPLICAÇÃO</span>
            <p>Transformar vídeos salvos em um acervo consultável.</p>
          </div>
        </div>
        <p className="ds-note">
          Hierarquia demonstrada em escala reduzida para caber no guia. No site,
          os títulos se ajustam ao tamanho da tela; os valores atuais estão em
          Fundamentos visuais.
        </p>
      </section>

      <section className="ds-section" id="espaco">
        <Heading number="05" title="Espaço e forma também têm nome">
          Espaçamento é a distância entre elementos. Raio é o arredondamento de
          um canto.
        </Heading>
        <div className="ds-two-col">
          <div className="ds-panel">
            <span className="ds-label">
              ESPAÇAMENTO · PROPOSTA PARA NOVAS PEÇAS
            </span>
            <div className="ds-space-scale">
              {[4, 8, 12, 16, 24, 32, 48, 64].map((size) => (
                <div key={size}>
                  <span>{size} px</span>
                  <i style={{ width: size * 2 }} />
                  <code>space-{size / 4}</code>
                </div>
              ))}
            </div>
            <p>
              Uma escala ajuda a repetir distâncias com intenção. O layout atual
              ainda contém ajustes específicos, como 25 e 26 px.
            </p>
          </div>
          <div className="ds-panel">
            <span className="ds-label">CANTOS · VALORES DO SITE ATUAL</span>
            <div className="ds-radius-grid">
              {[
                { name: "Foto", size: 18 },
                { name: "Projeto", size: 23 },
                { name: "Perfil / ação", size: 30 },
              ].map((item) => (
                <div key={item.name}>
                  <i style={{ borderRadius: item.size }} />
                  <strong>{item.name}</strong>
                  <span>{item.size} px</span>
                </div>
              ))}
            </div>
            <p>
              O sistema registra as diferenças existentes. Uma mudança de escala
              será uma decisão explícita.
            </p>
          </div>
        </div>
        <div className="ds-padding-demo">
          <div>
            <span className="ds-padding-label">
              padding = espaço por dentro
            </span>
            <div className="ds-padding-inner">Conteúdo do cartão</div>
          </div>
          <div className="ds-gap-label">
            <span>↔</span>
            <strong>gap</strong>
            <small>distância entre peças</small>
          </div>
          <div>
            <span className="ds-padding-label">borda = limite da peça</span>
            <div className="ds-padding-inner">Outro cartão</div>
          </div>
        </div>
      </section>

      <section className="ds-section" id="componentes">
        <Heading number="06" title="Componentes: as peças do site">
          As amostras abaixo usam os mesmos componentes que aparecem nas páginas
          do portfólio.
        </Heading>
        <div className="ds-panel">
          <h3>Ação principal, link e estados</h3>
          <ComponentStates />
        </div>
        <div className="ds-two-col ds-card-anatomy">
          <div className="projects ds-single-project">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="ds-panel">
            <span className="ds-label">ANATOMIA DE UM PROJECTCARD</span>
            <ol className="ds-anatomy-list">
              <li>
                <strong>Capa</strong>
                <p>Composição visual ilustrativa do projeto.</p>
              </li>
              <li>
                <strong>Categoria</strong>
                <p>Ajuda a situar o tipo de trabalho.</p>
              </li>
              <li>
                <strong>Nome</strong>
                <p>Identifica o projeto sem ambiguidade.</p>
              </li>
              <li>
                <strong>Resumo</strong>
                <p>Uma frase para entender o que ele faz.</p>
              </li>
              <li>
                <strong>Destino</strong>
                <p>O cartão inteiro abre o estudo de caso.</p>
              </li>
            </ol>
            <code>src/components/project-card.tsx</code>
          </div>
        </div>
        <div className="ds-panel">
          <h3>Onde cada peça vive</h3>
          <div className="ds-table-wrap">
            <table>
              <caption>Catálogo inicial</caption>
              <thead>
                <tr>
                  <th>Nome no código</th>
                  <th>O que você vê</th>
                  <th>Onde conferir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sidebar</td>
                  <td>Foto, nome e informações pessoais</td>
                  <td>À esquerda ou no topo desta página</td>
                </tr>
                <tr>
                  <td>Header / ThemeToggle</td>
                  <td>Menu e botão Claro/Escuro</td>
                  <td>Topo do site</td>
                </tr>
                <tr>
                  <td>ActionLink</td>
                  <td>Botão de navegação ou link discreto</td>
                  <td>Amostra acima e ações da Home</td>
                </tr>
                <tr>
                  <td>ProjectCard / ProjectCover</td>
                  <td>Cartão e capa de projeto</td>
                  <td>Amostra do MEGA-BRAIN</td>
                </tr>
                <tr>
                  <td>ProjectFilter</td>
                  <td>Filtro do catálogo</td>
                  <td>
                    <Link href="/portfolio/">Abrir Portfolio →</Link>
                  </td>
                </tr>
                <tr>
                  <td>PageEffects</td>
                  <td>Entrada suave e progresso da rolagem</td>
                  <td>Ao percorrer as páginas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="ds-note">
          shadcn/ui será considerado quando houver necessidade de uma peça
          complexa, como diálogo ou formulário. Os componentes acima já
          pertencem ao projeto; não dependem de uma instalação do shadcn.
        </p>
      </section>

      <section className="ds-section" id="layout">
        <Heading number="07" title="Layout: como as peças se encontram">
          A Home apresenta o resumo da trajetória. As outras páginas aprofundam
          cada assunto.
        </Heading>
        <div className="ds-layout-comparison">
          <figure className="ds-wireframe">
            <figcaption>COMPUTADOR · MAIS DE 800 PX</figcaption>
            <div className="ds-wire-desktop">
              <div>
                Perfil
                <br />
                <small>fixo durante a rolagem</small>
              </div>
              <div>
                <span>Home · About · Portfolio · Blog · Services</span>
                <strong>Apresentação</strong>
                <div className="ds-wire-cards">
                  <i>Projeto</i>
                  <i>Projeto</i>
                </div>
                <span>Trajetória · Blog</span>
              </div>
            </div>
          </figure>
          <figure className="ds-wireframe">
            <figcaption>CELULAR · ATÉ 800 PX</figcaption>
            <div className="ds-wire-mobile">
              <span>Nome + foto compacta</span>
              <span>Navegação + tema</span>
              <strong>Apresentação</strong>
              <span>Projetos e trajetória</span>
            </div>
          </figure>
        </div>
        <p className="ds-note">
          Esquemas explicativos do layout atual. Não são capturas de tela. Os
          cards passam a uma coluna até 520 px.
        </p>
        <div className="ds-two-col">
          <div className="ds-panel">
            <h3>Uma seção</h3>
            <span className="ds-section-sample">
              <small>IDENTIFICAÇÃO</small>
              <strong>
                Ideias em
                <br />
                funcionamento.
              </strong>
              <span>Título + ação + conjunto de projetos</span>
            </span>
            <p>
              A seção organiza uma parte da história; o componente pode aparecer
              em várias seções.
            </p>
          </div>
          <div className="ds-panel">
            <h3>Movimento</h3>
            <p>
              <strong>Hover:</strong> resposta ao passar o ponteiro, cerca de
              250 ms nas ações.
            </p>
            <p>
              <strong>Entrada:</strong> aparição gradual de elementos, 650 ms.
            </p>
            <p>
              <strong>Movimento reduzido:</strong> o site respeita a preferência
              do dispositivo.
            </p>
            <p className="ds-note">
              Rolagem suave e IntersectionObserver já existem. Parallax, GSAP e
              Lenis ainda não foram integrados.
            </p>
          </div>
        </div>
      </section>

      <section className="ds-section" id="escrita">
        <Heading number="08" title="A escrita faz parte do sistema">
          O texto precisa mostrar quem você é e o que realmente fez. Esta é a
          direção editorial para discutirmos.
        </Heading>
        <div className="ds-two-col">
          <div className="ds-panel">
            <span className="ds-label">TEXTO ATUAL · EM REVISÃO</span>
            <blockquote>Curiosidade que vira construção.</blockquote>
            <p>
              É uma frase ampla. Ainda não conta uma experiência específica sua.
            </p>
          </div>
          <div className="ds-panel">
            <span className="ds-label">EXEMPLO DE DIREÇÃO · RASCUNHO</span>
            <blockquote>
              Na 42 Rio, construí projetos em C e C++. Hoje, estudo como usar IA
              para organizar informação.
            </blockquote>
            <p>
              Apresenta formação, prática e interesse atual. É uma amostra para
              discutir o tom, ainda não aplicada à Home.
            </p>
          </div>
        </div>
        <div className="ds-explanation">
          <h3>O roteiro de cada projeto</h3>
          <p>
            Problema → contexto → minha participação → decisões → resultado →
            aprendizados → evidências.
          </p>
          <p>
            Resultados e contribuições entram quando estiverem confirmados. Nos
            trabalhos em dupla, vamos diferenciar o que o projeto faz daquilo
            que você realizou pessoalmente.
          </p>
        </div>
      </section>

      <section className="ds-section" id="decisoes">
        <Heading number="09" title="O que vamos organizar juntos">
          Aprovado, implementado, proposto e pendente representam situações
          diferentes.
        </Heading>
        <div className="ds-decision-list">
          {decisions.map((item) => (
            <div key={item.id}>
              <span className="ds-decision-id">{item.id}</span>
              <div>
                <span className="ds-status">{item.status}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ds-intro-note">
          <strong>Como revisar comigo</strong>
          <p>
            Você pode dizer “DS-03: quero um tom mais direto” ou “na seção 05,
            prefiro os cards menos arredondados”. O nome e o exemplo visual
            viram nossa referência comum.
          </p>
        </div>
        <p className="ds-note">
          Esta página consulta a documentação versionada. Ela não envia
          comentários nem salva decisões por conta própria. Vamos registrar os
          ajustes no repositório conforme conversarmos.
        </p>
      </section>

      <section className="ds-section" id="documentos">
        <Heading number="10" title="Documentação para pessoas e IA">
          O guia visual serve para conversar. Os documentos no repositório
          explicam como implementar e manter essas decisões.
        </Heading>
        <div className="ds-document-grid">
          {documentation.map((doc) => (
            <a
              key={doc.path}
              href={
                "https://github.com/mide-lim/Portfolio/blob/main/" + doc.path
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ds-doc-icon" aria-hidden="true">
                ↗
              </span>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <code>{doc.path}</code>
            </a>
          ))}
        </div>
        <div className="ds-explanation">
          <h3>O fluxo de uma alteração</h3>
          <ol className="ds-workflow">
            <li>Consultar o guia e os componentes existentes.</li>
            <li>Identificar a decisão que precisa mudar.</li>
            <li>Implementar a alteração com os tokens do projeto.</li>
            <li>Conferir os dois temas, o celular, os links e o teclado.</li>
            <li>Atualizar os documentos e registrar o commit.</li>
          </ol>
        </div>
        <details className="ds-reading">
          <summary>Referências para aprofundar os conceitos</summary>
          <div>
            {references.map((ref) => (
              <p key={ref.name}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.name} ↗
                </a>
                <span>{ref.role}</span>
              </p>
            ))}
          </div>
          <p>
            Referências consultadas em 12/11/2026. O guia usa elementos do
            portfólio atual como exemplos visuais.
          </p>
        </details>
        <p className="ds-note">
          A rota deste guia fica fora do menu principal e está marcada para não
          indexação. Isso não é um controle de acesso; ela acompanha a
          visibilidade da hospedagem.
        </p>
      </section>
      <div className="ds-end">
        <strong>Primeiro, uma linguagem em comum.</strong>
        <p>Depois, decisões mais claras sobre o visual e a sua história.</p>
        <ActionLink variant="text" href="/">
          Voltar ao portfólio →
        </ActionLink>
      </div>
    </article>
  );
}
