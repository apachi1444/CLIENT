import React from 'react';
import "./location.css";

function Location() {
  return (
    <form className="location-t" action='post'>
        <input type="radio" id="langg1-1" name="English-11" value={"friends"} checked/> 
        <label htmlFor="langg1-1">Share my location with only my friends</label>

        <input type="radio" id="langg2-2" name="English-11" value={"none"}/> 
        <label htmlFor="langg2-2">Share my location with no one</label>

        <input type="radio" id="langg3-3" name="English-11" value={"all"}/> 
        <label htmlFor="langg3-3">Share my location with everyone</label>
    </form>
  )
}

export default Location;