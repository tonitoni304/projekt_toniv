import React from "react";
import zenskavozi from "./zenskavozi.jpg";
import semafor from "./semafor.png";


function Aside() {
  return (
    <div className="Aside">
      <div class="row50">
        <img src={zenskavozi} className="zenskavozi" />
      </div>
      <div class="row51">
        <img src={semafor} className="semafor" />
        <h3 class="price"> COURSE PRIZE : $200 </h3>
        <p class="tome"> You can choose your team on weekdays after work or on weekendswe take <br /> into account the age of individual momentsto everyone we have our own <br /> approach.practical training </p>
        <a href="#" class="aaa"> <div class="botun10"> <p class="now">  BOOK NOW  </p> </div> </a> 

      </div>
    </div>
  );
  }
export default Aside;
