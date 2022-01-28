/* 
 null => mais adequado para valores que queira zerar, porém não é recomendado já que limita o acesso à métodos
 undefined => deixar a linguagem identificar quando algum atributo será undefined
*/

let valor // não inicializada (undefined)
console.log(valor)

valor = null // ausência de valor (null)
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // não atribuir indefined!!
console.log(!!produto.preco)
delete produto.preco // método correto de exclusão
console.log(produto)

produto.preco = null // sem preço