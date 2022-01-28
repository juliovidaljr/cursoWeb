/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
* ou false.
*/

function div3 (numero) {
    return (!(numero % 3) ? true : false)
}

console.log(div3(3))
console.log(div3(5))
console.log(div3(123482))
console.log(div3(3333))
