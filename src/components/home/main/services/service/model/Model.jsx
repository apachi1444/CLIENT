import React from 'react';
import Plane from './plane/Plane';
import { v4 as uuid } from 'uuid';

function Model({data, turnBy, index}) {
  const angle=(2*Math.PI)/(data?.length);
  return (
    <div className="model">
        {data.map((item, i)=>(<Plane angle={angle} turnBy={turnBy} key={uuid()} 
              count={i} backgroundImage={item} frontIndex={index}/>))}
    </div>
  )
};

Model.defaultProps={
  index: 0,
  data: [
    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
    'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
    'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
    'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
    'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
    'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
  ],
  turnBy: 0
}
export default Model;