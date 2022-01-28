class Lancamento{
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const conta1 = new Lancamento('Conta de Luz', 340)
const conta2 = new Lancamento('Conta de Água', 182)
const conta3 = new Lancamento('Depósito', 600)
const contas = new CicloFinanceiro(1, 2022)
contas.addLancamentos(salario, conta1, conta2, conta3)
console.log(contas.sumario())