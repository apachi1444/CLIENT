import { useEffect } from "react";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Search from "@arcgis/core/widgets/Search";
// import Expand from "@arcgis/core/widgets/Expand";
// import Legend from "@arcgis/core/widgets/Legend";

const MapWidget = ({ view }) => {
  useEffect(() => {
    // first param is the widget
    view.ui.add(new Home({ view: view }), "top-left");
    view.ui.add(new ScaleBar({ view: view }), "bottom-left");
    view.ui.add(new Search({ view: view }), "top-right");
  }, [view]);
  return <></>;
};

export default MapWidget;
