import React, { useState } from "react";
import { useSelector } from "react-redux";
import Picture from "../../../header/avatar/picture/Picture";
import Controller from "./controller/Controller";
import Reaction from "./reaction/Reaction";
import Slider from "./slider/Slider";
import Info from "./info/Info";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import postedSince from "../../../../../logic/algorithms/postedSince";
import "./post.css";

function Post({
  ownerImage,
  imagesVideosUrls,
  price,
  area,
  address,
  rooms,
  username,
  isMine,
  comments,
  hearts,
  likes,
  dislikes,
  description,
  commentsTree,
  stars,
  postTime,
  mode,
}) {
  const [des, setDes] = useState(description);
  const { theme } = useSelector((state) => state.user);
  const handleDes = (e) => {
    setDes(e.target.value);
  };
  return (
    <div className={`post post-${theme}`}>
      <div className="post-head">
        <div className="post-pic">
          <Picture width={"40px"} auto={false} imgUrl={ownerImage} />
        </div>
        <h4>{username}</h4>
        <div className="stars">
          <div className="user-stars">
            <StarsOutlinedIcon />
          </div>
          <span className="str">{stars}</span>
        </div>
        <Controller isMe={isMine} />
      </div>
      <Slider images={imagesVideosUrls} />
      <Info />
      {mode ? (
        <textarea
          value={des}
          onChange={handleDes}
          name="desc"
          id="desc"
          className="desc-field"
        ></textarea>
      ) : (
        <p className="describe">{description}</p>
      )}
      <p className="post-date">{`Posted ${postedSince(postTime)}`}</p>
      <Reaction
        comments={comments}
        hearts={hearts}
        likes={likes}
        dislikes={dislikes}
        commentsTree={commentsTree}
      />
    </div>
  );
}

Post.defaultProps = {
  ownerImage:
    "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  imagesVideosUrls: [
    "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__340.jpg",
    "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg",
    "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
  ],
  username: "James B",
  comments: 0,
  hearts: 0,
  likes: 0,
  dislikes: 0,
  stars: 300,
  rooms: 3,
  area: "60m^2",
  price: "2000Dhs",
  address: "39882, Sidi Aabad, Marrakesh",
  description:
    "This is a room for 2 people as capacity, the price is negotiable with some conditions of course. Just for the record the electricity and water are included, for further info please DM me, I will be happy to help you settle in",
  postTime: new Date(),
  mode: false,
  isMine: false,
};
export default Post;
