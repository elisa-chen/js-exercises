const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

const mutantsModified = mutants.map(function(mutant) {
    if (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
        return ('<3 ' + mutant);
    } else {
        return mutant;
    }
  });


console.log(mutantsModified);

