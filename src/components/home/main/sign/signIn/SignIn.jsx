import React,  { useState } from 'react';
import Field from '../signUp/Field';
import '../signUp/signUp.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useDispatch } from "react-redux";
import pager from "../../../../../redux/actions/pager";

import { motion }from "framer-motion";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Processing from '../signUp/Processing';

function SignIn() {
    const dispatch = useDispatch();
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [processing, setProcessing]=useState(false);
    const loginHandler=(e)=>{
        e.preventDefault();
        setProcessing(true);
        //api calling
    }
    return (
        <motion.div className="sign-up"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Field label={"Username"} value={username} cb={(e)=>setUsername(e?.target?.value)}/>
            <Field icon={<LockOpenIcon/>} label={"Password"} isPassword={true}  value={password} 
                cb={(e)=>setPassword(e?.target?.value)}/>
            <div onClick={()=>dispatch(pager("signup"))} className="have-account">Don't Have Account?!</div>
            <div className="forgot-password">Forgot Password?!</div>
            <button className='signning' onClick={loginHandler}>Sign In</button>
            <h6>Or Log In With</h6>
            <div className="o-auth">
                <div className="google"><GoogleIcon style={{fill: '#4885ed'}}/></div>
                <div className="facebook"><FacebookIcon style={{fill: '#3b5998'}}/></div>
                <div className="github"><GitHubIcon style={{fill: '#171515'}}/></div>
                <div className="twitter"><TwitterIcon style={{fill: '#00acee'}}/></div>
            </div>
             <Processing flag={processing} width={100}/>
        </motion.div>
    )
}

export default SignIn;