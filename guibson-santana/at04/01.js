// Leandro Cordeiro de Farias
const bands = new Map();

bands.set('tarika blue', 'fusion jazz')
bands.set('the dave brubeck quartet', 'cool jazz')
bands.set('redbone', 'american rock')

console.log('Bandas: ');
let i = 1;
for (const [key, value] of bands) {
    console.log(i + ': ' + key);
    i++;
}

const bandName = prompt('Insira um nome: ')
console.log('O gênero da banda é: ' + bands.get(bandName.toLowerCase()));