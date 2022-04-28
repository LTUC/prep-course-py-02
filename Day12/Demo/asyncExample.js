'use strict';
// console.log("first");
// console.log("second");
// console.log("third");


console.log("first");
setTimeout(() => {
    console.log("second");
    // var x = 10;
    
}, 3000)//3 sec 
// console.log(x);

console.log("third");

function f1() {
  console.log("f1");
}

function f2() {
    f1();
   console.log("f2");
}

f2();