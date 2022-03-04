import React, { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import './signUp.css';

function Field({ label, isPassword, isEmail, value, cb }) {
    const [ visible, setVisible ]= useState(false);
    // const [ error, setError ]= useState('');
    // const handleInput=(lab)=>{
    //     return ()=>{
    //         cb();
    //         setError(verifyInput(lab, value));
    //     }
    // };
    return (
        <>
            <div className="field">
                <input value={value} type={isPassword && !visible ? "password": isEmail ? "email": "text"} 
                onChange={cb} placeholder={label}/>
                <div className="view-me" onClick={()=>setVisible(!visible)} >
                    { isPassword && (!visible ? <VisibilityOutlinedIcon/>: <VisibilityOffOutlinedIcon/>) }
                </div>
            </div>
            {/* <p className="error-input">{error}</p> */}
        </>
    )
};

Field.defaultProps={
    icon: "",
    label: "Label",
    isPassword: false,
    isEmail: false,
    value: "",
    cb: ()=>{}
};

export default Field
