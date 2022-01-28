/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
* números de strings.
*/

function comparacao(primeiro, segundo){
    if(typeof primeiro != typeof segundo){
        console.log('Contém tipo string, insira números válidos')
    }else {
        console.log(`${primeiro} é maior ou igual que ${segundo}: ${primeiro >= segundo}`)
    }
}

comparacao(1,2)
comparacao(0,-1)
comparacao('19',2)
