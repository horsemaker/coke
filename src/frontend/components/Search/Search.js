import React from "react";
import "./Search.css";

export const Search = () => {
  return (
    <div className="search">
      <span className="material-icons search-icon">search</span>
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        name="search-input"
        id="search-input"
      />
    </div>
  );
};
