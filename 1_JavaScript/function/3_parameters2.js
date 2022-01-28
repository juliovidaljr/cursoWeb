function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 3.3, 5.5))

console.log(soma(1.2, 2.1, 'Teste'))
console.log(soma('a', 'b', 'c'))