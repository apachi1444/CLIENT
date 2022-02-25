import React, { useState } from 'react';
import Audio from "./audio/Audio";
import "./audios.css";
import Holder from './holder/Holder';

function Audios() {
  const [audio, setAudio]=useState(false);
  const navigator=()=>{
    setAudio(!audio);
  }
  return (
    <>
      {
        audio ? <Audio navigate={navigator}/>:
        <div className="audios">
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