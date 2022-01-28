function pessoa1(nome){
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa1('João')
p1.falar()
console.log(p1.nome)

function pessoa2(nome){
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new pessoa2('João')
p2.falar()
console.log(p2.nome)