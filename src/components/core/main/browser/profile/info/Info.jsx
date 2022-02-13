import React from 'react';
import Picture from '../../../../header/avatar/picture/Picture';
import "./info.css";

function Info({backImg, imgUrl, username, bio}) {
    const styles={
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover'
    }
  return (
    <div style={styles} className="info-data">
        <Picture width={"60px"} border={"2px solid pink"} imgUrl={imgUrl} auto={false}/>
        <h3>{username}</h3>
        <p>{bio}</p>
    </div>
  )
}
Info.defaultProps={
    backImg: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    username: "John Doe",
    bio: "A good house is a good thing to have in this life..."

}
export default Info