import React, { useEffect, useState } from 'react'

export default function Crud2() {

    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [city, setCity] = useState("")
    const [record, setRecord] = useState(null)


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    }, [record])


    const handleAdd = (

    ) => {
        console.log(name, sub, city)

        let user = {
            id: Date.now(),
            name,
            sub,
            city
        }

        record.push(user)

        localStorage.setItem("student", JSON.stringify(record))

    }
    return (
        <div>
            <h1>CRUD</h1>
            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /> <br />
            <input type="text" placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)} /> <br />
            <input type="text" placeholder='Enter City' onChange={(e) => setCity(e.target.value)} /> <br />

            <button onClick={handleAdd}>Add Data</button>

            <table border='1' cellpadding='10' cellspacing='20'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                    </tr>   
                </thead>
                <tbody>

                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.sub}</td>
                                    <td>{e.city}</td>
                                </tr>
                            })
                            :
                            "Enter value"
                    }


                </tbody>
            </table>

        </div>
    )
}




