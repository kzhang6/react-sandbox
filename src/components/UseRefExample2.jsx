import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
    const renders = useRef(1)
    const [name, setName] = useState('')  //components re-renders each time we change state
    const prevName = useRef('')

    useEffect(() => {
        renders.current = renders.current + 1 
        prevName.current = name
    }, [name])
/*  name added as a dependency here
    everytime name changes, useEffect will run
    the previous state is stored in the preName reference */

  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>Prev Name State: {prevName.current}</h2>
        <input 
            type="text" 
            value={name} 
            /* everytime we type something, the state changes, renders increases by 1 */
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-3" />
    </div>
  )
}

export default UseRefExample2