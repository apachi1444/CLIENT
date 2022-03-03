import React from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { motion } from "framer-motion";
import './mailer.css';

function Mailer({isOpen, cb}) {
  const styles={
    color: 'blue', fontWeight: '600', fontSize: 'small',
    padding: "4px",
    borderRadius: "600px"
  };
  if(!isOpen) return <></>;
  return (
    <motion.form className="mailer"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring"}}
    >
        <div className="center-mailer">
            <div className="header-mailer">
                <div className="mail-icon"><MailOutlinedIcon/></div>
                <h4>Composing your email</h4>
                <div onClick={cb} className="close-window"><CancelPresentationOutlinedIcon/></div>
            </div>
            <textarea className="email-object" name="email-object" id="objx" placeholder='Object...'></textarea>
            <p style={styles}>Please be concise in composing your email, we appreciate your time.</p>
            <textarea name="email-body" className="email-body" id="body" placeholder='Body...'></textarea>
            <button className="send-email" type='submit'>Send</button>
        </div>
    </motion.form>
  )
}

Mailer.defaultProps={
    isOpen: false,
    cb: ()=>{}
}
export default Mailer;