# Registro de decisões

Atualizado em 12/11/2026. Esta é a pauta para organizar o sistema em conjunto.

**Aprovado:** escolha explícita de Michel. **Implementado:** código existente, sem implicar aprovação de toda a redação. **Proposta:** direção para discutir. **Pendente:** informação ou validação ainda necessária.

| ID | Situação | Decisão | Evidência / motivo |
| --- | --- | --- | --- |
| DS-01 | Aprovado | Duas paletas, retrato sobre Sand, menu na ordem definida | Conversa de definição do portfólio |
| DS-02 | Implementado | Tokens, catálogo visual e instruções no repositório | Pedido de organizar e documentar o sistema |
| DS-03 | Em revisão | Primeira pessoa e relatos concretos | Michel considera os textos atuais genéricos |
| DS-04 | Proposta | Escala de espaço de 4 a 64 px | Facilitar coerência em novas peças |
| DS-05 | Pendente | Evidências e contribuição individual em projetos | Reunir capturas, resultados e responsabilidades |
| DS-06 | Pendente | Revisão visual e acessibilidade manual | Navegador de revisão indisponível no ambiente |

## DS-01 · Identidade

Claro: Cream #F3EEE3, Ink Black #111111, Burnt Orange #D9541E. Escuro: Charcoal #1E1E1C, Sand #D8CBB3, Electric Blue #2F6BFF. Retrato com Sand em ambos os modos.

Menu: Home, About, Portfolio, Blog, Services. A Home resume; as demais páginas aprofundam. O site apresenta a trajetória completa.

## DS-02 · Sistema inicial

Implementados: tokens semânticos em CSS, cores integradas ao Tailwind, componente ActionLink reutilizável, guia com exemplos reais e documentação.

O guia não muda a navegação principal. Não foi instalado shadcn/ui, Storybook, registry próprio ou MCP de design: ainda não existe necessidade concreta que justifique essas dependências.

## DS-03 · Conteúdo

Próxima decisão: frase de abertura e tom da Home. O exemplo no guia é um rascunho. Em seguida, trabalhar About e os estudos de caso. Aprovar texto não equivale a aprovar alteração de layout.

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

Alterar o registro e a fonte correspondente no mesmo marco. O guia mantém um resumo em `src/content/design-system.ts`; atualizá-lo junto deste arquivo.
