'use strict';


function getData() {
    let retrievedData = localStorage.getItem("names");
    let originalArr = JSON.parse(retrievedData);
    return originalArr;
}

let arr = getData();
console.log(arr);

let container = document.getElementById("container");
let ol = document.createElement("ol");
container.appendChild(ol);

for (let i = 0; i < arr.length; i++){
    let liEl = document.createElement("li");
    ol.appendChild(liEl);
    liEl.textContent = arr[i];
}

///////
let globalArr = [];

function Assignment(name, firstQuestion, secondQuestion, thirdQuestion,grades) {
    this.name = name;
    this.firstQuestion = firstQuestion;
    this.secondQuestion = secondQuestion;
    this.thirdQuestion = thirdQuestion;
    this.grades = grades;
    this.sum = 0;
    globalArr.push(this);
}

Assignment.prototype.summation = function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    
    }
    this.sum = sum; 
    return this.sum;

}

let englishAss = new Assignment('english', "grammar", "reading", "writing" ,[10,20,30,40]);
let mathAss = new Assignment('math', "Math", "summation", "division",[10,20,30,40]);
let arrayAss =new Assignment("Arabic", "grammar", "reading", "writing",[10,20,30,40]);
// let frenchAss = new Assignment("french", "grammar", "reading", "writing");
// let spanishAss = new Assignment("spanish", "grammar", "reading", "writing");

englishAss.summation();
mathAss.summation();
arrayAss.summation();



// globalArr.push(englishAss);
// globalArr.push(mathAss);
// globalArr.push(arrayAss);
// globalArr.push(frenchAss);


console.log(globalArr);







