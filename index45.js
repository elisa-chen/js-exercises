const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg';

const playerNameTemplate = playerName.slice(0, 12);
const teamsTemplate = teams.slice(46, -21);
const jetsCapitalized = teamsTemplate.charAt(0).toUpperCase() + teamsTemplate.slice(1);
const theBestTemplate = message.slice(8, -26);
const goTemplate = message.slice(34, -8);


console.log(playerNameTemplate.toUpperCase(), theBestTemplate, jetsCapitalized, 'player', goTemplate, jetsCapitalized, '!!');