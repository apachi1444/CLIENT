import React, { useState } from 'react';
import Picture from '../../../header/avatar/picture/Picture';
import Networker from "./networker/Networker";
import { motion } from "framer-motion";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import "./network.css";

function Network({username, network, members}) {
  const [open, setOpen]=useState(false);
  const toggle=()=>{
      setOpen(!open);
  } 
  return (
    <motion.div className="network"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3}}
    >
        <div className="my-network">
            <Picture width={"50px"} auto={false}/>
            <p className="my-name-net">{username}</p>
            <p className="members">{`${members} member${(members>1 ? "s": "")}`}</p>
            <div className="network-actions">
                <div className="network-trigger" onClick={toggle}>
                    {open ? <ExpandLessIcon/>: <ExpandMoreIcon/>}
                </div>
                { open &&
                    <motion.ul className="network-options"
                        initial={{x: "100vw"}}
                        animate={{x: 0}}
                    >
                        <li className="network-op"><OpenWithOutlinedIcon/><p>Expand Network</p></li>
                        <li className="network-op"><DeleteOutlinedIcon/><p>Delete Network</p></li>
                        <li className="network-op"><SettingsOutlinedIcon/><p>Network Settings</p></li>
                    </motion.ul>
                }
            </div>
        </div>
        <div className="network-set">
            <div className="inner-network-set">
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
                <Networker/>
            </div>
        </div>
    </motion.div>
  )
}

Network.defaultProps={
    username: "John Doe",
    members: 18,
    network:[]//this represents the network data
}
export default Network