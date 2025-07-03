📦 Módulo de catálogo (catalago.js)

🧠  Requisitos esperados da função:
Deve aceitar uma lista de objetos com as propriedades:

nome (string)

estoque (number)

ativo (boolean)

preco (number)

Retornar apenas produtos com estoque > 0 e ativo: true

A lista deve estar ordenada por preço crescente

Se a entrada não for uma lista, lançar erro



🧪 Objetivo:

✅ Escrever testes que cubram:

✅ Entrada válida com múltiplos produtos

✅ Produto inativo ou com estoque 0 sendo ignorado

✅ Verificação da ordenação por preço

✅ Entrada inválida (não array) gerando erro


📦 Módulo de Carrinho de Compras (carrinho.js)

🧠 Requisitos esperados da função
Esta função é responsável por calcular o valor total de um carrinho de compras com base em uma lista de itens. Os critérios são:

A entrada deve ser uma lista (array) de objetos, representando os produtos no carrinho.

Cada item deve conter:

nome (string)

preco (number)

quantidade (number, opcional)

Se a quantidade não for informada, assume-se o valor padrão de 1.

O valor total é calculado pela soma de preco * quantidade de cada item.

Caso o preço seja negativo, a função deve lançar um erro com mensagem específica.

Caso a entrada não seja um array, também deve lançar erro informativo.

🧪 Objetivo dos testes unitários
Escrever testes que garantam o comportamento correto da função em diferentes situações. Os testes devem cobrir:

✅ Soma simples com dois ou mais itens — cálculo direto dos preços informados.

✅ Item com quantidade informada — garantir que a quantidade seja multiplicada corretamente.

✅ Item sem quantidade informada — deve assumir quantidade 1 automaticamente.

✅ Item com quantidade 0 — o item não afeta o total (resultado será 0 para ele).

✅ Item com preço negativo — deve lançar erro com a mensagem "Preço inválido no item: <nome>".

✅ Carrinho vazio — o total deve ser 0.

✅ Entrada não é uma lista — deve lançar erro com a mensagem "A entrada deve ser uma lista de itens".