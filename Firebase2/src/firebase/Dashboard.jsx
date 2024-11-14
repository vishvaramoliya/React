import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfige'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'

export default function Dashboard() {

    const [user, setUser] = useState('')
    const [userdata, setUserdata] = useState()

    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")
    const [record, setRecord] = useState([])

    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                setUser(currentuser)
            }
        })
    }, [])

    useEffect(() => {
        if (user) {
            fetchUser()
            fatchData()
        }
    }, [user])

    const fetchUser = () => {
        getDoc(doc(db, "users", user.uid))
            .then(data => {
                console.log(data.data());
                setUserdata(data.data())
            })
    }

    const fatchData = async () => {
        let allData = await getDocs(collection(db, "Todos"));
        console.log(allData);

        let newData = allData.docs.map((data) => ({
            docid: data.id,...data.data()
        }))
        console.log(newData);
        setRecord(newData)

    }


    const handledata = async () => {
        let obj = {
            uid: user.uid,
            task,
            priority
        }
        let adddata = await addDoc(collection(db, "Todos"), obj)
            .then(data => {
                console.log(data);
                setTask("")
                setPriority("")
            })
    }
    return (
        <>
            <div className='main4'>

                {
                    userdata ?

                        <div>
                            <p className='p1'>WELCOME {userdata.name}</p>
                            <input type="text" value={task} placeholder='enter task' onChange={(e)=>setTask(e.target.value)} /> <br /><br />
                            <input type="text" value={priority} placeholder='enter priority' onChange={(e)=>setPriority(e.target.value)}/> <br /><br />
                            <button className='btn2 btns1' onClick={handledata}>Add data</button>


                            <div className="box1">
                            {
                                record &&
                                record.map((e,i)=>{
                                    return <ul key={i}>
                                    <li>{e.task}</li>
                                    <li>{e.priority}</li>
                                    </ul>
                                })
                            }
                            </div>
                        </div>
                        :
                        <div className='main3'>
                            <img src="https://i.pinimg.com/originals/90/6f/4f/906f4f0cebd502025824baf6f2d4118c.gif" alt="" />
                        </div>
                }


            </div>
        </>
    )
}
