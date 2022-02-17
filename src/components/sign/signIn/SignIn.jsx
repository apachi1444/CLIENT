import React from 'react';
import Field from '../signUp/Field';
import '../signUp/signUp.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";


import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function SignIn() {
    const dispatch = useDispatch();
    return (
        <div className="sign-up">
            
            <div className="avatar"><PermIdentityIcon/></div>
            <Field label={"Username"} />
            <Field icon={<LockOpenIcon/>} label={"Password"} isPassword={true}/>
            <div onClick={()=>dispatch(pager("signup"))} className="have-account">Don't Have Account?!</div>
            <div className="forgot-password">Forgot Password?!</div>
            <button className='signning' onClick={()=>dispatch(pager("core"))/*for testing*/}>Sign In</button>
            <h6>Or Sign Up With</h6>
            <div className="o-auth">
                <div className="o-icon google"><GoogleIcon/></div>
                <div className="o-icon facebook"><FacebookIcon/></div>
                <div className="o-icon github"><GitHubIcon/></div>
                <div className="o-icon twitter"><TwitterIcon/></div>
            </div>
        </div>
    )
}

export default SignIn;