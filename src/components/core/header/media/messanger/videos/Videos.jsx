import React, { useState } from 'react';
import Video from './video/Video';
import Holder from "./holder/Holder";

import "./videos.css";

function Videos() {
  const [video, setVideo]=useState(false);
  const navigator=()=>{
    setVideo(!video);
  }
  return (
    <>
      {
        video ? <Video navigate={navigator}/>:
        <div className="videos">
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