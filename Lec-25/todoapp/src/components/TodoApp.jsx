import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  // {id: "", task: "", completed: ""}
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Learn React", completed: false },
    { id: uuidv4(), task: "Learn JS", completed: true },
    { id: uuidv4(), task: "Prepare for test", completed: false },
  ]);

  const addTodo = () => {

  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id != id);
    setTodos(newTodos);
  }


  return (
    <div>
      <InputForm/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
};

export default TodoApp;
