import { createContext, useContext, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";
import {v4 as uuidv4} from "uuid";


export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const dummy_todos = [
    { id: uuidv4(), task: "Learn React", completed: true },
    { id: uuidv4(), task: "Learn JS", completed: true },
    { id: uuidv4(), task: "Prepare for test", completed: false },
  ];
  const [todos, dispatch] = useReducer(todoReducer, dummy_todos);


  return <TodoContext.Provider value={{todos, dispatch}}>
    {children}
  </TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext);