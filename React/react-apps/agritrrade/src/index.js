// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const ROOT = document.getElementById("root");
const VROOT = ReactDOM.createRoot(ROOT);

VROOT.render(
   <BrowserRouter>
        <App />
   </BrowserRouter>
);