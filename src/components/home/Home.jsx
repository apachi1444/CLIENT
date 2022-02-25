import React from 'react';
import "./home.css";
import Reviews from './reviews/Reviews';
import Updates from './updates/Updates';
import Welcome from './welcome/Welcome';
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div className="home"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <p className="intro">Find The Apartment Or The Room Of Your Dreams, Right Now!</p>
            <Welcome/>
            <Updates/>
            <Reviews/>
        </motion.div>
    )
}

export default Home;
