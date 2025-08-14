import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState({});

  useEffect(function () {
    if (window.localStorage.getItem("session.data")) {
      const session_data = JSON.parse(
        window.localStorage.getItem("session.data")
      );
      setSessionData(session_data);
    }
  }, []);

  return (
    <div className="dashboard-sidebar">
      <h4 className="sidebar-title">Dashboard</h4>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/manage-products">Manage Products</Link>
        <Link to="/quotations">Quotations</Link>
        <Link to="/sampling-management">Sampling Management</Link>
        <Link to="/order-management">Order Management</Link>
        {sessionData ? sessionData.name : ""}
        <br />
        <b>{sessionData ? sessionData.email : ""}</b>
        <a
          href="#"
          onClick={() => {
            window.localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
