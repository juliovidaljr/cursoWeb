/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
* gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
* sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
* não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado
*/

function sorteio(aposta){
    const min = 1
    const max = 10
    const resultado = Math.floor(Math.random() * (max-min+1) + min)
    return (resultado === aposta) ? `Parabéns! O número sorteado foi o ${resultado}` : `Que pena! O número sorteado foi o ${resultado}`
}

console.log(sorteio(3))