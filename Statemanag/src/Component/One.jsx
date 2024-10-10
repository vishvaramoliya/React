import React, { createContext, useState } from 'react'
import Two from './Two';

export const myContext = createContext();
export default function One() {
    const [count , setCount] = useState(0)
  return (
    <div>
        <h1>one</h1>

    <myContext.Provider value={count}>
        <Two/>
    </myContext.Provider>
        
        </div>
  )
}
