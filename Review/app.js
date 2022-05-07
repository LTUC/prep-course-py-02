'use strict';

let Names = ['Rania', 'Omar', 'Ahmad', 'Mohammad', 'Amer'];
let genders = ["female", "Male", "Male", "Male", "Male"];

function saveNames(data) {
    let strData = JSON.stringify(data);
    localStorage.setItem('names', strData)
}

let button = document.getElementById("button");
button.addEventListener('click', clickHandler);

function clickHandler() {
    saveNames(Names);
    button.style.color = "red";
}


//to add new element in html 
//1.create element 
//2. append element to its parent 
//3. add content / attribute

let tableDiv = document.getElementById("tableDiv");
let table = document.createElement("table");
tableDiv.appendChild(table);
////----////////////////////////////////

let trEl = document.createElement("tr");
table.appendChild(trEl);

let th1 = document.createElement("th");
trEl.appendChild(th1);
th1.textContent = "Name";

let th2 = document.createElement("th");
trEl.appendChild(th2);
th2.textContent = "Gender";

for (let i = 0; i <Names.length; i++) {
    let trEl = document.createElement("tr");
    table.appendChild(trEl);

    let td1 = document.createElement("td");
    trEl.appendChild(td1);
    td1.textContent = Names[i];
    
      let td2 = document.createElement("td");
      trEl.appendChild(td2);
      td2.textContent = genders[i];
}




