import React from 'react';
import useMedia from 'use-media';
import Banner from './banner/Banner';
import Browser from './browser/Browser';
import Navigator from './navigator/Navigator';
import "./main.css";

function Main() {
  const isMiniScreen=useMedia({maxWidth: "600px"});
  return (
      <div className="main">
          {isMiniScreen ? <Navigator/>: <Banner/>}
          <Browser/>
      </div>
  );
}

export default Main;
