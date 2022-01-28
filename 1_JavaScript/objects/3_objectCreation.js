// notação literal
const obj1 = {}
console.log(obj1)

// classe Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Versace Eros', 499.90, 0.1)
const p2 = new Produto('212', 399.90, 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return `${nome} recebe R$ ${((salarioBase / 30) * (30 - faltas)).toFixed()}`
        }
    }
}

const f1 = criarFuncionario('Gigio', 600, 0)
const f2 = criarFuncionario('PC', 30000, 2)
console.log(f1.getSalario(), f2.getSalario())

// Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)