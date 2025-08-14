import React, { useEffect, useState } from "react";
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
import Dashboard from "./components/modules/dashboard/farmer/Dashboard";
import ProtectedRoute from "./helpers/ProtectedRoutes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login message={""} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmerreg" element={<FarmerRegistration />} />
        <Route path="/merchantreg" element={<MerchantRegistartion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Modules Route start*/}
        <Route
          path="/farmer-dashboard"
          element={
            <ProtectedRoute endPoint={"/login"} message={"session-expired"}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Modules Route End */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
