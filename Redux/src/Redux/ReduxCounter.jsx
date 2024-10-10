import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../Feature/Slice'

export default function ReduxCounter() {
    const count = useSelector ((state) =>{
        return state.counterKey
    })
    const dispatch = useDispatch();
  return (
    <div>
        <h1>ReduxCounert</h1>
        <h1>{count.count}</h1>
        <button onClick={()=>dispatch(increament())}>+</button>
        <button onClick={()=>dispatch(decreament())}>-</button>
    </div>
  )
}
