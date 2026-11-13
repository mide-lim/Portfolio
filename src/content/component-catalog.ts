import { home, services, about, blog, portfolio } from "./pages";
import { site } from "./site";
import { projects } from "./projects";

type Field = { label: string; value: string };
export type CatalogItem = {
  id: string;
  name: string;
  kind: string;
  location: string;
  purpose: string;
  source: string;
  contentSource: string;
  fields: Field[];
  review: string[];
  colors: [string, string, string];
};
const field = (label: string, value: string): Field => ({ label, value });
export const catalog: CatalogItem[] = [
  {
    id: "perfil",
    name: "Perfil",
    kind: "Sidebar",
    location: "Todas as páginas",
    purpose: "Apresentar quem é Michel e dar acesso aos projetos.",
    source: "src/components/sidebar.tsx",
    contentSource: "src/content/site.ts",
    fields: [
      field("Nome", site.name),
      field("Frentes", site.fronts.join(" ")),
      field("Localização", site.location),
      field(
        "Contatos",
        "LinkedIn · GitHub · Gmail · Discord (endereço pendente)",
      ),
      field("Ação", site.projectAction),
    ],
    review: [
      "Confirmar o endereço do Discord antes de ativar o link.",
      "Revisar a proposta de marca e os estados das ações.",
    ],
    colors: [
      "Superfície do cartão e espaço entre informações.",
      "Nome, informações e fundo Sand do retrato.",
      "Ação de abrir os projetos.",
    ],
  },
  {
    id: "menu",
    name: "Navegação",
    kind: "Header",
    location: "Topo do site",
    purpose: "Orientar o visitante entre as cinco áreas.",
    source: "src/components/header.tsx",
    contentSource: "src/content/site.ts",
    fields: site.navigation.map((x) => field(x.label, x.href)),
    review: [
      "Ordem já definida: Home, About, Portfolio, Blog, Services.",
      "Conferir espaço entre links e leitura no celular.",
    ],
    colors: [
      "Fundo da barra.",
      "Rótulos e contorno do item atual.",
      "Indicador do destino atual e foco.",
    ],
  },
  {
    id: "tema",
    name: "Controle de tema",
    kind: "ThemeToggle",
    location: "Topo do site",
    purpose: "Alternar entre as duas paletas aprovadas.",
    source: "src/components/theme-toggle.tsx",
    contentSource: "src/components/theme-toggle.tsx",
    fields: [
      field("Modo claro", "Claro / Ativar modo escuro"),
      field("Modo escuro", "Escuro / Ativar modo claro"),
    ],
    review: [
      "Conferir a identificação por ícone e por texto.",
      "O controle da amostra altera o tema de todo o site.",
    ],
    colors: [
      "Superfície do controle.",
      "Ícone, nome e borda.",
      "Foco de teclado; sem preenchimento de destaque constante.",
    ],
  },
  {
    id: "abertura",
    name: "Abertura da Home",
    kind: "Hero",
    location: "Home · primeira seção",
    purpose: "Situar a trajetória e convidar a conhecer o trabalho.",
    source: "src/app/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Identificação", home.prazer_michel_marques.trim()),
      field(
        "Título",
        [home.curiosidade, home.que_vira, home.construcao].join(" "),
      ),
      field(
        "Introdução",
        [
          home.da_seguranca_da_informacao_a_engenharia,
          home.hoje_explorando_novas_possibilidades_com_ia,
        ].join(" "),
      ),
      field("Ação principal", home.explorar_projetos.trim()),
      field("Ação secundária", home.conheca_minha_trajetoria.trim()),
    ],
    review: [
      "Substituir a frase ampla por uma apresentação mais pessoal.",
      "Definir o que o visitante precisa entender na primeira leitura.",
      "Ajustar quebras de linha depois de fechar o texto.",
    ],
    colors: [
      "Fundo e respiro da abertura.",
      "Título, introdução e link de trajetória.",
      "Ação de explorar projetos.",
    ],
  },
  {
    id: "titulo",
    name: "Título de seção",
    kind: "Section heading",
    location: "Home · destaques",
    purpose: "Introduzir um assunto e oferecer o próximo passo.",
    source: "src/app/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Identificação", home.portfolio),
      field("Título", home.ideias_em + " " + home.funcionamento),
      field("Link", home.todos_os_projetos),
    ],
    review: [
      "Definir títulos que antecipem o conteúdo da seção.",
      "Conferir comprimento e alinhamento do link auxiliar.",
    ],
    colors: [
      "Espaço entre seções.",
      "Título, identificação e link.",
      "Foco ou indicação de interação; sem título inteiro colorido.",
    ],
  },
  {
    id: "acoes",
    name: "Botões e links",
    kind: "ActionLink",
    location: "Home · perfil · páginas internas",
    purpose: "Deixar claro o que acontece ao seguir uma ação.",
    source: "src/components/ui/action-link.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Principal", home.explorar_projetos.trim()),
      field("Secundária", home.conheca_minha_trajetoria.trim()),
    ],
    review: [
      "Usar verbo e destino claros.",
      "Manter uma ação principal por conjunto.",
      "Rever consistência de “Explorar”, “Explore” e “Conheça”.",
    ],
    colors: [
      "Área ao redor do conjunto.",
      "Link secundário e contexto.",
      "Botão principal inteiro; o 10% pertence ao conjunto, não ao interior do botão.",
    ],
  },
  {
    id: "projeto",
    name: "Card de projeto",
    kind: "ProjectCard",
    location: "Home · Portfolio",
    purpose: "Mostrar o que o projeto faz e levar ao estudo de caso.",
    source: "src/components/project-card.tsx",
    contentSource: "src/content/projects.ts",
    fields: [
      field("Categoria", projects[0].category),
      field("Nome", projects[0].name),
      field("Resumo", projects[0].summary),
      field("Destino", "/portfolio/" + projects[0].id + "/"),
    ],
    review: [
      "Manter resumos concretos, sem prometer resultados não comprovados.",
      "Equilibrar tamanho da capa e quantidade de texto.",
      "Aplicar o mesmo padrão aos projetos da 42.",
    ],
    colors: [
      "Corpo do cartão e respiro.",
      "Capa em neutros, nome e resumo.",
      "Seta de acesso ao projeto.",
    ],
  },
  {
    id: "capa",
    name: "Capa de projeto",
    kind: "ProjectCover",
    location: "Cards · estudos de caso",
    purpose: "Identificar visualmente o projeto.",
    source: "src/components/project-cover.tsx",
    contentSource: "src/content/projects.ts",
    fields: [
      field("Projeto", projects[0].name),
      field(
        "Natureza",
        "Composição ilustrativa; não é uma captura do produto.",
      ),
    ],
    review: [
      "Rever cada capa com capturas reais quando disponíveis.",
      "Preservar contraste da identificação e da seta.",
    ],
    colors: [
      "Campo neutro predominante da composição.",
      "Formas, linhas e identificação em neutros.",
      "Seta que acompanha o card; não é um botão separado.",
    ],
  },
  {
    id: "filtros",
    name: "Filtros de projetos",
    kind: "ProjectFilter",
    location: "Portfolio",
    purpose: "Recortar os projetos por área sem sair da página.",
    source: "src/components/project-filter.tsx",
    contentSource: "src/components/project-filter.tsx",
    fields: [
      field(
        "Categorias",
        "Todos · Autorais & IA · 42 Rio · Sistemas & infraestrutura",
      ),
    ],
    review: [
      "Conferir se as categorias representam bem o acervo.",
      "Rever o comprimento de “Sistemas & infraestrutura” em telas pequenas.",
    ],
    colors: [
      "Fundo do conjunto.",
      "Opções não selecionadas e contornos.",
      "Uma opção selecionada por vez.",
    ],
  },
  {
    id: "trajetoria",
    name: "About · trajetória",
    kind: "About preview",
    location: "Home",
    purpose: "Conectar formação, experiência prática e estudos atuais.",
    source: "src/app/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Título", home.um_percurso + " " + home.muitas_conexoes),
      field("Texto", home.entender_como_as_coisas_funcionam_me),
      field(
        "Etapas",
        home.seguranca_da_informacao +
          " → " +
          home["42_rio"] +
          " → " +
          home.ia_aplicada,
      ),
      field("Link", home.explore_minha_trajetoria),
    ],
    review: [
      "Contar as conexões com situações reais.",
      "Escolher o que fica na Home e o que será aprofundado em About.",
    ],
    colors: [
      "Fundo e distância entre etapas.",
      "Texto, marcos e linha da trajetória.",
      "Foco do link para About, sem colorir cada etapa.",
    ],
  },
  {
    id: "blog",
    name: "Blog · chamada",
    kind: "Article preview",
    location: "Home · Blog",
    purpose: "Apresentar um tema de estudo sem anunciar um artigo inexistente.",
    source: "src/app/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Estado", home.em_preparacao_engenharia_de_software),
      field("Título", home.o_que_acontece_entre_digitar_um),
      field("Apoio", home.uma_pauta_a_partir_da_experiencia),
    ],
    review: [
      "Manter “Em preparação” enquanto for pauta.",
      "Rever título e resumo quando o artigo estiver escrito.",
    ],
    colors: [
      "Superfície da chamada.",
      "Título, status e resumo.",
      "Seta de navegação.",
    ],
  },
  {
    id: "servico",
    name: "Item de serviço",
    kind: "Service item",
    location: "Services",
    purpose: "Explicar uma possibilidade concreta de colaboração.",
    source: "src/app/services/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Título", services.automacao_ia),
      field(
        "Descrição",
        services.explorar_integracoes_para_processamento_de_dados,
      ),
      field("Evidência", services.veja_o_mega_brain),
    ],
    review: [
      "Delimitar o que você quer oferecer de fato.",
      "Usar um projeto real para sustentar cada possibilidade.",
    ],
    colors: [
      "Fundo e separação entre itens.",
      "Título, descrição e link de evidência.",
      "Foco do link; sem decorar toda a descrição com o destaque.",
    ],
  },
  {
    id: "fechamento",
    name: "Services · CTA",
    kind: "Closing",
    location: "Fim da Home",
    purpose: "Oferecer continuidade depois de conhecer a trajetória.",
    source: "src/app/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Identificação", home.vamos_construir),
      field(
        "Título",
        home.uma_boa_ideia + " " + home.merece + home.ganhar_forma,
      ),
      field("Ação", home.explore_as_possibilidades),
    ],
    review: [
      "Definir o próximo passo que faz sentido para o visitante.",
      "Trocar a promessa genérica por um convite mais pessoal.",
    ],
    colors: [
      "Área de respiro final.",
      "Título e contexto.",
      "Única ação principal.",
    ],
  },
  {
    id: "rodape",
    name: "Rodapé",
    kind: "Footer",
    location: "Todas as páginas",
    purpose: "Encerrar a leitura e permitir voltar ao início.",
    source: "src/components/footer.tsx",
    contentSource: "src/components/footer.tsx",
    fields: [
      field("Marca", "midelim.com"),
      field("Identificação", "Michel Marques · Rio de Janeiro"),
      field("Ação", "Voltar ao início ↑"),
    ],
    review: [
      "Conferir se faltam links úteis para contato.",
      "Manter poucas informações e leitura confortável.",
    ],
    colors: [
      "Fundo e margem superior.",
      "Marca, localização e divisória.",
      "Foco do retorno ao início.",
    ],
  },
];

export const pageIntros: Record<
  string,
  { label: string; title: string; intro: string }
> = {
  about: {
    label: about.about,
    title: [about.o_percurso, about.por_tras, about.do_codigo].join(" "),
    intro: about.seguranca_da_informacao_formacao_pratica_na,
  },
  portfolio: {
    label: portfolio.portfolio,
    title: portfolio.construir_e + " " + portfolio.aprender,
    intro: portfolio.projetos_autorais_e_trabalhos_da_42,
  },
  blog: {
    label: blog.blog,
    title: blog.um_caderno + " " + blog.em_construcao,
    intro: blog.espaco_para_compartilhar_decisoes_descobertas_e,
  },
  services: {
    label: services.services,
    title: services.da_ideia + " " + services.a_implementacao,
    intro: services.areas_em_que_meus_estudos_e,
  },
};
const neutralColors: [string, string, string] = [
  "Fundo e espaço de leitura.",
  "Título, conteúdo e divisórias.",
  "Ação ou foco, quando houver.",
];
catalog.push(
  {
    id: "destaques",
    name: "Portfolio · destaques",
    kind: "ProjectGrid",
    location: "Home · depois de About",
    purpose: "Apresentar os projetos em destaque e abrir o catálogo.",
    source: "src/components/project-grid.tsx",
    contentSource: "src/content/projects.ts",
    fields: [
      field("Título", home.ideias_em + " " + home.funcionamento),
      field(
        "Projetos",
        projects
          .slice(0, 4)
          .map((p) => p.name)
          .join(" · "),
      ),
      field("Link", home.todos_os_projetos),
    ],
    review: [
      "Equilibrar projetos autorais e da 42.",
      "Rever título e resumo junto das capas.",
    ],
    colors: neutralColors,
  },
  {
    id: "pagina-interna",
    name: "Abertura de página",
    kind: "Page hero",
    location: "About · Portfolio · Blog · Services",
    purpose: "Introduzir a página com o mesmo padrão de título e texto.",
    source: "src/app/about/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Título", pageIntros.about.title),
      field("Introdução", pageIntros.about.intro),
    ],
    review: [
      "O tema da página precisa ficar claro no título.",
      "Selecionar a página acima para comparar os textos.",
    ],
    colors: neutralColors,
  },
  {
    id: "biografia",
    name: "Biografia",
    kind: "About split",
    location: "About",
    purpose: "Apresentar a trajetória em primeira pessoa.",
    source: "src/app/about/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Abertura", about.minha_trajetoria_passa_por_compreender_sistemas),
      field("Formação", about.sou_graduado_em_seguranca_da_informacao),
      field(
        "Pesquisa e projetos",
        about.nos_projetos_autorais_investigo_como_a,
      ),
    ],
    review: [
      "Inserir experiências específicas que representem sua trajetória.",
      "Rever ritmo e extensão dos parágrafos.",
    ],
    colors: neutralColors,
  },
  {
    id: "formacao",
    name: "Formação e prática",
    kind: "Timeline",
    location: "About",
    purpose: "Organizar marcos de formação com contexto.",
    source: "src/app/about/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Graduação", about.seguranca_da_informacao),
      field("42 Rio", about.common_core_em_andamento_com_87),
      field(
        "Projetos autorais",
        about.estudos_e_experimentos_com_analise_multimodal,
      ),
    ],
    review: [
      "Manter a data de referência das informações de formação.",
      "Separar conclusão, curso em andamento e estudos independentes.",
    ],
    colors: neutralColors,
  },
  {
    id: "competencias",
    name: "Competências em contexto",
    kind: "Skill grid",
    location: "About",
    purpose: "Relacionar cada competência com um projeto concreto.",
    source: "src/app/about/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Sistemas", about.minishell_processos_pipes_e_sinais),
      field("Gráficos", about.cub3d_raycasting_e_interacao),
      field("Concorrência", about.philosophers_threads_e_mutexes),
      field("Infraestrutura", about.inception_containers_e_servicos),
    ],
    review: [
      "Usar os projetos como evidência de prática.",
      "Confirmar contribuições pessoais em trabalhos coletivos.",
    ],
    colors: neutralColors,
  },
  {
    id: "pautas",
    name: "Pauta do Blog",
    kind: "Editorial item",
    location: "Blog",
    purpose: "Mostrar um assunto em preparação e sua relação com um projeto.",
    source: "src/app/blog/page.tsx",
    contentSource: "src/content/pages.ts",
    fields: [
      field("Estado", blog.sistemas_pauta_proposta),
      field("Título", blog.do_comando + " " + blog.ao_processo),
      field("Descrição", blog.parsing_redirecionamentos_e_execucao_a_partir),
    ],
    review: [
      "Publicar como artigo somente quando o texto existir.",
      "Definir a experiência ou decisão que será explicada.",
    ],
    colors: neutralColors,
  },
  {
    id: "estudo",
    name: "Estudo de caso",
    kind: "Project detail",
    location: "Portfolio · página do projeto",
    purpose: "Aprofundar o contexto e as decisões do projeto.",
    source: "src/app/portfolio/[slug]/page.tsx",
    contentSource: "src/content/projects.ts",
    fields: [
      field("Descrição", projects[0].description),
      field("Foco", projects[0].focus),
    ],
    review: [
      "Acrescentar minha participação e decisões técnicas.",
      "Documentar resultados com evidências verificáveis.",
    ],
    colors: neutralColors,
  },
);
