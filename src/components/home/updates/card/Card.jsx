import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './card.css';

function Card({details}) {
    const devStyle={
        backgroundImage: `url(${details?.image})`,
        backgroundSize: 'cover'
    }
    return (
        <div className="card">
            <div className="image" style={devStyle}>
                <div className="location">{details?.location}</div>
                <div className="price">{details?.price}</div>
                <div className="more-about"><MoreVertIcon/></div>
            </div>
            <div className="desc">{details?.description}</div>
        </div>
    );
}

export default Card;
