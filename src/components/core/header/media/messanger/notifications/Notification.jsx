import React, { useState } from 'react';
import Picture from '../../../avatar/picture/Picture';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './notifications.css';
import postedSince from '../../../../../../logic/algorithms/postedSince';

function Notification({imgUrl, username, reaction, timeStamp, isMuted, icon}) {
  const [open, setOpen]=useState(false);
  return (
    <div className="notification">
        <div className="header">
            <Picture width={'50px'} auto={false} border={"1px solid blue"}/>
            <h3>{username}</h3>
            {icon}
            <div className="message-action" onClick={()=>setOpen(!open)}>
                {!open ? <MoreVertOutlinedIcon/>: <ExpandLessOutlinedIcon/>}
            </div>
            {open &&
            <ul className="more-action">
                <li className="list-item">
                    {!isMuted ? <VolumeOffOutlinedIcon/>: <VolumeUpOutlinedIcon/>}
                    <h5>{isMuted ? 'Unmute ': 'Mute '}</h5>
                </li>
                <li className="list-item">
                    <DeleteOutlinedIcon/>
                    <h5>Delete</h5>
                </li>
            </ul>
            }
        </div>
        <p className="saying">
            {`${username} ${reaction}`}
        </p>
        <p className="time-s">{postedSince(timeStamp)}</p>
    </div>
  )
}

Notification.defaultProps={
    username: "James K",
    reaction: 'likes your post',
    icon: <></>,
    timeStamp: new Date(),
    isMuted: false
}
export default Notification;