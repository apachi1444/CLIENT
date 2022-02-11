import React, { useState, useRef } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { v4 as uuid } from 'uuid';

import "./item.css";
function Item({icon, title, body}) {
  const [open, setOpen]=useState(false);
  const itemRef=useRef(null);
  const toggle=()=>{
    setOpen(!open);
    if(itemRef.current && !open) 
    itemRef.current.scrollIntoView({behavior: "smooth", block: "center"});
  };
  return (
      <div className="item">
          <div className="item-head" >
            <div className="item-icon" onClick={toggle}>{icon}</div>
            <h4 onClick={toggle}>{title}</h4>
          </div>
          <div className="item-body" ref={itemRef}>
              {open && body.map((item)=>(<>{item}</>))}
          </div>
      </div>
  );
}

Item.defaultProps={
  title: "Title",
  body: [<p>"Items List"</p>],
  icon: <AppsIcon/>,
  key: uuid()
}
export default Item;
