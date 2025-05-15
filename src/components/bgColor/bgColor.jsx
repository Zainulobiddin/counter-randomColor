import React, { useState } from "react";
import "./bgColor.css";

export default function BgColor() {
  let [ramdomNumber, setRandomNumber] = useState(0);

  const handleRandomNumber = () => {
    ramdomNumber = Number(
    (Math.random()).toString().split(".")[1].slice(0, 6));
    setRandomNumber(ramdomNumber);
    console.log(ramdomNumber);
  };

  return (
    <div className="main">
      <div>
        <h2>Change Background color Browser</h2>
        <p>
          When you click on 'Click me' the background light of the browser
          should change to a random color{" "}
        </p>
      </div>

      <div
        className="randomBackgroundColor"
        style={{ backgroundColor: `#${ramdomNumber}` }}
      >
        <h2>Background color</h2>
        <button onClick={handleRandomNumber}>CLICK ME</button>
        <p>{`#${ramdomNumber}`}</p>
        console.log({ramdomNumber})
      </div>
    </div>
  );
}
