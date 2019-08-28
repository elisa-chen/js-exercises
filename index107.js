function biggerNumber(firstNumber, secondNumber) {
    if(typeof firstNumber != 'number' || typeof secondNumber != 'number')
    {
        console.log("parameters have to be number");

    }
    else
    {
        if(firstNumber > secondNumber)
        {
             console.log(`First Number ${firstNumber} is bigger than second number ${secondNumber}`);
        }
        else if(firstNumber == secondNumber)
        {
            console.log(`Both numbers are ${firstNumber}`);

        }
        else console.log(`Second Number ${secondNumber} is bigger than first number ${firstNumber}`);

    }

}
biggerNumber('elisa',5);
biggerNumber(6,9);


