import React from "react";
import fb from "./fb.png";
import twt from "./twt.png";
import int from "./in.png";
import gg from "./gg.png";


function Footerr() {
  return (
    <div className="Footerr">
      <div class="row8">
       <h5 class="copp"> © Copyright 2021 Toni Vidovic | Sva Prava Pridrzava </h5>
       <div class="media">
        <img src={fb} class="med1" /> 
         <img src={twt} class="med2" />
         <img src={int} class="med3" />
         <img src={gg} class="med4" />
       </div>
      </div>
    </div>
  );
  }
export default Footerr;