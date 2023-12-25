import React, {useState} from 'react'

export const TodoForm = () => {

    const [value, setValue] = useState("")

  return (
    <form  className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type="text" placeholder='What do you plan to do' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="todo-btn">Add Task</button>
    </form>
  )
}