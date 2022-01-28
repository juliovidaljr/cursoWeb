// par nome/valor
const saudacao = 'Opa'

function exec() {
    const saudacao = 'E aí'
    return saudacao
}

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: 'Tiago',
    idade: 37,
    peso: 80,
    endereco: {
        logradouro: 'Avenida 28 de março',
        numero: 322
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)