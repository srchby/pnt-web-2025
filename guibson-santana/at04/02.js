// Leandro Cordeiro de Farias

const team = new Map();

team.put('sport', 45);
team.put('santa cruz', 29);
team.put('náutico', 24);
team.put('américa-pe', 6);

const teamName = prompt('Insira um nome de time: ');
console.log('O ' + teamName + ' possui ' + team.get(teamName.toLowerCase() + ' títulos'))