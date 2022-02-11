import React from 'react';
import "./language.css";


function Language() {
  return (
    <form className="language" action='post'>
        <input type="radio" id="lang22" name="English" value={"English"} checked/> <label htmlFor="lang22">English</label>
        <input type="radio" id="lang33" name="English" value={"French"}/> <label htmlFor="lang33">French</label>
    </form>
  )
}

export default Language