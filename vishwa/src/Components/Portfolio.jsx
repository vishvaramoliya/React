import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>

      <div className="main_div w-[100%] h-[100vh] flex animate__animated animate__fadeIn">

        <div className="head h-[100%] md:w-[50px] w-[50px] animate__animated animate__fadeInLeftBig">

          <div className='icon'>
            <h1 className='text-white'>V</h1>
          </div>

          <div className='text-white'>
            <Link className='home' to={"/"} title="Home">
              <i className="home fa-solid fa-house"></i>
            </Link><br /><br />
            <Link className='link' to={"/about"} title="About">
              <i className="fa-solid fa-user"></i>
            </Link><br /><br />
            <Link className='link' to={"/resume"} title="Resume">
              <i className="fa-solid fa-gear"></i>
            </Link><br /><br />
            <Link className='link' to={"/port"} title="Portfolio">
              <i className="fa-solid fa-eye"></i>
            </Link><br /><br />
            <Link className='link' to={"/contect"} title="Contact">
              <i className="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>

        <div className="box box1 w-[100%] animate__animated animate__fadeIn">

          <div >
            <h1 className='text1 text-[30px] xl:text-[100px] animate__animated animate__fadeInDown'>
              VISHWA RAMOLIYA
            </h1>
            <br />
            <div className="text ml-[-200px] text-[20px] animate__animated animate__fadeInUpBig">
              I Am   a
              <div className="word">
                <span> Frontend Developer </span>
                <span> Backend Developer </span>
                <span> Full-Stack Developer  </span>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

