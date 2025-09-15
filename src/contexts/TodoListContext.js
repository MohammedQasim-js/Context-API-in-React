import React, { Children, createContext, use, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Plan the Family trip", id: 1 },
    { text: "Go for shopping for dinne", id: 2 },
    { text: "Go for a walk", id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
