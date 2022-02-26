import React from 'react';
import Notification from '../notifications/Notification';
import './requests.css';
import { motion } from 'framer-motion';

function Requests() {
  return (
    <motion.div className="requests"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
    </motion.div>
  )
}

export default Requests