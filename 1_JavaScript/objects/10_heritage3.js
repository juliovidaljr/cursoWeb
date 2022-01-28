const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filho1 = Object.create(pai)
filho1.nome = 'Tiago'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho1){
    filho1.hasOwnProperty(key) ?
    console.log(filho1[key]) : console.log(`Por herança: ${key}`)
}
