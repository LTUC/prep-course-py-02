"use strict";
let sectionEl = document.getElementById("cardSection");
let formEl = document.getElementById("formID");
let tableEl = document.getElementById("tableID");
console.log(sectionEl);
let allDrinks = [];

function Drink(name, ingredients, image, isCold, isHot, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.image = image;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = price;

  allDrinks.push(this);
}
Drink.prototype.render = function () {
  // createing h3 for the name of the drink
  let name = document.createElement("h3"); // <h3> </h3>
  name.textContent = this.name; // <h3> the name of the drink </h3>
  sectionEl.appendChild(name); // I can see the name inside the section

  // create the images :
  let imageEl = document.createElement("img");
  imageEl.src = this.image;
  sectionEl.appendChild(imageEl);

  // price:
  let price = document.createElement("p");
  price.textContent = `${this.price} JD`;
  sectionEl.appendChild(price);

  // Ingredients: // array as list
  let orderListEl = document.createElement("ol");
  sectionEl.appendChild(orderListEl);

  for (let i = 0; i < this.ingredients.length; i++) {
    let list = document.createElement("li");
    list.textContent = this.ingredients[i];
    orderListEl.appendChild(list);
  }
};

let latte = new Drink(
  "Latte",
  ["milk", "ice", "sugar"],
  "./assets/latte.png",
  true,
  true,
  1
);
let mocha = new Drink(
  "mocha",
  ["milk", "coffee", "ice", "sugar"],
  "./assets/mocha.png",
  true,
  false,
  2
);
let hotChocalte = new Drink(
  "hot chocalte",
  ["milk", "coffee", "ice", "sugar"],
  "./assets/mocha.png",
  true,
  false,
  2
);

Drink.prototype.renderTable = function () {
  let trEl = document.createElement("tr");
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement("td");
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.name;

  let tdEl2 = document.createElement("td");
  trEl.appendChild(tdEl2);
  tdEl2.textContent = this.price;
};

function renderAll() {
  for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].render();
    allDrinks[i].renderTable();
  }
}

renderAll();

// console.log(allDrinks);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // the default behaviour of submitting the form is to refresh the page
  event.preventDefault();

  console.log("Form event", event);
  // for text input
  let drinkName = event.target.drinkName.value;
  let ingredients = event.target.ingredients.value;
  let image = event.target.image.value;
  let price = event.target.price.value;
  // for checkbox input
  let cold = event.target.cold.checked; // true or false
  let hot = event.target.hot.checked;
  // split will conver the string to an array
  //string: "tea , water"
  // after split: ["tea", "water"]

  let ingredientsArr = ingredients.split(",");
  console.log(ingredientsArr);

  // create a new drink

  let newDrink = new Drink(drinkName, ingredientsArr, image, cold, hot, price);
  console.log(allDrinks);

  newDrink.render();
  newDrink.renderTable();
  saveData(allDrinks);
  // console.log(newDrink);
}

// save to local storage

function saveData(data) {
  let stringObj = JSON.stringify(data);
  localStorage.setItem("drinks", stringObj);
}

//get data from local storage

function getData() {
  let retrievedData = localStorage.getItem("drinks");
  console.log(retrievedData);
  //    console.log(typeof(retrievedData));

  let arrayData = JSON.parse(retrievedData);
  console.log(arrayData);

  if (arrayData != null) {
    arrayData.shift();
    arrayData.shift();
    arrayData.shift();
    for (let i = 0; i < arrayData.length; i++) {
      var element = new Drink(
        arrayData[i].name,
        arrayData[i].ingredients,
        arrayData[i].image,
        arrayData[i].isCold,
        arrayData[i].isHot,
        arrayData[i].price
      );

      element.render();
    }
  }
}

getData();

// let newArr = localStorage.getItem('drinks');
// console.log('global array',newArr);

// console.log('global scope',this);

//function Array obj
//window
