/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

function contador(frase){
    const palavras = frase.split(' ')
    console.log(`A frase possui ${palavras.length} palavras`)
}

contador('Passa o bic põe no ar, minha * quer voar')