import { useState } from 'react';
import Button from "react-bootstrap/Button";
export default function ButtonComp(props) {

    const [isLogin, setIsLogin] = useState(false);
    function handleLogIn() {
        console.log(isLogin);
        setIsLogin(!isLogin);
        props.handleWelcome(isLogin);
    }


    return (
      <>
        {/* {isLogin && <button onClick={handleLogIn}>Log out</button>}
        {!isLogin && <button onClick={handleLogIn}>Log in</button>} */}
        <button onClick={handleLogIn}>
          {isLogin ? "Log out" : "Log in "}{" "}
        </button>
        <Button variant="success">click me </Button>;
      </>
    );
        
}

