/* 
 No caso de variáveis com mesmo nome, prioriza-se o escopo menor ao ser chamada.
 O tipo var possui escopo global e de função, enquanto as do tipo let possuem
escopo global, de funlçõa e de bloco.
*/

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)