
class Ninja {
    constructor(name, health=0 , speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}!`);
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} health is now ${this.health}`);
    }
}

// Sensei class extends Ninja class
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10) {
        super(name, health, speed, strength);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`${this.name} says: "I am a master of the ${this.wisdom}!"`);
    }
}