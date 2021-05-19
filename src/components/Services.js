import React from "react";
import prva from "./prva.png";
import druga from "./druga.png";
import treca from "./treca.png";
import cet from "./cet.png";
import pet from "./pet.png";
import sesta from "./sesta.png";


function Services() {
  return (
    <div className="Services">
      <div class="row5">
       <div class="naslovna">
        <i> <p class="who2"> Main Services </p> </i>
        <h3 class="choose2"> Our Features </h3> 
        <div class="hr4"> </div>
        <p class="opis3"> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odioMorbi accumsan ipsum velit. Nam nec <br />  tellus a odio tincidunt auctor a ornare odio.. </p>
       </div>
       <div class="boxes">
         
        <div class="box1"> <p class="learn"> Learning Roads </p> 
        <div class="krug"> <img src={prva} class="slik" /> </div>
        <p class="dole1"> People who already have strong trust the <br />  relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        </div>
        
        <div class="box2">  
        <div class="krug"> <img src={druga} class="slik" /> </div>
        <p class="learn"> Learning Roads </p> 
        <p class="dole1"> People who already have strong trust the <br />relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        </div>
        <div class="box3"> 
        <div class="krug"> <img src={treca} class="slik" /> </div>
        <p class="learn"> Learning Roads </p> 
        <p class="dole1"> People who already have strong trust the <br />relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        </div>
        
        
       </div>
       <div class="boxes2">
        <div class="box4">
          <div class="krug"> <img src={cet} class="slik" /> </div>
           <p class="learn"> Learning Roads </p>  <p class="dole1"> People who already have strong trust the <br /> relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        
        </div>
        
        <div class="box5">
          <div class="krug"> <img src={pet} class="slik2" /> </div>
          <p class="learn"> Learning Roads </p> 
          <p class="dole1"> People who already have strong trust the<br /> relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        </div>
        <div class="box6"> 
          <div class="krug"> <img src={sesta} class="slik3" /> </div>
          <p class="learn"> Learning Roads </p> 
          <p class="dole1"> People who already have strong trust the <br />relships with you, who is know you're <br /> dediced, sma, a tea. </p>
        </div>
       </div>
      </div>
    </div>
  );
  }
export default Services;
