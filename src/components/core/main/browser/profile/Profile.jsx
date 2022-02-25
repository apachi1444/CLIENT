import React from 'react';
import Info from './info/Info';
import Posts from './posts/Posts';
import { motion } from "framer-motion";
import './profile.css';

function Profile({ mode }) {
  return (
    <motion.div className="profile"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3}}
    >
        <Info mode={mode}/>
        <h4 className='all-posts'>All Posts(17)</h4>
        <Posts mode={mode}/>
    </motion.div>
  )
}

Profile.defaultpProps={
  mode: false
}
export default Profile;