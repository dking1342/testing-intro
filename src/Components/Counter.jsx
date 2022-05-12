import React, { useState } from 'react';
import "../Styles/Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleAddToCounter = () => {
    setCounterValue( counterValue + inputValue );
  };

  const handleSubtractToCounter = () => {
    setCounterValue( counterValue - inputValue );
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 
        data-testid="counter" 
        className={ (counterValue >= 100 ? "green" : null) || (counterValue <= -100 ? "red" : null) }
      >{ counterValue }</h2>
      <button 
        data-testid="subtract-btn" 
        onClick={ handleSubtractToCounter }
      >-</button>
      <input 
        type="number" 
        data-testid="input" 
        value={ inputValue } 
        onChange={ (e) => setInputValue(Number(e.target.value)) }
      />
      <button 
        data-testid="add-btn"
        onClick={ handleAddToCounter }
      >+</button>
    </div>
  )
}

export default Counter