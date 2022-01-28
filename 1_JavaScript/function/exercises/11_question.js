/*11) As regras para o cálculo dos anos bissextos são as seguintes:
* De 4 em 4 anos é ano bissexto;
* De 100 em 100 anos não é ano bissexto;
* De 400 em 400 anos é ano bissexto;
* Prevalecem as últimas regras sobre as primeiras.
* Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
* mensagem e retornando true ou false
*/

function bissexto(ano){
    if(!(ano%400)){
        return `O ano ${ano} é bissexto`
    }else if(!(ano%100)){
        return `O ano ${ano} não é bissexto`
    }else if(!(ano%4)){
        return `O ano ${ano} é bissexto`
    }else{
        return `O ano ${ano} não é bissexto`
    }
}

console.log(bissexto(800))
console.log(bissexto(300))
console.log(bissexto(40))
console.log(bissexto(2))