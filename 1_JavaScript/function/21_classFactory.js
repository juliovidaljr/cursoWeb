class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

/* Ao criar o método numa classe, é necessário usar o 'this.' para 
 * referenciar a variável, e por isso, ao executar no browser o this aponta
 * para o escopo global e retona o resultado da variável 'nome' como undefined.
 */

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Tiago')
p2.falar()