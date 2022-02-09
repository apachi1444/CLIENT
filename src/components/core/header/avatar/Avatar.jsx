import React from 'react';
import "./avatar.css";
import Picture from './picture/Picture';


function Avatar({username}) {
  return (
      <div className="avatar">
            <Picture width={"40px"} border='2px solid rgb(188, 151, 223)' auto={false}/>
            <h3>{username}</h3>
      </div>
  );
}

Avatar.defaultProps={
    username : "John Doe"
}
export default Avatar;
