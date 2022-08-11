import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(){
    return (
      <>
        <div className="header">
          <strong className="title">DogPod Food Orders</strong>
          <NavLink className="nav" to="/dogs">Member Dogs</NavLink>
          <NavLink className="nav" to="./orders">Existing Orders</NavLink>
        </div>
      </>
    )
}
export default Header;