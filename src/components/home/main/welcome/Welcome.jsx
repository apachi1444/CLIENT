import React from 'react';
import Reviews from './reviews/Reviews';
import Updates from './updates/Updates';
import WelcomeP from './welcome/Welcome';
import { motion } from "framer-motion";
import "./welcome.css";

function Welcome() {
    return (
        <div className="home"
            // initial={{ x: "100vw", opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3 }}
        >
            <motion.p className="intro"
                initial={{y: "100vh", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.4, type: "spring", stiffness: 120}}
            >
                Find The Apartment Or The Room Of Your Dreams, Right Now!
            </motion.p>
            <WelcomeP/>
            <Updates/>
            <Reviews/>
        </div>
    )
}

export default Welcome;
