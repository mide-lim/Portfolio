# Histórico de desenvolvimento

Este arquivo registra os marcos e decisões do portfólio. Os commits do GitHub permitem acompanhar as alterações a partir da importação da prévia.

## 2026-11-12 — Design system documentado

- Centralizados tokens semânticos de cores e fontes, preservando os valores do site.
- Criado ActionLink reutilizável e aplicado às ações internas existentes.
- Adicionado guia visual em /design-system/ com amostras reais e glossário.
- Documentados fundamentos, componentes, escrita, qualidade e decisões.
- Acrescentadas instruções para agentes em AGENTS.md.
- Mantidas propostas editoriais e escala de espaços como itens de revisão.
- Criada ilustração explicativa de tokens para a documentação.

## 2026-11-12 — Aplicação Next.js e retrato pessoal

- Migrado o visual aprovado para Next.js App Router, TypeScript e Tailwind CSS.
- Criadas cinco rotas principais e seis páginas de projetos, com navegação compartilhada.
- Incluído o retrato com transparência e fundo Sand nos dois modos, incluindo a versão móvel.
- Separados textos e projetos em `src/content/` para a próxima revisão editorial.
- Mantidos os temas, filtros, links antigos e comportamento de movimento reduzido.
- Adicionados build estático, testes de tema e CI no GitHub Actions.
- Preservado o protótipo anterior em `preview/` e ocultadas as referências no README.
- Vercel e domínio próprio continuam pendentes de configuração.

## 2026-11-12 — Código da prévia versionado

- Incluídos HTML, CSS, JavaScript e imagem ilustrativa em `preview/`.
- Documentados funcionamento local, estado atual, referências e próximas entregas.
- Registrada a stack definida para a implementação em Next.js.
- Importado o estado atual da prévia como primeiro marco de código no repositório.

## 2026-11-12 — Evolução anterior à importação

Os itens abaixo resumem o desenvolvimento realizado na prévia durante a definição do projeto.

### Objetivo e estrutura

- Definido o foco na trajetória completa de Michel Marques.
- Definido o escopo inicial no domínio midelim.com.
- Escolhidas as referências Braxton e Andrew.
- Organizado o menu em Home, About, Portfolio, Blog e Services.
- Definida uma Home de rolagem contínua com acesso a conteúdo aprofundado.

### Conteúdo e apresentação

- Montada a primeira prévia navegável.
- Reformulado o visual com tipografia maior, cartão lateral, capas ilustrativas e animações de entrada.
- Adicionados seis projetos com páginas individuais e filtros.
- Ampliado o About com formação, linha do tempo e competências.
- Incluídas pautas propostas para o Blog e áreas de colaboração em Services.
- Registrada a intenção de melhorar a apresentação dos projetos e repositórios até o fim de 2026.

### Cores e aparência

- Comparadas as paletas Charcoal/Sand/Electric Blue e Cream/Ink Black/Burnt Orange.
- Aprovadas as duas paletas como modos escuro e claro.
- Implementado botão de tema, preferência do dispositivo e persistência da escolha manual.

### Decisões técnicas

- Escolhidos Next.js, TypeScript, Tailwind CSS e Markdown/MDX.
- Definidos GitHub Actions para CI e Vercel para hospedagem e deploy.
- Propostos GSAP, ScrollTrigger e Lenis para animações na implementação.
- A prévia publicada permanece no estágio de protótipo HTML/CSS/JavaScript.
