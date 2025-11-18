import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  // {id: "", task: "", completed: ""}
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Learn React", completed: true },
    { id: uuidv4(), task: "Learn JS", completed: true },
    { id: uuidv4(), task: "Prepare for test", completed: false },
  ]);

  const addTodo = (todo) => {
    // todos.push(data)
    // deep copy and shallow copy

    // const newTodos = [...todos, todo];
    // setTodos(newTodos);

      // setTodos((todos) => {
      //   return [...todos, todo]
      // })

      setTodos(todos => [...todos, todo])
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id != id);
    setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    setTodos((todos) => todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
  }


  return (
    <div>
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
    </div>
  );
};

export default TodoApp;
