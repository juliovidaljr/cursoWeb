/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
* que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
* têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function digitos(vetor, quantidade){
    return vetor.filter(numero => (String(numero).length === quantidade))
}

function digitos2(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length
    return quantidadeDeDigitos === quantidadeDesejada
    })
}

function digitos3(numeros, quantidade){
    const resultado = []
    for(numero of numeros){
        if(String(numero).length === quantidade)
            resultado.push(numero)
    }
    return resultado
}

const numeros = [1, 21, 2, 3, 321, 31313, 2, 23, 34, 55, 9999]
console.log(digitos(numeros, 2))
console.log(digitos2(numeros, 2))
console.log(digitos3(numeros, 2))
