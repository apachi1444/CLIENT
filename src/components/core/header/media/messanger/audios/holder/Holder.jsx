import React from 'react';
import Picture from '../../../../avatar/picture/Picture';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { motion } from 'framer-motion';

import "./holder.css";


function Holder({navigate, username}) {
  return (
    <motion.div className="audio-holder"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="avatar-caller">
        <Picture width={"40px"} border={"1px solid blueviolet"} auto={false} />
      </div>
      <h3 className="caller-username">{username}</h3>
      <div className="calling-acts">
        <div className="phone-ac" onClick={navigate} ><LocalPhoneOutlinedIcon/></div>
        <div className="phone-ac" ><VideocamOutlinedIcon/></div>
        <div className="phone-ac"><DeleteOutlinedIcon/></div>
      </div>
    </motion.div>
  )
}
Holder.defaultProps={
    navigate: ()=>{},
    username: "James X"
}
export default Holder;