let heroName = prompt("Enter the Hero's Name:");
let villName = prompt("Enter the Villain's Name");

let player = new Hero(heroName);
let villain = new Villain(villName);


let heroContainer = document.getElementById('heroContainer');
heroContainer.innerHTML = player.render();

let villainContainer = document.getElementById('villainContainer');
villainContainer.innerHTML = villain.render();

