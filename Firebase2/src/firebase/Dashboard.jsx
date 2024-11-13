import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfige'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard() {

    const [user, setUser] = useState('')
    const [userdata, setUserdata] = useState()

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
        }
    }, [user])

    const fetchUser = () => {
        getDoc(doc(db, "users", user.uid))
            .then(data => {
                console.log(data.data());
                setUserdata(data.data())
            })
    }
    return (
        <>
            <div className='main4'>

                {
                    userdata ?

                        <p className='p1'>WELCOME {userdata.name}</p>

                        :
                        <div className='main3'>
                            <img src="https://i.pinimg.com/originals/90/6f/4f/906f4f0cebd502025824baf6f2d4118c.gif" alt="" />
                        </div>
                }

            </div>
        </>
    )
}
