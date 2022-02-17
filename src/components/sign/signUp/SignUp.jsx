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
            <div className="avatar"><PermIdentityIcon/></div>
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
                <div className="o-icon google"><GoogleIcon/></div>
                <div className="o-icon facebook"><FacebookIcon/></div>
                <div className="o-icon github"><GitHubIcon/></div>
                <div className="o-icon twitter"><TwitterIcon/></div>
            </div>
        </form>
    )
}

export default SignUp;
