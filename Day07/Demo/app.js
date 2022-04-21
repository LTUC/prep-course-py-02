' use strict';
let allStudents = [];
////// constructor function /////
function Student(firstName,lastName,isProgrammer,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isProgrammer = isProgrammer;
    this.age = age

    // this.fullName = function () {
    //     console.log(this.firstName, this.lastName);
    //
    // }
    allStudents.push(this);
}


Student.prototype.fullName = function () {
    console.log(this.firstName, this.lastName);
}



let yousef = new Student("yousef", "alfarwan", true, 22);
console.log(yousef);
let shatha = new Student("shatha", "alrayhani", true, 27)
console.log(shatha);

let read = new Student("read", "okour", true, 27);

console.log(Student);

// let answer = prompt("how old are you ");
let lama = new Student("lama", "radwan", true, 25);
console.log(lama);


console.log(allStudents);
// allStudents.push(yousef);
// allStudents.push(lama);

// allStudents.push(shatha);
// allStudents.push(read);


function sayHello() {
    return "hello"
}

yousef.fullName();
read.fullName();

console.log(allStudents);


