import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const InputForm = ({addTodo}) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setText("")
    addTodo({ id: uuidv4(), task: text, completed: false })
  }

  const changeHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={text}/>
        <button>Add</button>
    </form>
  )
}

export default InputForm