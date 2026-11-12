export const guideSections = [
  { id: "mapa", label: "Mapa do sistema" },
  { id: "tokens", label: "O que são tokens" },
  { id: "temas", label: "Cores e temas" },
  { id: "tipografia", label: "Tipografia" },
  { id: "espaco", label: "Espaço e forma" },
  { id: "componentes", label: "Componentes reais" },
  { id: "layout", label: "Layout e movimento" },
  { id: "escrita", label: "Voz e textos" },
  { id: "decisoes", label: "Decisões em conjunto" },
  { id: "documentos", label: "Documentos e referências" },
];
export const glossary = [
  {
    name: "Token",
    plain: "Uma decisão de design com nome.",
    example: "primary é o nome da cor da ação principal.",
    target: "tokens",
  },
  {
    name: "Componente",
    plain: "Uma peça reutilizável da interface.",
    example: "O mesmo cartão de projeto aparece na Home e no Portfolio.",
    target: "componentes",
  },
  {
    name: "Variante",
    plain: "Uma versão prevista de uma mesma peça.",
    example:
      "Um link pode aparecer como botão principal ou como link discreto.",
    target: "componentes",
  },
  {
    name: "Estado",
    plain: "Como uma peça responde ao uso.",
    example: "Foco ao usar Tab; filtro marcado depois do clique.",
    target: "componentes",
  },
  {
    name: "Seção",
    plain: "Um trecho da página com uma função.",
    example: "Projetos em destaque reúne título, link e cards.",
    target: "layout",
  },
  {
    name: "Layout",
    plain: "A disposição das peças na tela.",
    example: "Perfil à esquerda e conteúdo à direita no computador.",
    target: "layout",
  },
  {
    name: "Breakpoint",
    plain: "Largura em que o layout muda.",
    example: "Até 800 px, o perfil vira um cartão compacto no topo.",
    target: "layout",
  },
  {
    name: "Design system",
    plain: "As regras, peças e exemplos do projeto.",
    example: "Este guia, os componentes e os tokens versionados juntos.",
    target: "documentos",
  },
];
export const colorTokens = [
  {
    name: "Fundo da página",
    token: "--background",
    light: "Cream · #F3EEE3",
    dark: "Charcoal · #1E1E1C",
  },
  {
    name: "Superfície dos cartões",
    token: "--surface",
    light: "#EBE5D8",
    dark: "#242420",
  },
  {
    name: "Texto principal",
    token: "--foreground",
    light: "Ink Black · #111111",
    dark: "Sand · #D8CBB3",
  },
  {
    name: "Ação principal",
    token: "--primary",
    light: "Burnt Orange · #D9541E",
    dark: "Electric Blue · #2F6BFF",
  },
  {
    name: "Texto da ação",
    token: "--primary-foreground",
    light: "Ink Black · #111111",
    dark: "Branco · #FFFFFF",
  },
  {
    name: "Fundo da foto",
    token: "--portrait-background",
    light: "Sand · #D8CBB3",
    dark: "Sand · #D8CBB3",
  },
];
export const decisions = [
  {
    id: "DS-01",
    status: "Aprovado",
    title: "Identidade e navegação",
    detail:
      "As duas paletas; foto sobre Sand; ordem Home, About, Portfolio, Blog e Services.",
  },
  {
    id: "DS-02",
    status: "Implementado",
    title: "Base do sistema",
    detail:
      "Tokens centralizados, componentes compartilhados, guia visual e instruções para IA.",
  },
  {
    id: "DS-03",
    status: "Em revisão",
    title: "Voz dos textos",
    detail:
      "Primeira pessoa, experiências concretas e menos frases genéricas. Os textos públicos ainda serão revistos.",
  },
  {
    id: "DS-04",
    status: "Proposta",
    title: "Escala de espaçamento",
    detail:
      "Vocabulário de 4, 8, 12, 16, 24, 32, 48 e 64 px para novas peças. O layout atual mantém seus ajustes.",
  },
  {
    id: "DS-05",
    status: "Pendente",
    title: "Evidências dos projetos",
    detail:
      "Escolher capturas reais, contribuição individual, resultados e primeiros artigos.",
  },
  {
    id: "DS-06",
    status: "Pendente",
    title: "Revisão visual e acessibilidade",
    detail:
      "Conferir desktop, celular, zoom, teclado, leitor de tela e os dois temas.",
  },
];
export const documentation = [
  {
    path: "DESIGN.md",
    title: "Mapa geral",
    description: "Por onde começar e qual arquivo consultar.",
  },
  {
    path: "docs/design-system/fundamentos.md",
    title: "Fundamentos visuais",
    description: "Tokens, temas, fontes, dimensões e movimento.",
  },
  {
    path: "docs/design-system/componentes.md",
    title: "Catálogo de componentes",
    description: "Peças disponíveis, estados, código e exemplos de uso.",
  },
  {
    path: "docs/design-system/conteudo.md",
    title: "Guia de escrita",
    description: "Tom, estrutura de cada página e roteiro dos estudos de caso.",
  },
  {
    path: "docs/design-system/fluxo-e-qualidade.md",
    title: "Trabalho com IA e qualidade",
    description: "Como alterar, validar, revisar e publicar.",
  },
  {
    path: "docs/design-system/decisoes.md",
    title: "Registro de decisões",
    description: "O que já foi definido e o que vamos decidir juntos.",
  },
  {
    path: "AGENTS.md",
    title: "Instruções para agentes",
    description: "Regras práticas para futuras tarefas no repositório.",
  },
];
export const references = [
  {
    name: "Tokens de design",
    url: "https://www.designtokens.org/tr/2025.10/format/",
    role: "Referência sobre decisões de design nomeadas e intercâmbio entre ferramentas. Nosso formato atual é CSS.",
  },
  {
    name: "Atomic Design",
    url: "https://atomicdesign.bradfrost.com/chapter-2/",
    role: "Referência de composição: peças pequenas, seções e páginas.",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs/theme",
    role: "Tecnologia já usada para estilos e integração dos tokens.",
  },
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com/docs",
    role: "Apoio previsto para componentes complexos. Ainda não instalado.",
  },
  {
    name: "Storybook",
    url: "https://storybook.js.org/docs/ai",
    role: "Catálogo e integração com IA a avaliar quando o sistema crescer. Ainda não instalado.",
  },
  {
    name: "WCAG 2.2",
    url: "https://www.w3.org/TR/WCAG22/",
    role: "Referência para revisar acesso por teclado, contraste e leitura.",
  },
];
