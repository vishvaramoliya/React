import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  const navigate = useNavigate()

  const handlesignup = async () => {
    let user = await signInWithEmailAndPassword(auth, email, pass)
    console.log(user);
    if (user) {
      navigate("/dashboard")
    }

  }
  return (
    <div>
      <h1>SignIn</h1>
      <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" placeholder='Enter number' onChange={(e) => setNumber(e.target.value)} /><br />
      <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="text" placeholder='Enter password' onChange={(e) => setPass(e.target.value)} /><br />
      <button onClick={handlesignup}>Sigh In</button>
      <Link to={"/"}>Sing up</Link>
    </div>
  )
}
