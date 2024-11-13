import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfige'

export default function Signin() {

    const [email , serEmail] = useState("")
    const [pass , serPass] = useState("")

    const navigate = useNavigate()

    const handleclick = ()=>{
        signInWithEmailAndPassword(auth , email , pass)
        .then(users=>{
            navigate("/dashboard")
        })
    }
  return (
    <div className='s1_main1'>
        <h1 className='heading'>Signin</h1>

        <div className="btns">
            <button className='btn'>
            <Link className='link' to={"/"}>Sign Up</Link>
            </button>
            <button className='btn1'>
            <Link className='link' to={"/signin"}>Sign In</Link>
            </button>
            </div>

        <input type="text" placeholder='Enter email' onChange={(e)=>serEmail(e.target.value)}/>
        <br />
        <input type="text" placeholder='Enter pass' onChange={(e)=>serPass(e.target.value)}/>
        <br />
        <button onClick={handleclick}>Sign in</button>
        <br />
    </div>
  )
}
