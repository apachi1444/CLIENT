import React from 'react';
import Service from './Service';
import { v4 as uuid } from "uuid";

function Info({info}) {
  return (
    <div className="info-box">
      {info.map(it=>(<Service title={it} key={uuid()}/>))}
    </div>
  )
}

Info.defaultProps={
    info: ["Appartment", "Marrakesh", "Sidi Abad", "2938 Rue X", "1200Dhs/moins", 
        "3 rooms", "0-500", "60m^2", "Wifi"]
}

export default Info