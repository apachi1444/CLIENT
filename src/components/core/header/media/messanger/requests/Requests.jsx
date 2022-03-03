import React from 'react';
import Notification from '../notifications/Notification';
import './requests.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import messanger from "../../../../../../redux/actions/messanger";
import CloseChat from '../notifications/CloseChat';

function Requests() {
  const dispatch=useDispatch();
  return (
    <motion.div className="requests"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
        <CloseChat cb={()=>{dispatch(messanger({on: false, current: ""}))}}/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
    </motion.div>
  )
}

export default Requests