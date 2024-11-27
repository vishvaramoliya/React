import React from 'react'
import Portfolio from './Components/Portfolio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Resume from './Components/Resume'
import Port from './Components/Port'
import Contact from './Components/Contact'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Portfolio}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/resume' Component={Resume}></Route>
          <Route path='/port' Component={Port}></Route>
          <Route path='/contect' Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
