import React, { useState } from 'react';
import Picture from '../../../../../../header/avatar/picture/Picture';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';

import "./comment.css";
//cb is a callback

function Comment({imageUrl, username, content, comments, hearts, stars, likes, dislikes, cb}) {
  const [open, setOpen]=useState(false);
  const toggle=()=>setOpen(!open);
  return (
    <div className="comment">
        <div className="comment-header">
            <Picture imgUrl={imageUrl} width={"2em"} auto={false} border="1px solid blue"/>
            <h4>{username}</h4>
            <div className="control">
              <div className="tree-dots" onClick={toggle}>
                {open ?<MoreHorizOutlinedIcon/>: <ExpandLessOutlinedIcon/>}
              </div>
              {open &&
                <ul className="comment-options">
                  <li className="op-t">View Profile</li>
                  <li className="op-t">Follow {username}</li>
                </ul>
              }
            </div>
        </div>
        <p className="comment-content">{content}</p>
        <div className="com-reactions">
            <div className="com-cell">
              <div className="com-icon"><ChatBubbleOutlineOutlinedIcon/></div>
              <p>{comments}</p>
            </div>
            <div className="com-cell">
              <div className="com-icon"><FavoriteBorderOutlinedIcon/></div>
              <p>{hearts}</p>
            </div>
            <div className="com-cell">
              <div className="com-icon"><StarRateOutlinedIcon/></div>
              <p>{stars}</p>
            </div>
            <div className="com-cell">
              <div className="com-icon"><ThumbUpOutlinedIcon/></div>
              <p>{likes}</p>
            </div>
            <div className="com-cell">
              <div className="com-icon"><ThumbDownOutlinedIcon/></div>
              <p>{dislikes}</p>
            </div>
        </div>
    </div>
  )
}

Comment.defaultProps={
    imageUrl: "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371__340.jpg",
    username: "Brad Pitt",
    content: "Nice place you got I really love the view hope you see my msgs I am in your dms;)",
    comments: 0, 
    hearts: 0, 
    stars: 0, 
    likes: 0, 
    dislikes: 0, 
    cb: ()=>{}
}
export default Comment;