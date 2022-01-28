const alunos = [
    {nome: 'João', nota: 7.2, bolsista: false},
    {nome: 'Maria', nota: 9.1, bolsista: true},
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'Ana', nota: 8.9, bolsista: true}
]

// Desafio 1: todos os alunos são bolsistas?

const todos = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})
console.log(todos)

// Desafio 2: algum aluno é bolsista?

const algum = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})
console.log(algum)