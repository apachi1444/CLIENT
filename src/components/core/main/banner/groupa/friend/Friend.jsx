import React from 'react'
import { v4 as uuid } from 'uuid';
import "./friend.css";
import Picture from '../../../../header/avatar/picture/Picture';
import FriendAction from './FriendAction/FriendAction';

function Friend({imgUrl, username, userId}) {//userId will be used later on
  return (
    <div className='friend'>
        <div className="friend-pic">
            <Picture imgUrl={imgUrl} width={"40px"} auto={false} border={"1px solid blue"}/>
        </div>
        <h3>{username}</h3>
        <div className="friend-ac"><FriendAction/></div>
    </div>
  )
};

Friend.defaultProps={
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    username: "Jordan B",
    userId: uuid(),
    key: uuid()
}
export default Friend;