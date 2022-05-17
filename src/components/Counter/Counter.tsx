import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

const Counter = ({ description, defaultCount }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <div>
        <label htmlFor="changer">Changer</label>
        <input
          id="changer"
          name="changer"
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(parseInt(e.target.value) || 0)}
        />
      </div>
      <button
        aria-label="decrement"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      <p>Current Count: {count}</p>
      <button
        aria-label="increment"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
      <button
        aria-label="async"
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
      >
        ++
      </button>
    </div>
  );
};

export default Counter;
