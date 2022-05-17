import CardRecipe from './Card';
import "./cards.css";
import {Container } from "react-bootstrap";
export default  function Cards(props) {
    return (
        <>
            {
            props.recipes.map((recipe)=>{
                return (
                  <Container fluid className="main-container">
                    <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
                      {props.recipes.map((recipe) => {
                        return (
                          <CardRecipe
                            key={recipe.id}
                            recipe={recipe}
                            updateRecipe={props.updateRecipe}
                          />
                        );
                      })}
                    </div>
                  </Container>
                );
            })
            }
        </>
        
    )
}