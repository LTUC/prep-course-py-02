'use strict';


// object for student
let yousef = {
    firstName: "yousef",
    lastName: "Alfarwan",
    isProgrammer: true,
    age: 22,
    fullName: function () {
        console.log(this.firstName, this.lastName);
    }
    
}


let shatha = {
  firstName: "shatha",
  lastName: "alrayani",
  fullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

console.log(yousef);
console.log(yousef.age);//access am object prop using dot notation
yousef.fullName();
console.log(yousef['firstName']);//access am object prop using square notation

console.table(yousef);
shatha.fullName();

//add new property 
shatha.age = 27;
console.table(shatha);

// update property 
yousef.age = 30;
console.log(yousef);

// add method

shatha.likeCoffee = function () {
    console.log('yes i like coffee');
}
shatha.likeCoffee();

