import React, { useState } from "react";

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }
    
    return(
        <div className="todo-field">
            <input className="addItem"
                type="text" 
                onChange={(e) => {setTitle(e.target.value)}}
                value = {title}
                onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
                placeholder="Add task..."
            />
        </div>
    )

    
}

export default CreateTodoField;