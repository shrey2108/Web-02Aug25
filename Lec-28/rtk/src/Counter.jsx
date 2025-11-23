import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './features/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)

  console.log(increment())

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
    </div>
  )
}

export default Counter