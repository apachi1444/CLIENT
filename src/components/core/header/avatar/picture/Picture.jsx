import React from 'react';
import "./picture.css";

function Picture({imgUrl, width, auto, border, isCurrent, cb}) {
    const stylesDiv={width, height: width, border};
    const stylesImg=(auto ? {width: "auto", height: "100%"}: {width: "100%", height: "auto"});
    return (
        <div className="picture" style={stylesDiv} onClick={cb}>
            <img src={imgUrl} alt="Avatar" style={stylesImg}/>
            {isCurrent && <div className='red-dot'></div>}
        </div>
    );
}

Picture.defaultProps={
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    width: "15px",
    border : "1px solid pink",
    auto: true,
    isCurrent: false,
    cb: ()=>{}
}
export default Picture;
