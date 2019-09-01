const numbers = [];

for (let i=1000; i>=0; i--) {
    numbers.push(i);
}

let evenNumbers = numbers.filter(function(evenNumber) {
    if (evenNumber % 2 === 0) {
        return evenNumber;
    }
});

let oddNumbers = numbers.filter(function(oddNumber) {
    if (oddNumber % 2 === 1) {
        return oddNumber;
    }
});

console.log(evenNumbers.slice(0, 10));
console.log(oddNumbers.slice(0, 10));
