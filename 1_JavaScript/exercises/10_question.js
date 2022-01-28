/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
* quantidade especificada no parâmetro
*/

function add(repeticoes){
    let palavra = ''
    for(i = 0; i < repeticoes; i++){
        palavra += '+'
    }
    console.log(palavra)
}

add(0)
add(1)
add(8)