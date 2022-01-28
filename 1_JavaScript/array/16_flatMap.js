const escola = [{
    nome: 'Turma 101',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Tereza',
        nota: 6.9
    },{
        nome: 'Gabriel',
        nota: 9.8
    }]
}, {
    nome: 'Turma 102',
    alunos: [{
        nome: 'Renato',
        nota: 5.1
    },{
        nome: 'Paulo',
        nota: 8.5
    }]
}]

const getAluno = aluno => aluno.nota
const getTurma = turma => turma.alunos.map(getAluno)
const notas1 = escola.map(getTurma)
console.log(notas1)

console.log([].concat([ 8.1, 6.9, 9.8 ], [ 5.1, 8.5 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getTurma)
console.log(notas2)