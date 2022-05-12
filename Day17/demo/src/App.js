
import Home from './Components/home';
import Contact from './Components/contact';
import About from './Components/about';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
    <>
     
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path = '/contact' element={<Contact/>}/>
      </Routes>

    </>  
    
    
    );
  }
  
  export default App;
  
