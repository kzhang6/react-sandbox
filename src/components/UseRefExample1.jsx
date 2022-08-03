import React from 'react'

import {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)             //inputRef is a DOM element
        inputRef.current.value = 'Hello'                //set value of the input
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'Goodbye'           //paraRef changes text when clikcing onSubmit
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type='text'
                    ref={inputRef}  //reference to this input
                    id='name'
                    className='form-control mb-2'
                />
                <button type="submit" className='btn btn-primary'>Submit</button>
                <p ref={paraRef}>Helllo</p>
            </form>
        </div>
    )
}

export default UseRefExample1