import React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Card from './card/Card';
import "./scroller.css";

//just for testing
const details={
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc-web-tour-natasha-bardaran-9-1607305891.jpg",
    location: "Sidi Aabad, Marrakesh",
    price: "1000Dhs",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};
function Scroller() {
    return (
        <div className="scoller">
            <div className="cards">
                <Card details={details}/>
            </div>
            <div className="arrows">
                <div className="left"><KeyboardBackspaceOutlinedIcon/></div>
                <div className="right"><ArrowRightAltOutlinedIcon/></div>
            </div>
        </div>
    )
}

export default Scroller;
