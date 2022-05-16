
import './App.css';
import Home from './Components/Home';
import NavbarComp from "./Components/NavbarComp";
import PetDetails from "./Components/PetDetails";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
    </>
  );
}

export default App;
