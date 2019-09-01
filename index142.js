const firstPerson = ['Elisa ', 'Chen ', '63 Loyola Bay ', 28];
const secondPerson = ['Neil ', 'Tran ', '120 Rainbow Road ', 30];


const firstPersonCombined = firstPerson.reduce(function(totalFirstPerson, firstPersonString) {
    return totalFirstPerson + firstPersonString;
});

const secondPersonCombined = secondPerson.reduce(function(totalSecondPerson, secondPersonString) {
    return totalSecondPerson + secondPersonString;
});

console.log(firstPersonCombined);
console.log(secondPersonCombined);
