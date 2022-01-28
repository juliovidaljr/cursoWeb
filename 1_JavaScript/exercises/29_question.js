/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
* num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
* com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

const alunos = {
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9] 
}

function melhorAluno(alunos) {
    let melhorNome = ''
    let melhorMedia = 0
    for(i in alunos){
        let media = alunos[[i]].reduce((acumulador,atual) => acumulador + atual, 0) / alunos[i].length
        if(melhorMedia < media ){
            melhorNome = i
            melhorMedia = media            
        }
    }
    return {[melhorNome]: melhorMedia}
}


function receberMelhorEstudante(estudantes) {
    const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
    const media = array => soma(array) / array.length

    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
        valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    
    return melhorEstudante
}

console.log(melhorAluno(alunos))
console.log(receberMelhorEstudante(alunos))