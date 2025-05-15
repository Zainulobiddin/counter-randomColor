import { useEffect, useState } from "react"
import './clock.css'


export default function Clock() {
    const  [time, setTime] = useState(new Date())

    function tick() {
        setTime(new Date())
    }

    useEffect(() => {
        setInterval(() => {
            tick()
        }, 1000)
    })

  return (
    <div className="clock">
        <h2>Clock</h2>
        <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}
