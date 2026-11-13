# Motion · regras compartilhadas

Fonte visual: `src/design/tokens.css` e `src/app/globals.css`. Comportamento: `src/components/page-effects.tsx`.

| Uso | Ferramenta | Token / duração | Movimento |
| --- | --- | --- | --- |
| CTA | CSS transition | --duration-interaction: 250ms | --action-lift: -3px |
| Menu e links | CSS transition | --duration-state: 200ms | Cor e fundo; sem deslocamento |
| Capa no card | CSS transition | --duration-cover: 400ms | --card-lift: -6px |
| Entrada | IntersectionObserver + CSS | --duration-reveal: 650ms | Opacidade e --reveal-distance: 24px |
| Progresso | requestAnimationFrame | Atualização por frame solicitado | Barra de 2px conforme rolagem |
| Âncoras | scroll-behavior | Duração nativa do navegador | scroll-padding 110px; ≤800: 130px |

Easing compartilhado: `--ease-standard: ease`. Não usar `transition: all` em componentes novos.

## Contrato de aplicação

- Entrada observada com limiar de 8%, uma vez por elemento naquela montagem.
- Seletores atuais: cards de projeto, cabeçalhos de seção, artigos da timeline e itens de serviço.
- O H1 e a apresentação inicial aparecem imediatamente.
- Um hover muda a apresentação, nunca esconde o único acesso ao destino.
- Filtros trocam resultados imediatamente; não aplicar reveal a itens novos sem observar sua montagem.
- Limpar observadores, listeners e frames ao desmontar ou mudar de rota.
- Não animar dimensões estruturais, disparar loops decorativos ou interceptar a rolagem.
- O exemplo do DS é um teste manual de deslocamento, não um segundo motor de animação.

## Movimento reduzido

Com `prefers-reduced-motion: reduce`: sem animações/transições, sem deslocamento de botões e capas, reveal visível sem transform e rolagem auto. O teste de movimento do DS também respeita essa preferência. Conteúdo e ações continuam utilizáveis.

## Ferramentas não presentes

GSAP, Lenis, Framer Motion e parallax não estão implementados. A existência de efeitos nas referências visuais não demonstra que o portfólio use essas bibliotecas. Só acrescentar ferramenta quando um comportamento necessário não for bem atendido pelo padrão atual.
