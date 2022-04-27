'use strict';
//1. require the package 
const express = require("express");

// 2. create express app

const app = express();

const port = 3000;
const recipeData = require("./data.json");
//  http://localhost:port/endPoint

//4. creating routes(endpoints)
//app.METHOD(PATH, HANDLER);
app.get("/firstRout", handleFirstRout);
app.get("/", homeHandler);
app.get("/recipes", recipesHandler);

//functions
function handleFirstRout(req, res) {
    res.send("Hello");

}

function homeHandler(req, res) {
    res.send("Hello its Home Page ");
}

function recipesHandler(req, res) {
    let result = [];
    // console.log(recipeData);
    recipeData.data.forEach(element => {

        let newRecipe = new Recipe(
          element.title,
          element.readyInMinutes,
            element.summary,
          element.image
        );
        result.push(newRecipe);
    })
    console.log("hiiiiiii", result)

    res.json(result);
    



}

//constructor
function Recipe(title, time, summary, image) {
    this.title = title;
    this.time = time;
    this.summary = summary;
    this.image= image
    
}








//3. the server is listening ton port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

