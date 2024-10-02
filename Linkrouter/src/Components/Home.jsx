import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {

  let data = "0398-2-918-20"
  let location = useLocation();
  return (
    <>

      <div className='navbar'>

        <div className="logo">CANAVAS</div>

        <div className="div1">
          <h1>{location.state.name}</h1>

          <Link to={"/"} className='h1'>Home</Link>
          <Link to={`/Shop/${data}`} className='h1'>Shop</Link>
          <Link to={"/Review"} className='h1'>Review</Link>
          <Link to={"/Contact"} className='h1'>Contact</Link>
        </div>
      </div>
    </>
  )
}
