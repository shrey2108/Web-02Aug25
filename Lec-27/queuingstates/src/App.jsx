// import { useState } from 'react';
// import Counter from './q1/Counter'

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <Counter count={count} onIncrement={handleIncrement}/>
//       <Counter count={count} onIncrement={handleIncrement}/>
//     </>
//   )
// }

// export default App

import React from 'react'
import Form from './q2/Form'
import NewForm from './q2/NewForm'

const App = () => {
  return (
    <div>
      {/* <Form/> */}
      <NewForm/>
    </div>
  )
}

export default App