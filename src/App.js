import "./App.css";
import React, { useState } from "react";
import Table from "./components/tabla";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Counter (Assigment 1)</h1>
        <br />
        <p>Increase or decrease the number with a click of the buttons</p>
        <div className="buttons">
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
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1>API (Assigment 2)</h1>
        <br />
        <Table />
      </div>
    </>
  );
}

export default App;
