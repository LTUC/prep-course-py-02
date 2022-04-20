// functions : block of code i use it to do some tasks for me 
// 1. declare function 2. invoke function (call it)  


// types of functions :
// Normal  function
function functionName(params) {
    // my code
}

function greeting() {
    console.log('Hello Class');
}
     
greeting();


function helloName(name) {
    console.log("Hello " + name);
}



let result = helloName("Yousef");
console.log("result", result);// undefined

function mystring(names,title) {
    return `Hello ${title} ${names}`;
   
}

let result2 = mystring("Yousef", "Mr.")
console.log(result2)


// anonymous function : function without name 
let product = function (x, y) {
    // let result = x * y;
    return  x * y;

    
}
console.log(product(3, 4));

//Arrow function //ES6
let arrowProduct = (x, y) => {
  let result = x * y;
  return result;
};

let newWay = (x, y) => x * y;
console.log(newWay(5,4))

///////// 


