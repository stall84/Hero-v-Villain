class Villain extends Person {

    constructor(name) {

    super(name) 
}

render() {
    return `
    <div id="villain-holder" class="col-12">
    <div id="villain-main" class="card m-2">
    <img class="card-img-top" style="height:250px;" src="images/villain.gif">
    <div class="card-body">
    <h2 class="card-title text-center">${this.name}</h2>
    <hr>
    <h4 class="card-text">Health: ${this.health}</h4> 
    <h4 class="card-text">Weapon: ${this.weapon}</h4>
    </div>
    </div>
    </div>
    `
}

}