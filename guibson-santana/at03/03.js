// Leandro Cordeiro de Fariax
function yearsToDays(years) {
    return years * 365;
}

const name = prompt('Nome: ');
const age = prompt('Idade: ');

console.log(name + ', você viveu ' + yearsToDays(age));