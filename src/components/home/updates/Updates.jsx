import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Card from './card/Card';
import "./updates.css";

//just for testing, the api will handle this later
const details=(counter)=>({
    image: "https://media.architecturaldigest.com/photos/581a0d2bac7a304a654601fd/master/pass/Kennedy-First-Lady-Bedroom-FiJFKWHP-KN-C21506.jpg",
    location: `Sidi Aabad, Marrakesh${counter}`,
    price: `${1000+counter}Dhs`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
});

function Updates() {
    const sequence=(n)=>{
        let arr=[];
        for(let i=0; i<n; i++)arr.push(i);
        return arr;
    };
    return (
        <div className="updates">
            <div className="cards">
                {sequence(40).map((item)=><Card details={details(item)} key={`${item}#$`}/>)}
            </div>
            <div className="arrows">
                <div className="left"><KeyboardDoubleArrowLeftIcon/></div>
                <div className="right"><KeyboardDoubleArrowRightIcon/></div>
            </div>
        </div>
    )
}

export default Updates
