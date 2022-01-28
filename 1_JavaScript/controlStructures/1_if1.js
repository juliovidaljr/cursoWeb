function aprovacao(nota){
    if(nota >= 7){
        console.log('Você foi aprovado com ' + nota + '!!')
    }
}

aprovacao(8.9)
aprovacao(6)

function seForVerdade(valor) {
    if(valor) {
        console.log(valor + ' é verdade')
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})