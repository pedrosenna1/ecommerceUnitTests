const {filtrarProdutosDisponiveis} = require ('../src/catalogo')
const assert = require ('node:assert')

describe('filtro catalogo', () => {
    it('entrada valida com multiplos produtos', () =>{
        // Arrange
        const produtos = [ 
            {nome: 'camisa', estoque: 10, ativo: true, preco: 50.50},
            {nome: 'calca', estoque: 8, ativo: true, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]

        const esperado = [ 
            {nome: 'camisa', estoque: 10, ativo: true, preco: 50.50},
            {nome: 'calca', estoque: 8, ativo: true, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]
        // Act

        const resposta = filtrarProdutosDisponiveis(produtos)
        // Assert
        
        assert.deepStrictEqual(resposta, esperado)
    })

    it('Verificar se produto inativo aparece ', () =>{
        // Arrange
        const produtos = [ 
            {nome: 'camisa', estoque: 10, ativo: true, preco: 50.50},
            {nome: 'calca', estoque: 8, ativo: false, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]

        const esperado = [ 
            {nome: 'camisa', estoque: 10, ativo: true, preco: 50.50},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]
        // Act

        const resposta = filtrarProdutosDisponiveis(produtos)
        // Assert
        
        assert.deepStrictEqual(resposta, esperado)
    })

    it('Verificar se produto com estoque 0 aparece a listagem de produtos da pesquisa', () =>{
        // Arrange
        const produtos = [ 
            {nome: 'camisa', estoque: 0, ativo: true, preco: 50.50},
            {nome: 'calca', estoque: 8, ativo: true, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]

        const esperado = [ 
            
            {nome: 'calca', estoque: 8, ativo: true, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]
        // Act

        const resposta = filtrarProdutosDisponiveis(produtos)
        // Assert
        
        assert.deepStrictEqual(resposta, esperado)
    })

    it('Verificar se os produtos estão aparecendo em ordem crescente', () =>{
        // Arrange
        const produtos = [ 
            {nome: 'camisa', estoque: 0, ativo: true, preco: 50.50},
            {nome: 'calca', estoque: 8, ativo: true, preco: 80},
            {nome: 'top', estoque: 7, ativo: true, preco: 100}
        ]

        
        
        // Act

        const resposta = filtrarProdutosDisponiveis(produtos)
        const esperado = resposta[0].preco < resposta[1].preco
        // Assert
        
        assert.ok(esperado)
    })

    it('Se entrada não for uma lista, acusar erro', () =>{
        // Arrange
        const produtos = 'casaco'

        
        
        // Act

        try{
            const resposta = filtrarProdutosDisponiveis(produtos)
            assert.fail('Era esperado que a função lançasse um erro')
        }   catch (erro) {

        
            const esperado = 'A entrada deve ser uma lista de produtos'

            // Assert
            assert.strictEqual(erro.message,esperado) }
        
    })

})