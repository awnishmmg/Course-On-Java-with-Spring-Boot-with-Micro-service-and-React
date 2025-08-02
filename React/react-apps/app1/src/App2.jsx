import React from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

//This is a App component: functional component
function App2() {
  var name = "Awnish";
  var branch = "cse";
  var age = 15;

  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "red", color: "blue" }}>
        Welcome to React
      </h1>
      <A />
      <B />
      <C>
        <button>Click</button>
      </C>
      <p>
        The Username = <b>{name}</b> &nbsp; The Branch = <i>{branch}</i> &nbsp;
        The age = {age}
      </p>
    </React.Fragment>
  );
}

export default App2;
