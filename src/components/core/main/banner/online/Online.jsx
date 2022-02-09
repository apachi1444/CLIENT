import React, { useState } from 'react';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import "./online.css";

function Online({onlinePeople}) {
    const [open, setOpen]=useState(false);
    const toggle=()=>setOpen(!open);
    return (
        <div className="online">
            <div className="head">
                <div className="icon-t" onClick={toggle}><PeopleOutlineIcon/></div> 
                <h3 onClick={toggle}>Online People</h3> 
                <h4>{onlinePeople}</h4>
            </div>
            { open && <div className="connecters-list">List</div>}
        </div>
    );
};
 Online.defaultProps={
     onlinePeople: 0
 }

export default Online;
