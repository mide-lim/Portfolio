# Fluxo com IA e qualidade

## Uma tarefa de cada vez, com contexto explícito

Antes de mudar a interface, registrar: objetivo, páginas atingidas, decisões aplicáveis e resultado esperado. Consultar `DESIGN.md`, tokens, catálogo e conteúdo existente.

Exemplo de pedido de trabalho:

> Ajustar o card de projeto para acomodar resumos maiores. Reutilizar ProjectCard e os tokens existentes. Conferir Home e Portfolio nos dois temas e em telas pequenas. Atualizar o catálogo se o contrato do componente mudar.

O pedido deve apontar a mudança concreta. “Deixar mais moderno” exige traduzir a intenção em exemplos observáveis antes de uma reformulação ampla.

## Ciclo de desenvolvimento

1. Ler o estado atual e conferir alterações de outras tarefas.
2. Consultar decisões aprovadas e propostas relevantes.
3. Reutilizar ou adaptar o menor conjunto de componentes necessário.
4. Atualizar conteúdo na sua fonte apropriada.
5. Executar as verificações proporcionais.
6. Registrar o que mudou, resultado das verificações e limitações.
7. Commit e publicação conforme a autorização da tarefa.

O código continua sendo a fonte do que está implementado. A documentação registra intenção, aprovação e pendências. Os dois devem evoluir juntos.

## Verificações automáticas

```sh
pnpm test
pnpm build
pnpm typecheck
pnpm check:export
```

- Testes: preferência, persistência e compatibilidade de temas.
- Build: geração das páginas, incluindo os seis projetos e o guia.
- TypeScript: contratos e tipos.
- Exportação: presença das rotas, retrato, links e recursos locais.
- GitHub Actions: executa as mesmas verificações e guarda o build.

Testes não substituem inspeção visual nem leitura editorial. Não acrescentar testes que apenas repitam markup de documentação.

## Revisão visual e de interação

| Verificação | O que observar |
| --- | --- |
| Claro e escuro | Textos, foto, botões, bordas e capas |
| 360 px e 390 px | Navegação, quebra de título, alvos e overflow |
| 768 px | Transição para o perfil compacto |
| 1280 px e 1440 px | Perfil lateral, largura de texto e grid |
| Teclado | Tab, foco, Enter, ordem de navegação e filtros |
| Zoom de 200% | Conteúdo legível e sem sobreposição |
| Movimento reduzido | Conteúdo acessível sem animações |
| Rotas diretas | Recarregar About e páginas de projeto |
| Links antigos | Hashes e parâmetros de paleta |
| Leitor de tela | Títulos, nomes de links, imagem e estados dos controles |

As larguras acima são pontos de teste, não novos breakpoints. Se o navegador estiver indisponível, registrar a revisão visual como pendente e apresentar as verificações que realmente foram executadas.

## Acessibilidade

Referência: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Conferir contraste e estrutura semântica, não apenas ausência de erros de compilação.

A revisão manual deve incluir legenda de imagens, nomes dos controles, distinção entre link e botão e ausência de informação comunicada apenas por cor. Não anunciar conformidade integral sem avaliação correspondente.

## Publicação

A prévia usa o build estático em `out/`. O código no GitHub é versionado. A configuração de hospedagem da prévia é mantida no ambiente Sites. Vercel e o domínio midelim.com ainda não estão conectados.

Preservar a audiência atual e registrar o resultado retornado pela hospedagem. Falha em abrir o navegador não invalida um deploy confirmado, mas impede afirmar validação visual.

## Manutenção do sistema

- Mudança de valor: atualizar token e amostras documentais.
- Mudança de componente: atualizar contrato e exemplo.
- Mudança editorial: atualizar conteúdo e decisão correspondente.
- Nova rota: acrescentar ao verificador de exportação.
- Mudança de escopo: reescrever a documentação para refletir o resultado final.

## Integrações futuras

MCP do shadcn, Storybook, Figma e ferramentas de revisão visual serão avaliados conforme necessidades concretas. Esta documentação não afirma que essas integrações foram instaladas ou conectadas.
