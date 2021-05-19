import React from "react";
import team1 from "./team1.png";
import team2 from "./team2.png";
import drustveni from "./drustvene.png";



function Instructor() {
  return (
    <div className="Instructor">
      <div class="row16">
        <i> <p class="opis10"> Our Great Team </p> </i>
        <h3 class="inst"> Our Instructors</h3>
        <div class="hr25"> </div>
      </div>
      <div class="row17">
        <img src={team1} className="team1sl" />
        <h3 class="teamtx"> Toni Vidovic </h3>
        <p class="zanimanje"> Instructor </p>
        
        <p class="rijeci"> Morbi accumsan ipsum velit. Nam nec <br /> tellus a odio <br /> tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor <br /> eu in elit. </p>
        <img src={drustveni} className="drustvenisl" />
      </div>
      <div class="brr2"> </div>
      <div class="row30">
        <img src={team2} className="team2sl" />
        <h3 class="teamtx2"> Toni Vidovic </h3>
        <p class="zanimanje2"> Instructor </p>
        <div class="brr5"> </div>
        <p class="rijeci2"> Morbi accumsan ipsum velit. Nam nec <br /> tellus a odio <br /> tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor <br /> eu in elit. </p>
        <img src={drustveni} className="drustvenisl3" />

      </div>
    </div>
  );
  }
export default Instructor;
