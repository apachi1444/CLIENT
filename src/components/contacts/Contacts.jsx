import React from 'react';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import "./contacts.css";

function Contacts() {
    return (
        <div className='contacts'>
            <div className="email">
                <DraftsOutlinedIcon/>
                <h6>someemailgoeshere@gmail.com</h6>
            </div>
            <div className="phone">
                <LocalPhoneOutlinedIcon/>
                <h6>+212712785477</h6>
            </div>
        </div>
    )
}

export default Contacts;