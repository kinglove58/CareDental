import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollUpward from "./components/ScrollUpward";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Saving from "./pages/Saving";
import Join from "./pages/Join";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy/Privacy";
import TermsConditions from "./pages/terms_condition/TermsCodition";
import AnnapolisDCSurvey from "./components/AnnapolisDCSurvey";
import ADCSurvey2 from "./components/ADCSurvey2";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <ScrollUpward />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<Privacy />} />
        <Route path="/terms_condition" element={<TermsConditions />} />
        <Route path="/customerfeedback" element={<AnnapolisDCSurvey />} />
        <Route path="/exitcustomer" element={<ADCSurvey2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
