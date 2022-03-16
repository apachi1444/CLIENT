import React, { useEffect, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapWidget from "./mapWidget/MapWidget";
import MapGraphics from "./mapGraphics/MapGraphics";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SceneView from "@arcgis/core/views/SceneView";
import "./map.css";

const Mape = () => {
  const mapRef = useRef(null);
  const [view, setView] = useState(null);
  const glResult1 = new GraphicsLayer({
    id: "glResult1",
  });
  const glResult2 = new GraphicsLayer({
    id: "glResult2",
  });

  useEffect(() => {
    const map = new Map({
      basemap: "dark-gray-vector",
      layers: [glResult2, glResult1],
      // where the map will be located already in the div that used in the ref
    });
    new SceneView({
      map: map,
      container: mapRef.current,
      center: [-7.992047, 31.628674],
      zoom: 15,
    }).when((view) => setView(view));
    // the when function is a callback two param succes and err
  }, []);

  return (
    <div ref={mapRef} className="Map">
      {view && (
        <>
          <MapWidget view={view} />
          {/* // to add the mapwidget to the view */}
          <MapGraphics view={view} />
        </>
      )}
    </div>
  );
};

export default Mape;
