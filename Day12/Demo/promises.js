'use strict';


//1. create promise 
// call resolve when i got what was promised 
//call reject method when i didn't got what was promised 

//ex : records will uploaded in 30 min
//ex : fix your car after 2 hrs

let recordingStatus = false;

let records = new Promise((resolve, reject) => {
    if (recordingStatus == true) {
        
        resolve("Records were uploaded");
    } else {
        reject("Records were not uploaded");
    }


})

//2. Handle promise 

//promise.then().catch();

records
    .then((message) => {

        console.log(message);
    }
    )
    .catch((message) => {
        
        console.log(message);
        console.log("promise failed")
    }
    );

