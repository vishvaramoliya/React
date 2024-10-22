import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deletData } from '../Feature/Todoslice';



export default function RdxCrud() {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState("");

    const count = useSelector((state) => {
        return state.todoKey
    })

    const dispatch = useDispatch();

    const addRecord = () => {
        dispatch(addData({ id: Date.now(), name, subject }))
        setName("")
        setSubject("")
    }

    const deleteRecord = (id) => {
        dispatch(deletData(id))
    }




    return (
        <div>
            <h1>RdxCrud</h1>

            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <button onClick={addRecord}>Add data</button>


            {
                count ?
                    count.student.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button>Edit</button>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                        </ul>
                    })
                    :
                    <p>No  Data</p>

            }
        </div>
    )
}
