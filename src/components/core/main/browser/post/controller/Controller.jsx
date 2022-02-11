import React, { useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import "./controller.css";


function Controller({isFriend, posterName, isMe}) {
  const [open, setOpen]=useState(false);
  const toggle=()=>setOpen(!open);
  return (
      <div className="controller">
          <div className="controller-icon" onClick={toggle}>
            {open ? <ExpandLessOutlinedIcon/>:<MoreHorizOutlinedIcon/>}
          </div>
          <div className="controller-ops">
              {open && 
              <ul className="actions">
                {
                isMe ? <li className="action"><h3>Mute my posts</h3></li>:
                <>
                  <li className="action"><h3>{posterName}'s Profile</h3></li>
                  <li className="action">
                    <h3>{!isFriend ? `Connect to ${posterName}`: `Message ${posterName}`}</h3>
                  </li>
                  <li className="action"><h3>Follow {posterName}</h3></li>
                  <li className="action"><h3>Unfollow {posterName}</h3></li>
                </>
                }
              </ul>
              }
          </div>
      </div>
  );
};

Controller.defaultProps={
  isFriend: false,
  posterName: "Jordan B",
  isMe: false
}
export default Controller;
