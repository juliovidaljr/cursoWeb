/*Criar uma função que receba um array de números e retorne o menor número desse array
*/

function menorNumero(vetor){
    const menor = vetor.reduce((anterior, atual) => anterior < atual ? anterior : atual)
    console.log(menor)
}

function menorNumero2(numeros) {
    console.log(Math.min(...numeros))
}    

menorNumero([1,2,3,4,5,6])
menorNumero2([1234,23,221,0,6,11234,4,2,1,1,11,3434,])