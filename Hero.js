class Hero extends Person {

    constructor(name) {
        
    super(name)
}

render() {
    return `
    <div id="hero-holder" class="col-12">
    <div id="hero-main" class="card m-2">
    <img class="card-img-top" style="height:250px;" src="images/hero.gif">
    <div class="card-body">
    <h2 class="card-title text-center">${this.name}</h2>
    <hr>
    <h4 class="card-text"><span id="heroHealth">Health: ${this.health}</span></h4> 
    <h4 class="card-text"><span id="heroWeapon">Weapon: ${this.weapon}</span></h4>
    </div>
    </div>
    </div>
    `
}

}

