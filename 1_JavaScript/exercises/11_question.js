/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
* array:
*/

function primeiroEultimo(vetor) {
    return [].concat(vetor[0],vetor[vetor.length-1])
}

console.log(primeiroEultimo(['gigio', 'encosta', 'encosta', 'encosta', 'gigio']))