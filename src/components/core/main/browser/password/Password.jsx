import React from 'react';
import { motion } from 'framer-motion';
import Field from "../../../../sign/signUp/Field";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "../../../../sign/signUp/signUp.css";

function Password() {
    return (
        <motion.form className="sign-up"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3}}
        >
            <Field icon={<MailOutlineIcon/>} label={"Your Email"} isEmail={true}/>
            <Field icon={<LockOpenIcon/>} label={"Current Password"} isPassword={true}/>
            <Field icon={<LockOpenIcon/>} label={"New Password"} isPassword={true}/>
            <Field icon={<LockOpenIcon/>} label={"Confirm Password"} isPassword={true}/>
            <button type='submit' className='signning'>
                Change Password
            </button>
        </motion.form>
    )
}

export default Password;
