console.log(Math.ceil(8.7))

const obj1 = {}
obj1.nome = 'Giovanni'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Executando...')
    }
}

const obj2 = new Obj('Arthir')
const obj3 = new Obj('Paulo')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()