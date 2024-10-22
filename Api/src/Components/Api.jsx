import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ApiWithAxios() {

    const [data , setData] = useState('');
    const [id, setId] = useState("")
    const [views, setViews] = useState("")
    const [title , setTitle] = useState('');
   const [editIndex , setEditIndex] = useState(null);

    useEffect(()=>{
        FetchApi()
    },[])

    const FetchApi = async ()=>{
        let res = await axios.get("http://localhost:5000/posts")
        console.log(res.data)
        setData(res.data)
    }


    const addData = async () => {
        if (editIndex) {
            let updateResponse = await axios.put(`http://localhost:5000/posts/${editIndex}`, { "id": id, "title": title, "views": views })      
            console.log(updateResponse)
            setData(data.map(item => item.id === editIndex ? updateResponse.data : item))
        }
        else {
            let addResponse = await axios.post("http://localhost:5000/posts", { "id": id, "title": title, "views": views })
            console.log(addResponse)
            setData([...data, addResponse.data])
        }
        setId("")
        setTitle("")
        setViews("")
        setEditIndex(null)
}

    // const addData = async () =>{
    //     let addRes = await axios.post("http://localhost:5000/posts" , {"id" : "5" , "title" : "another title" , "views" : "500"})
    //     console.log(addRes);
    //     setData([...data1 , addRes.data])
    //     FetchApi()
        
    // }

    const deleteData = async (id)=>{
        let res = await axios.delete(`http://localhost:5000/posts/${id}`)
        console.log(res);
        FetchApi()
    }

    const editData = async (id) => {
        let editResponse = data.find((item) => item.id == id)
        setId(editResponse.id)
        setTitle(editResponse.title)
        setViews(editResponse.views)
        setEditIndex(id)
}

    // const updateData = async (id , title , views)=>{
        
    //     let res = await axios.put(http://localhost:5000/posts/${id},{id , title , views})
    //     console.log(res)
    //     setId(res.id)
    //     setTitle(res.title)
    //     setViews(res.views)
    //     setEditIndex(null)
    // }

    return (
        <div>
            <div>

                <h1 className='h1'>ApiWithAxios</h1>
                <input type="text" value={id} onChange={(e) =>setId(e.target.value)} />
                <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} />
                <input type="text" value={views} onChange={(e) =>setViews(e.target.value)} />
                <button onClick={addData}> {editIndex ? "Update data" : "Add data"  }</button>

                {
                    data &&
                    data.map((e, i) => {
                        return  <ul key={i}>

                            <li>{e.id}</li>
                            <li>{e.title}</li>
                            <li>{e.views}</li>
                           <li><button onClick={()=>deleteData(e.id)}>Delete</button></li>
                           <li><button onClick={()=>editData(e.id)}>Edit</button></li>

                        </ul>
                    })
                }
            </div>
        </div>
    )
}