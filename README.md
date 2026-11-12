# midelim.com — Portfólio de Michel Marques

Portfólio pessoal para apresentar minha trajetória em Segurança da Informação, engenharia de software na 42 Rio e projetos autorais com IA.

[Prévia navegável](https://midelim-portfolio-preview.creamgown2.chatgpt.site/) · [Histórico de desenvolvimento](CHANGELOG.md)

## Estado atual

A pasta `preview/` contém o protótipo publicado em HTML, CSS e JavaScript. As páginas internas usam navegação por hash. A versão em Next.js, a integração com a Vercel e o domínio midelim.com estão planejados.

## Executar a prévia

Com Python 3 instalado, execute a partir da raiz do repositório.

```sh
python -m http.server 8000 --directory preview
```

Abra http://localhost:8000 no navegador. No Windows, o comando equivalente pode ser `py -m http.server 8000 --directory preview`.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `preview/index.html` | Estrutura das páginas e conteúdo da trajetória |
| `preview/style.css` | Layout responsivo, capas ilustrativas e paletas |
| `preview/app.js` | Catálogo de projetos, filtros, navegação e animações de entrada |
| `preview/theme.js` | Tema do dispositivo, alternância manual e persistência |
| `preview/hardware.jpg` | Imagem ilustrativa do cartão lateral |

## Navegação

Home → About → Portfolio → Blog → Services.

A Home apresenta um resumo com rolagem contínua. As páginas internas aprofundam trajetória, projetos, publicações e áreas de colaboração.

O catálogo inicial inclui MEGA-BRAIN, Cub3D, Minishell, Webserv, Philosophers e Inception. As capas são ilustrações. As pautas do Blog estão identificadas como conteúdo em preparação.

## Identidade visual aprovada

| Modo | Fundo | Texto | Botões principais |
| --- | --- | --- | --- |
| Escuro | Charcoal `#1E1E1C` | Sand `#D8CBB3` | Electric Blue `#2F6BFF` |
| Claro | Cream `#F3EEE3` | Ink Black `#111111` | Burnt Orange `#D9541E` |

Na primeira visita, o tema segue a preferência do dispositivo. A escolha manual é salva no navegador. Os links anteriores com `?palette=cream` e `?palette=charcoal` continuam aceitos.

Fontes da prévia — DM Sans e Space Grotesk, carregadas pelo Google Fonts.

## Stack definida para a implementação

- Next.js com App Router e TypeScript.
- Tailwind CSS.
- Markdown/MDX para projetos e artigos.
- GitHub Actions para validação.
- Vercel para prévias e publicação em midelim.com.
- GSAP com ScrollTrigger e Lenis propostos para a camada de movimento.

A prévia atual usa CSS, IntersectionObserver e rolagem suave nativa. A integração das bibliotecas de animação será avaliada na implementação.

## Próximas entregas

- Implementar o visual aprovado em Next.js e Tailwind, com rotas próprias.
- Integrar foto pessoal, currículo, experiência profissional e links de contato.
- Elaborar os estudos de caso e identificar a contribuição individual nos projetos em equipe.
- Substituir capas ilustrativas por capturas ou demonstrações quando disponíveis.
- Publicar artigos e definir o conteúdo final de Services.
- Configurar CI, integração da Vercel e DNS do domínio.
- Conferir visualmente desktop e mobile, acessibilidade e animações.

## Verificação deste marco

A sintaxe dos scripts foi verificada com Node.js. A lógica de temas foi testada para preferência do dispositivo, escolha manual, persistência, migração das paletas anteriores e preservação da rota. A publicação da prévia foi confirmada. A revisão visual automatizada no navegador ficou pendente por indisponibilidade do ambiente.

## Referências visuais e imagem

- [Braxton](https://mixdesign.dev/themeforest/braxton/index-solid-color.html) — composição da Home e cartão lateral.
- [Andrew](https://uithemez.com/i/andrew/about.html) — organização das páginas internas.
- [Fotografia ilustrativa de hardware no Unsplash](https://unsplash.com/photos/a-close-up-of-a-computer-osADpb_0odE).
