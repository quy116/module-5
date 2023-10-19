import React from "react";
import useCounter from "./counter";

function Counter1() {
  const [counter, increment] = useCounter(0);
  return (
    <div>
      <h1>counter1 {counter}</h1>
      <button onClick={() => increment(1)}>tang len 1</button>
    </div>
  );
}

export default Counter1;
