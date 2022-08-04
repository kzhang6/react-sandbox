import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'


function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const[inc, setInc] = useState(0)

    // const sqrt = getSqrt(number)

    /* result from getSqrt is memoized when the input (number) isn't changing */
    const sqrt = useMemo(() => getSqrt(number), [number])

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

  return (
    <div>
        <input 
            type="number" 
            value={number} 
            onChange={(e)=>setNumber(e.target.value)} 
            className="form-control w-25" 
        />

        <h2 className="my-3">
            The sqrt of {number} is {sqrt}
        </h2>

        <button 
            onClick={onClick} 
            className="btn btn-primary"
        >
            Re Render</button>  {/* rerenders and increase setInc by 1, but also goes through the getSqrt function? */}
        <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
    for(let i = 0; i <= 10000; i++) {
        console.log(i)  //has to go through for loop each time renders
    }

    console.log('Expensive Function Called');
    return Math.sqrt(n)
}

export default UseMemoExample