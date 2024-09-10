import { useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


function AddTodo() {

  const contextObj = useContext(todoItemsContext);
  const addNewItem = contextObj.addNewItem;

  const todoNameElement = useRef();

  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row gs-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement} 
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success gs-btn">
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
