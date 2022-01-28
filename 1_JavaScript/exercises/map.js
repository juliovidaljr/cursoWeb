const carrinho = [
    {id: 1, produto: {nome: "Borracha", preco: 3.45 }},
    {id: 2, produto: {nome: "Caderno", preco: 13.90 }},
    {id: 3, produto: {nome: "Kit de Lapis", preco: 41.22 }},
    {id: 4, produto: {nome: "Caneta", preco: 7.50 }},
]

const resultado = carrinho.map(produto => produto.produto).map(produto => produto.preco)
console.log(resultado)