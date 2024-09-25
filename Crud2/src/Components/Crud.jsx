import React, { useEffect, useState } from 'react'

export default function Crud() {

    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [city, setCity] = useState("")

    const [record, setRecord] = useState(null)
    const [editIndex, setEditindex] = useState("")


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    }, [])


    const handleAdd = () => {

        let user = {
            id: Date.now(),
            name,
            sub,
            city
        }

        let oldrecord = JSON.parse(localStorage.getItem("student")) || []
        oldrecord.push(user)
        setRecord(oldrecord)

        localStorage.setItem("student", JSON.stringify(oldrecord))

        setName("")
        setSub("")
        setCity("")

    }

    const Delet = (id) => {
        let DeletData = record.filter((el) => el.id != id);
        setRecord(DeletData)
        localStorage.setItem("student", JSON.stringify(DeletData))
    }

    const Edit = (id) => {
        let SingleData = record.find((el) => el.id == id)
        setName(SingleData.name)
        setSub(SingleData.sub)
        setCity(SingleData.city)
        setEditindex(id)
    }



    return (
        <div>
            <h1>CRUD</h1>
            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /> <br />
            <input type="text" value={sub} placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)} /> <br />
            <input type="text" value={city} placeholder='Enter City' onChange={(e) => setCity(e.target.value)} /> <br />

            <button className='btn1' onClick={handleAdd}>Add Data</button>

            <table border='1' cellpadding='10' cellspacing='20'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th>Action</th>
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
                                    <td>
                                        <button onClick={() => Edit(e.id)}>Edit</button>
                                        <button onClick={() => Delet(e.id)}>Delete</button>
                                    </td>
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