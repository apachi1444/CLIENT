import React, { useState } from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { useMedia } from 'use-media';
import Logo from "./Logo";
import Mailer from './mailer/Mailer';

import "./contacts.css";
function Contacts() {
  const isSmall=useMedia({maxWidth: '404px'});
  const [open, setOpen]=useState(false);
  const [email, setEmail]=useState(false);
  const mailer=()=>{
    setEmail(!email);
  }
  return (
    <div className="contacts">
      <Logo fill={"rgb(172, 172, 231)"} background={"rgb(19, 19, 94)"} />
      {isSmall &&
        <div onClick={()=>setOpen(!open)} className="contacts-action">
          {open ? <ExpandLessOutlinedIcon/>: <ExpandMoreOutlinedIcon/>}
        </div>
      }
      {((isSmall && open) || (!isSmall && !open)) &&
        <div className="phone-email">
          <div onClick={mailer} className="email">
            <DraftsOutlinedIcon />
            <h6>Send Us An Email</h6>
          </div>
          <div className="phone">
            <LocalPhoneOutlinedIcon />
            <h6>+212712785477</h6>
          </div>
          <Mailer isOpen={email} cb={mailer}/>
        </div>
      }
    </div>
  );
}

export default Contacts;
