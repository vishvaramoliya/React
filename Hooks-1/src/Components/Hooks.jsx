import React, { useState } from 'react'

export default function Hooks() {

    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count - 1)
    }

    const [name, setName] = useState("Vishwa")
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7])
    const [obj, setObj] = useState({ name: "Vishwa", sub: "React" })
    const [arrobj, setArrObj] = useState([{ name: "Vishwa", sub: "React" }, { name: "Priya", sub: "React" }])



    return (
        <div>
            <h1>Count</h1>
            <h1>{count}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>

            <p>My name is : {name}</p>

            <h1>Numeric Array : </h1>
            {
                arr.map((e, i) => {
                    return <p key={i}>{e}</p>
                })

            }

            <h1>Object : </h1>
            <p>{obj.name}</p>
            <p>{obj.sub}</p>

            <h1>Array Object :</h1>

            {
                arrobj.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.sub}</li>
                    </ul>
                })
            }

        </div>


    )


}
