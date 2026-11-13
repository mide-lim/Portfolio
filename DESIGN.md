# Design system · midelim.com

Versão 0.2 · 13/11/2026 · documento de trabalho.

[Guia visual navegável](https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/) · [Código do guia](src/app/design-system/page.tsx) · [Decisões](docs/design-system/decisoes.md)

## Objetivo

Manter a identidade do portfólio enquanto suas páginas, projetos e textos evoluem. O sistema usa o próprio site como referência visual e fornece regras verificáveis para pessoas e agentes de IA.

O portfólio apresenta a trajetória completa de Michel Marques: graduação em Segurança da Informação, formação em andamento na 42 Rio e projetos autorais com IA. A comunicação não deve ser reduzida a uma vaga específica.

## Como ler

| Documento | Pergunta que responde |
| --- | --- |
| [Fundamentos](docs/design-system/fundamentos.md) | Quais cores, proporções, fontes, espaços e movimentos usamos? |
| [Componentes](docs/design-system/componentes.md) | Que peças já existem e como reutilizá-las? |
| [Conteúdo](docs/design-system/conteudo.md) | Como escrever as páginas com fatos e voz própria? |
| [Fluxo e qualidade](docs/design-system/fluxo-e-qualidade.md) | Como trabalhar com IA, testar e publicar alterações? |
| [Decisões](docs/design-system/decisoes.md) | O que está aprovado, proposto ou pendente? |
| [AGENTS.md](AGENTS.md) | Quais instruções os agentes devem seguir no repositório? |

## Oficina de componentes

O [catálogo navegável](https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/) separa 14 peças. Cada uma reúne amostra, papel das cores, textos atuais, pauta de revisão e arquivos de origem. Os endereços por hash permitem voltar à mesma peça, por exemplo `#abertura`.

A composição segue a referência **60% base, 30% secundária, 10% destaque**. A proporção orienta a hierarquia visual; não é uma medição de pixels. O destaque fica concentrado em ações e estados, sem comprometer contraste ou alterar as cores da fotografia. Botões representam o destaque dentro do conjunto; não devem ser repartidos em três cores.

As amostras de Sidebar, ThemeToggle, ActionLink, ProjectCard, ProjectCover, ProjectFilter e Footer usam componentes reais. Os demais blocos reproduzem trechos do layout em escala de catálogo e consultam os mesmos textos. A revisão editorial das páginas continua pendente.

## O que já está estabelecido

- Claro: Cream, Ink Black e Burnt Orange.
- Escuro: Charcoal, Sand e Electric Blue.
- Fundo Sand sob o retrato, nos dois modos.
- Menu: Home → About → Portfolio → Blog → Services.
- Home longa com resumo; páginas internas com aprofundamento.
- Next.js App Router, TypeScript, Tailwind e GitHub Actions.
- Componentes compartilhados e conteúdo separado do layout.

## Estado de implementação

| Item | Situação |
| --- | --- |
| Tokens de cor, fontes e aliases | Centralizados em `src/design/tokens.css` |
| Integração Tailwind | Cores semânticas disponíveis por `@theme inline` |
| Catálogo visual | Rota `/design-system/`; seleção de peças, amostras e pauta editorial |
| ActionLink | Navegação principal/discreta compartilhada com a Home e o perfil |
| Componentes existentes | Perfil, menu, tema, projetos, filtros e efeitos |
| Escala de espaço | Proposta para novas peças; valores antigos preservados |
| Escrita | Direção documentada; revisão dos textos públicos ainda pendente |
| shadcn/ui e seu MCP | Avaliar quando houver um componente que os justifique; não instalados |
| Storybook | Adiado enquanto o guia local atende ao catálogo; não instalado |
| Vercel / domínio | Conexão e DNS ainda pendentes |
| Revisão visual automatizada | Pendente por indisponibilidade do navegador |

O guia está fora do menu principal e usa `noindex`. Não é uma área autenticada separada: acompanha a audiência da hospedagem.

## Fonte de verdade

1. O pedido atual e as decisões explícitas de Michel definem o escopo.
2. [Decisões](docs/design-system/decisoes.md) distinguem o aprovado do proposto.
3. `src/design/tokens.css` define os valores visuais usados em execução.
4. `src/components/` define o comportamento das peças.
5. `src/content/` guarda os textos e os dados.
6. Este conjunto de documentos explica a intenção e os exemplos.

Se documentação e código divergirem, identifique a diferença e corrija o artefato desatualizado conforme a decisão mais recente. Uma implementação existente não significa, por si só, aprovação editorial.

## Limites desta versão

O sistema nasce do visual atual. Os valores de espaçamento ainda não foram normalizados em todas as páginas. As capas são ilustrativas. Os textos de biografia e projetos serão trabalhados em conjunto. Não há declaração de conformidade integral com WCAG: a revisão manual permanece necessária.

## Referências técnicas

- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): composição de partes e páginas.
- [Design Tokens Format Module](https://www.designtokens.org/tr/2025.10/format/): referência de intercâmbio; este projeto usa CSS, sem alegar exportação DTCG.
- [Tailwind: theme variables](https://tailwindcss.com/docs/theme): integração entre tokens e classes.
- [shadcn/ui](https://ui.shadcn.com/docs): componentes com código disponível no projeto.
- [Storybook e IA](https://storybook.js.org/docs/ai): possibilidade futura de catálogo conectado.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): referência de acessibilidade.

As referências de inspiração visual continuam fora do README público de apresentação, conforme solicitado. O guia usa o portfólio atual como exemplo.
