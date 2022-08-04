import React from 'react'
import useFetch from '../hooks/useFetch'

function CurstomHookExample1() {
    const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    console.log(res)

  return (
    <div>CurstomHookExample1</div>
  )
}

export default CurstomHookExample1