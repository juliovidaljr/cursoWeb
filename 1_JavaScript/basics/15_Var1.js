// var declarada dentro de bloco pode ser chamada fora
{
    {
        {
            var sera = 'Será??'
            console.log('dentro =', sera)
        }
    }
}
console.log('fora =', sera)

// var declarada dentro de função não pode ser chamada fora
var local = 321
function teste() {
    var local = 123
    console.log('dentro =', local)
}

teste()
console.log('fora =', local)

