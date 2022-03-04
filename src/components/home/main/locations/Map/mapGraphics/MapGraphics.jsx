import React, { useEffect, useRef } from "react";

import Graphic from "@arcgis/core/Graphic";
const MapGraphics = ({ view }) => {
  const formRef = useRef(null);
  // const [zone, setZone] = useState({
  //   name: "map",
  //   address: "klsqjflk",
  // });
  useEffect(() => {
    const layer = view.map.findLayerById("glResult1");
    console.log(layer);
    if (layer) {
      const graphic = new Graphic({
        geometry: {
          type: "point",
          x: -8.0189574,
          y: 31.6536553,
        },
        symbol: {
          type: "simple-marker",
          color: "red",
          size: 35,
        },
        popupTemplate: {
          title: "Sidi Abbad",
          content: "Offers Here",
        },
        attributes: {
          name: "yr",
        },
      });
      const graphic1 = new Graphic({
        geometry: {
          type: "point",
          y: 31.6686551,
          x: -8.0227455,
        },
        symbol: {
          type: "simple-marker",
          color: "red",
          size: 35,
        },
        popupTemplate: {
          title: "Jnane Ourad",
          content: "Offers Here",
        },
        attributes: {
          name: "yr",
        },
      });
      layer.add(graphic1);
      layer.add(graphic);
    }
    view.ui.add(formRef.current, "top-right");
    view.on("click", (event) => {
      view.hitTest(event).then((rep) => {
        console.log("rep", rep);
        if (rep.results.length > 0) {
          console.log(rep.results[0].graphic.attributes);
        }
      });
    });
  }, [view]);
  return (
    <div
      ref={formRef}
      className="esri-widget"
      style={{ margin: 2, padding: 20 }}
    >
      {/* <input type="text" value={state.address} />
      <input type="text" value={state.name} /> */}
    </div>
  );
};

export default MapGraphics;
