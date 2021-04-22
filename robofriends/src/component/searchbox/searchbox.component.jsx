import React from 'react';

import './searchbox.style.css'

const SearchBox = ({ onSearchChange }) => {
    return(
        <div className="searchbox">
            <input  type="input" placeholder="give me a name" onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox;