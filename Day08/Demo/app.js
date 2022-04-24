"use strict";

let allDrinks = [];
let mainEl = document.getElementById("headerMain");
let drinksDiv = document.getElementById("drinks");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

function Drink(name, ingredients, cold, hot, img) {
  this.name = name;
  this.ingredients = ingredients;
  this.isCold = cold;
  this.isHot = hot;
  this.price = 0; // default value
  this.image = img;
  allDrinks.push(this);
}

//
// render Method
Drink.prototype.render = function () {
  // add the name of drink
  let header = document.createElement("h4");
  header.textContent = this.name;
  drinksDiv.appendChild(header);

  //add the list of ingredients
  let ulEl = document.createElement("ul");
  drinksDiv.appendChild(ulEl);

  for (let i = 0; i < this.ingredients.length; i++) {
    console.log("inside for loop");
    let liEl = document.createElement("li");
    liEl.textContent = this.ingredients[i];
    ulEl.appendChild(liEl);
  }
  // add the drinks images
  let drinkImage = document.createElement("img");
  drinkImage.setAttribute("src", this.image);
  drinksDiv.appendChild(drinkImage);
};

//method to calculate a random price
Drink.prototype.randomPrice = function (min, max) {
  this.price = getRndInteger(min, max);
};

//function to calculate random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// new Instances:

let americano = new Drink(
  "americano",
  ["coffee", "milk"],
  false,
  true,
  "./images/americano.PNG"
);
let mocha = new Drink(
  "mocha",
  ["espresso", "choclate powder", "milk"],
  true,
  true,
  "./images/mocha.PNG"
);
let latte = new Drink(
  "latte",
  ["espresso", "choclate powder", "whiped milk"],
  true,
  false,
  "./images/latte.PNG"
);

console.log(allDrinks);

function renderAll() {
  for (let i = 0; i < allDrinks.length; i++) {
    if (allDrinks[i].isCold) {
      allDrinks[i].randomPrice(3, 5);
    } else {
      allDrinks[i].randomPrice(6, 10);
    }
    allDrinks[i].render();
  }
}

renderAll();

btn.addEventListener("click", greeting);

function greeting() {
  alert("Welcome to ASAC Coffee House 💗");
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.ingredients.value);
  let name = event.target.drinkName.value;
  let ingredients = event.target.ingredients.value;
  let ingredientsArr = ingredients.split('/');
  let image = event.target.image.value; 
  let cold = event.target.cold.checked;
  let Hot = event.target.Hot.checked;
  console.log(name, ingredients, image, cold, Hot);
  console.log(ingredientsArr)



  let newDrink = new Drink(name, ingredientsArr, cold, Hot, image);
  
  console.log(allDrinks);
  newDrink.render();


}
