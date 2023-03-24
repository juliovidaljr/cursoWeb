function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barrier')

    const borda = novoElemento('div', 'border')
    const corpo = novoElemento('div', 'body')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => borda.style.height = `${altura}px` 
}


const b = new Barreira(false)
b.setAltura(200)
document.querySelector('[wm-flappy').appendChild(b.elemento)
