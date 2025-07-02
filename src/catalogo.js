function filtrarProdutosDisponiveis(produtos) {
    if (!Array.isArray(produtos)) {
        throw new Error('A entrada deve ser uma lista de produtos');
    }

    const produtosValidos = produtos.filter(produto => {
        return produto.ativo === true && produto.estoque > 0;
    });

    return produtosValidos.sort((a, b) => a.preco - b.preco);
}

module.exports = {
    filtrarProdutosDisponiveis
};
