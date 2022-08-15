class Ninja{
    constructor(name,health,speed= 3,strength=3){
        this.name=name;
        this.health=health;
        this.speed= speed;
        this.strength=strength;
    }
    sayName(){
        console.log(`ninja name is :${this.name}`);
    }
    showStats(){
        this.health += 10;
        console.log(`Name:${this.name} , Health:${this.health}, Speed:${this.speed}, Strength:${this.strength}`);
    }
    drinkSake(){
    
        console.log(`ninja helth is:${this.health}`);  
    }
}




class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10 , wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom=wisdom;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    }

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
