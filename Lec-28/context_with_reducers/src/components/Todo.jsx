import { useContext } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { TodoContext } from "../context/TodoProvider";

const Todo = ({ todo }) => {
  const {dispatch} = useContext(TodoContext);

  return (
    <div>
      <input type="checkbox" onClick={() => dispatch({
        type: "completed",
        id: todo.id
      })} defaultChecked={todo.completed}/>
      <span style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.task}</span>
      <IoTrashBinSharp onClick={() => dispatch({
        type: "removed",
        id: todo.id
      })}/>
    </div>
  );
};

export default Todo;
