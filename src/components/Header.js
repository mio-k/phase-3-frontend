import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
      <>
        <div className="header">
          <strong className="title">DogPod Food Orders</strong>
          <NavLink className="nav" to="Orders">Existing Orders</NavLink>
          <NavLink className="nav" to="Members">Member Dogs</NavLink>
        </div>
      </>
    )
}
export default Header;