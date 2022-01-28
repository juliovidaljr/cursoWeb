function criarProduto(nome, preco) {
    return {
        nome,
        preco: `R$ ${preco.toFixed(2)}`,
        desconto: 0.2
    } 
}

console.log(criarProduto('refrigerante', 6))