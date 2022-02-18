import React from 'react';
import Field from '../signUp/Field';
import '../signUp/signUp.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
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
            <Field label={"Username"} />
            <Field icon={<LockOpenIcon/>} label={"Password"} isPassword={true}/>
            <div onClick={()=>dispatch(pager("signup"))} className="have-account">Don't Have Account?!</div>
            <div className="forgot-password">Forgot Password?!</div>
            <button className='signning' onClick={()=>dispatch(pager("core"))/*for testing*/}>Sign In</button>
            <h6>Or Log In With</h6>
            <div className="o-auth">
                <div className="google"><GoogleIcon style={{fill: '#4885ed'}}/></div>
                <div className="facebook"><FacebookIcon style={{fill: '#3b5998'}}/></div>
                <div className="github"><GitHubIcon style={{fill: '#171515'}}/></div>
                <div className="twitter"><TwitterIcon style={{fill: '#00acee'}}/></div>
            </div>
        </div>
    )
}

export default SignIn;