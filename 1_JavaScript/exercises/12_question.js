/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
* apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
* mesma.
* Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
* cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
* algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
* nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
* propriedade especificada no segundo parâmetro.
*/

const fnx = {
    nome : 'Lincoln Lau',
    profissao: 'Rei do camarote',
    campeaoMajor: true,
    timeAtual: 'Last Dance'
}

function deletar(objeto, atributo) {
    const retorno = {...objeto}
    delete retorno[atributo]
    return retorno
}

console.log(fnx)
console.log(deletar(fnx, 'timeAtual'))
