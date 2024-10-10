import React, { useContext } from 'react'
import { myContext } from './One'

export default function Three() {
    const count = useContext(myContext)
  return (
    <div>Three
        <h1>{count}</h1>
    </div>
  )
}
