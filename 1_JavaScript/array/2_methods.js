const lastDance = ['Fallen', 'Fnx', 'Fer', 'Boltz', 'Coldzera']

lastDance.pop()  // remove o último elemento
console.log(lastDance)

lastDance.push('Taco') // adiciona ao final
console.log(lastDance)

lastDance.shift() // remove o primeiro elemento
console.log(lastDance)

lastDance.unshift('Bad Fallen') // adiciona ao início
console.log(lastDance)

lastDance.splice(2, 0, 'Tarik', 'S1mple', 'Vini')
console.log(lastDance)

lastDance.splice(2, 2)
console.log(lastDance)

const naoContratados = lastDance.slice(5,6)
console.log(naoContratados)