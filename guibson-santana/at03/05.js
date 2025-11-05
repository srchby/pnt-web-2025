// Leandro Cordeiro de Fariax
function shirtPrices(small, medium, large) {
    return small * 10 + medium * 12 + large * 15
}

const small = prompt('Camisetas pequenas: ');
const medium = prompt('Camisetas pequenas: ');
const large = prompt('Camisetas pequenas: ');

console.log('Valor arrecadado: ' + shirtPrices(small, medium, large));