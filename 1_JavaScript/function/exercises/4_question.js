/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
* A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

function divisaoResto (dividendo, divisor) {
        return `Divisão: ${Math.trunc(dividendo/divisor)} \nResto: ${dividendo % divisor}`
}

console.log(divisaoResto(6,3))
console.log(divisaoResto(10,3))
console.log(divisaoResto(13,7))
console.log(divisaoResto(2,3))

