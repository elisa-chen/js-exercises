const arithmetic = {
    add: function(addNumber1, addNumber2){
        if(typeof addNumber1 === 'number' && typeof addNumber2 === 'number') {
            return addNumber1 + addNumber2;
        } else {
            console.log('please input numbers only');
        }
    },
    subtract: function(substractNumber1, substractNumber2){
        if (typeof substractNumber1 === 'number' && typeof substractNumber2 === 'number') {
            return substractNumber1 - substractNumber2;
        } else {
            console.log('please input numbers only');
        }
    },
    divide: function(divideNumber1, divideNumber2){
        if (typeof divideNumber1 === 'number' && typeof divideNumber2 === 'number') {
            return divideNumber1 / divideNumber2;
        } else {
            console.log('please input numbers only');
        }
    },
    multiply: function(multiplyNumber1, multiplyNumber2){
        if (typeof multiplyNumber1 === 'number' && typeof multiplyNumber2 === 'number') {
            return multiplyNumber1 * multiplyNumber2;
        } else {
            console.log('please input numbers only');
        }
    },
    remainder: function(remainderNumber1, remainderNumber2){
        if (typeof remainderNumber1 === 'number' && typeof remainderNumber2 === 'number') {
            return remainderNumber1 % remainderNumber2;
        } else {
            console.log('please input numbers only');
        }
    },
}

console.log(arithmetic.add(2, 10));
console.log(arithmetic.subtract(10, 5));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.remainder(20, 2));