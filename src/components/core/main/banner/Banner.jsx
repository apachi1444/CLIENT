import React from 'react';
import "./banner.css";
import Groupa from './groupa/Groupa';
import Groupb from './groupb/Groupb';
import Online from './online/Online';
import { useSelector } from 'react-redux';
function Banner() {
    const { theme } = useSelector(state=>state.user);
    return (
        <div className={`banner banner-${theme}`}>
            <Online/>
            <Groupa/>
            <Groupb/>
        </div>
    );
}

export default Banner;
