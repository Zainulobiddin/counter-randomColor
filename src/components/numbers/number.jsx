import { useState } from 'react'
import './number.css'


export default function MaximumOfTwoNumber() {
    const [valueNumber1, setValueNumber1] = useState('')
    const [valueNumber2, setValueNumber2] = useState('')
    const [result, setResult] = useState('')


   const handleCheckNumber = () => {
    const num1 =  parseInt(valueNumber1)
    const num2 =  parseInt(valueNumber2)
    
    if (num1 > num2) {
        setResult(`The big number is : ${num1}`)
        return 
    } else if (num1 < num2 ) {
        setResult(`The big number is : ${num2}`)
        return 
    } else {
        setResult(`Numbers is equal`)
    }
   }

    return (
        <div className='check'>
            <h2>Maximum of two number</h2>
            <div className='checkNumber'>
            <input value={valueNumber1} onChange={(e) => setValueNumber1(e.target.value)} placeholder="number 1" type="text" />
            <input value={valueNumber2} onChange={(e) => setValueNumber2(e.target.value)} placeholder="number 2" type="text" />
            <button onClick={handleCheckNumber}>Check</button>
            </div>
            <h2>{result}</h2>
        </div>
    )
}