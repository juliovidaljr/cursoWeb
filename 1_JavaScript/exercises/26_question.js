/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
* ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.
*/

function inversor(objeto){
    const invertido = {}
    for(i in objeto){
        invertido[objeto[i]] = i
    }       
    console.log(invertido)
}

function inversor2(objeto){
    let invertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
        valor = 1

        invertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })        
    console.log(invertido)
}

function inversor3(objeto){
    const invertido = Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(invertido)
}

const fnx = {
    nome : 'Lincoln Lau',
    profissao: 'Pro player de CS:GO',
    campeaoMajor: true,
    timeAtual: 'Last Dance'
}

inversor(fnx)
inversor2(fnx)
console.log(inversor3(fnx))