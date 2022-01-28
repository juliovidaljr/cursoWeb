function numeroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

 do {
    opcao = numeroAleatorio(0,10)
    console.log(opcao)
} while (opcao != 1)