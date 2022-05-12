import { Link } from "react-router-dom";


export default function About() {
  return(
    <>
      <nav>
        <Link to="/">Home </Link>
          <Link to="/about">About us </Link>
          
          <Link to="/contact">contact us </Link>

      </nav>
      <h1>About page </h1>;
    </>

  )
}
