import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../features/Apislice';

export default function Reduxapi() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchApi())
    },[])

    const record = useSelector((state)=>{
        return state.apiKey
    })


    


  return (
    <div>
        <h1>Apislice</h1>
        {
            record.data && 
            record.data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.title}</li>
                </ul>
            })
        }
    </div>
  )
}
