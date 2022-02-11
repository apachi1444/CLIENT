import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import { v4 as uuid } from 'uuid';
import "./friendAction.css";

function FriendAction({userId}) {
  const [open, setOpen]=useState(false);
  return (
    <div className='friend-action'>
        <div className="ac" onClick={()=>setOpen(!open)}>
          {!open ? <ExpandMoreIcon/>: <ExpandLessIcon/>}
        </div>
        { open &&
        <div className="actions-list">
          <ul className="center-list">
            <li><AccountBoxOutlinedIcon/> <h4>View Profile</h4></li>
            <li><MessageOutlinedIcon/> <h4>Write Message</h4></li>
            <li><BlockOutlinedIcon/> <h4>Block/Unconnect</h4></li>
          </ul>
        </div>}
    </div>
  )
}

FriendAction.defaultProps={
  userId: uuid()
}
export default FriendAction