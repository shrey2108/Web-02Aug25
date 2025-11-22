import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import { todoReducer } from "../reducers/todoReducer"
import { useReducer } from "react";

const TodoApp = () => {
  // {id: "", task: "", completed: ""}
  // const [todos, setTodos] = useState([
  //   { id: uuidv4(), task: "Learn React", completed: true },
  //   { id: uuidv4(), task: "Learn JS", completed: true },
  //   { id: uuidv4(), task: "Prepare for test", completed: false },
  // ]);

  const [todos, dispatch] = useReducer(todoReducer, [
    { id: uuidv4(), task: "Learn React", completed: true },
    { id: uuidv4(), task: "Learn JS", completed: true },
    { id: uuidv4(), task: "Prepare for test", completed: false },
  ])



  const addTodo = (todo) => {
    dispatch({
      type: "added",
      todo: todo
    })
  }

  const removeTodo = (id) => {
    dispatch({
      type: "removed",
      id: id
    })
  }

  const toggleComplete = (id) => {
    // setTodos((todos) => todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
    dispatch({
      type: "completed",
      id: id
    })
  }


  return (
    <div>
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
    </div>
  );
};

export default TodoApp;
