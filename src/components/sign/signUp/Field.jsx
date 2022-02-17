import React, { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import './signUp.css';

function Field({ label, isPassword, isEmail, cb }) {
    const [ visible, setVisible ]= useState(false);
    const [data, setData]=useState('');
    const cbx=(e)=>{
        setData(e?.target?.value);
        cb(data);
    }
    return (
        <div className="field">
            <input value={data} type={isPassword && !visible ? "password": isEmail ? "email": "text"} 
            onChange={cbx} placeholder={label}/>
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
    isEmail: false,
    cb: ()=>{}
};

export default Field
