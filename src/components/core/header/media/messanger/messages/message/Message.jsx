import React, { useState } from 'react';
import './message.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Picture from '../../../../avatar/picture/Picture';
import Conv from './conv/Conv';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { motion } from "framer-motion";

function Message({imgUrl, username, msgs, cb, isArchived, isMuted, noCb}) {
  const [open, setOpen]=useState(false);
  return (
    <motion.div className="message-container"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="go-back" onClick={cb}>{ !noCb && <KeyboardBackspaceOutlinedIcon/>}</div>
      <div className="image-username">
        <Picture width={"50px"} auto={false}/>
        <h5>{username}</h5>
        <div className="message-action" onClick={()=>setOpen(!open)}>
          {!open ? <MoreHorizOutlinedIcon/>: <ExpandLessOutlinedIcon/>}
        </div>
        {open &&
        <ul className="more-action">
          <li className="list-item">
            {!isArchived ? <ArchiveOutlinedIcon/>: <UnarchiveOutlinedIcon/>}
            <h5>{isArchived ? 'Unarchive ': 'Archive '}Conversation</h5>
          </li>
          <li className="list-item">
            {!isMuted ? <VolumeOffOutlinedIcon/>: <VolumeUpOutlinedIcon/>}
            <h5>{isMuted ? 'Unmute ': 'Mute '}Conversation</h5>
          </li>
          <li className="list-item">
            <DeleteOutlinedIcon/>
            <h5>Delete Conversation</h5>
          </li>
        </ul>
        }
      </div>
      <ScrollToBottom className="msgs">
        <Conv isMe={true} sent={false} recieved={false} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={false} viewed={false}/>
        <Conv isMe={true} sent={true} recieved={true} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={true} viewed={true}/>
        <Conv isMe={true} sent={false} recieved={false} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={false} viewed={false}/>
        <Conv isMe={true} sent={true} recieved={true} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={true} viewed={true}/>
        <Conv isMe={true} sent={false} recieved={false} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={false} viewed={false}/>
        <Conv isMe={true} sent={true} recieved={true} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={true} viewed={true}/>
        <Conv isMe={true} sent={false} recieved={false} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={false} viewed={false}/>
        <Conv isMe={true} sent={true} recieved={true} viewed={false}/>
        <Conv isMe={false} sent={true} recieved={true} viewed={true}/>
      </ScrollToBottom>
      <div className="send-msg">
        <textarea name="send-mes" id="text-msg" className='send-ms' placeholder='message...'></textarea>
        <label htmlFor="text-msg" className="send-ms-l"><SendOutlinedIcon/></label>
      </div>
    </motion.div>
  )
}

Message.defaultProps={
  username: "Jordan B",
  msgs: [],
  cb: ()=>{},
  noCb: false
}
export default Message