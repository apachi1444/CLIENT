import React from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import './mailer.css';

function Mailer({isOpen, cb}) {
  const styles={color: 'blue', fontWeight: '600', fontSize: 'small'};
  if(!isOpen) return <></>;
  return (
    <form className="mailer">
        <div className="center-mailer">
            <div className="header-mailer">
                <div className="mail-icon"><MailOutlinedIcon/></div>
                <h6>Composing your email</h6>
                <div onClick={cb} className="close-window"><CancelPresentationOutlinedIcon/></div>
            </div>
            <textarea className="email-object" name="email-object" id="objx" placeholder='Object...'></textarea>
            <p style={styles}>Please be concise in composing your email, we appreciate your time.</p>
            <textarea name="email-body" className="email-body" id="body" placeholder='Body...'></textarea>
            <button className="send-email" type='submit'>Send</button>
        </div>
    </form>
  )
}

Mailer.defaultProps={
    isOpen: false,
    cb: ()=>{}
}
export default Mailer;