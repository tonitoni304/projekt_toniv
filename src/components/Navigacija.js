import React from "react";
import covjeksl from "./covjekcl.jpg";
import { Link } from "react-router-dom";


function Navigacija() {
    return (
    <div className="Navigacija">
      <div class="topnav">  
        <div class="row2">
          <ul class="nav">
               <li class="pr1"> Home </li> 
              <Link to="/About" class="lnk"> <li class="pr"> About us </li> </Link>
              <Link to="/Contact"> <li class="pr"> Contact Us </li> </Link>
              <li class="pr"> Pricing </li>
          </ul>
        
        </div>
        <div class="opis"> 
        <img src={covjeksl} className="covjeksl" />
        <div class="tkst1"> 
          <h2 class="best"> BEST FOR YOU!</h2>
          <h1 class="make"> MAKE A SUCESSFUL DRIVE WITH US! </h1>
          <p class="bz1"> Jer mi smo najbolja autoskola u gradu Splitu! Lorem lorem lorem <br /> Dodite i uvjerite se u nasu kvalitetu! Lorem lorem lorem</p>
          <button type="button" class="botun1"> READ MORE </button>
          <button type="button" class="botun2"> SEE PRICING </button> </div>
        </div>
      
      </div>
    </div>
    )
  }

export default Navigacija;