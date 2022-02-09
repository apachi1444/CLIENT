import React, {useRef, useEffect} from 'react';
import Picture from '../../header/avatar/picture/Picture';
import { useDispatch } from 'react-redux';
import currentCity from '../../../../redux/actions/currentCity';
import "./city.css";

function City({city, isCurrent}) {
  const divRef=useRef(null);
  const dispatch=useDispatch();
  const current={city, data: null};//data is null just for testing
  useEffect(() => {
    if(divRef.current && isCurrent) divRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }, [isCurrent]);
  const showMe=()=>{
    dispatch(currentCity(current))
    if(divRef.current && isCurrent) divRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };
  return (
      <div className="city" ref={divRef} onClick={showMe}>
          <Picture border={"1px solid blue"}  width={"55px"} isCurrent={isCurrent}
            imgUrl={"https://cdn.pixabay.com/photo/2016/01/07/17/17/mosque-1126197__340.jpg"}/>
          <h4>{city}</h4>
      </div>
  );
}

export default City;
