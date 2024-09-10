import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = () => {

  const contextObj = useContext(todoItemsContext);
  const todoItems = contextObj.todoItems;

  

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.tname}
          todoDate={item.dueDate}
          todoName={item.tname}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
