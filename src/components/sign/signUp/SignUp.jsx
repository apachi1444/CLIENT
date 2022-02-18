import React from 'react';
import Field from './Field';
import './signUp.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function SignUp() {
    const dispatch = useDispatch();
    return (
        <form className="sign-up">
            <div className="avatar">
                <input type="file" id='ava'/>
                <label htmlFor='ava' className="avatar"><PermIdentityIcon/></label>
                <p>Add Profile Picture</p>
            </div>
            <Field label={"Username"} />
            <Field icon={<MailOutlineIcon/>} label={"Email"} isEmail={true}/>
            <Field icon={<LockOpenIcon/>} label={"Password"} isPassword={true}/>
            <Field icon={<LockOpenIcon/>} label={"Confirm"} isPassword={true}/>
            <div onClick={()=>dispatch(pager("signin"))} className="have-account">Already Have Account?!</div>
            <div className="forgot-password">Forgot Password?!</div>
            <button type='submit' className='signning' onClick={()=>dispatch(pager("core"))/*for testing*/}>
                Sign Up
            </button>
            <h6>Or Sign Up With</h6>
            <div className="o-auth">
                <div className="google"><GoogleIcon style={{fill: '#4885ed'}}/></div>
                <div className="facebook"><FacebookIcon style={{fill: '#3b5998'}}/></div>
                <div className="github"><GitHubIcon style={{fill: '#171515'}}/></div>
                <div className="twitter"><TwitterIcon style={{fill: '#00acee'}}/></div>
            </div>
        </form>
    )
}

export default SignUp;
