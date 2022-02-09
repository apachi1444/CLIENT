import React from 'react';
import cities from '../../../assets/objects/cities';
import { useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import "./cities.css";
import City from './city/City';

function Cities() {
    const city_t=useSelector(state=>state.currentCity);
    return(
        <div className="cities">
            {cities.map((item)=>(
                <City city={item.ville} key={uuid()} isCurrent={city_t.city===item.ville}/>
            ))}
        </div>
    );
}

export default Cities;
