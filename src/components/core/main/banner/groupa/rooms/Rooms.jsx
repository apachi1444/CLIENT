import React from 'react';
import Frame from './frame/Frame';
import { v4 as uuid } from "uuid";
import "./rooms.css";

function Rooms() {
  return (
    <div className="rooms">
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
        <Frame key={uuid()}/>
    </div>
  )
}

export default Rooms