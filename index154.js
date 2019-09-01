const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy = this.energy - damage;
        if(this.energy <= 0) {
            this.lives -=1;
            this.energy = 100;
        }
        console.log(`name ${this.name} \n energy ${this.energy} \n lives ${this.lives} \n` );

    },
    recoverEnergy: function(energyUp){
        this.energy = this.energy + energyUp;
        if(this.energy > 100) {
            this.energy = 100;
        }
        console.log(`name ${this.name} \n energy ${this.energy} \n lives ${this.lives} \n` );

    },
    loseLife: function(){
        this.lives = this.lives - 1;
        console.log(`name ${this.name} \n energy ${this.energy} \n lives ${this.lives} \n` );
    },
    recoverLife: function(){
        this.lives = this.lives + 1;
        if(this.lives > 99) {
            this.lives = 99;
        }
        console.log(`name ${this.name} \n energy ${this.energy} \n lives ${this.lives} \n` );

    },
}


player.name = 'Elisa';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.loseEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();
console.log( `${player.name} has ${player.energy} energy and  ${player.lives} lives`);