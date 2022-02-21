import React from "react";
import Gps from './gps/Gps';
import Offers from './offers/Offers';
import Map from './map/Map';
import Cities from './cities/Cities';
import "./locations.css";

function Locations() {

  return (
    <div className="locations">
      <Gps/>
      <Offers/>
      <Map/>
      <Cities/>
    </div>
  );
}

export default Locations;
