import React, { useState, } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import logo from "../../../src/assets/images/AgriTradeLogo.png";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light shadow-sm " height="250px" id="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="/" className="navbar-brand fw-bold" id="logo-box">
            <img id="logo" src={logo} className="w-auto" alt="" />
          </NavLink>

          <button
            className="btn d-lg-none"
            onClick={() => setIsOpen(true)}
            id="bars-btn"
          >
            <FaBars />
          </button>

          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav d-flex flex-row gap-5" id="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
             <NavLink className="btn btn-primary ms-3" id="btn" to="/login">Login / Register</NavLink>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <div
        className={`mobile-sidebar ${isOpen ? "open" : ""}`}
        id="mobile-sidebar"
      >
        <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
          <h5 className="mb-0">Menu</h5>
          <button
            className="btn"
            onClick={() => setIsOpen(false)}
            id="bars-btn"
          >
            <MdCancel />
          </button>
        </div>
        <ul className="list-unstyled p-3">
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className="mt-3">
          <NavLink className="btn btn-primary ms-3" id="btn" to="/login">login/ Register</NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
