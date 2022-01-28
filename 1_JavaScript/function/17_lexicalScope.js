const escopo = 'Global'

function exec() {
    const valor = 'Local'
    console.log(escopo)
    minhaFuncao()
}

function minhaFuncao() {
    console.log(escopo)
}

exec()