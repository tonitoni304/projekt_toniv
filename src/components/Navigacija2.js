import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";


function Navigacija2() {
  return (
    <div className="Navigacija2">
      <div class="row9">
        <img src={logo} className="logo" />
          <ul class="nav2">
              <Link to="/"> <li class="kr1"> Home </li> </Link>
              <Link to="/About"> <li class="kr"> About us </li> </Link>
              <Link to="/Contact"> <li class="kr"> Contact Us </li> </Link>
              <li class="kr"> Pricing </li>
          </ul>
        </div>
    </div>
    
  );
  }
export default Navigacija2;
