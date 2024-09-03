import React, { useEffect, useState } from 'react'

export default function UseEffects() {

    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log("use effect");
    },[count])
  return (
    <div>
        <p>UseEffects</p>
        <p>{count}</p>

        <button onClick={()=> setCount(count + 1)}>ADD</button>

    </div>
  )
}
