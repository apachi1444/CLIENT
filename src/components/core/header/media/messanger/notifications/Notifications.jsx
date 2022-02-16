import React from 'react';
import Notification from './Notification';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import './notifications.css';

function Notifications() {
  return (
    <div className="notifications">
      <Notification icon={<ChatBubbleOutlineOutlinedIcon/>}/>
      <Notification icon={<FavoriteBorderOutlinedIcon/>}/>
      <Notification icon={<ThumbUpOutlinedIcon/>}/>
      <Notification icon={<ThumbDownOutlinedIcon/>}/>
      <Notification icon={<StarRateOutlinedIcon/>}/>
    </div>
  )
}

export default Notifications