import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

const Counter = ({ description, defaultCount }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active: boolean = true;
    // let id: NodeJS.Timeout;

    if (count >= 15) {
      // id = setTimeout(()=> setLoading(true), 200);
      setTimeout(() => {
        if (active) setLoading(true);
      }, 200);
    }

    return () => {
      // clearTimeout(id);
      active = false;
    };
  }, [count]);

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
      {loading ? null : <div>loading</div>}
    </div>
  );
};

export default Counter;
