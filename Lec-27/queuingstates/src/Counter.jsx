import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const incrementByThree = (obj) => {
    // setCount(count+1); // setCount(1)
    // setCount(count+1); // setCount(1)
    // setCount(count+1); // setCount(1)

    setCount(count => count + 1); // 0 + 1
    setCount(count => count + 1); // 1 + 1
    setCount(count => count + 1); // 2 + 1
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={incrementByThree}>+3</button>
    </div>
  )
}

export default Counter