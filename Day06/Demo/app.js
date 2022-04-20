// console.log("hello");

//Array 
let name1 = "Rania";
let name2 = "Karim";
let name3 = "Sara";
let name4 = "Ahmed";
let name5 = "Mohamed";


let  names = ["Rania", "Karim", "Sara", "Ahmed", "Mohamed", 1, 2, 4, true, false, [1, 2, 3, 4]];
names.push("test1")
console.log(names);
console.log(names[2]);
console.log(names.length);//5

// let myName = names[2];//sara
// console.log(myName);
console.log(names[11]);// undefined
names[10] = "yusra";
names[11] = "amer";
console.log(names)
names[1] = "Kareem";
// name[11] = null;
console.log("after update", names);

///// Arrays methods ////
// add to the end of an array push()
names.push("raed");
console.log('after pushing', names);
// add element for the beginning of an array unshift()
names.unshift("Hasan");
console.log("after unshift", names);
names[0] = "shatha";//  just updating 
console.log("after using index", names);

// delete element  from the end of an array pop()
let removedElement = names.pop();
console.log('after pop', names);
console.log(removedElement);//read

// delete element from the beginning of an array shift()
names.shift();
console.log("after shift" , names);






