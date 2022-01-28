const notas = [7.7, 7.2, 3.5, 6.9, 5.6, 10]

// sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

// arrow function com callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)