
// export const todoReducer = () => {

// }

/**
 * 
 * action = {type: "removed", todoId: "1234"}
 */
export function todoReducer (todos, action) {
  switch(action.type) {
    case "added": {
      return [...todos, action.todo]
    }

    case "removed": {
      return todos.filter(todo => todo.id !== action.id)
    }

    case "completed": {
      return todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo)
    }
  }
}