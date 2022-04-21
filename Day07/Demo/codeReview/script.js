


let questionOne = questions("do you like Js ?");
let questionTwo = questions("do you like coffee ?");
let questionThree = questions("do you like python ?");

let answers = [questionOne, questionTwo, questionThree];

// function addToArray(value) {
//     let answers = [];
//     answers.push(value);
//     return answers;
// }
// questionOne.addToArray();
// questionTwo.addToArray();
// questionThree.addToArray();


function questions(myQ) {
    let answer = prompt(myQ);
    let result = x * y;
    return result;
}



function addAnswers(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "" || arr[i] == null) {
           console.log("Invalid")
        }
        console.log(arr[i]);

    }
}
