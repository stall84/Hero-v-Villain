class Weapon {

    constructor(name) {
        this.name = name;
        // this math below should return a whole random number between 10 and 20
        this.damage = Math.floor((Math.random() * 10) + 10);
}

}
