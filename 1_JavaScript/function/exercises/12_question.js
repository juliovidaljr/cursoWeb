/*12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial (num){
    if(num === 0){
        return `0! = 1`
    }else if(num === 1){
        return `! = ${num}`
    }else{
        num *= fatorial(num--)
    }    
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(5))
console.log(fatorial(10))