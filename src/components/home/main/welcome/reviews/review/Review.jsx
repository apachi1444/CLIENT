import React from 'react';
import Picture from '../../../../../core/header/avatar/picture/Picture';
import "./review.css";


function Review({image, name, profession, feedback}) {
  return(
    <div className="review">
        <div className="image-wrapper">
            <Picture imgUrl={image} width={'60px'} auto={false} border={"2px solid blueviolet"}/>
            <h3 className="name">{name}</h3>
            <div className="reviewer-job">{profession}</div>
        </div>
        <p>{feedback}</p>
    </div>
  );
}

export default Review;
