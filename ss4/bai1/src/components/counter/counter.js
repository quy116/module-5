import React, { useState } from "react";

function useCounter(props) {
  const [counter, setcounter] = useState(props);

  const increment = (amount) => {
    setcounter(counter + amount);
  };
  return [counter, increment];
}

export default useCounter;
