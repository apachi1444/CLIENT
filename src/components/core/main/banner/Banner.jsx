import React from 'react';
import "./banner.css";
import Groupa from './groupa/Groupa';
import Groupb from './groupb/Groupb';
import Online from './online/Online';

function Banner() {
    return (
        <div className="banner">
            <Online/>
            <Groupa/>
            <Groupb/>
        </div>
    );
}

export default Banner;
