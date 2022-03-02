import React, { useState } from 'react';
import Video from './video/Video';
import Holder from "./holder/Holder";
import { useDispatch } from 'react-redux';
import messanger from "../../../../../../redux/actions/messanger";
import CloseChat from '../notifications/CloseChat';
import "./videos.css";

function Videos() {
  const dispatch=useDispatch();
  const [video, setVideo]=useState(false);
  const navigator=()=>{
    setVideo(!video);
  }
  return (
    <>
      {
        video ? <Video navigate={navigator}/>:
        <div className="videos">
          <CloseChat cb={()=>{dispatch(messanger({on: false, current: ""}))}}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
          <Holder navigate={navigator}/>
        </div>
      }
    </>
  )
}

export default Videos;