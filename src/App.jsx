import React from "react";
import {Routes, Route} from "react-router-dom"
import NavItem from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingLabelInput from "./components/FloatingLabelInput";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
