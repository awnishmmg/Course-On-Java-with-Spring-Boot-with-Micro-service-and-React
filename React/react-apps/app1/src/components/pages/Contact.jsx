import React, { useState } from "react";

function Contact() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(() => {
      if (count > 0) {
        return count - 1;
      }
      return 0;
    });
  };

  const handleIncrement = () => {
    setCount(() => {
      return count + 1;
    });
  };

  return (
    <React.Fragment>
      <center>
        <h1> Contact Us </h1>
        <p>This is Contact us Page</p>
        {/* Counter Program */}
        <button className="btn btn-primary" onClick={handleIncrement}>
          + Increment
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn btn-primary" onClick={handleDecrement}>
          - Decrement
        </button>
        <br />
        <br />
        <br />
        Counter = {count}
      </center>
    </React.Fragment>
  );
}

export default Contact;
