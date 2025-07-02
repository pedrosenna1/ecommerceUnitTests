function calcularTotalCarrinho(itens) {
  if (!Array.isArray(itens)) {
    throw new Error('A entrada deve ser uma lista de itens')
  }

  if (itens.length === 0) {
    return 0
  }

  let total = 0

  for (const item of itens) {
    if (typeof item.preco !== 'number' || item.preco < 0) {
      throw new Error(`Preço inválido no item: ${item.nome}`)
    }

    const quantidade = item.quantidade ?? 1

    total += item.preco * quantidade
  }

  return total
}

module.exports = { calcularTotalCarrinho }
