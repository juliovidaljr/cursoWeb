/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
* o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
* "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
* inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
* considerando se numero é igual a minimo ou a maximo.
*/

function intervalo(numero, minimo, maximo, inclusivo = false){
    console.log(inclusivo ? (numero >= minimo && numero <= maximo) : (numero > minimo && numero < maximo))
}

intervalo(2,1,3)
intervalo(1,2,3)
intervalo(2,2,2,true)
intervalo(2,2,2)
