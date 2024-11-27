import React from 'react'
import { Link } from 'react-router-dom'


export default function Resume() {
    return (
        <>
            <div className="main_div w-[100%] flex ">

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
                            <h1 className='animate__animated animate__bounceIn text-6xl lg:text-[120px] text-[#4c4d53] font-bold opacity-30'>RESUME</h1>
                        </div>

                        <div className='md:text-center  md:ml-30 md:mt-[-60px]'>
                            <h1 className='animate__animated animate__bounce text-[#ffffff] font-bold text-6xl'> <span className='text-[#67ba63]'>My</span> Education</h1>
                        </div>
                        <br /><br />

                        <div className=' text-center w-[100%]'>
                            <div className='text-center flex flex-wrap justify-evenly pb-8 pt-2'>
                                <div className='animate__animated animate__fadeInLeft w-[90%] lg:w-[40%]  bg-[#37383c] rounded-2xl div1' >

                                    <div className='p-7 text-start '>
                                        <h1 className='text-white font-bold'>Secoundary School Certificate </h1>
                                        <p className='text-[#6d6d6d] text-[15px]'>2020-2021 | Rajkot</p>
                                        <br />
                                        <p className='text-[#a1a1a1] text-[19px]'>Tapan Secoundary School , Rajkot , Gujarat</p>
                                    </div>
                                    <br />
                                    <hr className='w-[100%] border border-[#444649] ' />

                                    <div className='p-7 text-start '>
                                        <h1 className='text-white font-bold'>Higher Secoundary Certificate </h1>
                                        <p className='text-[#6d6d6d] text-[15px]'>2022-2023 | Rajkot</p>
                                        <br />
                                        <p className='text-[#a1a1a1] text-[19px]'>Tapan Secoundary School , Rajkot , Gujarat</p>
                                    </div>

                                </div>

                                <div className='animate__animated animate__fadeInRight w-[90%] lg:w-[40%] m-5   bg-[#37383c] rounded-2xl div1' >


                                    <div className='p-7 text-start '>
                                        <h1 className='text-white font-bold'>Bachelor's Degree </h1>
                                        <p className='text-[#6d6d6d] text-[15px]'>2023-2026 | Rajkot</p>
                                        <br />
                                        <p className='text-[#a1a1a1] text-[19px]'>Bachelor's Degree in Computer Science SPS Collage, Atkot, Gujarat</p>
                                    </div>


                                    <hr className='w-[100%] border border-[#444649] ' />

                                    <div className='p-7 text-start '>
                                        <h1 className='text-white font-bold'>Master Course </h1>
                                        <p className='text-[#6d6d6d] text-[15px]'>2023-2024 | Rajkot</p>
                                        <br />
                                        <p className='text-[#a1a1a1] text-[19px]'>Programming Course in Red and White Multimedia Institute , Rajkot , Gujarat</p>
                                    </div>



                                </div>


                            </div>

                        </div>

                        <br /><br />

                        <div className="flex flex-col items-center justify-start  text-white">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] max-w-4xl text-left">

                                <div className="animate__animated animate__backInLeft bg-[#3e4146] div1 p-6 rounded-lg shadow-md text-start">
                                    <h2 className="text-xl font-bold mb-1 ml-2 text-green-400">Personal <span className='text-white'>Skills</span></h2>
                                    <br />
                                    {[
                                        { skill: "Communication", level: 90 },
                                        { skill: "Team Work", level: 70 },
                                        { skill: "Leadership", level: 60 },
                                        { skill: "Language", level: 80 },
                                    ].map(({ skill, level }, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="mb-1">{skill}</p>
                                            <div className="w-full bg-[#53565b]  h-2">
                                                <div
                                                    className="bg-green-400 h-2 "
                                                    style={{ width: `${level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="animate__animated animate__backInRight bg-[#3e4146] div1 p-6 rounded-lg shadow-md text-start">
                                    <h2 className="text-xl font-bold mb-1 ml-2 text-green-400">Professional <span className='text-white'>Skills</span></h2>
                                    <br />
                                    {[
                                        { skill: "HTML", level: 95 },
                                        { skill: "React JS", level: 85 },
                                        { skill: "CSS / Tailwind", level: 90 },
                                        { skill: "Bootstrap ", level: 90 },
                                    ].map(({ skill, level }, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="mb-1">{skill}</p>
                                            <div className="w-full bg-[#53565b]  h-2">
                                                <div
                                                    className="bg-green-400 h-2"
                                                    style={{ width: `${level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="w-[0%] sm:fixed p-10 top-0 left-[50%] h-full hidden md:w-[50%] md:flex items-center">
                        <img src="public/bg3.svg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}
