import React,{useEffect,useState} from"react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css"

function Header(){
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
        <React.Fragment>
        <div className="dashboard-sidebar">
        <h4 className="sidebar-title">Dashboard</h4>
        <nav>
            <Link to="/farmer/dashboard">Dashboard</Link>
            <Link to="/farmer/profile">Profile</Link>
            <Link to="/farmer/manage-products/list">Manage Products</Link>
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
        </React.Fragment>
    )
}

export default Header;