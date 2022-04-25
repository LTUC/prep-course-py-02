'use strict';

// console.log(localStorage);

//1. add item to LS


localStorage.setItem("0", "Rania");

localStorage.setItem("1", "Lama");

// clear everything from LS
localStorage.clear();


// get an item from LS
let name0 = localStorage.getItem("0");
let name1 = localStorage.getItem("100");//null

console.log(name0, name1);

document.write(name0, name1);

// remove specific item from localStorage
localStorage.removeItem("name1");



