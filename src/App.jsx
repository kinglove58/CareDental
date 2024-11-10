import React from "react";
import { Routes, Route } from "react-router-dom";
import NavItem from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingLabelInput from "./components/FloatingLabelInput";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import Join from "./pages/Join";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/privacy/Privacy";
import TermsConditions from "./pages/terms_condition/TermsCodition";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<Privacy />} />
        <Route path="/terms_condition" element={<TermsConditions />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
