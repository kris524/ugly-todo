import React, { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'


export const TodoWrapper = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("ITEMS")) || [])
    
    useEffect(() => {
        
    localStorage.setItem( "ITEMS", JSON.stringify(todos))

    }, [todos])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    
    }
    
    const handleChange = id => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    };

    const deleteTodo = id => {        
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    console.log(todos)
  return (
    <div className=''>
        <h1 className="text-3xl mb-4 mr-4">Get things done</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
        {todos.length === 0 && "No Todos"}
        {
        todos.map((todo, index) => ( 
                <Todo task={todo} key={index} deleteTodo={deleteTodo} handleChange={handleChange}  ></Todo>
        ))
        
        }
    </div>
  )
}
