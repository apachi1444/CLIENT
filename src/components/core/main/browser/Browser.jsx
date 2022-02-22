import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from "./post/Post";
import "./browser.css";
import Profile from "./profile/Profile";
import Banner from "./../banner/Banner";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import browser from '../../../../redux/actions/browser';

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
