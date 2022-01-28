function tratarErro(erro){
    throw new Error('Algo está errado...')
    /*throw 10
    throw true
    throw 'mensagem'
    throw{
        nome: erro.name
        msg: erro.message
        date: new Date
    } 
    */
}

function imprimirNomeGritado(obj) {
    try{
        console.log('CUIDADO, ' + obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErro(e)
    } finally{
        console.log('fim')
    }
}

const obj = {name: 'Arthur'}
imprimirNomeGritado(obj)