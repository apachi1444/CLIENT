import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from "./post/Post";
import "./browser.css";
import Profile from "./profile/Profile";
import Banner from "./../banner/Banner";
import Network from "./network/Network";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import browser from '../../../../redux/actions/browser';
import Password from './password/Password';
import Delete from './delete/Delete';

function Browser() {
  const ref=useRef(null);
  const page=useSelector(state=>state.browser);
  const dispatch=useDispatch();
  const goHome=()=>{
    dispatch(browser("posts"));
  }

  const handleSave=()=>{
    //code goes here to save changes...
  };
  useEffect(() => {
    if(ref.current) ref.current.scrollIntoView({behavior: "smooth", block: "center"});
  }, []);
  switch(page){
    case 'profile':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Profile/>
        </div>
      );
    case 'banner':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Banner/>
        </div>
      );
    case 'editProfile':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <div className="go-save" onClick={handleSave}><SaveAsOutlinedIcon/></div>
          <Profile mode={true}/>
        </div>
      );
    case 'network':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Network/>
        </div>
      );
    case 'changePassword':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Password/>
        </div>
      );
    case 'deleteAccount':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Delete/>
        </div>
      );
    default:
      return (
        <div className="browser">
          <div className="start_" ref={ref}></div>
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
