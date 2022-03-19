import React from 'react';
import Cities from './cities/Cities';
import "./core.css";
import Header from './header/Header';
import Main from './main/Main';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

function Core() {
  const { theme } =useSelector(state=>state.user);
  return (
      <motion.div className={`core-${theme}`}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1 }}
      >
          <Header/>
          <Cities/>
          <Main/>
      </motion.div>
  );
}

export default Core;
