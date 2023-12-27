import React, { useState } from 'react'

export const Todo = ({task}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };


  return (
    <div className='Todo'>
        <label>
            <input type="checkbox" 
                   checked={checked}
                   onChange={handleChange}
            />
                {task.task}
        </label>
    </div>
  )
}
