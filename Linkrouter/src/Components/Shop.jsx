import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Shop() {
  const navigate = useNavigate();
  const param = useParams();

  const btn = () => {
    navigate("/", { state: { name: "vishwa" } })
  }
  return (

    <div><h1>
      Shop page
    </h1>

      <div className="div1">
        <h1>shop</h1>
        <h1>{param.id}</h1>
        <button onClick={btn}>go home</button>
        <Link to={"/"} className='h1'>Home</Link>
        <Link to={"/Shop"} className='h1'>Shop</Link>
        <Link to={"/Review"} className='h1'>Review</Link>
        <Link to={"/Contact"} className='h1'>Contact</Link>

      </div>

    </div>

  )
} 
