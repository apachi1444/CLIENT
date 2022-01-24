import React from 'react';
import Field from './Field';
import './signUp.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

function SignUp() {
    const dispatch = useDispatch();
    return (
        <div className="sign-up">
            <div className="avatar"><PermIdentityIcon/></div>
            <Field label={"Username"} />
            <Field icon={<MailOutlineIcon/>} label={"Email"} isEmail={true}/>
            <Field icon={<LockOpenIcon/>} label={"Password"} isPassword={true}/>
            <Field icon={<LockOpenIcon/>} label={"Confirm"} isPassword={true}/>
            <div onClick={()=>dispatch(pager("signin"))} className="have-account">Already Have Account?!</div>
            <div className="forgot-password">Forgot Password?!</div>
            <button className='signning'>Sign Up</button>
        </div>
    )
}

export default SignUp;
