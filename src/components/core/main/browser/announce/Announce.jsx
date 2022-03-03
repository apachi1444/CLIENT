import React, { useState } from "react";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';


function AnnounceForm() {
  const [currentPage, setCurrentPage]=useState(0);
  const handlePage=(flag)=>{
    setCurrentPage(flag ? currentPage+1: currentPage-1);
  }

  switch(currentPage){
    case 0:
      return <Page1 cb={handlePage}/>;
    case 1:
      return <Page2 cb={handlePage}/>;
    case 2:
      return <Page3 cb={handlePage}/>;
    case 3:
      return <Page4 cb={handlePage}/>;
    default:
      return<></>;  
    }
}

export default AnnounceForm;
