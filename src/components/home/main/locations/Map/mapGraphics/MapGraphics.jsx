import React, { useEffect, useRef } from "react";

import Graphic from "@arcgis/core/Graphic";
import coord from "../../coord";
const MapGraphics = ({ view }) => {
  const formRef = useRef(null);
  // const [zone, setZone] = useState({
  //   name: "map",
  //   address: "klsqjflk",
  // });
  useEffect(() => {
    console.log(coord);
    const layer = view.map.findLayerById("glResult1");
    console.log(layer);
    if (layer) {
      coord.map((item) => {
        const graphic = new Graphic({
          geometry: {
            type: "point",
            x: item.x,
            y: item.y,
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: 15,
          },
          popupTemplate: {
            title: item.title,
            content:
              "<p><b> " +
              " Number of Offers In This Place : " +
              item.numberOfOffers +
              "</b></p>" +
              "<ul><li>" +
              item.title +
              "people are married</li>" +
              "<li>" +
              "have never married" +
              "</li>" +
              "<li>are divorced</li><ul>",
          },
          attributes: {
            name: "yr",
          },
        });
        layer.add(graphic);
      });
    }
    // view.ui.add(formRef.current, "top-right");
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
    <div ref={formRef} className="esri-widget">
      {/* <input type="text" value={state.address} />
      <input type="text" value={state.name} /> */}
    </div>
  );
};

export default MapGraphics;
