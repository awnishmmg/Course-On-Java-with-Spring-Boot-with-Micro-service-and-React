import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <center>
        <p>
          All Right Reserved to Softpro India.
          <br />
          &copy; Softpro India {new Date().getFullYear()}
        </p>
      </center>
    </React.Fragment>
  );
}

export default Footer;
