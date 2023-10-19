import React from "react";
import useCounter from "./counter";

function Counter2() {
  const [counter, increment] = useCounter(0);
  return (
    <div>
      <h1>couner2 {counter}</h1>
      <button onClick={() => increment(2)}>tang len 2</button>
    </div>
  );
}

export default Counter2;
