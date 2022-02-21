import React, { useState } from 'react';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import "./online.css";
import Picture from '../../../header/avatar/picture/Picture';
import {v4 as uuid} from 'uuid';

function Online({onlinePeople, list}) {
    const [open, setOpen]=useState(false);
    const toggle=()=>setOpen(!open);
    return (
        <div className="online">
            <div className="head" onClick={toggle}>
                <div className="icon-t"><PeopleOutlineIcon/></div> 
                <h3>Online People</h3> 
                <h4>{onlinePeople}</h4>
                <div className="open-icon">
                    {open ? <ExpandLessOutlinedIcon/>: <ExpandMoreOutlinedIcon/>}
                </div>
            </div>
            { open && 
            <div className="connecters-list">
                {list.map(item=>(
                    <div className="online-person" key={uuid()}>
                        <Picture imgUrl={item.imgUrl} auto={false} width={"50px"} border={"2px solid pink"} isCurrent={true}/>
                        <h5>{item.username}</h5>
                    </div>
                ))}
            </div>}
        </div>
    );
};
 Online.defaultProps={
     onlinePeople: 13,
     list:[
         {username: "Sam O", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Johny", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "James El", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"},
         {username: "Tommy", imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg"}
     ]
 }

export default Online;
