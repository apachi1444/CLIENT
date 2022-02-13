import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from "./post/Post";
import "./browser.css";
import Profile from "./profile/Profile";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import browser from '../../../../redux/actions/browser';

function Browser() {
  const page=useSelector(state=>state.browser);
  const dispatch=useDispatch();
  const goHome=()=>{
    dispatch(browser("posts"));
  }
  switch(page){
    case 'profile':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Profile/>
        </div>
      );
    default:
      return (
        <div className="browser">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      )
  }
}

export default Browser;
