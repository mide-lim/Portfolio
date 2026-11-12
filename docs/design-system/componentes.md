# Catálogo de componentes

[Guia com amostras reais](https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/#componentes)

**Componente:** peça reutilizável. **Variante:** versão prevista da peça. **Estado:** resposta à interação. **Seção:** conjunto de peças com uma função na página.

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
| `footer.tsx` | Fechamento e retorno | Links de navegação | Rodapé |
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
- A comparação claro/escuro mostra a foto real com os tokens do tema.
- A demonstração de filtro mostra seleção; o filtro funcional está no Portfolio.
- Os desenhos de layout são esquemas explicativos, identificados como tal.
- Não declarar que uma amostra é uma captura de tela.

## Introdução de uma nova peça

Identifique finalidade, componente existente mais próximo, tokens usados, propriedades, comportamento no celular, semântica e estados. Acrescente uma amostra no guia e atualize este catálogo.

shadcn/ui pode fornecer uma base para componentes complexos. Essa opção não exige substituir os componentes atuais nem mudar o visual aprovado. CLI, registry e MCP não estão configurados neste marco.
