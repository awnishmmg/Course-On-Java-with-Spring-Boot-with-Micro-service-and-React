import React, { useState, useRef } from "react";
import agritradeLogo from "../../assets/images/AgriTradeLogo.png";
import { useNavigate } from "react-router-dom";

import { userApiService } from "../../api/userApi";
const Login = () => {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const errorEmail = useRef(null);
  const errorPassword = useRef(null);

  const [isError, setError] = useState({
    email: true,
    password: true,
  });

  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();

    //Email Validation
    if (inputEmailRef.current.value.trim() == "") {
      errorEmail.current.textContent = "Email is Required";
      errorEmail.current.style.color = "red";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    } else {
      errorEmail.current.textContent = "";
      errorEmail.current.style.color = "";
      inputEmailRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, email: false };
      });
    }

    //Password Validation
    if (inputPasswordRef.current.value.trim() == "") {
      errorPassword.current.textContent = "Password is Required";
      errorPassword.current.style.color = "red";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, password: true };
      });
    } else {
      errorPassword.current.textContent = "";
      errorPassword.current.style.color = "";
      inputPasswordRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, password: false };
      });
    }
    //conditions
    if (isError.email === false && isError.password === false) {
      const crendentials = {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
      };
      userApiService.loginFarmer(crendentials, function (data) {
        console.log("After Login =>", data);
        navigate("/farmer-dashboard");
      });
    }
  }
  return (
    <React.Fragment>
      <h1>Login Here</h1>
      <form action="#" onSubmit={handleLoginSubmit}>
        <p>
          Enter Email
          <input type="email" id="email" name="email" ref={inputEmailRef} />
          <span ref={errorEmail}></span>
        </p>
        <p>
          Enter Password
          <input
            type="password"
            id="password"
            name="password"
            ref={inputPasswordRef}
          />
          <span ref={errorPassword}></span>
        </p>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
