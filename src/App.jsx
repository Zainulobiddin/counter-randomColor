import React from "react";
import Counter from "./components/counter/counter";
import Container from "./components/container/container";
import MaximumOfTwoNumber from "./components/numbers/number";
import BgColor from "./components/bgColor/bgColor";

export default function App() {
  return (
    <div>
      <Container>
        <div style={{display: 'flex'}}>
        <Counter />
        <MaximumOfTwoNumber/>
        </div>

        <BgColor/>
      </Container>
    </div>
  );
}
