/* Closure é o escopo criado quando uma função é declarada
 * Esse escopo permite a função acessar e manipular variáveis externas à função
 */

const escopo = 'Global'

function fora() {
    const escopo = 'Local'
    function dentro() {
        return escopo
    }
    return dentro
}

const escopoFuncao = fora()
console.log(escopoFuncao())