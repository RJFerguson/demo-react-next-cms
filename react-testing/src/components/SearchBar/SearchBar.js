import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleInputChange }) => {
  return (
    <div className="SearchBarContainer">
      <input autoFocus className="SearchBar" onChange={handleInputChange} placeholder="Search for your favorite movie.."></input>
    </div>
  );
};

export default SearchBar;
