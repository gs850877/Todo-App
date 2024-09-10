import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ()=>{

    const contextObj = useContext(todoItemsContext);
  const todoItems = contextObj.todoItems;

    return <>{todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>}
    </>;
};

export default WelcomeMessage;