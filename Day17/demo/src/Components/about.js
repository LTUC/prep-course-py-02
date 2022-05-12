import { Link } from "react-router-dom";


export default function About() {
  return(
    <>
      <h1>About page </h1>;
      <nav>
        <Link to="/">Home </Link>
          <Link to="/about">About us </Link>
          
          <Link to="/contact">contact us </Link>

      </nav>
    </>

  )
}
