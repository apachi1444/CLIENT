import React from 'react';
import "./carte.css";

function Carte({img, imageLabel, buttonLabel, cb}) {
    const divStyle={backgroundImage: `url(${img})`, backgroundSize: "cover"};
    return (
        <div className="carte" style={divStyle}>
            <h3>{imageLabel}</h3>
            <button onClick={cb} className='goto'>{buttonLabel}</button>
        </div>
    )
}
Carte.defaultProps={
    cb: ()=>{}
}
export default Carte
