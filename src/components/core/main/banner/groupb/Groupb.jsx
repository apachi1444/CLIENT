import React from 'react';
import Item from "../item/Item";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { v4 as uuid } from "uuid";

import "./groupb.css";
import Settings from './settings/Settings';
import Privacy from './privacy/Privacy';

function Groupb() {
  return (
      <div className="groupb">
          <Item icon={<SettingsOutlinedIcon/>} title={"Settings"} body={[<Settings/>]} key={uuid()}/>
          <Item icon={<LockOutlinedIcon/>} title={"Privacy"} body={[<Privacy/>]} key={uuid()}/>
      </div>
  );
}

export default Groupb;
