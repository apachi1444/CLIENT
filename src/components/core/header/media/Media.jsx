import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Messanger from './messanger/Messanger';
import messanger from '../../../../redux/actions/messanger';
import "./media.css";

function Media({invitations, messages, notifications}) {
  const dispatch=useDispatch();
  const mess=useSelector(state=>state.messanger);

  const chat=(page)=>{
    if(mess.current===page) return ()=>dispatch(messanger('none'));
    switch(page){
      case 'notifications':
        return ()=>{
          dispatch(messanger({on: true, current: 'notifications'}));
        }
      case 'requests':
        return ()=>{


          dispatch(messanger({on: true, current: 'requests'}));
        }
      default:
        return ()=>{
          dispatch(messanger({on: true, current: 'messages'}));
        };
    }
  };
  return (
    <div className="media-container">
        <div className="media">
          <div className="media-box" onClick={chat('messages')}>
            <button className="messanger-bt"><MessageOutlinedIcon/></button>
            <div className="num">{messages}</div>
          </div>
          <div className="media-box" onClick={chat('notifications')}>
            <button className="messanger-bt"><NotificationsNoneOutlinedIcon/></button>
            <div className="num">{notifications}</div>
          </div>
          <div className="media-box" onClick={chat('requests')}>
            <button className="messanger-bt"><PersonAddOutlinedIcon/></button>
            <div className="num">{invitations}</div>
          </div>
        </div>
        <Messanger on={mess.on} current={mess.current}/>
    </div>
 );
}

Media.defaultProps={
    invitations: 0,
    messages: 0,
    notifications: 0
}
export default Media;
