import React, { useState } from 'react';
import Picture from '../../../../../../header/avatar/picture/Picture';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import postedSince from '../../../../../../../../logic/algorithms/postedSince';
import "./comment.css";
//cb is a callback

function Comment({imageUrl, username, content, comments, hearts, stars, likes, dislikes, 
      rea, hidden, time, callback}) {
  const [open, setOpen]=useState(false);
  const toggle=()=>setOpen(!open);
  if(hidden) return <></>;
  return (
    <div className="comment">
        <div className="comment-header">
            <div className="commenter-pic" onClick={callback}>
              <Picture imgUrl={imageUrl} width={"2em"} auto={false} border="1px solid blue"/>
            </div>
            <h4 onClick={callback}>{username}</h4>
            <div className="control">
              <div className="tree-dots" onClick={toggle}>
                {!open ?<MoreHorizOutlinedIcon/>: <ExpandLessOutlinedIcon/>}
              </div>
              {open &&
                <ul className="comment-options">
                  <li className="op-t"><AccountBoxOutlinedIcon/><h4>View Profile</h4></li>
                  <li className="op-t"><NotificationsOutlinedIcon/><h4>Follow {username}</h4></li>
                </ul>
              }
            </div>
        </div>
        <p className="comment-content">{content}</p>
        <p className="posted-time">{postedSince(time)}</p>
        <div className="com-reactions">
            <div className="com-cell" onClick={callback}>
              <div className="com-icon" onClick={rea("replies")}>
              <ChatBubbleOutlineOutlinedIcon/></div>
              <p>{comments}</p>
            </div>
            <div className="com-cell">
              <div className={`com-icon${hearts.alreadyDone ? " gotta-heart": ""}`} onClick={rea("hearts")}>
              <FavoriteBorderOutlinedIcon/></div>
              <p>{hearts.num}</p>
            </div>
            <div className="com-cell">
              <div className={`com-icon${stars.alreadyDone ? " gotta-star": ""}`} onClick={rea("stars")}>
              <StarRateOutlinedIcon/></div>
              <p>{stars.num}</p>
            </div>
            <div className="com-cell">
              <div className={`com-icon${likes.alreadyDone ? " gotta-like": ""}`} onClick={rea("likes")}>
              <ThumbUpOutlinedIcon/></div>
              <p>{likes.num}</p>
            </div>
            <div className="com-cell">
              <div className={`com-icon${dislikes.alreadyDone ? " gotta-dislike": ""}`} onClick={rea("dislikes")}>
              <ThumbDownOutlinedIcon/></div>
              <p>{dislikes.num}</p>
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
    cb: ()=>{},
    hidden: false,
    time: new Date(),
    callback: ()=>{}
}
export default Comment;