import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="wrap-search-box">
      <input
        className="search-box"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
