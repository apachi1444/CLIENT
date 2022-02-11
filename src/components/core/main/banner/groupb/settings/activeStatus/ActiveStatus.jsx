import React from 'react';
import "./activeStatus.css";

function ActiveStatus() {
  return (
    <div className="active-status">
        <input type="radio" id="lang1" name="English-1" value={"friends"} checked/> 
        <label htmlFor="lang1">Allow only my friends</label>

        <input type="radio" id="lang2" name="English-1" value={"none"}/> 
        <label htmlFor="lang2">Allow no one</label>

        <input type="radio" id="lang3" name="English-1" value={"all"}/> 
        <label htmlFor="lang3">Allow everyone</label>
    </div>
  )
}

export default ActiveStatus