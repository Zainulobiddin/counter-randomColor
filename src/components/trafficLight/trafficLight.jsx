import { useEffect, useState } from "react";
import "./trafficLight.css";

export default function TrafficLight() {
  const [traffic, setTraffic] = useState("red");
  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic((prevTraffic) => {
        if (prevTraffic === "red") {
          return "yellow";
        } else if (prevTraffic === "yellow") {
          return "green";
        } else {
          return "red";
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="traffic">
      <div className={`rounde ${traffic === "red" ? `active red` : ""} `}></div>
      <div
        className={`rounde ${traffic === "yellow" ? `active yellow` : ""} `}
      ></div>
      <div
        className={`rounde ${traffic === "green" ? `active green` : ""} `}
      ></div>
    </div>
  );
}
