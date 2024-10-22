import React, { useEffect, useState } from 'react'

export default function ApiwithFetch() {

    const [data , setData] = useState('')
    useEffect(()=>{
        FetchApi();
    },[])

    const FetchApi = async ()=>{

        const Response = await fetch("https://fakestoreapi.com/users")
        console.log(Response);

        const res = await Response.json()
        console.log(res);
        setData(res)
        
    }


  return (
    <div>
        <h1>ApiwithFetch</h1>
        
        {
            data && 
            data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.email}</li>
                    <li>{e.password}</li>
                </ul>
            })
        }
    </div>
  )
}
