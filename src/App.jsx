import React from "react";
import Counter from "./components/counter/counter";
import Container from "./components/container/container";
import MaximumOfTwoNumber from "./components/numbers/number";
import BgColor from "./components/bgColor/bgColor";
import TrafficLight from "./components/trafficLight/trafficLight";
import Clock from "./components/clock/clock";
import RandomFromAToB from "./components/random/random";

export default function App() {
  return (
    <div>
      <Container>
        <Counter />
        <MaximumOfTwoNumber/>
        <BgColor/>
        <TrafficLight/>
        <Clock/>
        <RandomFromAToB/>
      </Container>
    </div>
  );
}
