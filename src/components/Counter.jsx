import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}
