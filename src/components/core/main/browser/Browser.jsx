import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from "./post/Post";
import Profile from "./profile/Profile";
import Banner from "./../banner/Banner";
import Network from "./network/Network";
import { motion } from "framer-motion";
import "./browser.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import browser from '../../../../redux/actions/browser';
import Password from './password/Password';
import Delete from './delete/Delete';
import AnnounceForm from './announce/Announce';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
  const newPost=<motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
    initial={{ rotate: "180deg", opacity: 1 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
  ><AddOutlinedIcon/></motion.div>;
  switch(page){
    case 'profile':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Profile/>
          {newPost}
        </div>
      );
    case 'banner':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Banner/>
          {newPost}
        </div>
      );
    case 'editProfile':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <div className="go-save" onClick={handleSave}><SaveAsOutlinedIcon/></div>
          <Profile mode={true}/>
          {newPost}
        </div>
      );
    case 'network':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Network/>
          {newPost}
        </div>
      );
    case 'changePassword':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Password/>
          {newPost}
        </div>
      );
    case 'deleteAccount':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Delete/>
          {newPost}
        </div>
      );
    case 'newPost':
      return (
        <div className="browser">
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <motion.div className="new-post-t"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3}}
          >
            <AnnounceForm/>
          </motion.div>
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
          {newPost}
        </div>
      )
  }
}

export default Browser;
