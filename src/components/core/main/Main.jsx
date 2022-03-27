import React from 'react';
import useMedia from 'use-media';
import Banner from './banner/Banner';
import Browser from './browser/Browser';
import "./main.css";

function Main({isAdmin}) {
  const isMiniScreen=useMedia({maxWidth: "600px"});
  return (
      <div className="main">
          {isMiniScreen ? <></>: <Banner isAdmin={isAdmin}/>}
          <Browser isAdmin={isAdmin}/>
      </div>
  );
}

Main.defaultProps={
  isAdmin: false
}
export default Main;
