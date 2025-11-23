import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from '../context/TodoProvider';

const InputForm = () => {
  const [text, setText] = useState("");
  const {dispatch} = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setText("")
    dispatch({
      type: "added",
      todo: { id: uuidv4(), task: text, completed: false }
    })
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