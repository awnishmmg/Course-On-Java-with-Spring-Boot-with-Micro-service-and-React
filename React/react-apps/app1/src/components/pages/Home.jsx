import React, { useEffect, useState } from "react";
import jsonUserData from "../../data/user.json";
import "./css/home.css";

function Home() {
  const [userData, setUserData] = useState([]);

  function loadUserData() {
    setUserData(jsonUserData.users);
  }

  //whener you run event on page load, or page propertu
  //changes. : where the no onclick event,onchange event.
  // then use the hook : useEffect.

  useEffect(() => {
    loadUserData();
  }, []);

  console.log("state userdat", userData);

  return (
    <React.Fragment>
      <h1> Home Page </h1>
      <p>This is Home Page</p>
      <p>Users Data Display</p>
      <hr />
      <table className="home-table-userdata">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gf Name</th>
            <th>Account Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop start */}
          {userData.map((user, index) => {
            return (
              <React.Fragment>
                <tr key={index + 1}>
                  <td>{user?.id}</td>
                  <td>{user?.name}</td>
                  <td>{user?.gf_name}</td>
                  <td>{user?.account_balance}</td>
                </tr>
              </React.Fragment>
            );
          })}
          {/* Loop End */}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Home;
