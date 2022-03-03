import React from 'react';
import { motion } from 'framer-motion';
import Field from "../../../../home/main/sign/signUp/Field";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "../../../../home/main/sign/signUp/signUp.css";

function Delete() {
    return (
        <motion.form className="sign-up"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3}}
        >
            <Field icon={<MailOutlineIcon/>} label={"Your Email"} isEmail={true}/>
            <Field icon={<LockOpenIcon/>} label={"Password"} isDelete={true}/>
            <Field icon={<LockOpenIcon/>} label={"Confirm"} isDelete={true}/>
            <button type='submit' className='signning'>
                Delete Account
            </button>
        </motion.form>
    )
}

export default Delete;
