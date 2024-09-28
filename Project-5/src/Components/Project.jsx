import React, { useEffect, useState } from 'react';

export default function Project() {
    const [task, setTask] = useState("");
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Tasks")) || [];
        setRecord(data);
    }, []);

    const Addtask = () => {

        let Task = {
            id: Date.now(),
            task
        }
        console.log(Task)

        let Record = JSON.parse(localStorage.getItem("Tasks")) || []

        if (editIndex) {
            let data = record.find((el) => el.id == editIndex)
            data.id = editIndex
            data.task = task

            localStorage.setItem("Tasks", JSON.stringify(record))

            setEditIndex(null)
        }
        else {
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
        setEditIndex(id)

    }

    const CompleteTask = (id) => {
        const updatedRecord = record.map((el) =>
            el.id === id ?
                { ...el, completed: true }
                : el
        );
        setRecord(updatedRecord);
        localStorage.setItem("Tasks", JSON.stringify(updatedRecord));
    };

    return (
        <div className="box container">
            <h1>TO DO LIST</h1>
            <br />
            <input
                type="text"
                value={task}
                placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn1" onClick={Addtask}>
                <i className="fa-solid fa-plus"></i>
            </button>
            <br /><br />

            <div className="main">
                <div className="row box5">
                    <div className="col-4">
                        <p>Your Tasks</p>
                    </div>
                    <div className="col-3">
                        <p>Performance</p>
                    </div>
                    <div className="col-5">
                        <p>Actions</p>
                    </div>
                </div>
                <div className='data'>
                    {record.length > 0 ? (
                        record.map((e, i) => (
                            <div key={e.id} className="box1 row">
                                <div className="t1 col-4">
                                    <p className="text">{e.task}</p>
                                </div>

                                <div className="t2 col-3">
                                    <p className='text2'>{e.completed ? <span className='p1'>Completed</span> :
                                        <span className='p2'>Pending</span>}</p>
                                </div>

                                <div className="btnbox col-5">
                                    <button onClick={() => Edit(e.id)}>
                                        <i id="edit" className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button onClick={() => CompleteTask(e.id)}>
                                        <i id="check" className="fa-regular fa-circle-check"></i>
                                    </button>
                                    <button onClick={() => Delet(e.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>

                            </div>
                        ))
                    ) : (
                        "Add task"
                    )}
                </div>
            </div>
        </div>
    );
}
