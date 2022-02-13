import React, { useState, useRef} from 'react';
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

  const getReaction=(action, value)=>{
    return { 
      num: action===value ? (!actions[value].alreadyDone ? actions[value].num+1: actions[value].num-1): actions[value].num, 
      alreadyDone: (action===value ? !actions[value].alreadyDone: actions[value].alreadyDone) 
    }
  };
  
  const actionner=(action)=>{
    if(action==="comments") 
      return ()=>{
        setIsComment(!isComment);
        if(commentRef.current) commentRef.current.scrollIntoView({behavior: "smooth", block: "end"});
      };
    return ()=>{
      setIsComment(false);
      setActions({
        comments:{ num: comments, alreadyDone: false },//this need some code here to handle comments
        hearts : getReaction(action, "hearts"),
        likes : getReaction(action, "likes"),
        dislikes : getReaction(action, "dislikes"),
        stars : getReaction(action, "stars")
      });
    };
  };
  return (
      <div className="reaction">
          <div className="react-icons">
            <div className="icon-cell"  onClick={actionner("comments")}>
              <div className={`reaction-icon ${actions?.comments?.alreadyDone ? "touched-comment": ""}`}>
                <ChatBubbleOutlineOutlinedIcon/>
              </div>
              <p>{actions?.comments?.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("hearts")}>
              <div className={`reaction-icon ${actions?.hearts?.alreadyDone ? "touched-heart": ""}`}>
                <FavoriteBorderOutlinedIcon/>
              </div>
              <p>{actions?.hearts?.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("stars")}>
              <div className={`reaction-icon ${actions?.stars?.alreadyDone ? "touched-star": ""}`}>
                <StarRateOutlinedIcon/>
              </div>
              <p>{actions?.stars?.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("likes")}>
              <div className={`reaction-icon ${actions?.likes?.alreadyDone ? "touched-like": ""}`}>
                <ThumbUpOutlinedIcon/>
              </div>
              <p>{actions?.likes?.num}</p>
            </div>
            <div className="icon-cell" onClick={actionner("dislikes")}>
              <div className={`reaction-icon ${actions?.dislikes?.alreadyDone ? "touched-dislike": ""}`}>
                <ThumbDownOutlinedIcon/>
              </div>
              <p>{actions?.dislikes?.num}</p>
            </div>
          </div>
          <div className="comment-wrapper" ref={commentRef}>
            { isComment && <Comments/> }
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
