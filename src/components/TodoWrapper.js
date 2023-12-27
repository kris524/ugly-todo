import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    
    }

    const deleteTodo = id => {
        console.log(id)
        console.log(todos)
        setTodos(todos.filter(todo => todo.id !== id ))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Get things done</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
        {
        todos.map((todo, index) => ( 
                <Todo task={todo} key={index} deleteTodo={deleteTodo}  ></Todo>
        ))
        
        }
        </div>
  )
}
