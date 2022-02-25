import React from 'react';
import Picture from '../../../../avatar/picture/Picture';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./holder.css";


function Holder({navigate, username}) {
  return (
    <div className="audio-holder">
      <div className="avatar-caller">
        <Picture width={"40px"} border={"1px solid blueviolet"} auto={false} />
      </div>
      <h3 className="caller-username">{username}</h3>
      <div className="calling-acts">
        <div className="phone-ac" onClick={navigate} ><LocalPhoneOutlinedIcon/></div>
        <div className="phone-ac" ><VideocamOutlinedIcon/></div>
        <div className="phone-ac"><DeleteOutlinedIcon/></div>
      </div>
    </div>
  )
}
Holder.defaultProps={
    navigate: ()=>{},
    username: "James X"
}
export default Holder;