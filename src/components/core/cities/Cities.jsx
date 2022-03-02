import React, { useState } from 'react';
import cities from '../../../assets/objects/cities';
import { useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import { motion } from "framer-motion";
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
            {open && <motion.div className="cities"
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.2}}
                >
                { cities.map((item)=>(
                <City city={item.ville} key={uuid()} isCurrent={city_t.city===item.ville}/>
                ))}
            </motion.div>}
        </>
        
    );
}

export default Cities;
