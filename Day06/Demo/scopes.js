//scopes  // ES6 let const 

// global scopes 
// local scopes (function scopes )
// block scopes  {}


if (3 > 2) {
    let  i = 0;
}
// console.log(i);
 // local scopes (function )
 function localScope() {
    let x = 3;
 
  console.log("inside a function", x);
}
localScope()

console.log("outside a function", x);