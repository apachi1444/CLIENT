import React from 'react';
import Field from '../signUp/Field';
import '../signUp/signUp.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

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
        </div>
    )
}

export default SignIn;