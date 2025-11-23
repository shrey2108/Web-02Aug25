import Todo from "./Todo";
import { useTodo } from "../context/TodoProvider";

const TodoList = () => {
  // const {todos} = useContext(TodoContext);
  const {todos} = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
