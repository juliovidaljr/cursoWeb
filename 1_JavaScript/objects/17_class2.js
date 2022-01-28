class Avo {
    constructor(sobrenome = 'Corrêa') {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
        this.profissao = 'Engenheiro'
    }
}

const avo = new Avo
const pai = new Pai
const filho = new Filho
console.log(avo)
console.log(pai)
console.log(filho)