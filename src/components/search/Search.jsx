import React from 'react';
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    
    return (
        <div className="outer-search">
            <form action="get" className='search'>
                <input type="text" placeholder='Search...'/>
                <button type='submit' className='submit-s'><SearchIcon/></button>
            </form>
        </div>
    )
}

export default Search;
