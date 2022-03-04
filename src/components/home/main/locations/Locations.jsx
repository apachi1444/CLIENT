import React, { useState } from "react";
import "./locations.css";
import City from "../../../core/cities/city/City";
import { v4 as uuid } from "uuid";
import { motion } from 'framer-motion';
import Mape from "./Map/Mape";
// import coord from "./coord";

function Locations() {
  const [lat, setLat]=useState("");
  const [long, setLong]=useState("");
  const handleLat=(e)=>{
    setLat(e?.target?.value);
  };
  const handleLong=(e)=>{
    setLong(e?.target?.value);
  }
  return (
    <motion.div className="locations"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="location-nav">
        <p>GPS Coordinates</p>
        <div className="loaction-lat">
          <input
            value={lat}
            className="input"
            type="text"
            placeholder="longitude"
            onChange={handleLat}
          />
        </div>
        <div className="location-long">
          <input
            value={long}
            className="input"
            type="text"
            placeholder="lattitude"
            onChange={handleLong}
          />
        </div>
        <select name="cities" id="cities" className="ListOfCities">
          <option value="none" selected disabled hidden>
            Pick the City please
          </option>
          <option value="Marrakech">Marrakech</option>
          <option value="Casablanca">Casablanca</option>
        </select>
      </nav>
      <section className="secondDiv">
        <section className="MapDiv">
          <div className="Map">
            <Mape></Mape>
            <iframe
              title="The map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217406.37638548054!2d-8.1479381904096!3d31.63454497560447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech!5e0!3m2!1sfr!2sma!4v1645716826955!5m2!1sfr!2sma"
              className="theMap"
            ></iframe>
            <div className="HoverMap">
              <div className="offersHoverMap">
                We Have the offer of 2000dh is still up
              </div>
              <div className="offersHoverMap">
                We Have the offer of 2000dh is still up
              </div>
              <div className="offersHoverMap">
                We Have the offer of 2000dh is still up
              </div>
            </div>
          </div>
        </section>
        <aside className="theCities">
          <div className="TitleZones">Zones</div>
          <main className="listOfZones">
            {/* {cities.map((item) => (
              <City city={item.ville} key={uuid()} />
            ))} */}
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
            <City city="Marrakech" key={uuid()} />
          </main>
        </aside>
      </section>
    </motion.div>
  );
}

export default Locations;
