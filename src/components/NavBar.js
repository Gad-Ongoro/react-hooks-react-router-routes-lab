import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // return <div>{/*{code here}*/}</div>;
  let navStyle = {
    margin: `4px`
  }
  return(
    <div className="navbar">
      <NavLink to="/" style={navStyle} exact>Home</NavLink>
      <NavLink to="/movies" style={navStyle} exact>Movies</NavLink>
      <NavLink to="/directors" style={navStyle} exact>Directors</NavLink>
      <NavLink to="/actors" style={navStyle} exact>Actors</NavLink>
    </div>
  )
}

export default NavBar;
