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

    it('Item sem quantidade informada — deve assumir quantidade 1 automaticamente' ,() => {
        // Arrange
        const entrada = [
            { nome: 'camisa', preco: 50 },
            { nome: 'calça', quantidade: 2, preco: 80 }
        ]

        const valorTotal = (entrada[0].preco * 1) + (entrada[1].preco * entrada[1].quantidade)
        
        // Act
        const resposta = calcularTotalCarrinho(entrada)

        // Assert
        assert.deepStrictEqual(resposta,valorTotal)

    })

    it('Item com quantidade 0 — o item não afeta o total (resultado será 0 para ele)' ,() => {
        // Arrange
        const entrada = [
            { nome: 'camisa', quantidade: 0, preco: 50 },
            { nome: 'calça', quantidade: 2, preco: 80 }
        ]

        const valorTotal = (entrada[0].preco * entrada[0].quantidade) + (entrada[1].preco * entrada[1].quantidade)
        
        // Act
        const resposta = calcularTotalCarrinho(entrada)

        // Assert
        assert.deepStrictEqual(resposta,valorTotal)

    })

    it('Item com preço negativo — deve lançar erro com a mensagem Preço inválido no item: <nome>',() => {
        //Arrange
        const entrada = [
            {nome:'camisa', quantidade:3, preco: -20},
            {nome:'calca', quantidade:2, preco:20}
        ]
        

        //Act & Assert
        assert.throws(() =>(calcularTotalCarrinho(entrada)),/Preço inválido no item: camisa/)


    })

    it('Carrinho vazio — o total deve ser 0',() => {
        //Arrange
        const entrada = [
            
        ]
        
        //Act
        const resposta = calcularTotalCarrinho(entrada)

        //Assert
        assert.strictEqual(resposta,0)



    })

    it('Entrada não é uma lista — deve lançar erro com a mensagem A entrada deve ser uma lista de itens',() => {
        //Arrange
        const entrada = 'oi'
        
        //Act
        

        //Assert
        assert.throws(()=>(calcularTotalCarrinho(entrada)),/A entrada deve ser uma lista de itens/)



    })


})