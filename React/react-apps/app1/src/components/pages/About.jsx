import React from "react";
import { is_valid, getUserData } from "../../helpers/user_helper";

function About(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1> About Us </h1>
      <p>This is About us Page</p>
      <p> Pathname : {props.location.pathname}</p>
      <p> URL : {props.match.url}</p>
      <p> path : {props.match.path}</p>
      <p> Action : {props.history.action}</p>
      <p> User Id : {props.match.params.id}</p>
      <hr />
      {/* Conditional Rendering */}
      {is_valid(props.match.params.id) ? (
        <User data={getUserData(props.match.params.id)} />
      ) : (
        <p>No Result</p>
      )}
    </React.Fragment>
  );
}

function User(props) {
  // console.log(props.data);
  return (
    <React.Fragment>
      <p>
        <b>user id</b> : {props?.data?.id}
        <br />
        <b>user Name</b> : {props?.data?.name} <br />
        <b>user Gf Name</b> : {props?.data?.gf_name}
        <br />
        <b>user Account Balance</b> : {props?.data?.account_balance}
        <br />
      </p>
    </React.Fragment>
  );
}

export default About;
