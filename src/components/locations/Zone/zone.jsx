import React, { useRef, useEffect } from "react";
import Picture from "../../core/header/avatar/picture/Picture";
import { useDispatch } from "react-redux";
import "./zone.css";

function Zone({ zone }) {
  return (
    <div className="zone">
      <Picture
        border={"2px solid blue"}
        auto={false}
        width={"55px"}
        imgUrl={"./vendor/images/marker-gps.jpg"}
      />
      <h4>{zone}</h4>
    </div>
  );
}

export default Zone;
