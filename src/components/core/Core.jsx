import React from 'react';
import Cities from './cities/Cities';
import "./core.css";
import Header from './header/Header';
import Main from './main/Main';
import { motion } from "framer-motion";

function Core() {
  return (
      <motion.div className="core"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
          <Header/>
          <Cities/>
          <Main/>
      </motion.div>
  );
}

export default Core;
