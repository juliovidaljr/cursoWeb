// First-Class Object / First-Class Citizens / Higher-order function

// Criação de função
function func() { }

// Armazenamento em uma variável
const func1 = function() { }

// Armazenamento em um array
const array = [function (a, b) { return a + b} , func, func1]
console.log(array[0](2,3), array[1], array[2])

// Armazenando em um objeto
const obj = { }
obj.falar = function(){ return 'Eu estou funcionando'}
console.log(obj.falar())

// Usando função como parâmetro
function func2(func21){
    func21()
}
func2(function () { console.log('Também estou funcionando')})

// Uma função retornando uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
const soma1 = soma(2, 3)
soma1(5)