import React, { useState, useRef } from 'react';
import "./reaction.css";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import Comments from './comments/Comments';

function Reaction({comments, hearts, likes, dislikes, stars, commentsTree}) {
  const commentRef=useRef(null);
  const [isComment, setIsComment]=useState(false);
  const [actions, setActions]=useState({
    comments:{ num: comments, alreadyDone: false },
    hearts:{ num: hearts, alreadyDone: false },
    likes:{ num: likes, alreadyDone: false },
    dislikes:{ num: dislikes, alreadyDone: false },
    stars:{ num: stars, alreadyDone: false }});
  const actionner=(action)=>{
    if(action==="comments") 
      return ()=>{
        setIsComment(!isComment);
        if(commentRef.current) commentRef.current.scrollIntoView({behavior: "smooth", block: "center"});
      };
    return ()=>{
      const obj=actions;
      obj[action].num+=(!actions[action].alreadyDone ? 1: -1);
      obj[action].alreadyDone=!actions[action].alreadyDone;
      setActions(obj);
      setIsComment(false);
    };
  };
  return (
      <div className="reaction">
          <div className="react-icons">
            <div className="icon-cell" onClick={actionner("comments")}>
              <div className="reaction-icon"><ChatBubbleOutlineOutlinedIcon/></div>
              <p>{actions.comments.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("hearts")}>
              <div className="reaction-icon"><FavoriteBorderOutlinedIcon/></div>
              <p>{actions.hearts.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("stars")}>
              <div className="reaction-icon"><StarRateOutlinedIcon/></div>
              <p>{actions.stars.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("likes")}>
              <div className="reaction-icon"><ThumbUpOutlinedIcon/></div>
              <p>{actions.likes.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("dislikes")}>
              <div className="reaction-icon"><ThumbDownOutlinedIcon/></div>
              <p>{actions.dislikes.num}</p>
            </div>
          </div>
          <div className="comment-wrapper" ref={commentRef}>
            { isComment && <Comments tree={commentsTree}/> }
          </div>
      </div>
  );
}

Reaction.defaultProps={
  comments: 0,
  hearts: 0,
  likes: 0,
  dislikes: 0,
  stars: 200,
  commentsTree: null
}
export default Reaction;
