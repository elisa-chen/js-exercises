let femaleSuperhero = ['Catwoman', 'Wonder Woman', 'Black Canary', 'Super Girl', 'Starfire'];
let maleSuperhero = ['Batman', 'Superman', 'The Flash', 'Green Arrow', 'Green Lantern'];
let superheros = femaleSuperhero.concat(maleSuperhero);
let superherosSorted = superheros.sort();

for (let i=0; i < femaleSuperhero.length; i++) {
    console.log(i, femaleSuperhero[i]);
}

let i= 0;

while (i < maleSuperhero.length) {
    console.log(maleSuperhero[i]);
    i++;
}


for (let i=0; i < superheros.length; i++) {
    console.log(superheros[i]);
}