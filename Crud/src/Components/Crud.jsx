import React, { useEffect, useState } from 'react'

export default function Crud() {

    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [city, setCity] = useState("")


    

    const handleAdd = () => {
        console.log(name, sub, city)
        let data = JSON.parse(localStorage.getItem("student")) || []

        let user = { 
            id: Date.now(),
            name,
            sub, 
            city
        }

        data.push(user)

        localStorage.setItem("student", JSON.stringify(data))

    }
    return (
        <div>
            <h1>CRUD</h1>
            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)} />
            <input type="text" placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />

            <button onClick={handleAdd}>Add Data</button>
        </div>
    )
}



    
