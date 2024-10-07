import React from 'react'
import{BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Contact from './Components/Contact'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/Shop/:id" element={<Shop />} />
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>  
  )
} 
  