# midelim.com — Portfólio de Michel Marques

Portfólio pessoal para apresentar minha trajetória em Segurança da Informação, formação na 42 Rio e projetos autorais com IA.

[Site em desenvolvimento](https://midelim-portfolio-preview.creamgown2.chatgpt.site/) · [Histórico](CHANGELOG.md) · [Contexto de continuidade](docs/CONTEXTO-ATUAL.md)

## Design system

[Guia visual com exemplos](https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/) · [Documentação do sistema](DESIGN.md)

O DS começa pelos fundamentos: fontes, tipografia, espaçamento, grid, stickers, cores, animações e comunicação. Em seguida, reúne 21 peças por página, com átomos/composição, medidas, amostras, distribuição 60/30/10 e pontos de revisão. A documentação distingue o aprovado, o implementado e as propostas para revisão conjunta.

## Aplicação atual

Next.js com App Router, TypeScript e Tailwind CSS. A aplicação fica em `src/`; cada seção tem sua própria URL. O build gera uma versão estática do mesmo código para a prévia hospedada.

O visual aprovado foi preservado. O retrato usa uma imagem com transparência sobre fundo Sand nos dois temas. Em telas pequenas, aparece no cartão de identificação compacto.

## Desenvolvimento local

Requisitos: Node.js 24 e pnpm 11.25.0.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abra http://localhost:3000.

```sh
pnpm test
pnpm build
pnpm typecheck
pnpm check:export
pnpm start
```

`pnpm start` serve o build estático localmente em http://127.0.0.1:3000. O servidor de desenvolvimento é iniciado com `pnpm dev`.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/app/` | Layout compartilhado e rotas |
| `src/components/` | Perfil, navegação, tema, cards, filtros e efeitos |
| `src/content/site.ts` | Identidade e navegação |
| `src/content/pages.ts` | Textos das cinco páginas, separados por seção |
| `src/content/projects.ts` | Descrições, tecnologias e links dos projetos |
| `src/app/globals.css` | Paletas, layout aprovado e integração do Tailwind |
| `public/images/` | Retrato otimizado, com transparência |
| `tests/` | Regressões de preferência e migração de temas |
| `scripts/` | Servidor local e verificação do build exportado |
| `.github/workflows/ci.yml` | Validação automática a cada push e pull request |
| `preview/` | Registro do protótipo anterior em HTML/CSS/JS |

O `index.html` na raiz é um arquivo legado de outra prévia; não é usado pelo Next.js nem pelo build publicado.

## Navegação

Menu: Home → About → Portfolio → Blog → Services.

Seções da Home: Abertura → About → Portfolio → Blog → Services (CTA).

Rotas: `/`, `/about/`, `/portfolio/`, `/blog/`, `/services/` e `/portfolio/[slug]/`.

Os seis projetos iniciais são MEGA-BRAIN, Cub3D, Minishell, Webserv, Philosophers e Inception. Links antigos por hash continuam encaminhando para as páginas correspondentes. As capas dos projetos continuam ilustrativas e as pautas do Blog estão identificadas como conteúdo em preparação.

## Cores

| Modo | Fundo | Texto | Botões principais |
| --- | --- | --- | --- |
| Escuro | Charcoal `#1E1E1C` | Sand `#D8CBB3` | Electric Blue `#2F6BFF` |
| Claro | Cream `#F3EEE3` | Ink Black `#111111` | Burnt Orange `#D9541E` |

O retrato tem fundo Sand `#D8CBB3` em ambos os modos. Na primeira visita o tema segue o dispositivo; a escolha manual é lembrada. Links com `?palette=cream` e `?palette=charcoal` continuam aceitos.

DM Sans e Space Grotesk são carregadas pelo Google Fonts. Movimento reduzido respeita a preferência do dispositivo.

## Publicação

A prévia atual é publicada a partir de `out/`. O GitHub Actions valida testes, compilação, tipos e links internos e guarda o build como artefato.

Para a Vercel: importar este repositório, selecionar Next.js, usar a raiz do projeto, `pnpm install --frozen-lockfile` e `pnpm build`. A conexão com a conta Vercel e o DNS de midelim.com ainda precisam ser configurados. Não há credenciais de deploy no repositório.

## Próxima etapa: comunicação

Os textos foram preservados durante a migração para permitir uma revisão editorial dedicada. Editar `src/content/pages.ts`, `site.ts` e `projects.ts` para:

- Explicar experiências e decisões concretas em primeira pessoa.
- Substituir frases genéricas por situações reais da trajetória.
- Detalhar minha contribuição em projetos feitos em equipe.
- Desenvolver estudos de caso, artigos e o conteúdo de Services.

Markdown/MDX pode ser acrescentado quando os artigos e estudos de caso longos forem preparados. Currículo, contatos e experiência profissional também serão incorporados nessa etapa.

## Verificação

Build de produção, TypeScript, testes de tema e verificação dos links e recursos locais do build. A revisão visual automatizada desktop/mobile permanece pendente por indisponibilidade do navegador neste ambiente.
