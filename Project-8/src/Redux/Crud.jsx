import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, update, toggleCompleted } from '../Feature/Slice'

export default function Crud() {

    const [task, setTask] = useState('')
    const [editIndex, setEditindex] = useState(null)
    const [filter, setFilter] = useState('all');


    const count = useSelector((state) => {
        return state.todoKey
    })

    const dispatch = useDispatch();

    const add = () => {
        if (editIndex === null) {
            dispatch(addData({ id: Date.now(), task, completed: false }))
        } else {
            dispatch(update({ id: editIndex, task }))
            setEditindex(null)
        }
        setTask("")
    }

    const del = (id) => {
        dispatch(deleteData(id))
    }

    const edit = (id) => {
        let data1 = count.taskData.find((e) => e.id === id)
        setTask(data1.task)
        setEditindex(id)
    }

    const toggleCheckbox = (id) => {
        dispatch(toggleCompleted(id));
    };

    const handleFilterChange = (status) => {
        setFilter(status);
    };

    const filteredTasks = count.taskData.filter((item) => {
        if (filter === 'completed') {
            return item.completed === true;
        } else if (filter === 'pending') {
            return item.completed === false;
        }
        return true;
    });


    return (
        <div className='main'>
            
            <div className="box">
            <h1 className='head'>Task Manager</h1>

<input className='inp' type="text" placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} />

<button onClick={add}  className='btn1'>
    {editIndex ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}
</button>

<br /><br />

<div className="con">

{
    count && filteredTasks.length > 0 ?
        filteredTasks.map((e, i) => {
            return (
                
                    <div className="box1">
                    
                    <div>
                    <p>{e.task}</p>
                    </div>
                    

                    
                        <div>
                        <input type="checkbox" checked={e.completed} onChange={() => toggleCheckbox(e.id)} />
                        {e.completed ? "Completed" : "Pending" }
                        </div>
                    

                    <div>
                    <button onClick={() => edit(e.id)} className='btn2'>Edit</button>
                    <button onClick={() => del(e.id)} className='btn2'>Delete</button>
                    </div>
                
                </div>
                
            )
        })
        :
        <p>No Data</p>
}
</div>


            </div>
<br />
            <div className='btns'>
    <button onClick={() => handleFilterChange('all')}>All</button>
    <button onClick={() => handleFilterChange('pending')}>Pending</button>
    <button onClick={() => handleFilterChange('completed')}>Completed</button>
</div>
        </div>
    )
}
