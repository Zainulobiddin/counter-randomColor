import { useState } from 'react'
import './counter.css'


export default function Counter() {
    let [count, setCount] = useState(0)

    function handleMinus() {
      setCount(count-1)
    }

    function handleReset() {
      setCount(count = 0)
    }
    function handlePlus() {
      setCount(count+1)
    }

  return (
    <div className='counter' style={{border: count > 0 ? ' 2px solid green' : count < 0 ?  '2px solid red' : '2px solid black', borderRadius: '12px' }}>
        <h1 style={{color: count > 0 ? 'green' : count < 0 ? 'red' : 'black' }}>Counter</h1>
        <div className='btns'>
            <button onClick={() => handleMinus()} className='minus'>-</button>
            <button onClick={() => handleReset()} className='reset'>reset</button>
            <button onClick={() => handlePlus()} className='plus'>+</button>
        </div>
        <h2 className={count>0 ? 'Green' : count < 0 ?  'Red' : 'Black' } >{count}</h2>
    </div>
  )
}
