import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

const NavbarContainer = props => {
  return (
    <div className="navbar__container">
      <Navbar onChange={props.onChange} searchInput={props.searchInput} />
    </div>
  );
};

export default NavbarContainer;
