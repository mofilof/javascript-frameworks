import React from "react";
import PropTypes from "prop-types";

function SearchGames({ doSearch }) {
    return (
        <input className="searchBar"
            placeholder="Search by name..."
            onChange={function(e) {
                // console.log(e.target.value);
                doSearch(e.target.value);
            }}
        />
    );
}

SearchGames.propTypes = {
    doSearch: PropTypes.func.isRequired
};

export default SearchGames;
