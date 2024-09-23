import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    let c = 0;

    return (

        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button className='btn-12' onClick={() => setCount(count + 1)}>
                <span>+</span> <span>Increment</span>
            </button>
            <button className='btn-12' onClick={() => setCount(0)}>
                <span>Reset</span> <span>Reset</span>
            </button>
            <button className='btn-12' onClick={() => setCount(count - 1)}>
                <span>-</span> <span>Decrement</span>
            </button>


        </>
    )
}
