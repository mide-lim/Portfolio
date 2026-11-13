# Instruções para agentes · Portfolio

Este repositório integra o projeto Curriculo + Processo Seletivo. O portfólio apresenta a trajetória completa de Michel Marques.

## Antes de alterar interface ou conteúdo

- Leia `docs/CONTEXTO-ATUAL.md`, `DESIGN.md` e o documento relevante em `docs/design-system/`.
- Consulte `src/design/tokens.css`, os componentes existentes e `src/content/`.
- Leia `docs/design-system/decisoes.md` para distinguir decisões aprovadas de propostas.
- As instruções explícitas do usuário e o escopo da tarefa prevalecem. Execute alterações já autorizadas; não crie etapas de aprovação desnecessárias.

## Interface

- A Home segue Abertura → About → Portfolio → Blog → Services (CTA). Perfil, menu e rodapé são globais nas páginas do portfólio; o DS usa estrutura própria.
- Consulte `src/content/design-standards.ts` e `docs/design-system/movimento.md` ao alterar tipografia, geometria ou animação.
- Registre por peça: átomos/composição, fontes, medidas, comportamento responsivo, movimento e comunicação. Agrupe no DS também por navegação.
- Preserve as duas paletas e a ordem Home, About, Portfolio, Blog, Services, salvo pedido de mudança.
- Siga 60/30/10 como referência de composição: base, secundária e destaque. Concentre o destaque em ações/estados; preserve contraste e a fotografia, sem alegar proporções de pixels medidas.
- Use tokens semânticos: `background`, `surface`, `foreground`, `primary`, `primary-foreground`. Use os aliases existentes apenas ao manter CSS legado.
- Reutilize `ActionLink`, `ProjectCard`, `ProjectCover`, `ProjectFilter`, `Header`, `Sidebar` e `ThemeToggle` quando aplicáveis.
- Navegação usa link; ações locais usam button. Mantenha HTML semântico, nomes acessíveis e foco visível.
- Não importe um tema pronto nem acrescente bibliotecas para resolver um exemplo de documentação.
- Considere shadcn/ui quando houver necessidade concreta; verifique a documentação atual e personalize com nossos tokens.
- Preserve a foto atual e suas cores. O fundo do retrato é Sand em ambos os temas.
- Para mudanças visuais, verifique claro/escuro, celular/desktop, teclado e movimento reduzido quando o ambiente permitir. Registre limitações reais de verificação.

## Conteúdo

- Edite textos públicos em `src/content/pages.ts`, `site.ts` ou `projects.ts`.
- Não invente resultados, clientes, cargos, datas, certificações ou autoria individual.
- Diferencie funcionalidades do projeto de contribuições pessoais em trabalho coletivo.
- Use primeira pessoa nas propostas editoriais. Mostre fatos e experiências concretas.
- Mantenha pautas do Blog identificadas como propostas até haver artigos reais.
- Não restaure a seção de referências visuais no README.
- O catálogo deve consultar os textos atuais e separar a pauta de revisão. Não publique uma nova redação como efeito colateral de reorganizar o DS.

## Validação e entrega

- Execute verificações proporcionais: testes quando comportamento mudar; build e `check:export` quando páginas/rotas mudarem; TypeScript para alterações tipadas.
- Atualize o catálogo se criar ou modificar uma peça reutilizável.
- Registre decisões relevantes e o marco no CHANGELOG.
- A aplicação está em `src/`; `preview/` e o `index.html` da raiz são legados.
- Vercel e DNS não estão conectados. Não afirme publicação em midelim.com sem evidência.
- Mantenha a audiência atual da prévia. Nunca versionar credenciais.
