import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './card.css';

function Card({details}) {
    return (
        <div className="card">
            <div className="image">
                <img src={details?.image} alt="Room" />
                <div className="location">{details?.location}</div>
                <div className="price">{details?.price}</div>
                <div className="more-about"><MoreVertIcon/></div>
            </div>
        </div>
    );
}

export default Card;
