let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let filtered = mutants.filter(function(mutant) {
    if (mutant !== 'Professor X' && mutant !== 'Iceman' && mutant !== 'Gambit') {
        return mutant;
    }
});

console.log(filtered);