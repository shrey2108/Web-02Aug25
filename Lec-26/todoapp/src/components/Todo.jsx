import { IoTrashBinSharp } from "react-icons/io5";

const Todo = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <div>
      <input type="checkbox" onClick={() => toggleComplete(todo.id)} defaultChecked={todo.completed}/>
      <span style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.task}</span>
      <IoTrashBinSharp onClick={() => removeTodo(todo.id)}/>
    </div>
  );
};

export default Todo;
