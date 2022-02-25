import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Pedro");

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
