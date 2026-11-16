# Catálogo de componentes

[Guia com amostras reais](https://midelim.com/design-system/#perfil)

Os fundamentos aparecem antes da oficina. O catálogo tem 21 peças, organizadas por Globais, Home, About, Resume, Portfolio, Blog e Services.

A oficina separa perfil, navegação, tema, abertura, título de seção, ações, card, capa, filtros, trajetória, artigo, serviço, chamada final e rodapé. Cada peça tem amostra, átomos/composição, tipografia, medidas, movimento, funções 60/30/10, textos atuais, pauta de revisão e arquivos de origem.

Home: Abertura → About → Portfolio → Blog → Services (CTA). About inclui biografia, formação e competências; Blog inclui pautas; Portfolio inclui estudo de caso.

## Catálogo atual

| Componente / arquivo em src/components | Papel | Contrato / estados | Exemplo |
| --- | --- | --- | --- |
| `ui/action-link.tsx` | Navegação com aparência de ação | `href`, `variant: primary ou text`, `fullWidth`; hover e foco | Ações da Home e perfil |
| `sidebar.tsx` | Identidade, retrato e links | Adaptação para cartão compacto em telas menores | Todas as páginas |
| `header.tsx` | Menu principal | Link atual com `aria-current` | Topo |
| `theme-toggle.tsx` | Alternância de tema | Claro/escuro, preferência do sistema, armazenamento | Topo |
| `project-card.tsx` | Acesso a um projeto | Recebe `Project`; cartão inteiro é link | Home / Portfolio |
| `project-cover.tsx` | Capa ilustrativa | `mb`, `cube`, `terminal`, `web`, `philo`, `infra` | Dentro do card e estudo de caso |
| `project-grid.tsx` | Conjunto de projetos | `featured` mostra os quatro primeiros | Home |
| `project-filter.tsx` | Catálogo filtrável | Todos, Autorais & IA, 42 Rio, Sistemas; `aria-pressed` | Portfolio |
| `footer.tsx` | Fechamento, design system e retorno | Link para `/design-system/` e navegação | Rodapé |
| `page-effects.tsx` | Progresso, entrada e links antigos | Movimento reduzido; limpeza dos observadores | Layout global |

## ActionLink: quando usar

Use para ir a outra página ou seção. Para mudar um filtro, enviar um formulário ou abrir um diálogo, use `button` e um comportamento correspondente.

```tsx
import { ActionLink } from "@/components/ui/action-link";

<ActionLink href="/portfolio/">Explorar projetos ↗</ActionLink>
<ActionLink variant="text" href="/about/">Conhecer trajetória →</ActionLink>
<ActionLink href="/portfolio/" fullWidth>Explore meus projetos ↗</ActionLink>
```

A variante principal usa a cor `primary` e o texto `primary-foreground`. A variante discreta usa o texto neutro e uma linha inferior. Não simular estado desabilitado em um link que continua navegando.

Não existe componente de formulário ou diálogo no catálogo atual. Introduzir esses componentes quando houver um uso real, contemplando estados vazio, carregando, erro e sucesso conforme o caso.

## ProjectCard: anatomia

1. Capa ilustrativa.
2. Categoria e origem.
3. Nome do projeto.
4. Resumo breve.
5. Link para `/portfolio/[slug]/`.

Amostra real no guia: MEGA-BRAIN. Os dados vêm de `src/content/projects.ts`.

```tsx
<ProjectCard project={projects[0]} />
```

O cartão não deve conter outro botão ou link dentro de si. A capa é decorativa e usa `aria-hidden`; as informações textuais identificam o destino. A página do projeto informa que a composição é ilustrativa.

## Seções e páginas

| Padrão | Composição atual | Onde aparece |
| --- | --- | --- |
| Hero | Identificação, H1, introdução e ações | Home |
| Page hero | Identificação, título e introdução | About, Portfolio, Blog, Services |
| Section heading | Identificação, H2 e link opcional | Seções da Home |
| Estudo de caso | Cabeçalho, tags, capa, descrição, evidências e outros projetos | Portfolio individual |

Alguns padrões ainda são markup compartilhado por convenção, não componentes React extraídos. Extraia uma peça quando houver repetição significativa ou necessidade de evolução coordenada.

## Imagens e estados visuais no guia

- As amostras de ações e cards reutilizam o código de produção.
- As amostras acompanham o tema global; o retrato mantém suas cores naturais.
- O filtro do catálogo é o componente funcional real e altera os projetos visíveis.
- Os padrões de seção são trechos de markup em escala reduzida, identificados como amostras.
- Não declarar que uma amostra é uma captura de tela.

## Introdução de uma nova peça

Identifique finalidade, componente existente mais próximo, tokens usados, propriedades, comportamento no celular, semântica e estados. Acrescente uma amostra no guia e atualize este catálogo.

shadcn/ui pode fornecer uma base para componentes complexos. Essa opção não exige substituir os componentes atuais nem mudar o visual aprovado. CLI, registry e MCP não estão configurados neste marco.

## Comunicação por peça

Fonte do catálogo: `src/content/component-catalog.ts`. Campos consultam `pages.ts`, `site.ts` e `projects.ts` quando disponíveis. Rótulos ainda locais, como filtros, tema e rodapé, indicam o arquivo do componente. Se esses rótulos mudarem, atualizar a ficha no mesmo commit.

A pauta lista decisões a trabalhar, não afirma que os textos atuais estão aprovados. Não há formulário de edição ou salvamento de rascunhos nesta versão. Selecionar uma peça apenas muda a amostra e o hash da URL. Links dentro das amostras navegam para os destinos reais.

60/30/10: superfícies neutras dominantes, conteúdo contrastante secundário e destaque concentrado. Estados e foco usam a mesma cor semântica das ações. Ver `fundamentos.md` para exceções e contraste.

## Regras compartilhadas e exceções

`src/content/design-standards.ts` mantém as fichas de medida e composição. Valores executados vivem em `src/design/tokens.css` e `globals.css`. Não tratar capa, card, marco ou grade como átomo: são composições de partes menores. A ficha mostra ambas as camadas.

O contexto da página é preservado em `?view=about#pagina-interna` (ou portfolio/blog/services); o mesmo padrão de abertura consulta o texto da página escolhida. Filtros inválidos não devem esconder a peça selecionada.

## Perfil · atualização de 13/11/2026

O perfil usa monograma vetorial em avaliação, retrato sobre Sand, frentes de software e cibersegurança e contatos com ícones. LinkedIn, GitHub e Gmail têm destinos configurados em `src/content/site.ts`; Discord está identificado como pendente, sem link.

`ProfileAction` anima a seta na diagonal e de volta em 360 ms antes da navegação, sem atraso quando movimento reduzido está ativo; modificadores de clique preservam o comportamento nativo. Links sociais recebem realce inferior no hover e foco apenas no perfil. `SocialIcon` reúne os ícones. Ver `src/content/design-standards.ts` para medidas e ficha atual.

## Resume · 15/11/2026

Resume usa a abertura de página interna, seções editoriais e conteúdo em `src/content/resume.ts`. No DS, a categoria Resume oferece a amostra da abertura; experiência, formação, projetos, conhecimentos e idiomas estão visíveis na página real.
