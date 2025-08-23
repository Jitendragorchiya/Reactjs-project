import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(3);

  const addValue = () => {
    setCounter((prev) => Math.min(prev + 1, 20));
  };

  const removeValue = () => {
    setCounter((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
