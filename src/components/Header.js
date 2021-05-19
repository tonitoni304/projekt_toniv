import React from "react";
import logo from "./logo.png";
import lokacija from "./lokacija.png";
import telefonsl from "./telefonsl.png";
import mailsl from "./mailcl.png";

function Header() {
  return (
    <div className="Header">
      <div class="row">
        <img src={logo} className="logo" />
        <img src={lokacija} className="lokacijasl" />
        <p class="adresa">  Put Meja 7 <br /> Meje, Split. </p>
        <img src={telefonsl} className="telefonsl" />
        <p class="broj"> +385 91 733 6647 </p>
        <img src={mailsl} className="mailsl" />
        <p class="mail"> Mail: info@projektsk.com </p>
      </div>
    </div>
  );
  }
export default Header;
