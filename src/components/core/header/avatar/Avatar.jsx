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
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';

import pager from '../../../../redux/actions/pager';
import browser from '../../../../redux/actions/browser';

function Avatar({username, isAdmin}) {
  const pages=["banner", "newPost", "profile", "editProfile", "network", "changePassword", "deleteAccount",
    "visists", 'users', 'prices', "activeUsers"
  ];
  const dispatch=useDispatch();
  const [open, setOpen]=useState(false);
  const toggle=()=>{
    setOpen(!open);
  };
  const navigate=(page)=>{
    if(page==="home") return()=>{
      dispatch(pager(page));
      setOpen(!open);
    }
    if(pages.includes(page)) return()=>{
      dispatch(browser(page));
      setOpen(!open);
    };
    return ()=>{};
  }
  const isMiniScreen=useMedia({maxWidth: "600px"});
  return (
      <div className="avatar">
            <Picture width={"60px"} border='2px solid rgb(188, 151, 223)' auto={false}/>
            <h3>{username}</h3>
            <div className="about-mee" onClick={toggle}>
              {
                !open ? <ExpandMoreOutlinedIcon/>: <ExpandLessOutlinedIcon/>
              }
            </div>
            {open && ( 
              !isAdmin ?
              <ul className="my-actions">
                {isMiniScreen && 
                <li className="my-act" onClick={navigate("banner")}>
                  <DashboardOutlinedIcon/> <h5>Dashboard</h5></li>
                }
                <li className="my-act" onClick={navigate("profile")}>
                  <AccountBoxOutlinedIcon/> <h5>View Profile</h5>
                </li>
                <li className="my-act" onClick={navigate("editProfile")}>
                  <ChangeCircleOutlinedIcon/> <h5>Update Profile</h5>
                </li>
                <li className="my-act" onClick={navigate("network")}>
                  <CloudQueueOutlinedIcon/> <h5>View Network</h5>
                </li>
                <li className="my-act">
                  <StackedLineChartOutlinedIcon/> <h5>Statistics</h5>
                </li>
                <li className="my-act" onClick={navigate("changePassword")}>
                  <VpnKeyOutlinedIcon/> <h5>Change Password</h5>
                </li>
                <li className="my-act" onClick={navigate("deleteAccount")}>
                  <DeleteOutlineOutlinedIcon/> <h5>Delete Account</h5>
                </li>
                <li className="my-act" onClick={navigate("home")} >
                  <LogoutOutlinedIcon/> <h5>Log Out</h5>
                </li>
              </ul>:
              <ul className="my-actions">
                {isMiniScreen && 
                <li className="my-act" onClick={navigate("banner")}>
                  <DashboardOutlinedIcon/> <h5>Dashboard</h5></li>
                }
                <li className="my-act" onClick={navigate("users")}>
                  <PeopleOutlineIcon/> <h5>Users</h5>
                </li>
                <li className="my-act" onClick={navigate("visits")}>
                  <TourOutlinedIcon/> <h5>Daily Visits</h5>
                </li>
                <li className="my-act" onClick={navigate("prices")}>
                  <AttachMoneyOutlinedIcon/> <h5>Prices</h5>
                </li>
                <li className="my-act" onClick={navigate("activeUsers")}>
                  <CircleNotificationsOutlinedIcon/> <h5>Most Active Users</h5>
                </li>
                <li className="my-act">
                  <StackedLineChartOutlinedIcon/> <h5>More Statistics</h5>
                </li>
                <li className="my-act" onClick={navigate("changePassword")}>
                  <VpnKeyOutlinedIcon/> <h5>Change Password</h5>
                </li>
                <li className="my-act" onClick={navigate("deleteAccount")}>
                  <DeleteOutlineOutlinedIcon/> <h5>Delete Account</h5>
                </li>
                <li className="my-act" onClick={navigate("home")} >
                  <LogoutOutlinedIcon/> <h5>Log Out</h5>
                </li>
            </ul>
            )}
      </div>
  );
}

Avatar.defaultProps={
    username : "John Doe",
    isAdmin: false
}
export default Avatar;
