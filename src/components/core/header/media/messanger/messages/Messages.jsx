import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Holder from './holder/Holder';
import Message from './message/Message';
import './messages.css';

function Messages() {
  const [open, setOpen]=useState(false);
  //this data is just for testing
  const [data, setData]=useState([
    {username: "Tom 1", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 2", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 3", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 4", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 5", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 6", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 7", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 8", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 9", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 10", timeStamp: new Date(), isMuted: false, isArchived: false},
    {username: "Tom 11", timeStamp: new Date(), isMuted: false, isArchived: false}
  ]);
  const del=(i)=>{
    return()=>{
      setData(data.filter((item, ind)=>ind!==i));
    };
  };
  const volume=(i, item)=>{
    return()=>{
      const it={username: item.username, timeStamp: item.timeStamp, isMuted: !item.isMuted, isArchived:item.isArchived};
      setData(data.slice(0, i).concat([it]).concat(data.slice(i+1)));
    }
  }
  const archive=(i, item)=>{
    return()=>{
      const it={username: item.username, timeStamp: item.timeStamp, isMuted: item.isMuted, 
        isArchived:!item.isArchived};
      setData(sortHolders(data.slice(0, i).concat([it]).concat(data.slice(i+1))));
    }
  }
  const cb=()=>setOpen(!open);
  const sortHolders=(arr)=>{
    return arr.sort((a, b)=>a.isArchived-b.isArchived);
  };
  return (
    <div className="messages">
        {!open ? 
        <>
          {data.map((item, i)=>
            <Holder cb={cb} key={uuid()} username={item.username} volume={volume(i, item)} 
            isMuted={item.isMuted} isArchived={item.isArchived} archive={archive(i, item)} delete_t={del(i)}/>
          )}
        </>:<Message cb={cb}/>
        }
    </div>
  )
}

export default Messages;