import React from "react";
import { motion } from "framer-motion";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./card.css";

function Card({ details }) {
  return (
    <div className="card">
      <motion.div
        className="image"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={details?.image} alt="Room" />
        <h4 className="location">{details?.location}</h4>
        <h4 className="price">{details?.price}</h4>
      </motion.div>
    </div>
  );
}

export default Card;
