import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { v4 as uuid} from 'uuid';
import "./details.css";
function Details({detailsObject}) {
  const [open, setOpen]=useState(false);
  const keys_t=Object.keys(detailsObject).filter(key=>key!=="moreInfo");  
  return (
      <>
        <div className="open-it" onClick={()=>setOpen(!open)}>{!open ? <ExpandMoreIcon/>: <ExpandLessIcon/>}</div> 
        {open && <div className="details">
          <div className='boxes-d'>
            {keys_t.map((key)=>(
                <div className="key-value" key={uuid()}>
                    <h4 className="key">{`${key} : `}</h4>
                    <p>{detailsObject[key]}</p>
                </div>
            ))}
          </div>
          <p>{detailsObject.moreInfo!==null && detailsObject.moreInfo}</p>
        </div>}
      </>
  );
}

export default Details;
