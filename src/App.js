import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Contador</h1>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => (count > 0 ? setCount(count - 1) : 0)}
      >
        -
      </button>
      <input value={count}></input>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
}

export default App;
