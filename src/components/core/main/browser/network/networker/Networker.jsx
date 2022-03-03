import React, { useState } from 'react';
import Picture from "../../../../header/avatar/picture/Picture";
import { motion } from "framer-motion";
import "./networker.css";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

function Networker({username, userId}) {
    const [open, setOpen]=useState(false);
    const toggle=()=>{
        setOpen(!open);
    }
  return (
    <div className="networker">
        <Picture width={"45px"} auto={false}/>
        <p>{username}</p>
        <div className="networker-actions">
                <div className="networker-trigger" onClick={toggle}>
                    {open ? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                </div>
                { open &&
                    <motion.ul className="networker-options"
                        initial={{x: "100vw"}}
                        animate={{x: 0}}
                    >
                        <li className="networker-op"><AccountBoxOutlinedIcon/><p>View Profile</p></li>
                        <li className="networker-op"><MessageOutlinedIcon/><p>Message {username}</p></li>
                        <li className="networker-op"><LocalPhoneOutlinedIcon/><p>Audio Call</p></li>
                        <li className="networker-op"><VideocamOutlinedIcon/><p>Video Call</p></li>
                        <li className="networker-op"><DeleteOutlinedIcon/><p>Delete From Network</p></li>
                        <li className="networker-op"><BlockOutlinedIcon/><p>Block {username}</p></li>
                    </motion.ul>
                }
        </div>
        <div className="dot-doc"></div>
    </div>
  )
}
Networker.defaultProps={
    username: "Will Smith",
    userId: 0//this will help handle the actions properly later on
}
export default Networker;