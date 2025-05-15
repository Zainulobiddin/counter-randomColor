import { useState } from "react";
import './random.css'


export default function RandomFromAToB() {
  const [random, setRandom] = useState();
  const [number1, setNum1] = useState();
  const [number2, setNum2] = useState();

  let num1 = parseInt(number1);
  let num2 = parseInt(number2);

  function handleNumber() {
    if (num1 > num2) {
        alert('Error: Must be num1 small than num2!')
    }
    let res = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    return setRandom(res);
  }

  return (
    <div className="check">
        <h2 style={{textAlign: 'center'}}>Random number from num1 to num2</h2>
      <div className="checkNumber">
        <input
          value={number1}
          onChange={(e) => setNum1(e.target.value)}
          type="text"
          placeholder="number 1"
        />
        <input
          value={number2}
          onChange={(e) => setNum2(e.target.value)}
          type="text"
          placeholder="number 2"
        />

        <button onClick={handleNumber}>random</button>
      </div>

      <h2 style={{textAlign: 'center'}}>{random}</h2>
    </div>
  );
}
