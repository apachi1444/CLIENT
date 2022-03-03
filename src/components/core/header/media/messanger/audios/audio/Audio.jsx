import React, { useState } from 'react';
import Picture from "../../../../../header/avatar/picture/Picture";
import Message from "../../messages/message/Message";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PhonePausedOutlinedIcon from '@mui/icons-material/PhonePausedOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { motion } from 'framer-motion';
import "./audio.css";

function Audio({navigate, mode, duration}) {
  const [ chat, setChat ]=useState(false);
  const [ modee, setModee ]=useState(mode);
  const toggle=()=>setChat(!chat);
  const moder=(mo)=>{
    return ()=>{
      setModee(mo);
    }
  };
  return (
    <motion.div className="audio"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
        <div className="calls-section">
          <div className="call-duration">{duration}</div>
          <div className="get-out" onClick={navigate} ><EastOutlinedIcon/></div>
          <Picture width={"60px"} border={"1px solid blue"} auto={false} />
          <div className="call-actions">
            <div onClick={moder("calling")} className={`hung-up${modee==="calling"? " mode-on": ""}`}>
              <CallOutlinedIcon/>
            </div>
            <div onClick={moder("pausing")} className={`hung-up${modee==="pausing"? " mode-on": ""}`}>
              <PhonePausedOutlinedIcon/>
            </div>
            <div onClick={moder("ending")} className={`hung-up${modee==="ending"? " mode-on": ""}`}>
              <CallEndOutlinedIcon/>
            </div>
          </div>
        </div>
        {chat ? 
          <button className="close-chat" onClick={toggle} >Close Chat</button>:
          <button className="close-chat" onClick={toggle}>View Chat</button>
        }
        <div className="chats-sec">
          { chat && <Message noCb={true}/> }
        </div>
    </motion.div>
  )
}
Audio.defaultProps={
    navigate: ()=>{},
    mode: "calling",
    duration: "00:00"
}
export default Audio;