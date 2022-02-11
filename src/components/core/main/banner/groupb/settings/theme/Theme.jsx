import React, { useState } from 'react';
import "./theme.css";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

function Theme() {
  const [light, setLight]=useState(true);
  const toggle=()=>setLight(!light);
  return (
    <form action="post" className="theme">
        {
            light ? 
            <><div className="white on-white" ><ToggleOffOutlinedIcon/><p>Light</p></div>
            <div className="dark" onClick={toggle}><ToggleOnOutlinedIcon/><p>Dark</p></div></>: 
            <><div className="white" onClick={toggle}><ToggleOffOutlinedIcon/><p>Light</p></div>
            <div className="dark on-dark"><ToggleOnOutlinedIcon/><p>Dark</p></div></>
        }
    </form>
  )
}

export default Theme