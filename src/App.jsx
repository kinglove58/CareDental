import React from "react";
import {Routes, Route} from "react-router-dom"
import NavItem from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingLabelInput from "./components/FloatingLabelInput";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import Join from "./pages/Join";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
