# Contexto de continuidade · midelim.com

Atualizado em 13/11/2026. Este documento é um ponto de partida para pessoas e agentes em outro ambiente. Verifique o HEAD e o estado real antes de agir: decisões e publicações podem mudar.

## Objetivo e escopo

Portfólio pessoal de Michel Marques para apresentar toda a trajetória: Cibersegurança, experiência em suporte de TI, formação em andamento na 42 Rio, engenharia de software, IA e projetos autorais. Deve atender oportunidades profissionais sem se limitar à apresentação para uma vaga. Prioridade no domínio midelim.com; midelim.tech fica fora do escopo atual.

- GitHub: https://github.com/mide-lim/Portfolio
- Prévia de trabalho: https://midelim-portfolio-preview.creamgown2.chatgpt.site/
- Design system: https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/
- Vercel e DNS: ainda não conectados conforme os registros do projeto. Não afirmar que midelim.com está publicado sem verificar.
- A prévia usa controle de acesso próprio. Não alterar a audiência sem pedido explícito.

## Preferências e decisões

- A Home é longa e resume os destaques; as páginas internas aprofundam cada assunto.
- Menu: Home → About → Resume → Portfolio → Blog → Services. Seções da Home: Abertura → About → Portfolio → Blog → Services (CTA).
- Mostrar MEGA-BRAIN e projetos da 42; Michel pretende melhorar gradualmente cada repositório.
- Revisar a comunicação junto com Michel: ele considera os textos atuais genéricos e com aparência de texto gerado por IA. Priorizar primeira pessoa, detalhes concretos e fatos confirmados; não inventar conquistas, métricas ou contribuições individuais.
- As referências visuais discutidas não devem voltar ao README público por enquanto.
- Respeitar o escopo de cada pedido. Uma mudança implementada pode continuar sendo proposta visual, não necessariamente aprovação final.

## Identidade e design system

| Modo | Base | Secundária | Destaque |
| --- | --- | --- | --- |
| Escuro | Charcoal #1E1E1C | Sand #D8CBB3 | Electric Blue #2F6BFF |
| Claro | Cream #F3EEE3 | Ink Black #111111 | Burnt Orange #D9541E |

A proporção 60/30/10 é orientação visual, não contagem exata de pixels. Fotografia em cores naturais sobre Sand nos dois modos. Fontes: Space Grotesk para títulos; DM Sans para texto e controles.

O DS possui página própria sem o perfil lateral do portfólio, com fundamentos e 21 peças agrupadas por navegação; o próprio perfil continua disponível como amostra. Inclui tipografia, cores, spacing, grid, stickers, movimento, átomos/composição e comunicação. As regras existentes e exceções devem ser consultadas em [DESIGN.md](../DESIGN.md), [fundamentos](design-system/fundamentos.md), [componentes](design-system/componentes.md), [movimento](design-system/movimento.md) e [decisões](design-system/decisoes.md).

Animações usam CSS, IntersectionObserver, requestAnimationFrame e rolagem nativa. GSAP, Lenis, Framer Motion e parallax não foram implementados. Respeitar preferência por movimento reduzido.

## Estado do perfil

Implementado na prévia e no GitHub:

- Proposta de marca vetorial: monograma M, sinais de código e ponto de destaque. É uma primeira proposta a ser avaliada por Michel, não identidade final aprovada.
- “Minhas Frentes”: Engenheiro de Software e cibersegurança. Base: Rio de Janeiro, Brasil.
- LinkedIn, GitHub e Gmail com ícones e destinos em `src/content/site.ts`; Discord aparece como pendente e sem link.
- Links sociais têm realce inferior no hover/foco, restrito ao perfil. A seta do CTA se desloca para cima e à direita e retorna em 360 ms antes da navegação; movimento reduzido dispensa a espera e a animação.

Próxima ação no perfil: Michel avaliar a marca e a distribuição dos links. Pedir o endereço de Discord antes de ativá-lo. Não inventar destino.

## Favicon — pendência

Foi criada uma imagem em pixel art com base no retrato. Michel rejeitou versões posteriores simplificadas e corrigiu a escolha para **a primeira versão, de camisa roxa**. A aplicação no site **não foi concluída**: a recuperação do arquivo falhou neste ambiente. Não afirmar que está implementado.

O arquivo identificado na conversa é “Retrato pixelado com gola roxa.png”, na Biblioteca do projeto. Solicitar que Michel anexe o PNG se o próximo ambiente não conseguir acessá-lo. Gerar versões pequenas e testar nitidez real em 16×16 e 32×32 antes de aplicar. Não redesenhar a imagem sem pedir, pois Michel escolheu a primeira versão.

## Código e execução

- Next.js App Router, React, TypeScript, Tailwind CSS e exportação estática; diretório `out/`.
- Node.js 24 e pnpm 11.25.0. Instalar com `pnpm install --frozen-lockfile`; iniciar com `pnpm dev`.
- `src/app/`: rotas. `src/components/site-shell.tsx`: estrutura compartilhada; o DS tem estrutura própria.
- `src/components/sidebar.tsx`, `profile-action.tsx`, `social-icon.tsx`: perfil, CTA e ícones.
- `src/content/site.ts`, `pages.ts`, `projects.ts`: identidade, textos e projetos.
- `src/design/tokens.css`, `src/app/globals.css`: fundamentos visuais e estilos.
- `src/content/design-standards.ts`, `component-catalog.ts`: documentação exibida no DS.
- `preview/` e `index.html` da raiz são legados; não são a aplicação Next.js.

## Testes, publicação e cautelas

Último marco de interface consultado: commit GitHub `924260fd17c1bb5cf06c0bc72b6da941e445847d` (perfil). O CI desse commit passou. O commit deste documento é posterior; use `git log` para obter o HEAD atual.

Comandos proporcionais a alterações de interface/rotas:

```sh
pnpm test
pnpm build
pnpm typecheck
pnpm check:export
```

Build, tipos, testes de tema/navegação e verificação de 12 rotas passaram no último marco. A revisão visual automatizada falhou por indisponibilidade do navegador; confirmar manualmente desktop/celular, temas, foco, hover, clique, acessibilidade e movimento reduzido antes de declarar validação visual.

O GitHub é a linha do tempo versionada. A prévia usa um repositório de origem próprio para a hospedagem e sua publicação; commits podem ter SHAs diferentes dos commits equivalentes no GitHub. Antes de editar, sincronize e verifique ambos os estados, sem sobrescrever alterações de outro ambiente. Nunca grave tokens ou credenciais no repositório.

## Retomada sugerida

1. Ler [AGENTS.md](../AGENTS.md), este arquivo e as decisões relevantes.
2. Conferir o HEAD, mudanças locais e estado da prévia.
3. Rever com Michel a proposta do perfil e obter o contato de Discord.
4. Retomar o favicon somente com a primeira arte escolhida.
5. Trabalhar a comunicação do próximo componente com Michel; registrar decisões e testes no mesmo marco.

## Atualização da Home · 15/11/2026

Michel forneceu a nova apresentação pessoal, aplicada após revisão de pontuação e sintaxe. O componente HeroBottom agrupa áreas de interesse e o acesso à trajetória. Hover e foco usam o destaque do tema; setas de navegação têm deslocamento conforme a direção e respeitam movimento reduzido. Revisar visualmente desktop/celular e os dois temas.

## Atualização de About e Resume · 15/11/2026

Michel forneceu o currículo e pediu sua publicação no site, com Resume após About no menu. Formação: Cibersegurança, UniCarioca, concluída em 2026; 42 Rio desde setembro de 2024, em andamento, com 87% do Common Core no histórico de novembro de 2026. Na Faculdade Souza Marques: estagiário de TI de agosto de 2023 a janeiro de 2025; especialista em suporte de TI desde janeiro de 2025, com mais de 800 chamados resolvidos. A página Resume inclui experiência, formação, projetos, conhecimentos, idiomas e contatos fornecidos por Michel. About também foi atualizada. A Home mantém sua ordem de seções anterior. O conteúdo do currículo fica em `src/content/resume.ts`.
