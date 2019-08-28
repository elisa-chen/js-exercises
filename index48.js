const message = '3.14 it\'s a great number but 42 it\'s the answer to life.'

let pi = message.slice(0, 4);
pi = parseFloat(pi);

let answerToLife = message.slice(29, 31);
answerToLife = parseInt(answerToLife);

const result = pi + answerToLife;

console.log(result.toString());
console.log('Pi:', pi)
console.log('answerToLife:', answerToLife);
console.log(`${result} is the result of adding ${pi} and ${answerToLife}`);


