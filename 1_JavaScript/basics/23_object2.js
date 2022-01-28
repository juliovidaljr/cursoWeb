/* typeof de um objeto, função ou classe não instanciada
é dado como function, já se estiver instanciado, é dado 
como object.
*/

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())