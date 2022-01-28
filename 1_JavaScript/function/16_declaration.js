// function declaration (pode ser chamada antes de declarada)
console.log(soma(7,3))
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(7,3))

// named function expression
const mult = function mult(x, y){
    return x * y 
}
console.log(mult(7,3))
