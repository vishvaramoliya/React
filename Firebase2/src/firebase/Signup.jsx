import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfige'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [city, setCity] = useState('')
    const [hobby, setHobby] = useState('')

    const [nameerr, setNameerr] = useState('')
    const [emailerr, setEmailerr] = useState('')
    const [passerr, setPasserr] = useState('')
    const [cityerr, setCityerr] = useState('')
    const [hobbyerr, setHobbyerr] = useState('')

    const navigate = useNavigate()

    const handlesignup = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name, email, city, hobby
                })
                console.log("added");
                navigate("/dashboard");
            })
        if (!name) {
            setNameerr("Enter name")
        }
        else {
            setNameerr("")
        }

        if (!email) {
            setEmailerr("Enter email")
        }
        else {
            setEmailerr("")
        }

        if (!pass) {
            setPasserr("Enter password")
        }
        else {
            setPasserr("")
        }

        if (!city) {
            setCityerr("Enter city")
        }
        else {
            setCityerr("")
        }

        if (!hobby) {
            setHobbyerr("Enter hobby")
        }
        else {
            setHobbyerr("")
        }

    }

    return (
        <div className='s1_main1'>
            <h1 className='heading'>Signup Form</h1>
            <div className="btns">
            <button className='btn1'>
            <Link className='link' to={"/"}>Sign Up</Link>
            </button>
            <button className='btn'>
            <Link className='link' to={"/signin"}>Sign In</Link>
            </button>
            </div>

            <br />
            <input type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            <p className='errmsg'>{nameerr}</p>
            {/* <br /> */}
            <input type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <p className='errmsg'>{emailerr}</p>
            {/* <br /> */}
            <input type="text" value={pass} placeholder='Enter Pass' onChange={(e) => setPass(e.target.value)} />
            <p className='errmsg'>{passerr}</p>
            {/* <br /> */}
            <input type="text" value={city} placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />
            <p className='errmsg'>{cityerr}</p>
            {/* <br /> */}
            <input type="text" value={hobby} placeholder='Enter Hobby' onChange={(e) => setHobby(e.target.value)} />
            <p className='errmsg'>{hobbyerr}</p>
            {/* <br /> */}
            <button onClick={handlesignup}>Sign Up</button>
            <br />

        </div>
    )
}
