'use strict';

let allDrinks = []
function Drink(name, ingredients, isCold, isHot, price, image) {
    this.name = name;
    this.ingredients = ingredients;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    this.image = image;
    allDrinks.push(this)
    
}

Drink.prototype.render = function () {
    document.write("<h1>Hello everyone</h1>");
    document.write(`<p> ${this.name}</p>`)
    document.write(`<p>${this.price}</p>`)
}



let americano = new Drink("americano", ["coffee", "water"], true, false, 5, "./images/americano.png");
let latte = new Drink("latte", ["coffee", "milk"], true, false, 5, "./images/latte.png");
let cappuccino = new Drink("cappuccino", ["coffee", "milk", "sugar"], true, false, 5, "./images/cappuccino.png");
let espresso = new Drink("espresso", ["coffee"], true, false, 5, "./images/espresso.png");

console.log(allDrinks)


//DOM
// render(); 
latte.render();
americano.render();
cappuccino.render();
espresso.render();


////////