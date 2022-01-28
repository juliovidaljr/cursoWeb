function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desconto) * (1 + imposto)).toFixed(2)}`
}

const produto = {
    nome: 'Smartphone',
    preco: 2399.99,
    desconto: 0.1,
    getPreco
}

console.log(getPreco()) // não declarada no escopo global
global.preco = 30
global.desconto = 0.1
console.log(getPreco()) // declarada no escopo global
console.log(produto.getPreco()) // declarada no escopo do objeto

const carro = {preco: 60000, desconto: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.1, '$'))

console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.1 , '$']))