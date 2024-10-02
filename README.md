# Tech Counter

## Descrição

- Projeto de uso pessoal, feito para mapear as tecnologias e skills mais pedidas em vagas de emprego em determinado momento. Não é um web scrapper.
- Feito com React, Typescript e Tailwind.

## Funcionalidade

1) Submeter no form o nome de uma tecnologia.
2) Clicar no botão "Add" abaixo da tecnologia submetida para aumentar seu score.

## Funcionalidades ainda não implementadas

1) Salvar os dados em localStorage para eles persistirem mesmo após tualizar a página.
2) ~~Fazer com que submissão de strings repetidas contem como ponto para a entrada original, ao invés de criar duplicata.~~ (feito) 
3) ~~Fazer com que o campo de submissão apague após a submissão de uma nova string~~ (feito)
3) Refatorar o código para retirar programação imperativa e métodos de manipulação do DOM.

## Aprendizado

* EM react, evita-se código imperativo (como manipulação direta do DOM) pois prefere-se código declarativo (uso de hooks).

* Usar useCallback para memorizar funções que são passadas como dependências de useEffect ou useMemo, ou que dependem de variáveis externas ao componente, para evitar loops de renderização desnecessários.