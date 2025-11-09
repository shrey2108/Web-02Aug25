import React from 'react'

const Counter = () => {
  let counter = 1;

  const clickHandler = () => {
    counter += 1;
    console.log(counter)
  }

  return (
    <div>
      <p>{counter}</p>
      {/* <button onClick={clickHandler}>+1</button> */}
      <button onClick={() => clickHandler()}>+1</button>
    </div>
  )
}

export default Counter