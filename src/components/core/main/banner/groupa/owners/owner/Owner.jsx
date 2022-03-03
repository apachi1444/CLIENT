import React from 'react';
import Picture from '../../../../../header/avatar/picture/Picture';
import Request from './request/Request';
import "./owner.css";

function Owner({profileImg, backgroundImg, username, city}) {
    const backgroundStyle={backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover"};
  return (
    <div className="owner" style={backgroundStyle}>
        <Picture imgUrl={profileImg} width={"100px"} auto={false} border={"1px solid blueviolet"}/>
        <h5>{username}</h5>
        <h6>{city}</h6>
        <Request/>
    </div>
  )
}

Owner.defaultProps={
    profileImg: "https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246__340.png",
    backgroundImg: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg",
    username: "Mohammed E",
    city: "Marrakech"
}
export default Owner;