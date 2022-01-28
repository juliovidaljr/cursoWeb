function Carro(velocidadeMaxima = 200, delta = 5){
    // Método privado
    let velocidadeAtual = 0

    // Método publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

uno = new Carro()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

ferrari = new Carro(1000, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)