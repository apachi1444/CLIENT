import React from 'react';
import "./carte.css";

function Carte({img, imageLabel, buttonLabel}) {
    const divStyle={backgroundImage: `url(${img})`, backgroundSize: "cover"};
    return (
        <div className="carte" style={divStyle}>
            <h3>{imageLabel}</h3>
            <button className='goto'>{buttonLabel}</button>
        </div>
    )
}

export default Carte
