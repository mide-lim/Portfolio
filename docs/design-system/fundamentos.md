# Fundamentos visuais

[DS navegável](https://midelim-portfolio-preview.creamgown2.chatgpt.site/design-system/) · [Mapa do sistema](../../DESIGN.md)

## Organização

Fundamentos primeiro: Fonts & typography, Spacing & pixels, Grid guidance, Stickers, Colors, Motion e Comunicação. Depois: componentes por navegação, com átomos, medidas, movimento, textos e pauta.

Home: **Abertura → About → Portfolio → Blog → Services (CTA)**. Perfil, menu e rodapé são globais. O indicador de rolagem da abertura leva a About; o CTA “Explorar projetos” continua levando ao Portfolio.

## Fonts, typography tokens, text e headings

Famílias em `src/design/tokens.css`; carregamento em `src/app/layout.tsx`. Google Fonts com `display=swap`, pesos 400/500/600/700 e fallback sans-serif.

| Papel | Fonte | Token | Tamanho | Peso / entrelinha |
| --- | --- | --- | --- | --- |
| H1 Home | Space Grotesk | --type-home | clamp(39px, 5.2vw, 76px); ≤520: clamp(36px, 10vw, 52px) para .hero-title | 500 / 1,06 |
| H1 internas | Space Grotesk | --type-page | clamp(58px, 6.5vw, 94px); ≤800: 65; ≤520: 58 | 500 / 1,06 |
| H2 | Space Grotesk | --type-section | clamp(35px, 4.3vw, 64px) | 500 / 1,06 |
| Título de seção Home | Space Grotesk | --type-section-heading | H2; ≤800: 44; ≤520: 45 | 500 / 1,06 |
| Card H3 | Space Grotesk | --type-card | 27 px | 500 / 1,06 |
| Introdução | DM Sans | --type-intro | 18 px; ≤520: 16 | 400 / 1,7 |
| Corpo | DM Sans | --type-body | 16 px | 400 / 1,65 |
| CTA | DM Sans | --type-action | 14 px; perfil: 13 | 600 / 1,65 |
| Identificador | DM Sans | --type-label | 11 px; tracking 2 px | 600 / 1,65 |
| Categoria do card | DM Sans | --type-meta | 10 px; tracking 1 px | 400 / 1,65 |

Títulos usam `--tracking-heading: -0.055em`. Um H1 por página, H2 para seções e H3 para itens. Exceções de editorial, serviços, timeline e rodapé constam nas fichas. As amostras do DS têm escala própria, explicitamente identificada; não representam medição do elemento em produção.

## Spacing e medidas

Escala disponível: `--space-1/2/3/4/6/8/12/16` = 4/8/12/16/24/32/48/64 px. Usar nos componentes novos; manter as exceções existentes documentadas.

| Regra | Token | Valor |
| --- | --- | --- |
| Seção | --section-padding | 88 px vertical; ≤800: 60 |
| Grade de projetos | --project-grid-gap | 38 px vertical / 24 horizontal |
| Perfil | --profile-padding | 26 px; ≤1100: 20; ≤800: 16 × 20 |
| Ação | --action-padding | 15 × 24 px |
| Raios | --radius-profile/image/project/action | 30 / 18 / 23 / 30 px |
| Bordas | --border-width | 1 px |
| Foco | --focus-width / --focus-offset | 2 px / 5 px; tema afasta 4 px |

Medidas de 25, 26, 30, 35 e 38 px continuam intencionais em peças já existentes. O pedido atual centraliza regras e documenta exceções; não altera silenciosamente todos os espaços para múltiplos de quatro.

## Grid guidance

| Viewport | Estrutura | Padding externo | Gap |
| --- | --- | --- | --- |
| >1100 px | Perfil 285 px + conteúdo flexível | 34 px / 3,4% | 5,5% |
| 801–1100 px | Perfil 240 px + conteúdo flexível | 24 px | 4% |
| 521–800 px | Perfil compacto acima do conteúdo | 18 px | Fluxo vertical |
| ≤520 px | Conteúdo e cards em coluna única | 18 px | Cards: 38 px vertical |

Máximo: `--layout-max: 1660px`. Tokens de layout: `--layout-sidebar`, `--layout-padding`, `--layout-gap`. Media queries usam 1100/800/520 px literais; CSS custom properties não são usadas nas condições das media queries.

O DS reorganiza seu menu de componentes até 1100 px e seus pares de amostras até 700 px. Isso não modifica os breakpoints das páginas.

## Stickers

“Stickers” neste projeto significa etiquetas e marcadores visuais, sem biblioteca instalada.

- Identificador/eyebrow: 11 px, peso 600, tracking 2 px.
- Tag de tecnologia: 11 px, padding 5 × 12, raio 25 e borda 1.
- Status do DS: 10 px, padding 5 × 10, raio 30.
- Seta: 42 × 42 px, dentro do link completo, com destaque semântico.
- Estado editorial sempre em texto: Pauta proposta, Em preparação, Em revisão.

## Colors e proporção

| Função | Claro | Escuro |
| --- | --- | --- |
| --background | Cream #F3EEE3 | Charcoal #1E1E1C |
| --surface | #EBE5D8 | #242420 |
| --foreground | Ink Black #111111 | Sand #D8CBB3 |
| --muted-foreground | #111111B3 | #D8CBB3B8 |
| --border | #1111112B | #D8CBB333 |
| --primary | Burnt Orange #D9541E | Electric Blue #2F6BFF |
| --primary-foreground | #111111 | #FFFFFF |
| --portrait-background | #D8CBB3 | #D8CBB3 |

60% base, 30% secundária, 10% destaque: referência de hierarquia, não uma medição de área. Ação principal e estado selecionado concentram o destaque. Componentes sem ação podem usar menos destaque. Não dividir um botão em três fundos para atingir a razão.

Fotografia preservada em cores naturais sobre Sand. Arquivo 640 × 801 px em `public/images/michel-marques.webp`. Capas continuam ilustrações CSS.

## Motion e comunicação

- [Movimento](movimento.md): ferramentas reais, valores, aplicação e movimento reduzido.
- [Conteúdo](conteudo.md): voz, fatos, autoria e revisão editorial.
- [Componentes](componentes.md): anatomia, medidas específicas e navegação.

As amostras acompanham o tema global, exceto os dois cartões comparativos de paleta, que usam seu próprio escopo. Foco, zoom, contraste e legibilidade ainda exigem revisão visual manual.
