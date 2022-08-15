class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed= 3;
        this.strength=3
    }
    sayName(){
        console.log(`ninja name is :${this.name}`);
    }
    showStats(){
        console.log(`ninja name is :${this.name} ninja helth is:${this.health} ninja speed is :${this.speed} and ninja strength:${this.strength} .`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`ninja helth is:${this.health}`);  
    }
}


const ninja1 = new Ninja("Hyabusa" ,10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake()