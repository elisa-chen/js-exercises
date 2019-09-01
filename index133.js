let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let position = 0;
for (let i = 0; i < mutants.length; i++) {
    if (mutants[i] !== 'Magneto') {
        console.log(mutants[i]);
    } else {
        position = i;
        break;
    } 
}

mutants.splice(4,1);
    
console.log(mutants);
for (let i = 0; i < mutants.length; i++) {
    console.log(mutants[i].toUpperCase() , 'belongs to item position', i);
}



