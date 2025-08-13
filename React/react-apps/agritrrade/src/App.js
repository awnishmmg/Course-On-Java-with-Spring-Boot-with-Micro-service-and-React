import React from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

import { Routes, Route } from "react-router-dom";
import FarmerRegistration from "./components/pages/FarmerRegistration";
import MerchantRegistartion from "./components/pages/MerchantRegistration";
import Register from "./components/pages/Register";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmerreg" element={<FarmerRegistration />} />
        <Route path="/merchantreg" element={<MerchantRegistartion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
