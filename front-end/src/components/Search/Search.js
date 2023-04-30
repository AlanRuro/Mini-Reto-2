import React from "react";
import "./search.css";

function Search({ searchChange }) {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search Cartoons"
                onChange={searchChange}
            />
        </div>
    );
}

export default Search;