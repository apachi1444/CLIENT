import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import "./item.css";
function Item({icon, title, body}) {
  const [open, setOpen]=useState(false);
  const toggle=()=>setOpen(!open);
  return (
      <div className="item">
          <div className="item-head">
            <div className="item-icon" onClick={toggle}>{icon}</div>
            <h4 onClick={toggle}>{title}</h4>
          </div>
          <div className="item-body">
              {open && body}
          </div>
      </div>
  );
}

Item.defaultProps={
  title: "Title",
  body: "Items List",
  icon: <AppsIcon/>
}
export default Item;
