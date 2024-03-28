import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(120);
  const [weight, setWeight] = useState(50);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  //UseMemo
  const output = useMemo(() => {
    const claculateHeight = height / 100;

    return (weight / (claculateHeight * claculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">weight : {weight} KG</p>
        <input
          className="input-slider"
          type="range"
          step={1}
          min={40}
          max={200}
          onChange={onWeightChange}
        />

        <p className="slider-output">Height : {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min={120}
          max={250}
          onChange={onHeightChange}
        />

        <div className="output-section">
          <p>
            <b>Your BMI is </b>
          </p>
          <p className="output">{output}</p>

          <p className="details">
            <b>BMI Categories:</b>
            <br />
            Underweight = Less than 18.5
            <br />
            Normal weight = 18.5 – 24.9
            <br />
            Overweight = 25 – 29.9
            <br />
            Obesity = BMI of 30 or Greater
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
