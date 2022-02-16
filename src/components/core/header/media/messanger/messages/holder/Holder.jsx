import React from 'react';
import postedSince from "../../../../../../../logic/algorithms/postedSince";
import "./holder.css";
import Picture from "../../../../avatar/picture/Picture";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

function Holder({ imgUrl, username, timeStamp, isMuted, isArchived, volume, delete_t, archive, cb}) {
  return (
    <div className={`holder${isArchived ? ' shady': ''}`}>
        <Picture imgUrl={imgUrl} width={'60px'} auto={false} cb={cb} border={"1px solid blueviolet"}/>
        <h4 onClick={cb}>{username}</h4>
        <p>{postedSince(timeStamp)}</p>
        <div className="actions-icons">
            <div className="inner-icon" onClick={delete_t}><DeleteOutlineOutlinedIcon/></div>
            <div className="inner-icon" onClick={archive}>
              {!isArchived ? <ArchiveOutlinedIcon/>: <UnarchiveOutlinedIcon/>}
            </div>
            <div className="inner-icon" onClick={volume}>
              {!isMuted ? <VolumeUpOutlinedIcon/>: <VolumeOffOutlinedIcon/>}
            </div>
        </div>
    </div>
  )
}

Holder.defaultProps={
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg',
    username: "James B",
    timeStamp: new Date(),
    isMuted: false,
    cb: ()=>{}
}

export default Holder