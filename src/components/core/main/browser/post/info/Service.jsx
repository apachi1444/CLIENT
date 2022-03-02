import React from 'react';
import "./info.css";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function Service({title}) {
  return (
    <div className="serv-info">
        <p className="serv-t">{title}</p>
        <CheckCircleOutlineOutlinedIcon/>
    </div>
  )
}
Service.defaultProps={
    title: ""
}
export default Service