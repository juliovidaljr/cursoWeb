const produtos = [
    {nome: 'Notebook', preco: 2980, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 15.90, fragil: true},
    {nome: 'Copo de Plástico', preco: 10.50, fragil: false}
]

console.log(produtos.filter(function(p){
    return true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(fragil).filter(caro))