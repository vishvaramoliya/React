import React, { useEffect, useState } from 'react'

export default function Project() {

    const [task, setTask] = useState("")
    const [record, setRecord] = useState(null)
    const [editIndex, setEditindex] = useState("")
    const [comp , setComp] = useState("")

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Tasks")) || []
        setRecord(data)
    }, [])

    const Addtask = () => {

        let Task = {
            id: Date.now(),
            task
        }
        console.log(Task)

        let Record = JSON.parse(localStorage.getItem("Tasks")) || []

        if(editIndex)
        {
            let data = record.find((el) => el.id == editIndex)
            data.id = editIndex
            data.task = task

            localStorage.setItem("Tasks" , JSON.stringify(record))

            setEditindex(null)
        }
        else{
            Record.push(Task)

        setRecord(Record)

        localStorage.setItem("Tasks", JSON.stringify(Record))
        }

        setTask("")

    }


    const Delet = (id) => {
        let data = record.filter((el) => el.id != id)
        setRecord(data)
        localStorage.setItem("Tasks", JSON.stringify(data))

        let data1 = record.find((el) => el.id == id)
        alert(`Deleted Task : ${data1.task}`)
    }

    const Edit = (id) => {
        let data = record.find((el) => el.id == id)
        setTask(data.task)
        setEditindex(id)

    }

    const Comp = (id) =>{
        let data = record.find((el) => el.id == id)
        setComp(data)
        alert(`The task ${data.task}`)
       
    }

    return (
        <div className='box'>
            <h1>TO DO LIST</h1>
            <br />
            <input type="text" value={task} placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
            <button className='btn1' onClick={Addtask}>
            <i class="fa-solid fa-plus"></i>
            </button>
            <br /><br /><br /><br />

            <div className="main">
                <div>
                    {
                        record ?
                            record.map((e) => {
                                return <div>
                                    <div className='box1'>
                                        <p className='text'>{e.task}</p>
                                    <div className="btn">
                                    <button onClick={() => Edit(e.id)}><i id='edit' class="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={() => Comp(e.id)}><i id='check' class="fa-regular fa-circle-check"></i></button>
                                        <button onClick={() => Delet(e.id)}><i class="fa-solid fa-trash"></i></button>

                                    </div>
                                    </div>
                                </div>
                            })
                            :
                            "Add task"
                    }
                </div>
            </div>


        </div>
    )
}
