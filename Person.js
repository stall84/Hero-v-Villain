

class Person {

    // hard coded 100 health and no weapon for each person at start. name will be passed in as string 
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }

    // 
    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    // not sure about the math below. damage is a yet to be defined property. assuming that will come in the weapon.js file
    attack(person) {
        person.health -= this.weapon.damage;
    }

}