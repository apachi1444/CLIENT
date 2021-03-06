import React from 'react';
import Logo from "../../components/home/contacts/Logo";
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/objects/9764-loader.json'
import "./loading.css";

function Loading({width, gap, color, start, still, cercle}) {
  const dotStyles={ 
        backgroundColor: color, width, height: width, margin: gap,
        borderRadius: "50%",
        boxShadow: "0 2px 4px rgb(0 0 0 / 76%), 0 1px 2px rgb(0 0 0 / 83%)", 
  };
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  if(!still) return <></>;
  if(cercle)
    return(
        <div className="loading-gif">
            <Lottie options={defaultOptions}
              height={width}
              width={width}/>
        </div>
    )
  return (
    <div className="loading">
        { start && <div className="logo-svg"><Logo width={100} height={200} fill={"rgb(18, 18, 122)"}/></div>}
        <div className="dots">
            <motion.div className="dot-bullet" style={dotStyles}
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 0, duration: 0.5, repeat: Infinity}}
            ></motion.div>
            <motion.div className="dot-bullet" style={dotStyles}
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 0.1, duration: 0.5, repeat: Infinity}}
            ></motion.div>
            <motion.div className="dot-bullet" style={dotStyles}
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 0.2, duration: 0.5, repeat: Infinity}}
            ></motion.div>
        </div>
    </div>
  )
}

Loading.defaultProps={
    width: "20px",
    color: "rgb(18, 18, 122)",
    gap: "5px",
    start: false,
    still: true,
    cercle: false
}
export default Loading;