/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
* que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function adicionar(valor, repeticoes){
    const array = []
    for(i = 0; i < repeticoes; i++){
        array.push(valor)
    }
    console.log(array)
}

adicionar('Encosta', 2)