import React from "react";
import Check from "./Check";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return(
        <div className="todo">
            <div
                className={todo.isCompleted ? "todoItem checked" : "todoItem"}
                onClick={() => changeTodo(todo.id)}
            >
                <Check isCompleted={todo.isCompleted}/>
                {todo.title}
            </div>
            <button 
                onClick={() => removeTodo(todo.id)} 
                className="removeItem"
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem;