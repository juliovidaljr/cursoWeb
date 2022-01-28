// sem arrow function
let dobro = function(a) {
    return 2* a
}
console.log(dobro(Math.PI))

// arrow function com bloco
dobro = (a) => {
    return 2 * a
}
console.log(dobro(Math.PI))

// arrow function sem bloco
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())
ola = _ => 'Olá'
console.log(ola())