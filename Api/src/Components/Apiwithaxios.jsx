import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Apiwithaxios() {

    const [data1 , setData] = useState('')
    useEffect(()=>{
        FetchApi()
    },[])
    const FetchApi = async ()=>{
        let res = await axios.get("https://fakestoreapi.com/users")
        console.log(res.data);
        setData(res.data)
    }

  return (
    <div>
        <h1>Apiwithaxios</h1>
        {
            data1 && 
            data1.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.address.city}</li>
                </ul>
            })
        }
    </div>
  )
}
