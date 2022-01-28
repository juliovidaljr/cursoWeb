/*03) Crie uma função que recebe dois parâmetros, base e expoente, e 
* retorne a base elevada ao expoente
*/

const exp = function (base, expoente){
    let resultado = base
    for(i = 2; i <= expoente; i++){
        resultado *= base
    }
    console.log(resultado)
}

exp(5,3)