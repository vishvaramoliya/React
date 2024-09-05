import React, { useState } from 'react'

export default function Effect() {

    const [count , setCount] = useState(0)
    const [name , setName] = useState("")
    const [sub , setSub] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("Success")
    }

    let obj ={
        Name : name,
        Sub : sub
    }
    console.log(obj)

  return (
    <>

        <h1>Effect</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Incres</button>

        <form action="" onSubmit={(event)=>handleSubmit(event)}>

        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
        <br />
        <input type="text" placeholder='Enter subject' onChange={(e)=>setSub(e.target.value)} />
        <br />
        <button>Submit</button>

        </form>

    </>
)
}
