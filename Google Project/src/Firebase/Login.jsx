import React, { useState } from 'react'
import { auth, db, provider } from '../../Firebaseconfig'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

export default function Login() {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const navigate = useNavigate()

  const handlelogin = async () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(data => {
        setDoc(doc(db, "users", data.user.uid), {
          email
        })
        console.log("added");
        navigate("/dashboard");
      })
  }


  const handlegoogle = async () => {
    await signInWithPopup(auth, provider)
      .then(user => {
        console.log(user)
        navigate("/dashboard")
      })
  }

  return (
    <div className="body">
      <div className='main1'>

<div className="box3">
  <img src="https://img.freepik.com/free-vector/contemporary-workspace-flat-composition-with-man-sitting-futuristic-table-with-designer-chair-home-plant-illustration_1284-64045.jpg?t=st=1732206473~exp=1732210073~hmac=d581f1f42ab16227f29c76fcf07ac682bf3b3cd9afd99dccd996c05190eddfe5&w=740" alt="" />
</div>


<div className="box1">
  <h1>Login</h1>
  <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
  <br />
  <input type="text" placeholder='Enter password' onChange={(e) => setPass(e.target.value)} />
  <br /><br />
  <button onClick={handlelogin}>Login</button>
  <br />
  <div className="box2">
    <hr /><p>OR</p><hr /></div>
  <button onClick={handlegoogle}>Login with google</button>

</div>

</div>
    </div>
  )
}
