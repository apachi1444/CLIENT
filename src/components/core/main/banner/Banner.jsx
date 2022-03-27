import React from 'react';
import Groupa from './groupa/Groupa';
import Groupb from './groupb/Groupb';
import Online from './online/Online';
import Dashboard from './dashboard/Dashboard';
import { useSelector } from 'react-redux';
import "./banner.css";

function Banner({isAdmin}) {
    const { theme } = useSelector(state=>state.user);
    if(isAdmin) return <Dashboard/>;
    return (
        <div className={`banner banner-${theme}`}>
            <Online/>
            <Groupa/>
            <Groupb/>
        </div>
    );
}

Banner.defaultProps={
    isAdmin: false
}
export default Banner;
