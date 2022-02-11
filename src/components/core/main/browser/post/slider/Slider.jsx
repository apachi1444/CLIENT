import React from 'react';
import { v4 as uuid } from 'uuid';
import "./slider.css";

function Slider({images}) {
  return (
    <div className="slider">
        {images.map((item, i)=><img src={item} alt={`Item number ${i}`} key={uuid()}/>)}
    </div>
  );
}

export default Slider;
