import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({ data, setData }) {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const submit = () => {

        let deletitem = data.filter((item)=> item.id != id)
        setData(deletitem)
        navigate("/")
    }

    return (
       <div className="main">
         <div className='main1'>
            <h1>Delete</h1>
            <input type="text" placeholder='Enter id' onChange={(e)=>setId(e.target.value)}/>
            <br />
            <button onClick={submit}>Submit</button>
        </div>
       </div>
    )
}
