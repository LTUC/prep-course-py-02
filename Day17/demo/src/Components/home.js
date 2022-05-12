import { Link } from "react-router-dom";
import Button from './button';

export default function Home() {
  function handleEvant() {
    alert('Welcome py02 !!')
    console.log('Hello')
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('Form is sunmitted');
    
  }
  function secEventHandler() {
    console.log('Hello Yousef');
  }
  
  
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About us </Link>

        <Link to="/contact">contact us </Link>
      </nav>

      <h1>Home page </h1>
      <button onClick={handleEvant}>click me !!</button>
    
      <form onSubmit={handleSubmit}>
        {/* <button type="submit">Submit</button> */}
      </form>
      {/* <button onClick={secEventHandler}>second click</button> */}
      <Button/>
    </>
    
  );
}
