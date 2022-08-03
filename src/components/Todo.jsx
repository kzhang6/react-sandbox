import React from 'react'
import {useState, useEffect, useRef} from 'react'

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data => {
            setTimeout(() => {
                setTodo(data)
                setLoading(false)
            }, 3000)
        }))

        //runs when component is unmounted
        return () => {
            console.log(123)
        }
    }, [])
  
    return loading? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo