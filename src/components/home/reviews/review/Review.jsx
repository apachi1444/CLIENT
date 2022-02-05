import React from 'react';
import "./review.css";


function Review({image, name, feedback}) {
  return(
    <div className="review">
        <div className="name">{name}</div>
        <div className="image-wrapper">
            <img src={image} alt="Reviewer" />
        </div>
        <p>{feedback}</p>
    </div>
  );
}

export default Review;
