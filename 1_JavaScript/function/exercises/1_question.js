/*01) Crie uma função que dado dois valores (passados como parâmetros) 
* mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

const operacoes = function(valor1, valor2) {
    console.log(`soma: ${valor1 + valor2}`)
    console.log(`subtração: ${valor1 - valor2}`)
    console.log(`multiplicação: ${valor1 * valor2}`)
    console.log(`divisão: ${valor1 / valor2}`)
}

operacoes(6, 3)
