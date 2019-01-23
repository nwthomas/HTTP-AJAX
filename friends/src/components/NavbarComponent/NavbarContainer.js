import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

const NavbarContainer = props => {
  return (
    <div className="navbar__container">
      <Navbar
        handleChange={props.handleChange}
        searchInputText={props.searchInputText}
      />
    </div>
  );
};

export default NavbarContainer;
