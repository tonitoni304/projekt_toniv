import React from "react";
import galerija from "./galerija.png";
import simboli from "./simboli.png";


function Footer() {
  return (
    <div className="Footer">
      <div class="row7"> 
        <div class="col1"> 
          <h3 class="our"> Our School Specialists! </h3>
          <p class="opiss"> Aorem ipsum dolor sit amet elit sed lum <br /> tempor incididunt ut labore el dolore alg minim <br /> veniam quis nostrud lorem psum dolor sit <br /> amet sed incididunt. </p>
          <i> <a href="#" class="aa"> <p class="more "> Read More... </p> </a> </i>
       </div>
       <div class="col2">
         <h3 class="our2">
           Our Galery
         </h3>
         <div class="hr5"> </div>
         <img src={galerija} className="galerijasl" />
       </div>
       <div class="col3">
         <h3 class="our3">
           Keep In Touch
         </h3>
         <div class="hr6"> </div>
         <img src={simboli} className="simbolisl" />
         <p class="sk1"> Put Meja 7 <br />
         Meje, Split
         </p>
         <p class="sk2"> +385 91 733 6647 </p>
         <p class="sk3"> info@projektsk.com </p>
       </div>
        <div class="col4">
          <h3 class="our4"> News Letter </h3>
          <div class="hr8"> </div>
          <form>
            <label>
              <input placeholder="   Name" type="text" name="ime" class="ime2" />
            </label> <br />
            <label>
              <input placeholder="   Email" type="text" name="email" class="email2" />
            </label>
            <button type="submit" value="submit" class="predaja2"> <b> Subcribe  </b> </button>
          </form>

        </div>
      </div>
    </div>
  );
  }
export default Footer;