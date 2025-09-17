import React, { Children, createContext, use, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: "Plan the Family trip", id: 1 },
    { text: "Go for shopping for dinne", id: 2 },
    { text: "Go for a walk", id: 3 },
  ]);

  // //  We will now use reducer functionality instead of this
  //   const addTodo = (todo) => {
  //     setTodos([
  //       ...todos,
  //       {
  //         text: todo,
  //         id: Math.random(),
  //       },
  //     ]);
  //   };

  //   const removeTodo = (id) => {
  //     setTodos(
  //       todos.filter((todo) => {
  //         return todo.id !== Number(id);
  //       })
  //     );
  //   };

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
