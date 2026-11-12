export type Project = {
  id: string;
  name: string;
  category: string;
  group: string[];
  type: "mb" | "cube" | "terminal" | "web" | "philo" | "infra";
  summary: string;
  description: string;
  focus: string;
  tags: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "megabrain",
    name: "MEGA-BRAIN",
    category: "IA aplicada · Projeto autoral",
    group: ["author"],
    type: "mb",
    summary: "Transformar vídeos salvos em um acervo consultável.",
    description:
      "Projeto autoral de processamento de vídeos e organização de informação com análise multimodal. A proposta é criar um acervo que permita recuperar e reutilizar conteúdo.",
    focus:
      "O fluxo reúne coleta, processamento, análise e registro por vídeo. Registrar o resultado de cada item permite retomar as pendências e acompanhar o progresso do acervo.",
    tags: ["IA multimodal", "Processamento de dados", "Acervo"],
    repo: "https://github.com/mide-lim/MEGA-BRAIN",
  },
  {
    id: "cub3d",
    name: "Cub3D",
    category: "Computação gráfica · 42 Rio",
    group: ["42"],
    type: "cube",
    summary: "Um labirinto em primeira pessoa, construído com raycasting.",
    description:
      "Projeto da 42 Rio inspirado nos jogos em primeira pessoa dos anos 1990. O raycasting permite transformar um mapa bidimensional em uma visão navegável.",
    focus:
      "O projeto conecta representação de mapas, cálculo de raios, renderização e interação. O histórico da 42 registra aprovação com bônus em julho de 2026.",
    tags: ["C", "Raycasting", "Gráficos"],
    repo: "https://github.com/mide-lim/Cub3D",
  },
  {
    id: "minishell",
    name: "Minishell",
    category: "Programação de sistemas · 42 Rio",
    group: ["42", "systems"],
    type: "terminal",
    summary: "Do texto no terminal à execução de processos.",
    description:
      "Um shell desenvolvido em dupla na 42 Rio. O projeto envolve interpretar comandos e coordenar sua execução em um ambiente Unix.",
    focus:
      "O README registra funcionalidades de parsing, pipelines, redirecionamentos, variáveis, built-ins e tratamento de sinais. A descrição detalhada da minha contribuição será adicionada ao estudo de caso.",
    tags: ["C", "Unix", "Processos", "Pipes"],
  },
  {
    id: "webserv",
    name: "Webserv",
    category: "Redes & sistemas · 42 Rio",
    group: ["42", "systems"],
    type: "web",
    summary: "Construção de um servidor HTTP em C++.",
    description:
      "Projeto de implementação de um servidor HTTP, explorando a comunicação entre clientes e servidores e o funcionamento do protocolo.",
    focus:
      "O histórico registra aprovação com bônus em agosto de 2026. O estudo de caso será ampliado com a arquitetura da implementação e exemplos de requisições.",
    tags: ["C++", "HTTP", "Redes"],
  },
  {
    id: "philosophers",
    name: "Philosophers",
    category: "Concorrência · 42 Rio",
    group: ["42", "systems"],
    type: "philo",
    summary: "Threads e sincronização em torno de recursos compartilhados.",
    description:
      "Implementação do problema dos filósofos utilizando C, threads POSIX e mutexes. A simulação envolve tarefas concorrentes que precisam compartilhar recursos.",
    focus:
      "O projeto permite explorar sincronização, disputa por recursos e prevenção de deadlocks. A documentação do repositório apresenta as estruturas e o fluxo da simulação.",
    tags: ["C", "Threads", "Mutexes"],
    repo: "https://github.com/mide-lim/Philosophers",
  },
  {
    id: "inception",
    name: "Inception",
    category: "Infraestrutura · 42 Rio",
    group: ["42", "systems"],
    type: "infra",
    summary: "Serviços organizados em uma infraestrutura de containers.",
    description:
      "Projeto de administração de sistemas com Docker e Docker Compose. A proposta reúne serviços em containers e explora sua comunicação e persistência.",
    focus:
      "O escopo da formação inclui NGINX com TLS, WordPress e MariaDB. O histórico registra aprovação em agosto de 2026.",
    tags: ["Docker", "Compose", "NGINX", "MariaDB"],
  },
];
