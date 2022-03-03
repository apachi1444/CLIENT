import React from 'react';
import Owner from "./owner/Owner";
import { v4 as uuid } from "uuid";
import "./owners.css";

function Owners() {
  return (
    <div className="owners">
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
      <Owner key={uuid()}/>
    </div>
  )
}

export default Owners