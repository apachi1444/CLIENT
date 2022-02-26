import React, { useState } from 'react';
import cities from '../../../assets/objects/cities';
import { useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import "./cities.css";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import City from './city/City';

function Cities() {
    const [open, setOpen]=useState(false);
    const toggle=()=>{
        setOpen(!open);
    }
    const city_t=useSelector(state=>state.currentCity);
    return(
        <>
            <div className="open-cities" onClick={toggle}>
                {open ? <ExpandLessOutlinedIcon/>: <PlaceOutlinedIcon/>}
            </div>
            {open && <div className="cities">
                { cities.map((item)=>(
                <City city={item.ville} key={uuid()} isCurrent={city_t.city===item.ville}/>
                ))}
            </div>}
        </>
        
    );
}

export default Cities;
