import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <p>
        All Right Reserved to Softpro India.
        <br />
        &copy; Softpro India {new Date().getFullYear()}
      </p>
    </React.Fragment>
  );
}

export default Footer;
