import { useState } from "react";

function Button() {
    const [isLogged, setIsLogged] = useState(false);
    const [mode, setMode] = useState('green');

    function clickHandler() {
        setIsLogged(true);
        console.log('before change' ,isLogged);//true
       

    }
    function handleMood() {
        if(mode=='green'){

            setMode('red')
        } else {
           setMode("green");
        }
        setIsLogged(!isLogged);
        console.log(isLogged)
        
    }

    return (
      <>
        <button style={{ backgroundColor: mode }} onClick={clickHandler}>
          Log in
        </button>
        <button onClick={handleMood}>change mood</button>
      </>
    );
}
export default Button;
