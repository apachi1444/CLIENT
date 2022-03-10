import React from 'react'
import Loading from '../../../../../templates/loading/Loading'
import "./signUp.css";

function Processing({msg, flag}) {
  if(!flag) return <></>;
  return (
    <div className="still-working-gif">
        <Loading width={100} cercle={true}/>
        <h2>{msg}</h2>
    </div>
  )
}


Processing.defaultProps={
    msg: "",
    flag: false
}
export default Processing