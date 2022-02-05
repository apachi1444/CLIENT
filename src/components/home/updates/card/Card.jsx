import React from 'react';
import './card.css';

function Card({details}) {
    return (
        <div className="card">
            <div className="image">
                <img src={details?.image} alt="Room" />
                <h4 className="location">{details?.location}</h4>
                <h4 className="price">{details?.price}</h4>
            </div>
        </div>
    );
}

export default Card;
