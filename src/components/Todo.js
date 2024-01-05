import React from 'react'

export const Todo = ({task, deleteTodo, handleChange}) => {

  return (
    <div className='mb-4'>
        <label className='mr-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300' onClick={() => handleChange(task.id)}>
            <input className='mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' type="checkbox" checked={task.completed} readOnly={true}/>
                {task.task}
        </label>
        <button className='bg-red-800 text-white py-1 px-2 rounded' onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  )
}
