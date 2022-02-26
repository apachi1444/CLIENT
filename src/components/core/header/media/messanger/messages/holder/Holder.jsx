import React from 'react';
import postedSince from "../../../../../../../logic/algorithms/postedSince";
import { motion } from "framer-motion";
import Picture from "../../../../avatar/picture/Picture";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import "./holder.css";

function Holder({ imgUrl, username, timeStamp, isMuted, isArchived, volume, delete_t, archive, cb}) {
  return (
    <motion.div className={`holder${isArchived ? ' shady': ''}`}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  )
}

Holder.defaultProps={
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg',
    username: "James B",
    timeStamp: new Date(),
    isMuted: false,
    isArchived: false,
    volume: ()=>{},
    archive: ()=>{},
    delete_t: ()=>{},
    cb: ()=>{}
}

export default Holder