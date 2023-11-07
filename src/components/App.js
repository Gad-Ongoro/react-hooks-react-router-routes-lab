import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>{/*{code here}*/}
    <NavBar />
    <Switch>
      <Route path="/" exact >
        <Home></Home>
      </Route>

      <Route path="/movies" exact >
        <Movies></Movies>
      </Route>

      <Route path="/directors" exact >
        <Directors></Directors>
      </Route>

      <Route path="/actors" exact >
        <Actors></Actors>
      </Route>   
    </Switch>
  </div>);
}

export default App;
