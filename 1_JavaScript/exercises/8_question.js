/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
* multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function mult(valor1, valor2) {
    let total = 0
    for(i = 1; i <= valor2; i++){
        total += valor1
    }
    console.log(total)
}

mult(2,2)
mult(5,10)
mult(5,1)
