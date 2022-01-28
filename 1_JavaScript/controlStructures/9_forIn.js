const notas = [6.5, 7.4, 3.7, 9.3, 10, 1]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Jamelão',
    idade: 17,
    profissao: 'Tik Toker',
    saldo: '$173400,00'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}