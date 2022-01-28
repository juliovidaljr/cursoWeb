var a = 3
let b = 4
// o var pode ser redeclarado, o let não
var a = 30
b = 40

console.log(a, b)
// ambos podem receber valores diferentes
a = 300
b = 400

console.log(a, b)

// tipo const não pode receber novos valores
const c = 5
c = 50
console.log(c)