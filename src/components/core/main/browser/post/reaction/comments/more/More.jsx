import React from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import "./more.css";

function More({phrase}) {
  return (
    <div className="view-more">
        <ExpandMoreOutlinedIcon/>
        <h4 className='get-more'>{phrase}</h4>
    </div>
  )
}
More.defaultProps={
    phrase: "View More"
}
export default More