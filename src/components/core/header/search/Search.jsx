import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./search.css";

function Search() {
    return(
        <form className="search-me" action="post">
            <input type="text" id="getpage"  placeholder='Search...'/>
            <label htmlFor="getpage"><SearchIcon/></label>
        </form>
    );
}

export default Search;
