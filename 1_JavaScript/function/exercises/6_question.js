/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
* primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
* retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    return `Juros Simples após ${tempoAplicacao} meses: R$ ${(capitalInicial + capitalInicial * taxaJuros * tempoAplicacao).toFixed(2)}`
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    return `Juros Compostos após ${tempoAplicacao} meses: R$ ${(capitalInicial * Math.pow((1+taxaJuros), tempoAplicacao)).toFixed(2)}`
}

console.log(jurosSimples(1000, 0.005, 5))
console.log(jurosCompostos(1000, 0.005, 5))