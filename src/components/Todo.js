import React, { useState } from 'react'

export const Todo = ({task, deleteTodo, handleChange}) => {

  return (
    <div className='Todo'>
        <label onClick={() => handleChange(task.id)}>
            <input type="checkbox"/>
                {task.task}
        </label>
        <button className='DelBtn' onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  )
}
