import React, { useState } from 'react';
import Message from '../../messages/message/Message';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ScrollToBottom from 'react-scroll-to-bottom';
import { motion } from 'framer-motion';
import "./video.css";

function Video({navigate, username, elapsedTime}) {
  const [settings, setSettings]=useState({
    camOn: true,
    micOn: true,
    isPaused: false
  });
  const [open, setOpen]=useState(false);
  const toggle=()=>{
    setOpen(!open);
  }
  return (
    <motion.div className="video"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="go-backx" onClick={navigate} ><KeyboardBackspaceOutlinedIcon/></div>
      <div className="screen">
        <div className="top-right">
          <LocalPhoneOutlinedIcon/>
          <div className="cam" onClick={()=>setSettings({
            camOn: !settings.camOn,
            micOn: settings.micOn,
            isPaused: settings.isPaused
          })}>
          { !settings.camOn ? <VideocamOutlinedIcon/>: <VideocamOffOutlinedIcon/> }
          </div> 
        </div>
        <div className="top-left">{elapsedTime}</div>
        <div className="bottom-right"><CancelOutlinedIcon/></div>
        <div className="bottom-left">
          <div className="mic" onClick={()=>setSettings({
            camOn: settings.camOn,
            micOn: !settings.micOn,
            isPaused: settings.isPaused
          })}>
          { settings.micOn ? <MicOffOutlinedIcon/>: <MicNoneOutlinedIcon/> }
          </div>
          <div className="paused" onClick={()=>setSettings({
            camOn: settings.camOn,
            micOn: settings.micOn,
            isPaused: !settings.isPaused
          })}>
          { settings.isPaused ? <ArrowRightOutlinedIcon/>: <PauseCircleOutlineOutlinedIcon/> }
          </div>
        </div>
      </div>
      <h3 className="video-name">{username}</h3>
      {open ? 
          <button className="close-chatt" onClick={toggle} >Close Chat</button>:
          <button className="close-chatt" onClick={toggle}>View Chat</button>
        }
      <ScrollToBottom className="chats-section">
        { open && <Message noCb={true}/> }
      </ScrollToBottom>
    </motion.div>
  )
}

Video.defaultProps={
    navigate: ()=>{},
    username: "James X",
    elapsedTime: "00:00"
}
export default Video;