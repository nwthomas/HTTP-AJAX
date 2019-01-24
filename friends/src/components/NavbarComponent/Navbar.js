import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar">
      <p>Lambda Friends List</p>
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
