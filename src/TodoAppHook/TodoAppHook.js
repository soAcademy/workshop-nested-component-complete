import { useState } from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

import './TodoAppHook.css'

const TodoApp = () => {
    const [ items, setItems ] = useState([])

    const handleToggleTask = (id) => {
        let mappedItems = items.map(task => {
            return task.id === Number(id) ? { ...task, isComplete: !task.isComplete } : { ...task}
        })
        setItems(mappedItems)
    }

    const addTask = (userInput) => {
        const newItems = [...items, { id: Date.now(), text: userInput, isComplete: false }]
        setItems(newItems)
    }
  
    return (
        <div>
            <TodoHeader />
            <TodoList items={items} handleToggleTask={handleToggleTask} />
            <TodoForm addTask={addTask} />
        </div>
    )
}

export default TodoApp