import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ data, setData }) {

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")

    const submit = () => {
        let obj ={
            id : data.length + 1,
            name : name,
            subject: subject
        };
        setData([...data , obj])
        navigate("/")
    }

    return (
        
        <div className='main'>
            <div className='main1'>
            <h1>Create</h1>
            
            <div className="box1">
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
            <br /><br /><br />
            <label htmlFor="">Subject</label><br />
            <input type="text" placeholder='Enter subject' onChange={(e)=>setSubject(e.target.value)}/>
            <br />
            <button onClick={submit}>Submit</button>
            </div>

        </div>
        </div>
    )
}
