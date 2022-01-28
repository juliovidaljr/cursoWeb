/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
* pares e que também tenham índices pares.
*/

function pares(vetor){
    const vetorPares = []
    for(i = 0; i < vetor.length; i+=2){
        if(vetor[i] % 2 === 0) vetorPares.push(vetor[i])
    }
    console.log(vetorPares)
}

function pares2(vetor){
    return vetor.filter((vetor, indice) => {
        const numeroPar = vetor % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
        })        
}

pares([1,2,2,4,5,6,7,8,8,10])
console.log(pares2([1,2,2,4,5,6,7,8,8,10]))