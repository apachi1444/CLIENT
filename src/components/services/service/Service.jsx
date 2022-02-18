import React from 'react';
import './service.css';
import Model from './model/Model';

function Service({number, title}) {
  return (
    <div className="service">
        <div className="serv-title">
            <h2 className="number">{number}</h2>
            <h3 className="title">{title}</h3>
        </div>
        <div className="model-canvas"><Model/></div>
    </div>
  );
}

Service.defaultProps={
    number: 1,
    title: 'Real Time Chatting'
};
export default Service;