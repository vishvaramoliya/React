import React from 'react'
import { Link } from 'react-router-dom'


export default function Port() {
    return (
        <>

            <div className="main_div w-[100%] flex">

                <div className="head h-[100%] md:w-[50px] w-[50px]">

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

                <div className="animate__animated animate__fadeIn box box2 h-[100vh] w-[100%] flex flex-wrap justify-between overflow-scroll pb-10 bg-[#25262a]">
                    <div className="main1 w-[100%] lg:w-[50%] overflow-scroll bg-[#25262a] text-center pt-10">

                        <div>
                            <h1 className='animate__animated animate__bounceIn text-6xl lg:text-[120px] text-[#4c4d53] font-bold opacity-30'>PORTFOLIO</h1>
                        </div>

                        <div className='md:text-center  md:mr-60 md:mt-[-60px]'>
                            <h1 className='animate__animated animate__bounce text-[#ffffff] font-bold text-6xl'> <span className='text-[#67ba63]'>My</span> Portfolio</h1>
                        </div>
                        <br /><br />



                        <div className='pt-5 pb-5 flex flex-wrap justify-evenly'>

                            <div className='animate__animated animate__fadeInLeft rounded-2xl'>
                                <div className='mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img1.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-1'>Prectice Webpage</h1>
                            </div>

                            <div>
                                <div className='animate__animated animate__fadeInRight mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img2.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-5'>Prectice Webpage</h1>
                            </div>

                            <div>
                                <div className='animate__animated animate__fadeInLeft mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img3.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-5'>Prectice Webpage</h1>
                            </div>

                            <div>
                                <div className='animate__animated animate__fadeInRight mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img4.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-5'>Prectice Webpage</h1>
                            </div>

                            <div>
                                <div className='animate__animated animate__fadeInLeft mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img5.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-5'>Prectice Webpage</h1>
                            </div>

                            <div>
                                <div className='animate__animated animate__fadeInRight mt-5 h-[300px] w-[300px] hover:overflow-scroll overflow-scroll rounded-2xl'>
                                    <img src="public/img6.jpeg" alt="" />
                                </div>
                                <div className='flex text-white justify-evenly pt-5'>
                                    <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>HTML</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>CSS</p> <p className='border pt-2 pb-2 pl-3 pr-3 rounded-full'>Bootstrap</p>
                                </div>
                                <h1 className='text-white font-bold text-[30px] mt-5'>Prectice Webpage</h1>
                            </div>



                        </div>



                    </div>

                    <div className="w-[0%] sm:fixed top-0 left-[50%] h-full p-10 hidden md:w-[50%] md:flex items-center">
                        <img src="public/bg1.svg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}
