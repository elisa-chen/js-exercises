const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
}

const shouldOpenBatCave = function(user) {
    if (user.username === 'batman' && user.password === 'Alfred1960ROCKS!') {
        console.log('Welcome back batman!!');
        return true;
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again..')
        return false;
    }
}

shouldOpenBatCave(user);