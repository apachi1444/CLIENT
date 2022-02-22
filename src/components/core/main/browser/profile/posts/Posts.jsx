import React from 'react';
import Post from '../../post/Post';
import "./posts.css";

function Posts({mode}) {
  return (
    <div className="posts">
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
        <Post mode={mode} isMine={true}/>
    </div>
  )
}

Posts.defaultProps={
  mode: false
}
export default Posts