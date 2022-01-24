import React from 'react';
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <form action="get" className='search'>
            <input type="text" placeholder='Recherche...'/>
            <button type='submit' className='submit-s'><SearchIcon/></button>
        </form>
    )
}

export default Search;
