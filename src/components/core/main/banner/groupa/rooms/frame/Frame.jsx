import React from 'react';
import "./frame.css";

function Frame({imgUrl, price, city, area}) {
  return (
    <div className="frame" style={{backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <h6 className='price-r'>{price}</h6>
        <h6 className='city-r'>{city}</h6>
        <h6 className='area-r'>{area}</h6>
        <h6 className='more-r'>More</h6>
    </div>
  )
}

Frame.defaultProps={
    imgUrl: "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg",
    price: "2000Dhs",
    city: "Marrakesh",
    area: "100m^2"
}
export default Frame