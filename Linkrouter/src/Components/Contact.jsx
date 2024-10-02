import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    
    <div><h1>
      Shop page
    </h1>

      <div className="div1">
      <Link to={"/"} className='h1'>Home</Link>
        <Link to={"/Shop"} className='h1'>Shop</Link>
        <Link to={"/Review"} className='h1'>Review</Link>
        <Link to={"/Contact"} className='h1'>Contact</Link>

      </div>

    </div>

  )
}
