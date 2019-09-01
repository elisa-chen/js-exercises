const user = {
    username: null,
    password: null,
    greet: function(){
        if(this.username !== null && this.password !== null) {
            console.log(`'Hello, I\'m user ${this.username} and my password is: ${this.password}`);
        } else {
            console.log('Please assign a username value');
        }
    },
    updaterUsername: function(username) {
        this.username=username;
    },
    updatePassword: function(password){
        this.password=password;
    },
}

user.greet();
user.updaterUsername('Elisa');
user.updatePassword('password123');
user.greet();



