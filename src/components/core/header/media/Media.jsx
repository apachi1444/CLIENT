import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

import Messanger from './messanger/Messanger';
import messanger from '../../../../redux/actions/messanger';
import "./media.css";

function Media({invitations, messages, notifications, audio, video}) {
  const dispatch=useDispatch();
  const mess=useSelector(state=>state.messanger);

  const chat=(page)=>{
    if(mess.current===page) return ()=>dispatch(messanger('none'));
    if(['notifications', 'requests', 'videos', 'audios'].includes(page)) return ()=>{
      dispatch(messanger({on: true, current: page}));
    }
    return ()=>{
      dispatch(messanger({on: true, current: 'messages'}));
    };
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
          <div className="media-box" onClick={chat('audios')}>
            <button className="messanger-bt"><LocalPhoneOutlinedIcon/></button>
            <div className="num">{audio}</div>
          </div>
          <div className="media-box" onClick={chat('videos')}>
            <button className="messanger-bt"><VideocamOutlinedIcon/></button>
            <div className="num">{video}</div>
          </div>
        </div>
        <Messanger on={mess.on} current={mess.current}/>
    </div>
 );
}

Media.defaultProps={
    invitations: 0,
    messages: 0,
    notifications: 0,
    audio: 0,
    video: 0
}
export default Media;
