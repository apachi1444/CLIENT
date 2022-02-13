import React from 'react';
import Item from "../item/Item";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import "./groupb.css";
import Settings from './settings/Settings';
import Privacy from './privacy/Privacy';

function Groupb() {
  return (
      <div className="groupb">
          <Item icon={<SettingsOutlinedIcon/>} title={"Settings"} body={[<Settings/>]}/>
          <Item icon={<LockOutlinedIcon/>} title={"Privacy"} body={[<Privacy/>]}/>
      </div>
  );
}

export default Groupb;
