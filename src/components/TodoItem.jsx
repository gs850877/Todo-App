import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";



function TodoItem({todoName , todoDate }) {

  const contextObj = useContext(todoItemsContext);
  const deleteItem = contextObj.deleteItem;
    
  return (
    <div className="container">
      <div className="row gs-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger gs-btn" onClick={() => deleteItem(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
