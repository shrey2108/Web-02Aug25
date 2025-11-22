import React, { useState } from 'react'

const Counter = ({count, onIncrement}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>+1</button>
    </div>
  )
}

export default Counter