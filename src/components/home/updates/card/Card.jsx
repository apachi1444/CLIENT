import React, { useEffect } from 'react';
import { motion, useCycle } from "framer-motion";
import './card.css';

function Card({details, flag}) {
    const [animate, setAnimate]=useCycle({
        initial: {x: "80%"},
        anima: {x: 0},
        trans: {duration: 0.5},
    }, {
        initial: {x: "100%"},
        anima: {x: 0},
        trans: {duration: 0.5},
    });
    useEffect(() => {
        setAnimate();
    }, [flag, setAnimate])
    return (
        <div className="card">
            <motion.div className="image" 
                initial={animate.initial}
                animate={animate.anima}
                transition={animate.trans}
            >
                <img src={details?.image} alt="Room"/>
                <h4 className="location">{details?.location}</h4>
                <h4 className="price">{details?.price}</h4>
            </motion.div>
        </div>
    );
}

export default Card;
