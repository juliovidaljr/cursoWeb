/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
* possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
* está desenvolvendo no momento é a de somar o total das despesas.
* Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

function Object(nome, categoria, preco){
    this.nome = nome
    this.categoria = categoria
    this.preco = preco
}

const produtos = [new Object('Bolo de Morango', 'Padaria', 89.90), new Object('PC Lider Brasil', 'Eletrônico', 99999999.99), new Object('Cookie de Arthir', 'Padaria', 7.99)]

function despesas(vetorProdutos) {
    const total = vetorProdutos.map(vetor => vetor.preco).reduce(function (acumulador, atual){return acumulador + atual}, 0)
    console.log(`Total de despesas é: R$ ${total}`)
}

function despesas2(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

console.log(produtos)
despesas(produtos)
console.log(despesas2(produtos))