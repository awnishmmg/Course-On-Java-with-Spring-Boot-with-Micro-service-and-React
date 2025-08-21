import React, { useEffect, useState } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

import { Routes, Route, Outlet } from "react-router-dom";
import FarmerRegistration from "./components/pages/FarmerRegistration";
import MerchantRegistartion from "./components/pages/MerchantRegistration";
import Register from "./components/pages/Register";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/modules/dashboard/farmer/Dashboard";
import ProtectedRoute from "./helpers/ProtectedRoutes";
import Profile from "./components/modules/dashboard/farmer/Profile";
import ProductAdd from "./components/modules/product/ProductAdd";
import ProductList from "./components/modules/product/ProductList";
import Toaster from "./components/alerts/Toaster";

function App() {
  return (
    <React.Fragment>
      <Toaster />
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
          path="/farmer"
          element={
            <ProtectedRoute endPoint={"/login"} message={"session-expired"} />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          {/* Products Route start */}
          <Route path="manage-products/list" element={<ProductList />} />
          <Route path="manage-products/add" element={<ProductAdd />} />
          {/* <Route path="manage-products/edit" element={<ProductAdd/>}/> */}
          {/* Product Route End */}
        </Route>

        {/* Modules Route End */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
