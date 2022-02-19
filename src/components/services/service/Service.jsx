import React, { useState } from 'react';
import Model from './model/Model';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import './service.css';

function Service({number, title, data}) {
  const [angle, setAngle]=useState(0);
  const [index, setIndex]=useState(0);
  const len=data?.length;
  const ang=(2*Math.PI)/len;

  const handleModel=(flag)=>{
    return ()=>{
      if(flag){
        setIndex(index >= len-1 ? 0 : index+1);
        setAngle(angle+ang);
      }else{
        setIndex(index <= 0 ? len-1 : index-1);
        setAngle(angle-ang);
      };
    }
  };
  return (
    <div className="service">
        <div className="serv-title">
            <h2 className="number">{number}</h2>
            <h3 className="title">{title}</h3>
        </div>
        <div className="model-canvas"><Model turnBy={angle} index={index}/></div>
        <div className="movers-arrows">
          <div onClick={handleModel(true)} className="turn-right"><ArrowCircleRightOutlinedIcon/></div>
          <div onClick={handleModel(false)} className="turn-left"><ArrowCircleLeftOutlinedIcon/></div>
        </div>
    </div>
  );
}

Service.defaultProps={
    number: 1,
    title: 'Real Time Chatting',
    data: [
      'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
      'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
      'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
      'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
      'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
      'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
      'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
    ]
};
export default Service;