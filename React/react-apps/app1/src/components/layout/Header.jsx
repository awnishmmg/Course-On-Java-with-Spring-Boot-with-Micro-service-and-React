import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link> |<Link to="/gallery">Gallery</Link> |
        <Link to="/about">About</Link> |<Link to="/login">Login</Link> |
        <Link to="/contact">Contact</Link> |<Link to="/services">Services</Link>{" "}
      </nav>
    </React.Fragment>
  );
}

export default Header;
