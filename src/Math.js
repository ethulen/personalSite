import React, { useState } from 'react';
import './Math.css';
import treeline from "./treeline.jpg";

const Math = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState('');

  const heroStyle = {
    backgroundImage: `url(${treeline})`,
    backgroundSize: 'cover', // Adjust this property to fit your needs
    backgroundPosition: 'center', // Adjust this property to fit your needs
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  };

  const calculateArea = () => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);

    if (!isNaN(lengthValue) && !isNaN(widthValue)) {
      const calculatedArea = lengthValue * widthValue;
      setArea(`The area of the rectangle is: ${calculatedArea}`);
    } else {
      setArea('Please enter valid numbers for length and width.');
    }
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="rectangle-calculator">
        <h2>Rectangle Area Calculator</h2>
        <form id="rectangleForm">
          <div className="form-group">
            <label htmlFor="length">Length: </label>
            <input
              type="number"
              className="form-control"
              id="length"
              placeholder="Enter length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="width">Width: </label>
            <input
              type="number"
              className="form-control"
              id="width"
              placeholder="Enter width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={calculateArea}>Calculate Area</button>
        </form>

        <div id="result" className={`mt-4 ${area ? 'result-visible' : 'result-hidden'}`}>
          {area && <p>{area}</p>}
        </div>
      </div>
    </div>
  );
};

export default Math;
