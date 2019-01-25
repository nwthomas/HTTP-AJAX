import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <div><NavLink exact to="/">Home</NavLink><NavLink to="/form">Form</NavLink></div>
      <input
        className="search__input"
        name="searchInput"
        type="text"
        placeholder="Search..."
        value={props.searchInput}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Navbar;
