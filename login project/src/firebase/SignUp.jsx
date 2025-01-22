import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [email , setEmail] = useState("")
    const [pass , setPass] = useState("")

    const navigate = useNavigate()

    const handlesignup =async ()=>{
        let user = await createUserWithEmailAndPassword(auth , email , pass)
        console.log(user);
        if(user){
          navigate("/dashboard")
        }
    } 

  return (
    <div>
        <h1>SignUp</h1>

        <input type="text" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter password'  onChange={(e)=>setPass(e.target.value)}/>

        <button onClick={handlesignup}>Sigh Up</button>
        <Link to={"/signin"}>Sing In?</Link>
    </div>
  )
}
