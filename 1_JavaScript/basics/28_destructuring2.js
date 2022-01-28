const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 13] = [10, 9, 8, 7]
console.log(n1, n3, n5, n6)

const [, , [, numero]] = [[10, 20, 30], [11, 21, 31], [12, 22, 32]]
console.log(numero)
