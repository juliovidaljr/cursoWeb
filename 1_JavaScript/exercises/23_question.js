/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
* vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
* maiúsculas de minúsculas.
*/

function contador(caractere, palavra) {
    return [...palavra].filter(atual => atual === caractere).length
}

console.log(contador('a', 'Encosta'))