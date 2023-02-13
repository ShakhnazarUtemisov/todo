import React, {useState} from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        id: '1',
        title: 'Finish details of JSX',
        isCompleted: false
    },
    {
        id: '2',
        title: 'Start new book',
        isCompleted: false
    },
    {
        id: '3',
        title: 'Students work',
        isCompleted: false
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }
    
    return (
        <div className="home">
            <h1 className="heading">ToDo</h1>
            
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
        <CreateTodoField 
            setTodos={setTodos}
        />
        </div>
    )
}

export default Home;