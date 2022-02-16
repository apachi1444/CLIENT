import React from 'react';
import './conv.css';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function Receipts({sent, recieved, viewed}) {
  return (
    <div className={ viewed ? 'viewed': 'normal' }>
        {
            viewed || (sent && recieved) ? <DoneAllOutlinedIcon/>: 
            sent || recieved ? <CheckOutlinedIcon/>: <AccessTimeOutlinedIcon/>
        }
    </div>
  )
}


export default Receipts