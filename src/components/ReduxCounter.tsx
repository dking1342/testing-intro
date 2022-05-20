import React from 'react'
import { RootState, incremented, decremented, reset } from '../context/store';
import { useSelector, useDispatch } from "react-redux";

const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <div>
        <button
          aria-label='increment value'
          onClick={ ()=> dispatch(incremented()) }
        >increment</button>
        <span role="contentinfo">{ count }</span>
        <button
          aria-label='decrement value'
          onClick={ ()=>dispatch(decremented()) }
        >decrement</button>
        <button
          aria-label='reset state'
          onClick={ ()=>dispatch(reset()) }
        >reset</button>
      </div>
    </div>
  )
}

export default ReduxCounter