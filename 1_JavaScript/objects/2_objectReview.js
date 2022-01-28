
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 80900,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Avenida 7 de Setembro',
            numero: 1123
        }
    },
    condutores: [{
        nome: 'Júlio César',
        idade: 22,
        carteiraStatus: true
    },{
        nome: 'Gabriel',
        idade: 18,
        carteiraStatus: false
    }],
    calcularIPVA: function(){
        console.log(`IPVA R$ ${(this.valor*0.05).toFixed(2)}`)
    }
}

carro.calcularIPVA()
carro.proprietario.endereco.numero = 1111
carro['proprietario']['endereco']['logradouro'] = 'Av. 7 de Setembro'
carro.condutores[1].carteiraStatus = true
console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
// console.log(carro.condutores.length) //ERRO!