import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import  { NavLink} from "react-router-dom";



// add links to redirect 
const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }


  return (
    
    <header className="navbarbox">
      <nav>
        <ul>
      <li className ="nav-link">
        <NavLink to="/home" activeclassname={"active"}>
          Home
        </NavLink>
      </li>
      <li className ="nav-link">
        <NavLink to="/tradeLogger" activeclassname={"active"}>
          Trade Logger
        </NavLink>
      </li>
      <li className ="nav-link">
        <NavLink to="/pricing" activeclassname={"active"}>
          Pricing
        </NavLink>
      </li>
      <li className ="nav-link">
        <NavLink to="/about" activeclassname={"active"}>
          About Us
        </NavLink>
      </li>
      <li className ="nav-link">
        <NavLink to="/contactUs" activeclassname={"active"}>
          Contact Us
        </NavLink>
      </li>
      <li className ="login">
        <NavLink to="/login" activeclassname={"active"}>
          Login
        </NavLink>
      </li>
      <li className ="profile">
        <NavLink to="/profile" activeclassname={"active"}>
          Profile
        </NavLink>
      </li>
      </ul>
        </nav>
    </header>
)};


export default Navbar; // add exports on all codes for Index Js