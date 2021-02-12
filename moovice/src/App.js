import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 

import Home from "./components/Home";
import Popular from "./components/Popular";
import Card from "./components/Card";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";
import  "./App.css"
// import Error404 from "./components/Error404.jsx";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter> 
        <div className="container-fluid display-flex">
          <div className="row">
            <div className="col-12">
              <header>
                <h1>MOOVICE</h1>
                <nav> 
                  <ul className="listItems">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/weekly">Weekly</Link></li>
                    <li><Link to="/weekly-battle">WeeklyBattle</Link></li>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to="/popular-battle">PopularBattle</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                  </ul>
                </nav>
              </header>
            </div>   
          </div> 
          <div className="container-fluid display-flex">
            <div className="row bienvenue">
              <div className="col-12">
                <h2>
                   Bienvenue sur MOOVICE
                </h2>
              </div>
            </div>  
          </div>   

              <Switch> 
                <Route exact path="/" component={Home}/> 
						    <Route path="/weekly" component={Weekly}/>
                <Route path="/weekly-battle" component={WeeklyBattle}/>
                <Route path="/popular" component={Popular}/>
                <Route path="/popular-battle" component={PopularBattle}/>
                <Route path="/favorites" component={Favorites}/>
						{/* <Route path="*" component={Error404}/> */}
              </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
