import React from 'react';
import "./home.css";
import Reviews from './reviews/Reviews';
import Updates from './updates/Updates';
import Welcome from './welcome/Welcome';

function Home() {
    return (
        <div className="home">
            <p className="intro">Find The Apartment Or The Room Of Your Dreams, Right Now!</p>
            <Welcome/>
            <Updates/>
            <Reviews/>
        </div>
    )
}

export default Home;
