export const foundationTabs = [
  { id: "fonts", label: "Fonts & typography" },
  { id: "spacing", label: "Spacing & pixels" },
  { id: "grid", label: "Grid guidance" },
  { id: "stickers", label: "Stickers" },
  { id: "colors", label: "Colors" },
  { id: "motion", label: "Motion" },
  { id: "communication", label: "Comunicação" },
];
export const typography = [
  [
    "H1 · Home",
    "--type-home",
    "Space Grotesk",
    "500",
    "62–112 px fluido; ≤1100: 76; ≤800: 60–90 fluido",
    "1,06",
  ],
  [
    "H1 · internas",
    "--type-page",
    "Space Grotesk",
    "500",
    "58–94 px fluido; ≤800: 65; ≤520: 58",
    "1,06",
  ],
  [
    "H2 · seção",
    "--type-section",
    "Space Grotesk",
    "500",
    "35–64 px fluido",
    "1,06",
  ],
  [
    "Título de seção da Home",
    "--type-section-heading",
    "Space Grotesk",
    "500",
    "H2; ≤800: 44; ≤520: 45",
    "1,06",
  ],
  ["H3 · card", "--type-card", "Space Grotesk", "500", "27 px", "1,06"],
  ["Introdução", "--type-intro", "DM Sans", "400", "18 px; ≤520: 16", "1,7"],
  ["Texto", "--type-body", "DM Sans", "400", "16 px", "1,65"],
  [
    "Ação principal",
    "--type-action",
    "DM Sans",
    "600",
    "14 px; perfil: 13",
    "1,65",
  ],
  [
    "Identificador",
    "--type-label",
    "DM Sans",
    "600",
    "11 px; tracking: 2 px",
    "1,65",
  ],
  [
    "Categoria do card",
    "--type-meta",
    "DM Sans",
    "400",
    "10 px; tracking: 1 px",
    "1,65",
  ],
];
export const gridRules = [
  [
    "Acima de 1100 px",
    "Perfil 285 px + conteúdo flexível",
    "34 px / 3,4%",
    "5,5%",
  ],
  ["801–1100 px", "Perfil 240 px + conteúdo flexível", "24 px", "4%"],
  [
    "521–800 px",
    "Perfil compacto acima do conteúdo",
    "18 px",
    "Fluxo vertical",
  ],
  [
    "Até 520 px",
    "Conteúdo e cards em uma coluna",
    "18 px",
    "Cards: 38 px entre linhas",
  ],
];
export const motionRules = [
  [
    "Ações",
    "CSS transition",
    "--duration-interaction · 250 ms",
    "ease · subida de 3 px no hover",
    "ActionLink / .button",
  ],
  [
    "Navegação e links",
    "CSS transition",
    "--duration-state · 200 ms",
    "ease · cor e fundo",
    "Header / .text-link",
  ],
  [
    "Capas de projeto",
    "CSS transition",
    "--duration-cover · 400 ms",
    "ease · subida de 6 px no hover",
    "ProjectCard / .cover",
  ],
  [
    "Entrada na viewport",
    "IntersectionObserver + CSS",
    "--duration-reveal · 650 ms",
    "ease · opacidade + 24 px; limiar 8%",
    "PageEffects",
  ],
  [
    "Progresso da leitura",
    "requestAnimationFrame",
    "Acompanha a rolagem",
    "Barra de 2 px; sem easing artificial",
    "PageEffects",
  ],
  [
    "Âncoras",
    "scroll-behavior nativo",
    "Definida pelo navegador",
    "scroll-padding: 110 px; ≤800: 130",
    "html",
  ],
];
export const componentSpecs: Record<
  string,
  { atoms: string[]; type: string; geometry: string; motion: string }
> = {
  perfil: {
    atoms: ["Marca", "Nome", "Retrato", "Rótulo", "Texto", "Link", "CTA"],
    type: "Space Grotesk: nome 26/23/18 px, peso 600; marca 68/45 px. DM Sans: informações 15 px; CTA 13 px.",
    geometry:
      "Coluna 285/240 px; padding 26/20 px. Mobile: 16 × 20 px. Raio 30 px, mobile 20. Foto 265 px de altura (220 no intermediário); mobile 58 × 70.",
    motion: "CTA: 250 ms / −3 px; perfil sem animação de entrada.",
  },
  menu: {
    atoms: ["Link", "Rótulo", "Indicador ativo"],
    type: "DM Sans 14 px; ≤1100: 12; ≤520: 11.",
    geometry:
      "Links: padding 10 × 19 px; ≤1100: 9 × 12; ≤520: 8 × 10. Gap 5/1 px; raio 30.",
    motion: "Cor e fundo em 200 ms; indicador atual e foco sem atraso.",
  },
  tema: {
    atoms: ["Ícone", "Rótulo", "Button", "Foco"],
    type: "DM Sans 12 px; ícone 22 px. Nome oculto no cabeçalho até 520 px.",
    geometry: "Padding 8 × 14 px; ≤520: 7 × 10. Gap 9; raio 25; borda 1 px.",
    motion: "Troca imediata da paleta, sem animação de tela.",
  },
  abertura: {
    atoms: [
      "Identificador",
      "H1",
      "Introdução",
      "CTA",
      "Link",
      "Indicador de rolagem",
    ],
    type: "H1 Home + introdução + identificador + ação.",
    geometry:
      "Padding superior 100/80/35 px; até 800 permanece 35. Ações: gap 30/18/20. Altura mínima 740 px; ≥1550: 850; ≤1100: 680; ≤800: 660; ≤520: 610.",
    motion: "Ações 250 ms; âncora nativa. Texto aparece sem atraso.",
  },
  titulo: {
    atoms: ["Identificador", "H2", "Link"],
    type: "Título de seção da Home + identificador 11 px + link 13 px.",
    geometry:
      "Gap 20; margem inferior 40; título separado por 20 px. Até 520: coluna e gap 12.",
    motion: "Entrada 650 ms / 24 px na página; link 200 ms.",
  },
  acoes: {
    atoms: ["Texto da ação", "Seta", "Fundo", "Foco"],
    type: "DM Sans 14 px / 600; link 13 px / 500.",
    geometry:
      "CTA: padding 15 × 24, gap 26, raio 30. Perfil: 12 × 17, fonte 13. Link: padding vertical 7; borda inferior 1.",
    motion:
      "CTA 250 ms / −3 px; link 200 ms. Sem deslocamento em movimento reduzido.",
  },
  projeto: {
    atoms: ["Capa", "Categoria", "H3", "Resumo", "Seta"],
    type: "Space Grotesk 27 px; categoria DM Sans 10; resumo 13.",
    geometry:
      "Capa 265 px de altura; ≤1100: 230; ≤520: 280. Raio 23. Texto padding vertical 18; título margem 8.",
    motion: "Entrada 650 ms; capa sobe 6 px em 400 ms no hover.",
  },
  capa: {
    atoms: ["Formas", "Identificação", "Seta"],
    type: "Grafismos por projeto; terminal: monospace nativa, 12 px / entrelinha 2. Não usar a tipografia ilustrativa como regra de leitura.",
    geometry:
      "Raio 23 no card; 25 no detalhe. Detalhe: 380 px de altura; ≤520: 280. Seta: 42 × 42 px.",
    motion:
      "Hover pertence ao ProjectCard; capa isolada não cria ação independente.",
  },
  filtros: {
    atoms: ["Button", "Rótulo", "Estado selecionado", "Contagem acessível"],
    type: "DM Sans 12 px.",
    geometry:
      "Gap 10; padding 10 × 18; raio 25; margem inferior 35. Grade 2 colunas; ≤520: 1.",
    motion: "Troca imediata da lista, sem ocultar resultados por animação.",
  },
  trajetoria: {
    atoms: ["Identificador", "H2", "Texto de apoio", "Marco", "H3", "Link"],
    type: "Título de seção; texto 22 px (≤1100: 19); marcos 22; apoio 13.",
    geometry:
      "2 colunas, gap 45/25/30 px conforme viewport; ≤520: 1 coluna. Linha com padding esquerdo 25.",
    motion: "Cabeçalho entra em 650 ms; texto e marcos legíveis sem animação.",
  },
  blog: {
    atoms: ["Estado editorial", "H3", "Resumo", "Seta"],
    type: "Space Grotesk 25 px; ≤520: 24. Resumo DM Sans 13.",
    geometry:
      "Padding 30, gap 24, raio 23; ≤520: padding 20 e gap 12. Seta 42 × 42.",
    motion: "Foco visível; chamada sem reveal próprio.",
  },
  servico: {
    atoms: ["Ícone", "H2", "Descrição", "Link de evidência"],
    type: "H2 Space Grotesk 38 px; ≤520: 30. Texto DM Sans 16.",
    geometry:
      "Padding vertical 40; gap 30/15; descrição até 560 px; divisória 1.",
    motion: "Entrada de cada item 650 ms / 24 px; link 200 ms.",
  },
  fechamento: {
    atoms: ["Identificador", "H2", "CTA"],
    type: "H2 de seção; ≤520: 42 px. CTA 14 px.",
    geometry:
      "Padding 85 px acima / 100 abaixo; título margem 24 acima / 32 abaixo.",
    motion: "CTA 250 ms / −3 px; restante sem movimento.",
  },
  rodape: {
    atoms: ["Marca", "Localização", "Link de retorno"],
    type: "Marca Space Grotesk 21 px / 600; restante DM Sans 11.",
    geometry:
      "Padding vertical 27; gap 18; margem superior 45; borda 1; quebra de linha flexível.",
    motion: "Foco e navegação imediatos.",
  },
  destaques: {
    atoms: ["Identificador", "H2", "Link", "Grade", "ProjectCard"],
    type: "Título de seção + tipografia dos cards.",
    geometry:
      "Seção: 88 px vertical; ≤800: 60. Grade de 2 colunas, gap 38 × 24; ≤520: 1.",
    motion: "Cabeçalho/cards: reveal 650 ms; hover da capa 400 ms.",
  },
  "pagina-interna": {
    atoms: ["Identificador", "H1", "Introdução"],
    type: "H1 internas + introdução; mesma família em About, Portfolio, Blog e Services.",
    geometry: "Padding 75 px acima / 65 abaixo; até 800: 50 acima.",
    motion:
      "Abertura aparece imediatamente; não bloquear a leitura com reveal.",
  },
  biografia: {
    atoms: ["H2", "Texto de destaque", "Parágrafo"],
    type: "H2; destaque 22/19 px; texto DM Sans 16 / 1,65.",
    geometry:
      "About split: 2 colunas, gap 45/25/30; ≤520: 1. Parágrafos seguintes: margem superior 20.",
    motion: "Conteúdo estático.",
  },
  formacao: {
    atoms: ["Período", "H3", "Parágrafo", "Tag"],
    type: "Período 11 px; H3 27; texto 16; tags 11.",
    geometry:
      "Timeline: colunas 150 px + 1fr, gap 25; ≤520: 1 coluna / gap 15. Artigo padding vertical 30.",
    motion: "Artigos entram em 650 ms / 24 px.",
  },
  competencias: {
    atoms: ["Área", "Link de projeto"],
    type: "DM Sans: destaque em negrito e apoio 12 px.",
    geometry: "Grade 2 colunas; ≤520: 1. Gap 15; padding 24; raio 18; borda 1.",
    motion: "Foco de teclado; navegação imediata.",
  },
  pautas: {
    atoms: ["Status", "H2", "Resumo", "Link de projeto"],
    type: "Space Grotesk 42 px; texto DM Sans 16.",
    geometry:
      "Artigo padding vertical 35; título margem 18; apoio margem inferior 15; divisória 1.",
    motion: "Link 200 ms; lista sem reveal.",
  },
  estudo: {
    atoms: ["H2", "Descrição", "Foco", "Link de repositório"],
    type: "Título Space Grotesk 36 px; texto DM Sans 16.",
    geometry:
      "Colunas 1fr / 1,6fr; gap 50; padding vertical 45; ≤520: coluna única e gap 20.",
    motion: "CTA 250 ms; conteúdo estático.",
  },
};
export const componentGroups = [
  { id: "all", label: "Todos", items: [] as string[] },
  {
    id: "global",
    label: "Globais",
    items: ["perfil", "menu", "tema", "titulo", "acoes", "rodape"],
  },
  {
    id: "home",
    label: "Home",
    items: ["abertura", "trajetoria", "destaques", "blog", "fechamento"],
  },
  {
    id: "about",
    label: "About",
    items: ["pagina-interna", "biografia", "formacao", "competencias"],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    items: ["pagina-interna", "filtros", "projeto", "capa", "estudo"],
  },
  { id: "blog", label: "Blog", items: ["pagina-interna", "pautas"] },
  {
    id: "services",
    label: "Services",
    items: ["pagina-interna", "servico", "acoes"],
  },
];
