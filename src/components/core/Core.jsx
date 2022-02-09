import React from 'react';
import Cities from './cities/Cities';
import "./core.css";
import Header from './header/Header';
import Main from './main/Main';

function Core() {
  return (
      <div className="core">
          <Header/>
          <Cities/>
          <Main/>
      </div>
  );
}

export default Core;
