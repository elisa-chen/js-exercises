let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];


mutants.forEach(function(mutant) {
    if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix') {
        console.log(mutant);
    }
});