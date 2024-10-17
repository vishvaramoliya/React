import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, update, toggleCompleted } from '../Feature/Slice';

export default function Crud() {

    const [task, setTask] = useState('');
    const [editIndex, setEditindex] = useState(null);
    const [filter, setFilter] = useState('all');
    const [priority, setPriority] = useState('Medium');
    const [hobbies, setHobbies] = useState([]);

    const hobbiesOptions = ['Reading', 'Gaming', 'Traveling', 'Cooking'];

    const count = useSelector((state) => {
        return state.todoKey;
    });

    const dispatch = useDispatch();

    const add = () => {
        if (editIndex === null) {
            dispatch(addData({ id: Date.now(), task, priority, hobbies, completed: false }));
        } else {
            dispatch(update({ id: editIndex, task, priority, hobbies }));
            setEditindex(null);
        }
        setTask('');
        setPriority('Medium');
        setHobbies([]);
    };

    const del = (id) => {
        dispatch(deleteData(id));
    };

    const edit = (id) => {
        let data1 = count.taskData.find((e) => e.id === id);
        setTask(data1.task);
        setPriority(data1.priority);
        setHobbies(data1.hobbies || []);
        setEditindex(id);
    };

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

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleHobbiesChange = (hobby) => {
        if (hobbies.includes(hobby)) {
            setHobbies(hobbies.filter((e) => e !== hobby));
        } else {
            setHobbies([...hobbies, hobby]);
        }
    };

    return (
        <div className='main'>
            <div className="box">
                <h1 className='head'>Task Manager</h1>

                <input className='inp' type="text" placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} />

                <button onClick={add} className='btn1'>
                    {editIndex ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-plus"></i>}
                </button>

                <br /><br />


                <div className="opt">

                    <div className='cat'>
                        <label>
                            <input type="radio" value="High" checked={priority === 'High'} onChange={handlePriorityChange}
                            />
                            High
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="Medium" checked={priority === 'Medium'} onChange={handlePriorityChange} />
                            Medium
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="Low" checked={priority === 'Low'} onChange={handlePriorityChange}/>
                            Low
                        </label>
                    </div>


                    <div>
                        <h3>Select Hobbies:</h3>
                        {hobbiesOptions.map((hobby, i) => (
                            <label key={i}>
                                <input
                                    type="checkbox"
                                    value={hobby}
                                    checked={hobbies.includes(hobby)}
                                    onChange={() => handleHobbiesChange(hobby)}
                                />
                                {hobby}
                            </label>

                        ))}
                        <br />
                    </div>
                </div>

                <div className="con">
                    {
                        count && filteredTasks.length > 0 ?
                            filteredTasks.map((e, i) => {
                                return (
                                    <div className="box1" key={e.id}>

                                        <div className="text">
                                            <div>
                                                <p>{e.task}</p>
                                            </div>

                                            <div>
                                                <p>Priority: {e.priority}</p>
                                            </div>

                                            <div>
                                                <p>Hobbies: {e.hobbies.join(', ') || 'None'}</p> {/* Display hobbies */}
                                            </div>

                                            <div>
                                                <input type="checkbox" checked={e.completed} onChange={() => toggleCheckbox(e.id)} />
                                                {e.completed ? "Completed" : "Pending"}
                                            </div>
                                        </div>

                                        <div>
                                            <button onClick={() => edit(e.id)} className='btn2'>Edit</button>
                                            <button onClick={() => del(e.id)} className='btn2'>Delete</button>
                                        </div>
                                    </div>
                                );
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
    );
}
