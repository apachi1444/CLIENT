import React from 'react'
import Loading from '../../../../../templates/loading/Loading'
import "./signUp.css";

function Processing({msg, flag, width, absolute}) {
  if(!flag) return <></>;
  return (
    <div className={`still-working-gif${absolute ? '': '-abs'}`}>
        <Loading width={width} cercle={true}/>
        <h2>{msg}</h2>
    </div>
  )
}


Processing.defaultProps={
    msg: "",
    flag: false,
    width: 100,
    absolute: true
}
export default Processing