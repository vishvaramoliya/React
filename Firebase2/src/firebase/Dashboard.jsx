import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfige'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard() {

    const [user , setUser] = useState('')
    const [userdata , setUserdata] = useState()

    useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(currentuser)=>{
            if(currentuser){
                setUser(currentuser)
            }
        })
    },[])

    useEffect(()=>{
        if(user){
            fetchUser()
        }
    },[user])

    const fetchUser = ()=>{
        getDoc(doc(db,"users" , user.uid))
        .then(data=>{
            console.log(data.data());
            setUserdata(data.data())
        })  
    }
  return (
    <>
    <div>
        
    {
        userdata ?

        <p className='p1'>WELCOME {userdata.name}</p>

        :
        <img src="https://cdn.dribbble.com/users/1626465/screenshots/4617986/__-2.gif" alt="" />
    }

    </div>
    </>
  )
}
