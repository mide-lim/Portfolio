# Registro de decisões

Atualizado em 13/11/2026. Esta é a pauta para organizar o sistema em conjunto.

**Aprovado:** escolha explícita de Michel. **Implementado:** código existente, sem implicar aprovação de toda a redação. **Proposta:** direção para discutir. **Pendente:** informação ou validação ainda necessária.

| ID | Situação | Decisão | Evidência / motivo |
| --- | --- | --- | --- |
| DS-01 | Aprovado | Duas paletas, retrato sobre Sand, menu na ordem definida | Conversa de definição do portfólio |
| DS-02 | Implementado | Tokens, catálogo visual e instruções no repositório | Pedido de organizar e documentar o sistema |
| DS-03 | Em revisão | Primeira pessoa e relatos concretos | Michel considera os textos atuais genéricos |
| DS-04 | Proposta | Escala de espaço de 4 a 64 px | Facilitar coerência em novas peças |
| DS-05 | Pendente | Evidências e contribuição individual em projetos | Reunir capturas, resultados e responsabilidades |
| DS-06 | Pendente | Revisão visual e acessibilidade manual | Navegador de revisão indisponível no ambiente |
| DS-07 | Aprovado / implementado | Composição 60/30/10 e DS por componente | Pedido explícito de 13/11/2026 |

## DS-01 · Identidade

Claro: Cream #F3EEE3, Ink Black #111111, Burnt Orange #D9541E. Escuro: Charcoal #1E1E1C, Sand #D8CBB3, Electric Blue #2F6BFF. Retrato com Sand em ambos os modos.

Menu: Home, About, Portfolio, Blog, Services. A Home resume; as demais páginas aprofundam. O site apresenta a trajetória completa.

## DS-02 · Sistema inicial

Implementados: tokens semânticos em CSS, cores integradas ao Tailwind, componente ActionLink reutilizável, guia com exemplos reais e documentação.

O guia não muda a navegação principal. Não foi instalado shadcn/ui, Storybook, registry próprio ou MCP de design: ainda não existe necessidade concreta que justifique essas dependências.

## DS-03 · Conteúdo

Próxima decisão: frase de abertura e tom da Home. O catálogo mostra os textos atuais e uma pauta específica por peça. Em seguida, trabalhar About e os estudos de caso. Aprovar texto não equivale a aprovar alteração de layout.

## DS-04 · Espaçamento

Os tokens de espaço são uma proposta de vocabulário para novas peças. A normalização de todos os espaços atuais ainda não foi realizada. Rever comparando as seções existentes, sem alterar em massa medidas por conveniência técnica.

## DS-05 · Projetos

Escolher capturas e demonstrações reais. Confirmar autoria individual nos trabalhos coletivos. Preparar uma lista de resultados verificáveis para cada estudo de caso. Manter MEGA-BRAIN entre os destaques junto dos projetos da 42.

## DS-06 · Verificação

Build, tipos e testes automáticos não garantem aparência ou experiência de uso. Registrar a revisão real dos dois temas, responsividade, foco, zoom, leitura e movimento reduzido.

## Como registrar uma decisão nova

- ID e data.
- Problema ou pergunta.
- Alternativas consideradas, se necessárias.
- Escolha de Michel ou decisão técnica dentro do escopo autorizado.
- Arquivos afetados.
- Verificação realizada.
- Pendências reais.

Alterar o registro e a fonte correspondente no mesmo marco. O catálogo mantém a pauta por peça em `src/content/component-catalog.ts`; atualizá-lo quando a decisão afetar uma peça.

## DS-07 · Oficina de componentes · 13/11/2026

Pedido: retirar as explicações sobre tokens da página do DS, trabalhar 60/30/10 e separar cada componente para revisar a comunicação.

Implementação: catálogo com 14 peças selecionáveis, amostras do projeto, distribuição de cores por função, textos atuais e pauta editorial. O hash preserva a peça selecionada em links e histórico do navegador. A alternância de tema é global e sincronizada entre os controles visíveis.

Acentos aplicados às setas de projeto e artigo, filtro selecionado, indicador da página atual e foco. Botões principais mantêm o destaque já existente. Nenhuma redação de página pública foi substituída. A proporção é uma referência visual; componentes simples não recebem três fundos artificiais. Fotografias, capas ilustrativas e legibilidade exigem adaptação.

Revisão em navegador segue pendente após timeout do serviço de inspeção. Verificar build, tipos, testes de tema e links do export antes da entrega.
