import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import { useState } from "react";
import { todoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setNTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { tname: itemName, dueDate: itemDueDate },
    ];
    setNTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemname) => {
    const newTodoItems = todoItems.filter(
      (item) => item.tname !== todoItemname
    );
    setNTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{ tname: "Buy Ghee", dueDate: "today" }];

  return (
    <todoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </todoItemsContext.Provider>
  );
}

export default App;
