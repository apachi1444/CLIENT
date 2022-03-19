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
  const { theme }=useSelector(state=>state.user);
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
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Profile/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'banner':
      return (
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Banner/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'editProfile':
      return (
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <div className="go-save" onClick={handleSave}><SaveAsOutlinedIcon/></div>
          <Profile mode={true}/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'network':
      return (
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Network/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'changePassword':
      return (
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Password/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'deleteAccount':
      return (
        <div className={`browser browser-${theme}`}>
          <div className="go-home" onClick={goHome}><HomeOutlinedIcon/></div>
          <Delete/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      );
    case 'newPost':
      return (
        <div className={`browser browser-${theme}`}>
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
        <div className={`browser browser-${theme}`}>
          <div className="start_" ref={ref}></div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <motion.div className="add-new" onClick={()=>dispatch(browser("newPost"))}
            initial={{ rotate: "180deg", opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1}}
          ><AddOutlinedIcon/></motion.div>
        </div>
      )
  }
}

export default Browser;
