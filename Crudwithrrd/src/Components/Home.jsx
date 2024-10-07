import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div className='main'>
        <h1>Student Details</h1>

       
        <table border="1" width="50%">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                {
                    data &&
                    data.map((e , i) =>{
                        return <tr>
                            <th>{e.id}</th>
                            <th>{e.name}</th>
                            <th>{e.subject}</th>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <br /><br />
        <Link to={"/Create"} className='links'>Create</Link>
        <Link to={"/Delete"} className='links'>Delete</Link>
        <Link to={"/Update"} className='links'>Update</Link>

    </div>
  )
}
