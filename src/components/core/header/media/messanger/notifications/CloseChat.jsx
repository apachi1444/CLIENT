import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./notifications.css";

function CloseChat({cb}) {
  return (
    <button className="close-me-out" onClick={cb}><CloseOutlinedIcon/></button>
  )
}

CloseChat.defaultProps={
    cb: ()=>{}
}
export default CloseChat