import { useState,useEffect} from "react";
import Cards from "./Cards"
export default function Home() {
  const [recipes, setRecipes] = useState([]);

  async function getRecipes() {
    let url = process.env.REACT_APP_SERVER;
  //  let url = "https://recipes-py02.herokuapp.com";
    console.log("1,url", url);
    let response = await fetch(`${url}/recipes`);
    // console.log("2,response", response);

    let recipesData = await response.json();
     console.log("3,recipesData", recipesData);
    setRecipes(recipesData);
    // console.log("states",recipes);
  }

  useEffect(() => {
    getRecipes();
  }, []);


  return (
    <>
      <h1>Home Page</h1>
      {
        (recipes.length>0)&&<Cards recipes={recipes} />
      }
    </>
  );
}
