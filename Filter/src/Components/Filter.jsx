import React, { useState } from 'react'

export default function Filter() {

    const [name, setName] = useState("")
    const arr = [
        { name: "Vishwa", subject: "React" },
        { name: "Priya", subject: "Nodejs" },
        { name: "Rutul", subject: "Javascript" },
        { name: "Ayush", subject: "Tailwind" },
        { name: "khushal", subject: "React" },
        { name: "Saurabh", subject: "Bootstrap" }
    ]

    const data = arr.filter((el) => el.name.includes(name));

    return (
        <div>
            <h1>Filter</h1>
            <input type="text" placeholder='Enter...' onChange={(e) => setName(e.target.value)} />
            {
                data &&
                data.map((e, i) => {
                    return <ul>
                        <li>{e.name}</li>
                        <li>{e.name}</li>
                    </ul>
                })
            }
        </div>
    )
}
