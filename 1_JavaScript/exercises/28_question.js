/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

function segundoMaior(vetor){
    const maiorNumero = Math.max(...vetor)
    vetor = vetor.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...vetor)
    return segundoMaior
    }


function segundoMaior2(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    return segundoMaior
}

const num = [12, 3, 1, 234, 55, 10, 200, 250]
console.log(segundoMaior(num))
console.log(segundoMaior2(num))
