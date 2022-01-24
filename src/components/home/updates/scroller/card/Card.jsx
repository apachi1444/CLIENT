import React from 'react'
import "./card.css";

function Card({details}) {
    return (
        <div className="card">
            <div  style={{backgroundImage: `url(${details?.image})`}} className="room">
                <div className="location">{details?.location}</div>
                <div className="price">{details?.price}</div>
                <div className="more"><h6>More</h6></div>
            </div>
            <div className="desc">
                {details?.description}
            </div>
        </div>
    )
}

export default Card;
