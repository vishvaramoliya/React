import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function SignIn() {
    const [email , setEmail] = useState("")
    const [pass , setPass] = useState("")

    const navigate = useNavigate()

    const handlesignup =async ()=>{
        let user = await signInWithEmailAndPassword(auth , email , pass)
        console.log(user);
        if(user){
          navigate("/dashboard")
        }
        
    } 
  return (
    <div>
        <h1>SignIn</h1>

        <input type="text" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter password'  onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handlesignup}>Sigh In</button>

    </div>
  )
}
