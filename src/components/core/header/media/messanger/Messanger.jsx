import React from 'react';
import Messages from './messages/Messages';
import './messanger.css';
import Notifications from './notifications/Notifications';
import Requests from './requests/Requests';

function Messanger({on, current}) {  
  if(!on) return <></>;
  return (
    <div className="messanger">
        {
          current==="notifications" ? <Notifications/> :
          current==="requests" ? <Requests/>:
          <Messages/>
        }
    </div>
  )
}

Messanger.defaultProps={
  on: false,
  current: 'messages'
}
export default Messanger