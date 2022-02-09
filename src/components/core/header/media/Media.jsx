import React from 'react';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import "./media.css";

function Media({invitations, messages, notifications}) {
  return (
    <div className="media">
        <div className="media-box"><MessageOutlinedIcon/><div className="num">{messages}</div></div>
        <div className="media-box"><NotificationsNoneOutlinedIcon/><div className="num">{notifications}</div></div>
        <div className="media-box"><PersonAddOutlinedIcon/><div className="num">{invitations}</div></div>
    </div>
 );
}

Media.defaultProps={
    invitations: 0,
    messages: 0,
    notifications: 0
}
export default Media;
