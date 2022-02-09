import React from 'react';
import Picture from '../../../header/avatar/picture/Picture';
import Controller from "./controller/Controller";
import Details from './details/Details';
import Reaction from './reaction/Reaction';
import Slider from './slider/Slider';
import "./post.css";

function Post({ownerImage, imagesVideosUrls, username, detailsObject, comments, hearts, likes, dislikes}) {
  return (
      <div className="post">
          <div className="post-head">
              <div className="post-pic"><Picture width={"40px"} imgUrl={ownerImage}/></div>
              <h4>{username}</h4>
              <Controller/>
          </div>
          <Slider images={imagesVideosUrls}/>
          <Details detailsObject={detailsObject}/>
          <Reaction comments={comments} hearts={hearts} likes={likes} dislikes={dislikes}/>
      </div>
  );
}

Post.defaultProps={
    ownerImage: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
    imagesVideosUrls: [
        "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__340.jpg",
        "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
        "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg",
        "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg"
    ],
    username: "James B",
    detailsObject: {
        price: "2000Dhs",
        area: '50m^2',
        address: "39882, Sidi Aabad, Marrakesh",
        roomsNumber: 2,
        moreInfo: "This is a room for 2 people as capacity, the price is negotiable with some conditions of course. Just for the record the electricity and water are included, for further info please DM me, I will be happy to help settle in"
    },
    comments: {
        commentsNumber: 0,
        commentsJsx: null
    },
    hearts :0,
    likes : 0,
    dislikes: 0
}
export default Post;
