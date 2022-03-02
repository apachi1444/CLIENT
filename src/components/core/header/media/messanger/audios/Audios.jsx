import React, { useState } from 'react';
import Audio from "./audio/Audio";
import "./audios.css";
import Holder from './holder/Holder';
import { useDispatch } from 'react-redux';
import messanger from "../../../../../../redux/actions/messanger";
import CloseChat from '../notifications/CloseChat';

function Audios() {
  const dispatch=useDispatch();
  const [audio, setAudio]=useState(false);
  const navigator=()=>{
    setAudio(!audio);
  }
  return (
    <>
      {
        audio ? <Audio navigate={navigator}/>:
        <div className="audios">
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

export default Audios;