// ************ Recursion ********************
// let num2 = 4;

// let feb2 = 4*3*2*1;

// function factorial(num){

//   // return is telling you when to stop
//    if(num == 1) return 1;
//    if(num == 0) return 1;

//       return   num * factorial(num-1) ;

// }

// console.log(factorial(5));

// ************ Regex ************************

// What is REGEX ?
// Regular Expression

// Why do we use it ?
// 1- Validate strings against certain rules
// 2- Find substring within a string
// 3- Replace part of the string

// typically speaking, we use REGEX to match patterns with strings

// let str = 'The rain in Spain falls Mainly 11 in the plain';

// VALIDATE : test() -> return boolean
// Find S letter in a string

// let regex1 = /s/gi;

// let regex1 = /[0-9]/g;
// let regex1 = /\d/g;

// let regex2 = /[A-Z]/g;
// let regex2 = /\w/g;

// let res1 = regex2.test(str);
// console.log(res1);

// FIND : match() -> return array
// let regex2 = /in/g;
// console.log(str.match(regex2));
// console.log(str.match(regex2).length);

// find how many words end with 'in'
// let regex2 = /(in)\b/gi;
// console.log(str.match(regex2));
// console.log(str.match(regex2).length);

// let str = 'The rAin in SPain falls Mainly in the plain';

// to retrieve the ends of the words
// let wordEnding = /\W/g;
// console.log(str.match(wordEnding));

//Replace : replace() -> return string
// let newStr = str.replace(wordEnding, '-');
// console.log(newStr)
// console.log(str);

// we want to match all the words that begin with capital letter
// let reg = /\b[A-Z]/g;
// let reg = /\b[A-Z](\w)/g;
// let reg = /\b[A-Z](\w)*/g;
// let reg = /[A-Z](\w)*/g;
// console.log(str.match(reg));

let names = ["Ahmad Othman", "Omar Ahmad", "Esraa Othman", "Besan Khaled"];
// return a new array contains any name starts with letter (A-C) from names array
// output:['Ahmad Othman','Besan Khaled']

// let newArr=[];
// let reg = /^[A-C]/gi;

// for(let i=0; i<names.length;i++ ){
//   let str = names[i];

//   // let str = names[i][0];
//   // 'Ahmad Othman'  A
//   let tt = reg.test(str);
//   console.log(tt);
//   if(tt){
//     newArr.push(names[i]);
//   }
// }

// console.log(newArr);

// choose the strings that ends with Othman word
// output:['Ahmad Othman','Esraa Othman']

let newArr = [];
let reg = /(othman)$/gi;

for (let i = 0; i < names.length; i++) {
  if (reg.test(names[i])) {
    newArr.push(names[i]);
  }
}
console.log(newArr);
