// Bars.js
import React from 'react';

const Bars = ({ onClick }) => {
  return (
    <div className="bars" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Bars;
