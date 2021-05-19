import React from "react";
import why from "./why.png";
import list from "./lista.png";
import practice from "./practice.png";
import trening from "./trening.png";
import vozila from "./vozila.png";
import flex from "./flex.png";


function Article() {
  return (
    <div className="Article">
      <div class="row3">
      <i> <p class="who"> Who We Are </p> </i>
         <h3 class="choose"> Why Choose Us </h3> 
        <div class="hr1"> </div>
        <img src={why} class="whysl" />
        <p class="opis2"> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed <br /> non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora <br /> torquent per idunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu <br /> in elit.</p>
        <img src={list} class="listsl"></img>
        <div class="blokovi">
          <div class="bl1"> <img src={vozila} class="blsl1" /> </div>
          <div class="bl2"> <img src={trening} class="blsl2" /></div>
          <div class="bl3"> <img src={practice} class="blsl3" /></div>
          <div class="bl4"> <img src={flex} class="blsl4" /> </div>
        </div>
        

      </div>
    </div>
  );
  }
export default Article;
