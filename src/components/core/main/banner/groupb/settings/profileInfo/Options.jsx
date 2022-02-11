import React from 'react'
import { v4 as uuid} from "uuid";
import "./profileInfo.css";

function Options({options, id}) {
  return (
    <div className="options">
        {options.map((op, index)=>(
            <><input type="radio" id={`${id}lang33-${index}`} name="English" value={"French"} key={uuid()}/> 
            <label htmlFor={`${id}lang33-${index}`} key={uuid()}>{op}</label></>
        ))}
    </div>
  )
}

export default Options