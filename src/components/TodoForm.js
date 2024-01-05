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
        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={value}  placeholder='What do you plan to do' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Task</button>
    </form>
  )
}
