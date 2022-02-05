import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
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
    const itemsNumber=images.length;//this will be dynamic later on
    const [current, setCurrent]=useState(0);
    const moveIt=(flag)=>{
        return ()=>{
            if(flag && current<itemsNumber-1) setCurrent(current+1);
            else {
                if(current>0) setCurrent(current-1);
            } 
        }
    };
    return (
        <div className="updates">
            <div className="cards">
                {itemsNumber!==0 && <Card details={details(current)}/>} 
            </div>
            <div className="arrows">
                <div className="left" onClick={moveIt(false)}><WestIcon/></div>
                <div className="right"onClick={moveIt(true)} ><EastIcon/></div>
            </div>
        </div>
    )
}

export default Updates
