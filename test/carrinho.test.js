const {calcularTotalCarrinho} = require ('../src/carrinho')
const assert = require ('node:assert')

describe('carrinho',() =>{
    it('Total básico de itens',() => {
        // Arrange
        const entrada = [
            { nome: 'camisa', preco: 50 },
            { nome: 'calça', preco: 80 }
        ]

        const valorTotal = entrada[0].preco + entrada[1].preco
        
        // Act
        const resposta = calcularTotalCarrinho(entrada)

        // Assert
        assert.deepStrictEqual(resposta,valorTotal)

    })

    it('Item com quantidade informada — garantir que a quantidade seja multiplicada corretamente',() => {
        // Arrange
        const entrada = [
            { nome: 'camisa', quantidade: 2, preco: 50 },
            { nome: 'calça', quantidade: 3, preco: 80 }
        ]

        const valorTotal = (entrada[0].preco * entrada[0].quantidade) + (entrada[1].preco * entrada[1].quantidade)
        
        // Act
        const resposta = calcularTotalCarrinho(entrada)

        // Assert
        assert.deepStrictEqual(resposta,valorTotal)

    })


})