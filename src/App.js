import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.querySelector("#value").style.color = "green";
    } else if (count < 0) {
      document.querySelector("#value").style.color = "red";
    } else {
      document.querySelector("#value").style.color = "black";
    }
  }, [count]);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span id="value">{count}</span>
      <div className="btn-group">
        <button
          className="btn btn-decrease"
          onClick={() => setCount((i) => i - 1)}
        >
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          RESET
        </button>
        <button
          className="btn btn-increase"
          onClick={() => setCount((i) => i + 1)}
        >
          INCREASE
        </button>
      </div>
    </div>
  );
};

export default App;
