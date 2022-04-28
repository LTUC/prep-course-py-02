'use strict';
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
require("dotenv").config();
const PORT = 3000;
const app = express();
app.use(cors());
let apiKey =process.env.API_KEY ;
//routes 
app.get("/", handleHome);
app.get("/recipes", recipesHandler);
app.get("/searchRecipe", searchRecipeHandler);
//functions
function handleHome(req, res) {
    console.log(apiKey);
  res.send("Hello world from prep JS");
}

function recipesHandler(req, res) {
    // show me recipes 
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    //axios.get().then().catch()
    axios.get(url)
        .then(result => {
            // console.log(result.data.recipes);
            // res.send("API gave me the data");
            let recipes = result.data.recipes.map((recipe) => {
              return new Recipe(
                recipe.title,
                recipe.readyInMinutes,
                recipe.image,
                recipe.summary
              );
                
            });
            res.json(recipes);

            
        }
      )
        .catch((error => {
            console.log(error);
            res.send("error in getting data from API")
      }))

}


//http://localhost:3000/searchRecipe?name="Mansaf"
function searchRecipeHandler(req, res) {
    // search for one recipe
    //URL?name="Pizza"
    // console.log(req.query);
    // res.send("serach is done")
    let recipeName = req.query.name;
    // console.log(recipeName);
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}`;
    axios
      .get(url)
      .then((result) => {
          console.log(result.data.results);
          res.json(result.data.results);
      })
      .catch();

}


function Recipe(title, time, image, summary) {
  this.title = title;
  this.time = time;
  this.image = image;
  this.summary = summary;
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


// 1- query 
// 2/- params
// 3-request body