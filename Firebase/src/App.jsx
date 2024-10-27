import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './firebase/SignUp'
import SignIn from './firebase/SignIn'
import Dashboard from './firebase/Dashboard'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' Component={SignUp}></Route>
              <Route path='/signin' Component={SignIn}></Route>
              <Route path='/dashboard' Component={Dashboard}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
