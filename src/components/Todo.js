import React, { useState } from 'react'

export const Todo = ({task, deleteTodo, handleChange}) => {

  return (
    <div className='mb-4'>
        <label className='mr-4' onClick={() => handleChange(task.id)}>
            <input className='mr-4' type="checkbox"/>
                {task.task}
        </label>
        <button className='bg-red-800 text-white font-bold py-1 px-2 rounded-full' onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  )
}
