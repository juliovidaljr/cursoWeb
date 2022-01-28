const alunos = [
    {nome: 'João', nota: 7.2, bolsista: false},
    {nome: 'Maria', nota: 9.1, bolsista: true},
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'Ana', nota: 8.9, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)