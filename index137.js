let numbers = [];

for (let i=0; i <= 1000; i++) {
    numbers.push(i);
}


let numbersIncremented = numbers.map(function(number, index) {
    console.log('index', index, 'original value', number, 'incremented value:', number + 10);
    return number + 10;

  });

