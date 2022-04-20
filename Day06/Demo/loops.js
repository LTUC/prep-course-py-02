////// loops //////
// for :
/*
for(start point, end point, inc or dec){
    //some codes 
}
 */

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0) {
        
//         console.log(i);
//     }
// }

// for (let i = 0; i < 5; i = i + 2) {

//     console.log(i);
   
// }

let names = ["Rania", "Karim", "Sara", "Ahmed"];
 
// for (let i = 0; i  <  names.length; i++) {
//     console.log(`index number ${i} : ${names[i]}`);

    

// }
// // string methods //
// // normal string 
// let sentance = "good evening its 12 pm ";
// // interpolation or concatenation 
// let time = '12:09 pm';
// mySentance = `good evening its ${time}`;
// console.log(mySentance);
// mySentance1 = "good evening its " + time;
// console.log(mySentance1);


// reverse array names
// for (let i = names.length - 1; i >= 0; i--){
//     console.log(names[i]);
// }

// reverse Array using push 
let revesedArra = [];
// for (let i = names.length - 1; i >= 0; i--) {
//     r
//   revesedArra.push(names[i]);
// }

for (let i = 0; i <names.length ; i++){
    
    revesedArra.unshift(names[i])
    
}
console.log(revesedArra);

// while // 

// let input = "";

// while (input != "Male" && input != "Female") {
//     input = prompt("choose either Male of Female please !!")
// }


// do while//

// do {
//     // code 

// } while (condition)
    
do {
  input = prompt("welcome to our resturent this is the menu : \n  spanish latte \n mocha \n espresso \n enter 0 to quit"
  );
} while (input != 0);










