import React, { useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const App = (props) => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(props.count);
  };
  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App count={2} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
