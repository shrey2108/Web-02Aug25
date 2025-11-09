import { useState } from "react";

const NewCounter = () => {
  const [count, setCount] = useState(1);

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => clickHandler()}>+1</button>
    </div>
  )
}

export default NewCounter