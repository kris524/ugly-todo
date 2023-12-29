import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

  return (
    <form  className='mb-4' onSubmit={handleSubmit}>
        <input className='todo-input' type="text" value={value}  placeholder='What do you plan to do' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Task</button>
    </form>
  )
}
