import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function Toaster() {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={3000} />
    </React.Fragment>
  );
}

export default Toaster;
