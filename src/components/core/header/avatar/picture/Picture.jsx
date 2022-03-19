import React from 'react';
import "./picture.css";

//style={stylesImg}
function Picture({imgUrl, width, auto, border, isCurrent, cb}) {
    const stylesDiv={width, height: width, border};
    const stylesImg={width: '100%', clipPath: 'circle()'};
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
    border : "1px solid rgb(197, 197, 221)",
    auto: true,
    isCurrent: false,
    cb: ()=>{}
}
export default Picture;
