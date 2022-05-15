import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComp from "./Button";
import { Navbar, Container,Nav } from "react-bootstrap";
export default function NavbarComp() {
  const [msg, setMsg] = useState("Stranger");
  function handleWelcome(isLogIn) {
    console.log(isLogIn);
    !isLogIn ? setMsg("back") : setMsg("Stranger");
  }

  return (
    <>
      {/* <nav>
        <h1>Welcome {msg}</h1>

        <Link to="/">Home</Link>
        <ButtonComp handleWelcome={handleWelcome} />
      </nav> */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <h1>Welcome {msg}</h1>
            <Nav.Link href="/">Home</Nav.Link>
            <ButtonComp handleWelcome={handleWelcome} />
          </Nav>
        </Container>
      </Navbar>
      ;
    </>
  );
}


