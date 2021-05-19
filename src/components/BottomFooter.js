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
       <a href="https://www.facebook.com/autoskolamarusic/">  <img src={fb} class="med1" /> </a>
       <a href="https://www.youtube.com/watch?v=3G26u14TnsM">  <img src={twt} class="med2" /> </a>
       <a href="https://www.facebook.com/autoskolamarusic/">  <img src={int} class="med3" /> </a>
       <a href="https://www.facebook.com/autoskolamarusic/">  <img src={gg} class="med4" /> </a>
       </div>
      </div>
    </div>
  );
  }
export default Footerr;