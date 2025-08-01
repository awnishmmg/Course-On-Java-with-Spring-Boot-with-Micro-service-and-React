import React from "react";

//function based component
function C(props) {
  return (
    <React.Fragment>
      <h1> This is C Component</h1>
      {props.children}
    </React.Fragment>
  );
}

export default C;
