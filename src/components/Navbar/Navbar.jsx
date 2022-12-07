import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// add links to redirect
const Navbar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbarbox">
      <nav>
        <ul className={`${menu ? "forceview" : ""}`}>
          <li className="nav-link">
            <NavLink to="/home" activeclassname={"active"}>
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/pricing" activeclassname={"active"}>
              Pricing
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" activeclassname={"active"}>
              About Us
            </NavLink>
          </li>

          {localStorage.getItem("token") &&
          localStorage.getItem("token").length > 0 ? (
            <>
              <li className="nav-link">
                <NavLink to="/tradeLogger" activeclassname={"active"}>
                  Trade Logger
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/users" activeclassname={"active"}>
                  Users
                </NavLink>
              </li>
              <li className="profile">
                <NavLink to="/profile" activeclassname={"active"}>
                  Profile
                </NavLink>
              </li>
              <li className="nav-link">
                <button onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  navigate("/login");
                }}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link">
                <NavLink to="/login" activeclassname={"active"}>
                  Login
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/register" activeclassname={"active"}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <button className="menu" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
    </div>
  );
};

export default Navbar; // add exports on all codes for Index Js
