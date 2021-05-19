import React, { Component } from "react";
import slikica1 from "./slikica1.png";
import slikica2 from "./slikica2.png";
import slikica3 from "./slikica3.png";

export class Article4 extends Component {
  state= {
    ime: "",
    Mail: "",
    Naslov: "",
    Poruka: "",
  }

onsubmit= e => {e.preventDefault(); alert("Uspjesno ste poslali mail! Odgovorit cemo u najbrzem mogucem roku!" );}
render()
 { 
  return (
    <div className="Article4">
      <div class="row200">
        <div class="forma99">
          <h2 class="intch">
            GET IN TOUCH
          </h2>
          <div class="hr200">

          </div>
          <i> <p class="mali"> The mate was a mighty sailing man the Skipper brave and sure the lady met this fellow </p> </i>
          <form class="forma5">
            <label>
              <input type="text" placeholder="    Ime" class="fime" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})} />  
            </label> <br />
            <label>
              <input type="text" placeholder="    Mail" class="fmail" value={this.state.Mail} onChange={e=>this.setState({Mail: e.target.value})} />  
            </label> <br />
            <label>
              <input type="text" placeholder="    Naslov" class="fnaslov" value={this.state.Naslov} onChange={e=>this.setState({Naslov: e.target.value})} />  
            </label>
            <label> <br />
              <input type="text" placeholder="    Poruka" class="fporuka" value={this.state.Poruka} onChange={e=>this.setState({Poruka: e.target.value})} />  
            </label> <br />
            <button type="submit" value="submit" class="predaja5" onClick={e=>this.onsubmit(e)}> <b> Pošalji  </b> </button>
          </form>
        </div>
        <div class="desni5">
          <div class="red1">
            <div class="kruzic10"> <img src={slikica1} class="slikica1sl" /> </div>
            <h3 class="visit"> VISIT US </h3>
            <p class="addy"> Put Meja 7,  Los Downtown St <br /> Split, Croatia</p>
          </div>
        

        
          <div class="red2">
            <div class="kruzic11"> <img src={slikica2} class="slikica1sl" /> </div>
            <h3 class="callu"> CALL US </h3>
            <p class="brojy"> +385 91 723 6647 <br /> +385 99 382 6621 </p>
          </div>
        

        
          <div class="red3">
            <div class="kruzic12"> <img src={slikica3} class="slikica2sl" /> </div>
            <h3 class="mailu"> MAIL US </h3>
            <p class="maily"> tonividovicsk@gmail.com <br /> toni.vidovic8@skole.hr </p>
          </div>
        </div>   
         
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11572.724665240261!2d16.460493!3d43.5194147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99f8b430e72cf83f!2zQXV0byDFoWtvbGEgTUFSVcWgScSG!5e0!3m2!1sen!2shr!4v1621346663197!5m2!1sen!2shr" class="mapa" ></iframe>   
    </div>
  );
  }
}
export default Article4;
