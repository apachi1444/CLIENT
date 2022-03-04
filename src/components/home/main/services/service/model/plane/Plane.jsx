import React from 'react';
import useWindowDimensions from '../../../../../../../logic/algorithms/hooks/windowDims';
import './plane.css';

//for testing
// import Picture from "../../../../core/header/avatar/picture/Picture";
// import Post from '../../../../core/main/browser/post/Post';

function Plane({angle, count, backgroundImage, frontIndex, turnBy, component}) {
    const { width, height }=useWindowDimensions();
    const radius=(width > 400? width/7: 120);
    const xMoves=radius*Math.sin(count*angle+turnBy);
    const zMoves=radius*Math.cos(count*angle+turnBy);
    const stylesA={ 
        width: (width < 851 ? width/3: width/5), 
        height: height/4, 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        transform: `perspective(1000px) rotateX(-10deg) rotateY(${(180*(count*angle+turnBy))/Math.PI}deg)
                translateX(${xMoves}px) translateY(-35px) translateZ(${zMoves}px)`,
        maxWidth: '100%'
    };
    const stylesB={ 
        backgroundColor: "white",
        width: stylesA.width, 
        height: stylesA.height, 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        transform: `perspective(1000px) rotateX(-10deg) rotateY(${(180*(count*angle+turnBy))/Math.PI}deg)
                translateX(${xMoves}px) translateY(-35px) translateZ(calc(${zMoves}px + 8px))`,
        maxWidth: '100%'
    };
  return (
    <>
        <div style={stylesA} className={`plane${frontIndex===count ? ' front-plane': ''}`}>
        </div>
        <div style={stylesB} className={`plane${frontIndex===count ? ' front-plane': ''}`}>
            {/* <Post/> */}
            {component}
        </div>
    </>
  )
}

Plane.defaultProps={
    backgroundColor: 'blue',
    count: 1,
    angle: 0,
    frontIndex: 0,
    backgroundImage: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg',
    turnBy: 0,
    component: <></>
}
export default Plane;