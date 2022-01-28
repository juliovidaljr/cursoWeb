const pessoa = {
    nome: 'Ana',
    idade: 52,
    endereco: {
        logradouro: 'Rua das pedras',
        numero: 123,
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa // undefined, pois a classe 'endereco' existe, mas 'cep' não
console.log(logradouro, numero, cep)

const { data: {dia, mes, ano}} = pessoa // erro, pois a classe 'data' não existe
console.log(dia, mes, ano)
