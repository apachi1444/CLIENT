import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Card from './card/Card';
import "./updates.css";

//just for testing, the api will handle this later
const images=[
    "https://media.architecturaldigest.com/photos/581a0d2bac7a304a654601fd/master/pass/Kennedy-First-Lady-Bedroom-FiJFKWHP-KN-C21506.jpg",
    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/186088460.jpg?k=6e89285768b9ec7e92f8c7988fbc336d2e7011dbfcdc6f13b7805fa5d9cda76a&o=&hp=1",
    "https://img.nh-hotels.net/nh_collection_eurobuilding-1183-rooms.jpg?crop=7250:3661;0,267&resize=555:280&output-quality=70&resize=555:*&composite-to=center,center|555:280&background-color=white"
]

const details=(counter)=>({
    image: images[counter],
    location: `Sidi Aabad, Marrakesh${counter}`,
    price: `${1000+counter}Dhs`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
});

function Updates() {
    //this loop is just for testing, we will call the api later on to bring 3 models
    const data=[];
    for(let i=0; i<3; i++) data.push(details(i));

    const [current, setCurrent]=useState(0);
    const moveIt=(i)=>{
        return ()=>{
            setCurrent(i);
        };
    }
    
    return (
        <div className="updates">
            <div className="cards">
                <Card details={data[current]}/> 
            </div>
            <div className="arrows">
                <div className={`right cercle${current===0 ? " clicked": ""}`} onClick={moveIt(0)} >
                    <FiberManualRecordIcon/>
                </div>
                <div className={`right cercle${current===1 ? " clicked": ""}`} onClick={moveIt(1)}>
                    <FiberManualRecordIcon/>
                </div>
                <div className={`right cercle${current===2 ? " clicked": ""}`} onClick={moveIt(2)}>
                    <FiberManualRecordIcon/>
                </div>
            </div>
        </div>
    )
}

export default Updates
