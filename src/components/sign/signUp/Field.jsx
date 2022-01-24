import React, { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import './signUp.css';

function Field({ icon, label, isPassword, isEmail }) {
    const [ visible, setVisible ]= useState(false);
    return (
        <div className="field">
            { icon && <div className="icon">{icon}</div> }
            <input type={isPassword && !visible ? "password": isEmail ? "email": "text"} placeholder={label}/>
            <div className="border"></div>
            <div className="view-me" onClick={()=>setVisible(!visible)} >
                { isPassword && (visible ? <VisibilityOutlinedIcon/>: <VisibilityOffOutlinedIcon/>) }
            </div>
        </div>
    )
};

Field.defaultProps={
    icon: "",
    label: "Label",
    isPassword: false,
    isEmail: false
};

export default Field
