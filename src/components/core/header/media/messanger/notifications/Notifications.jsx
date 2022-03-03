import React from 'react';
import { useDispatch } from 'react-redux';
import Notification from './Notification';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import messanger from "../../../../../../redux/actions/messanger";
import CloseChat from "./CloseChat";


import './notifications.css';
import { motion } from 'framer-motion';
function Notifications() {
  const dispatch=useDispatch();
  return (
    <motion.div className="notifications"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CloseChat cb={()=>{dispatch(messanger({on: false, current: ""}))}}/>
      <Notification icon={<ChatBubbleOutlineOutlinedIcon/>}/>
      <Notification icon={<FavoriteBorderOutlinedIcon/>}/>
      <Notification icon={<ThumbUpOutlinedIcon/>}/>
      <Notification icon={<ThumbDownOutlinedIcon/>}/>
      <Notification icon={<StarRateOutlinedIcon/>}/>
    </motion.div>
  )
}

export default Notifications