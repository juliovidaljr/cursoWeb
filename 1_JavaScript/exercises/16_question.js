/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

function soma(vetor) {
    let total = 0
    vetor.forEach(vetor => total += vetor)
    console.log(total)
}

function soma2(vetor) {
    const quantidade = vetor.length
    return (quantidade === 0) ? 0 : vetor[0] + soma2(vetor.slice(1))
}

function soma3(vetor) {
    const soma = vetor.reduce((acumulador, atual) => acumulador + atual, 0)
    return soma
}

const a = [1,2,3,4,5]

soma(a)
console.log(soma2(a))
console.log(soma3(a))
