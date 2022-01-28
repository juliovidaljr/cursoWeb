function Carro(nome, velocidadeMaxima = 200, delta = 5){
    // Método privado
    let velocidadeAtual = 0

    // Método publico
    setInterval(function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
        console.log(`${nome}: ${velocidadeAtual}km/h`)
    }, 1000)
    
}

new Carro('GigioDeBike', 1000, 25)