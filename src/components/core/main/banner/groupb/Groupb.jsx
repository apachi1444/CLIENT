import React from 'react';
import Item from "../item/Item";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./groupb.css";

function Groupb() {
  return (
      <div className="groupb">
          <Item icon={<SettingsOutlinedIcon/>} title={"Settings"}/>
          <Item icon={<LockOutlinedIcon/>} title={"Privacy"}/>
          <Item icon={<LogoutOutlinedIcon/>} title={"Log Out"}/>
      </div>
  );
}

export default Groupb;
