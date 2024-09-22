import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSec from './Components/NavSec';
import Sec from './Components/Sec';
import Sec2 from './Components/Sec2';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
        <NavSec/> 
        <Sec/>
        <Sec2/>
        <Footer/>
    </>
    
  )
}
