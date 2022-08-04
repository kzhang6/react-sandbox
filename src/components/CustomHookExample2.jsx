import React from 'react'
import {useState} from 'react'

function CustomHookExample2() {
  const [task, setTask] = useState('')
  
    return (
    <form className='w-50'>
        <div className='mb-3'>
            <label className='form-label'>Task</label>
            <input 
                className='form-control'
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
        </div>
    </form>
  )
}

export default CustomHookExample2