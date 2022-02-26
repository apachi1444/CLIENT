import React from 'react';
import Notification from './Notification';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import './notifications.css';
import { motion } from 'framer-motion';
function Notifications() {
  return (
    <motion.div className="notifications"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Notification icon={<ChatBubbleOutlineOutlinedIcon/>}/>
      <Notification icon={<FavoriteBorderOutlinedIcon/>}/>
      <Notification icon={<ThumbUpOutlinedIcon/>}/>
      <Notification icon={<ThumbDownOutlinedIcon/>}/>
      <Notification icon={<StarRateOutlinedIcon/>}/>
    </motion.div>
  )
}

export default Notifications