import React, { useState } from 'react';
import "./avatar.css";
import { useDispatch } from 'react-redux';
import { useMedia } from 'use-media';
import Picture from './picture/Picture';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import pager from '../../../../redux/actions/pager';
import browser from '../../../../redux/actions/browser';

function Avatar({username}) {
  const dispatch=useDispatch();
  const [open, setOpen]=useState(false);
  const toggle=()=>{
    setOpen(!open);
  };
  const isMiniScreen=useMedia({maxWidth: "600px"});
  return (
      <div className="avatar">
            <Picture width={"40px"} border='2px solid rgb(188, 151, 223)' auto={false}/>
            <h3>{username}</h3>
            <div className="about-mee" onClick={toggle}>
              {
                !open ? <ExpandMoreOutlinedIcon/>: <ExpandLessOutlinedIcon/>
              }
            </div>
            {open && 
              <ul className="my-actions">
                {isMiniScreen && 
                <li className="my-act" onClick={()=>dispatch(browser("banner"))}>
                  <DashboardOutlinedIcon/> <h5>Dashboard</h5></li>
                }
                <li className="my-act" onClick={()=>dispatch(browser("profile"))}>
                  <AccountBoxOutlinedIcon/> <h5>View Profile</h5>
                </li>
                <li className="my-act"><ChangeCircleOutlinedIcon/> <h5>Update Profile</h5></li>
                <li className="my-act"><DeleteOutlineOutlinedIcon/> <h5>Delete Account</h5></li>
                <li className="my-act"><CloudQueueOutlinedIcon/> <h5>View Network</h5></li>
                <li className="my-act"><StackedLineChartOutlinedIcon/> <h5>Statistics</h5></li>
                <li className="my-act" onClick={()=>dispatch(pager("home"))} ><LogoutOutlinedIcon/> <h5>Log Out</h5></li>
              </ul>
            }
      </div>
  );
}

Avatar.defaultProps={
    username : "John Doe"
}
export default Avatar;
