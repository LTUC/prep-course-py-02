'use strict';

let headerEl = document.getElementById("headerEl");
let mainEl = document.getElementById("headerMain");
// let body = document.getElementById("myBody");
let body = document.getElementsByTagName("body");
//create HTMLelemnt 
// 1. create element
let title = document.createElement('h1'); console.log(title);
// 2. add content 
title.textContent = "Welcome to ASAC coffee House 💙";
//3.  append the element where I want to add it 
headerEl.appendChild(title);

console.log(headerEl);
//4. adding style
title.style.color = "red";

body[0].style.backgroundColor = "gray";

//create h2 element 
let secHeader = document.createElement('h2');
secHeader.textContent = 'welcome Mohammad ';
mainEl.appendChild(secHeader);


// crrate Image element

//<img src="" alt="">
//1. create element 
let myImage = document.createElement('img');
//2. add attribute for img element 
myImage.setAttribute(
  "src",
  "https://tse2.mm.bing.net/th?id=OIP.2Oj59SUYRvCgSelv1-NwSQHaHa&pid=Api&P=0&w=161&h=161"
);
//3. append the element 
headerEl.appendChild(myImage);
//4. add style
myImage.style.width = "65px";

