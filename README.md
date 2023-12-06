# Sorteio Planilhas Google

Este projeto é um script de aplicativo do Google que realiza sorteios a partir de uma planilha do Google. Ele é ideal para eventos onde você precisa sortear prêmios entre uma lista de participantes.

## Como funciona

O script é integrado a uma planilha do Google onde os participantes são listados. Quando o script é executado, ele solicita ao usuário o número de ingressos a serem sorteados. Em seguida, ele seleciona aleatoriamente os vencedores dos participantes listados na planilha e exibe os resultados em uma caixa de diálogo.

## Arquivos do projeto

- `Code.js`: Este é o arquivo principal que contém a lógica do sorteio.
- `Utils.js` Este arquivo contém funções auxiliares usadas em `Code.js`.
- `results_page.html`: Esta é a página HTML que é exibida quando os resultados do sorteio são mostrados.

## Como usar

1. Abra a planilha do Google onde você tem a lista de participantes.
2. Vá para Ferramentas -> Editor de script e cole o código de `Code.js` e `Utils.js`.
3. Salve e feche o Editor de script.
4. Recarregue a planilha e você verá um novo item de menu chamado 'MA OE!'.
5. Clique em 'Quem quer ingresso?' para iniciar o sorteio.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença GNUv3.
