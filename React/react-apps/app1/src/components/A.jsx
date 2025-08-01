import React from "react";

import "./css/a.css";

// Class Based component
class A extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="aheading1"> This is class base</h1>
        <p id="apara1"> This is first Paragraph </p>
        <p> This is second Paragraph</p>
        <p> This is third Paragraph </p>
      </React.Fragment>
    );
  }
}

export default A;
