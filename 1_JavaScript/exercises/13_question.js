/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
* elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. 
*/

function vetorizar(objeto) {
    const vetor = []
    for(i in objeto){
        vetor.push([i, objeto[i]])
    }
    console.log(vetor)
}

function vetorizar2(objeto) {
    console.log(Object.entries(objeto))
}

const fnx = {
    nome : 'Lincoln Lau',
    profissao: 'Pro player de CS:GO',
    campeaoMajor: true,
    timeAtual: 'Last Dance'
}

vetorizar(fnx)
vetorizar2(fnx)