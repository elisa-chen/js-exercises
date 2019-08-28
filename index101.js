function showUser(name, age, phoneNumber, street, postalCode, isMarried) {
    if (isMarried == 'yes') {
    console.log(name + age + phoneNumber + street + postalCode + 'Congrats, you are married');
    } else if (isMarried == 'no') {
        console.log(name + age + phoneNumber + street + postalCode + 'You need to get a boyfriend');
    } else {
        console.log(name + age + phoneNumber + street + postalCode + 'Please input yes or no')
    }
}

showUser('Elisa, ', 28, ', 204-899-2315, ', '63 Loyola Bay, ', 'R3T 3J7 ', 'no');