
import { useState, useEffect } from "react";
import "./cards.css";
import {Card,Button } from "react-bootstrap";
export default function FavRecipe() {
    const [favRecipes, setRecipes]= useState()

   async function getFavRecipes() {
        let url = `${process.env.REACT_APP_SERVER}/favRecipes`;
       let response = await fetch(url, {
           method: "GET",
       });
       console.log("response=>",response)
       let favRecipes = await response.json();
       setRecipes(favRecipes);
       console.log("3,favRecipes=>",favRecipes)

       
    }



    async function handleDelete(id) {
    
        let url = `${process.env.REACT_APP_SERVER}/deleteFavRecipe/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
        });
        if(response.status==204){
            getFavRecipes();
           alert(" recipe deleted successfully")
        }
        
    }
    useEffect(() => {
        getFavRecipes();

  
    }, []);

    return (
      <>
        <h1>Favourite Recipes Page</h1>
            {favRecipes && favRecipes.map((recipe) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body className="cardBody">
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text className="scrollBar">
                        {recipe.summary}
                      </Card.Text>
                      <Card.Text >
                        {recipe.comment}
                      </Card.Text>
                      <Card.Text>{recipe.readyInMinutes} Minutes</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleDelete(recipe.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
            })
            }
    </>
    );
}

  