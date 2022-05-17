import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function ModalRecipe(props) {

  let commentRef = useRef()
  function handleComment(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    console.log(userComment);
    // let newRecipe = { ...props.choosenCard, comment: userComment }
    let newRecipe = { ...props.choosenCard, userComment };
    

    props.updateRecipe(newRecipe, newRecipe.id);
    // console.log("result is ",props.choosenCard)

  }

  async function handleAddToFav(e, recipe) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/addFavRecipe`;
    let data = {
      title: recipe.title ,
      readyInMinutes:recipe.readyInMinutes ,
      summary: recipe.summary,
      image:recipe.image ,
      comment :  recipe.comment,
    };
    console.log("1,data", data);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    })

    let addedrecipe = await response.json();
    console.log("2,addedrecipe", addedrecipe);


 

  }



  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.choosenCard.image}
            alt="recipe"
            style={{ width: "100%" }}
          />
          <br />
          <p>
            {props.choosenCard.comment
              ? props.choosenCard.comment
              : "No comment added"}
          </p>
          <p>{props.choosenCard.summary.substring(0, 200)}</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Enter Comment"
              />
              <Form.Text className="text-muted">add your own comment</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)}
            >
              Submit comment
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleAddToFav(e, props.choosenCard)}
            >
              Add to favorite
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


