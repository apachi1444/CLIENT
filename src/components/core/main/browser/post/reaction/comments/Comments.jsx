import React from 'react';
import Comment from './comment/Comment';
import "./comments.css";

function Comments({tree}) {
  return (
    <div className="comments">
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

Comments.defaultProps={
    tree: null
}
export default Comments