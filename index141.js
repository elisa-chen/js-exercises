const tripExpenses = [500, 1200, 200];

const expenseSum = tripExpenses.reduce(function(total, expense) {
    return total + expense;
});

console.log(`hotel fee: ${tripExpenses[0]}, trip fee: ${tripExpenses[1]}, meals fee: ${tripExpenses[2]}`);

console.log(`total trip budget ${expenseSum}`);