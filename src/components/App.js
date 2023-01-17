import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(1);

  const getCountClassName = () => {
    let className = "";

    if (count % 3 === 0) {
      className += "fizz";
    }

    if (count % 5 === 0) {
      className += "buzz";
    }

    if (className === "") {
      className = "normal";
    }

    return className;
  };

  return (
    <>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <div id="counter" className={getCountClassName()}>
        {count}
      </div>
      <button id="decrement" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  );
};

export default App;
