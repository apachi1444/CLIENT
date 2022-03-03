import React, { useState } from "react";
import "./locations.css";
import City from "../core/cities/city/City";
import { v4 as uuid } from "uuid";
import Mape from "./Map/Mape";
import coord from "./coord";
function Locations() {
  const [long, setlong] = useState();
  const [lat, setlat] = useState();

  return (
    <>
      <nav>
        <p>GPS Coordinates</p>
        <div>
          <input
            className="input"
            type="text"
            placeholder="longitude"
            onChange={setlong}
          />
        </div>
        <div>
          <input
            className="input"
            type="text"
            placeholder="lattitude"
            onChange={setlat}
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
    </>
  );
}

export default Locations;
