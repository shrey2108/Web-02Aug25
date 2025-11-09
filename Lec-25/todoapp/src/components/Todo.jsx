import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{todo.task}</span>
      <IoTrashBinSharp onClick={() => removeTodo(todo.id)}/>
    </div>
  );
};

export default Todo;
