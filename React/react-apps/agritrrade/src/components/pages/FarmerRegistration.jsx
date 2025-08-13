import React, { useState, useRef, useEffect } from "react"; // , useRef
import { NavLink } from "react-router-dom";
import { userApiService } from "../../api/userApi";
const FarmerRegistration = () => {
  const inputFirstNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputMobileRef = useRef(null);
  const checkBoxTermsRef = useRef(null);
  const btnSubmitRef = useRef(null);

  //Error
  const errorFnameRef = useRef(null);
  const errorlnameRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorMobileRef = useRef(null);
  const errorPasswordRef = useRef(null);

  const [isError, setError] = useState({
    firstName: true,
    lastName: true,
    email: true,
    mobile: true,
    password: true,
  });

  //constructor : by default
  useEffect(() => {
    checkBoxTermsRef.current.checked = false;
    btnSubmitRef.current.disabled = false;
  }, []);

  console.log("isError", isError);

  function handleSubmit(e) {
    e.preventDefault();

    //firstname
    if (inputFirstNameRef.current.value.trim() == "") {
      errorFnameRef.current.textContent = "First Name is Required";
      errorFnameRef.current.style.color = "red";
      inputFirstNameRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, firstName: true };
      });
    } else {
      errorFnameRef.current.textContent = "";
      errorFnameRef.current.style.color = "";
      inputFirstNameRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, firstName: false };
      });
    }
    //lastname
    if (inputLastNameRef.current.value.trim() == "") {
      errorlnameRef.current.textContent = "Last Name is Required";
      errorlnameRef.current.style.color = "red";
      inputLastNameRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, lastName: true };
      });
    } else {
      errorlnameRef.current.textContent = "";
      errorlnameRef.current.style.color = "";
      inputLastNameRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, lastName: false };
      });
    }
    //Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputEmailRef.current.value.trim() == "") {
      errorEmailRef.current.textContent = "Email is Required";
      errorEmailRef.current.style.color = "red";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    } else if (!emailRegex.test(inputEmailRef.current.value.trim())) {
      errorEmailRef.current.textContent = "Enter the Valid Email";
      errorEmailRef.current.style.color = "red";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    } else {
      errorEmailRef.current.textContent = "";
      errorEmailRef.current.style.color = "";
      inputEmailRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, email: false };
      });
    }

    //mobile
    const MobileRegex = /^[6-9]{1}[0-9]{9}$/;
    if (inputMobileRef.current.value.trim() == "") {
      errorMobileRef.current.textContent = "Mobile is Required";
      errorMobileRef.current.style.color = "red";
      inputMobileRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, mobile: true };
      });
    } else if (!MobileRegex.test(inputMobileRef.current.value.trim())) {
      errorMobileRef.current.textContent = "Invalid Mobile No";
      errorMobileRef.current.style.color = "red";
      inputMobileRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, mobile: true };
      });
    } else {
      errorMobileRef.current.textContent = "";
      errorMobileRef.current.style.color = "";
      inputMobileRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, mobile: false };
      });
    }

    //Password Validation
    if (inputPasswordRef.current.value.trim() == "") {
      errorPasswordRef.current.textContent = "Password is Required";
      errorPasswordRef.current.style.color = "red";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, password: true };
      });
    } else {
      errorPasswordRef.current.textContent = "";
      errorPasswordRef.current.style.color = "";
      inputPasswordRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, password: false };
      });
    }

    if (checkBoxTermsRef.current.checked == false) {
      window.alert("Please Accept the Terms and conditions");
      return;
    }

    const farmerRegisterData = {
      name:
        inputFirstNameRef.current.value.trim() +
        " " +
        inputLastNameRef.current.value.trim(),
      email: inputEmailRef.current.value.trim(),
      mobile: inputMobileRef.current.value.trim(),
      password: inputPasswordRef.current.value.trim(),
      role: "farmer",
    };

    if (
      !isError.firstName &&
      !isError.lastName &&
      !isError.mobile &&
      !isError.email &&
      !isError.password
    ) {
      userApiService.RegisterFarmer(farmerRegisterData);
    }
  }

  return (
    <React.Fragment>
      <h1> Farmer Registration</h1>
      <form action="#" onSubmit={handleSubmit}>
        First Name :{" "}
        <input
          type="text"
          id="first_name"
          name="first_name"
          ref={inputFirstNameRef}
        />
        <span ref={errorFnameRef}></span>
        <br />
        Last Name :
        <input
          type="text"
          id="last_name"
          name="last_name"
          ref={inputLastNameRef}
        />{" "}
        <span ref={errorlnameRef}></span>
        <br />
        Email :{" "}
        <input type="email" id="email" name="email" ref={inputEmailRef} />
        <span ref={errorEmailRef}></span>
        <br />
        Mobile No :{" "}
        <input
          type="text"
          id="mobile"
          name="mobile"
          ref={inputMobileRef}
        />{" "}
        <span ref={errorMobileRef}></span>
        <br />
        Password :{" "}
        <input
          type="password"
          id="password"
          name="password"
          ref={inputPasswordRef}
        />{" "}
        <span ref={errorPasswordRef}></span>
        <br />
        <input
          type="checkbox"
          name="is_checked"
          id="is_checked"
          ref={checkBoxTermsRef}
        />
        I Accept the Terms and Policies
        <NavLink to="/terms-conditions">,Terms and conditions</NavLink>
        <br />
        <button type="submit" ref={btnSubmitRef}>
          Register
        </button>
      </form>
    </React.Fragment>
  );
};

export default FarmerRegistration;
