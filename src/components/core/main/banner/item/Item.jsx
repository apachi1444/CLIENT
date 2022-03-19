import React, { useState, useRef } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { motion } from "framer-motion";
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import "./item.css";

function Item({icon, title, body}) {
  const { theme }=useSelector(state=>state.user);
  const [open, setOpen]=useState(false);
  const itemRef=useRef(null);
  const toggle=()=>{
    setOpen(!open);
    if(itemRef.current && !open) 
    itemRef.current.scrollIntoView({behavior: "smooth", block: "center"});
  };
  return (
      <motion.div className={`item item-${theme}`}
          initial={{x: 20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.4}}
          key={uuid()}
      >
          <div className={`item-head item-head-${theme}`} >
            <div className="item-icon" onClick={toggle}>{icon}</div>
            <h4 onClick={toggle}>{title}</h4>
          </div>
          <div className={`item-body item-body-${theme}`} ref={itemRef}>
              {open && body.map((item)=>(<div key={uuid()}>{item}</div>))}
          </div>
      </motion.div>
  );
}

Item.defaultProps={
  title: "Title",
  body: [<p>"Items List"</p>],
  icon: <AppsIcon/>
}
export default Item;
