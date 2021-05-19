import { logRoles } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React, { Component } from "react";
import ljudi from "./ljudi.jpg";
import tri from "./tri.png";

export class Article2 extends Component {
  state= {
    ime: "",
    Mail: "",
    Drzava: "",
    Phone: "",
  }

onsubmit= e => {e.preventDefault(); alert("Uspjesno ste poslali zahtjev!",this.state.ime );}
render()
 { 

  return (
    <div className="Article2">
      <section class="row4">
        <div class="ljud"> <img src={ljudi} class="ljud" /> </div>
        <div class="nabr"> <img src={tri} className="trisl" /> 
        <div class="prvib">
          <p class="prvibt"> INSTRUCTOR TRAINING </p>
          <div class="hr2"> </div>
          <p class="lor1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eros <br /> elit, quis  bibendum nulla sagittis. </p>

        </div>
        <div class="drugib">
          <p class="drugibt"> HIGHWAY SAFETY </p>
          <div class="hr3"> </div>
          <p class="lor2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eros <br /> elit, quis  bibendum nulla sagittis. </p>
        </div>
        <div class="trcib">
          <p class="trecibt"> TRAFFIC RULES </p>
          <div class="hr39"> </div>
          <p class="lor3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eros <br /> elit, quis  bibendum nulla sagittis. </p>
          
        </div>
        </div>
        <div class="form"> <p class="formt"> Application form </p> 
          <form>
            <label>
              <input placeholder ="     Your Name" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}  class="ime" />
            </label> <br />
            <label>
              <input placeholder ="      Email"    value={this.state.Mail} onChange={e=>this.setState({Mail: e.target.value})} class="mail2"  />
            </label> <br />
            <label>
              <input  placeholder ="     Country" value={this.state.Drzava} onChange={e=>this.setState({Drzava: e.target.value})} class="drzava" />
            </label> <br />
            <label>
              
              <input placeholder ="     Phone" value={this.state.Phone} onChange={e=>this.setState({Phone: e.target.value})} class="bro"/>
            </label> <br />
            <select class="sel">
              <option value="akategorija"> A Kategorija </option>
              <option value="bkategorija"> B Kategorija </option>
              <option value="ckategorija"> C Kategorija </option>
            </select>
            <select class="type2">
              <option value="automatik"> Automatik </option>
              <option value="manualni"> Manuelni </option>
            </select>
            <button type="submit" value="submit" class="predaja" onClick={e=>this.onsubmit(e)}> <b> Submit  </b> </button>
          </form>
          <h3 class="moje"> Ime: {this.state.ime} <br />
           Mail: {this.state.Mail} <br />
           Drzava: {this.state.Drzava} <br />
           Mob: {this.state.Phone}  </h3> 
        </div>
      </section>
    </div>
    );
  }
}
export default Article2;