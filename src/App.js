import './App.css';
import React from "react";
import{BrowserRouter as Router,Route} from 'react-router-dom';
import Naslovna from "./components/Naslovna";
import About from "./components/About";
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Naslovna} />
        <Route path ="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      
      </Router>

    </div>
  );
}

export default App;
